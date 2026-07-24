// 🔑 Groq API Key
const GROQ_API_KEY = "Gsk_C9S9o7j7eYnreNjSBAQAWGdyb3FY3fUqDPlT0qhe6Nm9V6nVZ23f";

let recognition = null;
let isListening = false;

// ផ្ទុកប្រវត្តិពេលបើក Web ភ្លាម
document.addEventListener('DOMContentLoaded', () => {
  loadSongHistory();
  initSpeechRecognition();
});

// --- ១. មុខងារចាប់សំឡេង (Speech-to-Text) ---
function initSpeechRecognition() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = function() { 
      isListening = true; 
      showStatus("🎤 កំពុងស្ដាប់សំឡេងរបស់អ្នក..."); 
    };

    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      document.getElementById('textInput').value = transcript;
      hideStatus();
      askAI(); // និយាយចប់ បញ្ជូនទៅ AI អូតូ
    };

    recognition.onerror = function(event) { 
      hideStatus(); 
      console.error("Speech Error:", event.error);
      isListening = false; 
    };

    recognition.onend = function() { 
      isListening = false; 
    };
  }
}

function startVoiceInput() {
  if (!recognition) { 
    alert("Browser របស់អ្នកមិនគាំទ្រមុខងារចាប់សំឡេងទេ!"); 
    return; 
  }
  if (isListening) { 
    recognition.stop(); 
    return; 
  }
  recognition.lang = document.getElementById('langSelect').value;
  stopAudio();
  recognition.start();
}

// --- ២. មុខងារសួរ AI ---
async function askAI() {
  const prompt = document.getElementById('textInput').value.trim();
  const lang = document.getElementById('langSelect').value;
  if (!prompt) { 
    alert("សូមបញ្ចូលសំណួរ!"); 
    return; 
  }
  stopAudio();
  showStatus("🤖 AI កំពុងគិត និងត្រៀមនិយាយ...");
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${GROQ_API_KEY}` 
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
        messages: [
          { role: "system", content: `Respond accurately in language code: ${lang}. Keep it short and plain text (no emojis or complex markdown) so it can be spoken clearly.` }, 
          { role: "user", content: prompt }
        ]
      })
    });
    const data = await response.json();
    if (data.choices && data.choices[0].message.content) {
      const aiReply = data.choices[0].message.content.trim();
      document.getElementById('textInput').value = aiReply;
      hideStatus();
      
      // 🔊 អានសំឡេងដោយប្រើ Web Speech Synthesis
      speakTextNative(aiReply, lang);

    } else if (data.error) {
      hideStatus();
      alert("Groq Error: " + data.error.message);
    }
  } catch (error) { 
    hideStatus(); 
    alert("មានបញ្ហាភ្ជាប់ទៅ AI៖ " + error.message); 
  }
}

// --- ៣. មុខងារបង្កើតបទចម្រៀង ---
async function generateSunoMusic() {
  const prompt = document.getElementById('textInput').value.trim();
  const lang = document.getElementById('langSelect').value;
  if (!prompt) { 
    alert("សូមបញ្ចូលប្រធានបទចម្រៀង!"); 
    return; 
  }
  stopAudio();
  showStatus("🎵 AI កំពុងតែងបទចម្រៀង...");
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${GROQ_API_KEY}` 
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        messages: [
          { role: "system", content: `Write short catchy lyrics in language code: ${lang}. Output ONLY lyrics.` }, 
          { role: "user", content: prompt }
        ]
      })
    });
    const data = await response.json();
    if (data.choices && data.choices[0].message.content) {
      const lyrics = data.choices[0].message.content.trim();
      document.getElementById('textInput').value = lyrics;
      hideStatus();
      
      speakTextNative(lyrics, lang);
      saveToHistory(prompt);

    } else if (data.error) {
      hideStatus();
      alert("Groq Error: " + data.error.message);
    }
  } catch (error) { 
    hideStatus(); 
    alert("មានបញ្ហា៖ " + error.message); 
  }
}

// --- ៤. មុខងារបញ្ចេញសំឡេងផ្ទាល់របស់ Browser (Web Speech API) ---
function speakTextNative(text, langCode) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // បញ្ឈប់សំឡេងចាស់បើកំពុងនិយាយ

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode; // កំណត់ភាសា (km-KH, en-US, etc.)
    utterance.rate = 0.95; // ផ្ទៃល្បឿនអានសមរម្យ
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);
  } else {
    alert("Browser របស់អ្នកមិនគាំទ្រមុខងារអានសំឡេងនេះទេ!");
  }
}

function playAudio() {
  const text = document.getElementById('textInput').value.trim();
  const lang = document.getElementById('langSelect').value;
  if (!text) return;
  speakTextNative(text, lang);
}

function stopAudio() { 
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// --- ៥. ប្រវត្តិ និងមុខងារផ្សេងៗ ---
function saveToHistory(title) {
  let history = JSON.parse(localStorage.getItem('suno_song_history')) || [];
  history.unshift({ title: title || "បទចម្រៀង AI", date: new Date().toLocaleTimeString() });
  if (history.length > 15) history.pop();
  localStorage.setItem('suno_song_history', JSON.stringify(history));
  loadSongHistory();
}

function loadSongHistory() {
  const historyList = document.getElementById('historyList');
  if (!historyList) return;
  let history = JSON.parse(localStorage.getItem('suno_song_history')) || [];
  if (history.length === 0) { 
    historyList.innerHTML = '<p style="font-size: 0.85em; color: #888;">មិនទាន់មានប្រវត្តិ</p>'; 
    return; 
  }
  historyList.innerHTML = '';
  history.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `<span>🎵 ${item.title}</span>`;
    historyList.appendChild(div);
  });
}

function clearHistory() { 
  localStorage.removeItem('suno_song_history'); 
  loadSongHistory(); 
}

function clearAll() { 
  stopAudio(); 
  document.getElementById('textInput').value = ''; 
}

function showStatus(msg) { 
  const statusBox = document.getElementById('statusBox'); 
  if (statusBox) { 
    statusBox.style.display = 'block'; 
    document.getElementById('statusText').innerText = msg; 
  } 
}

function hideStatus() { 
  const statusBox = document.getElementById('statusBox'); 
  if (statusBox) statusBox.style.display = 'none'; 
}
