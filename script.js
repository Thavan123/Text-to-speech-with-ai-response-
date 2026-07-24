// 🔑 ដាក់ API Key ថ្មីរបស់បងនៅចន្លោះសញ្ញា " " ខាងក្រោម (កុំភ្លេចថាត្រូវផ្តើមដោយ gsk_ តូច)
const GROQ_API_KEY = "gsk_ដាក់_API_KEY_ថ្មី_របស់បងនៅត្រង់នេះ";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

const player = document.getElementById('audioPlayer');
let recognition = null;
let isListening = false;

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
      askAI(); 
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
  showStatus("🤖 AI កំពុងគិត និងត្រៀមឆ្លើយតប...");
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
          { role: "system", content: `Respond accurately in language code: ${lang}. Keep it short and concise.` }, 
          { role: "user", content: prompt }
        ]
      })
    });
    const data = await response.json();
    if (data.choices && data.choices[0].message.content) {
      const aiReply = data.choices[0].message.content.trim();
      document.getElementById('textInput').value = aiReply;
      hideStatus();
      
      playAudioText(aiReply, lang);

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
      
      playAudioText(lyrics, lang);
      saveToHistory(prompt, player.src);

    } else if (data.error) {
      hideStatus();
      alert("Groq Error: " + data.error.message);
    }
  } catch (error) { 
    hideStatus(); 
    alert("មានបញ្ហា៖ " + error.message); 
  }
}

// --- ៤. មុខងារបំប្លែងអត្ថបទទៅជាសំឡេង MP3 ---
function playAudioText(text, langSelect) {
  const langCode = langSelect.split('-')[0];
  const cleanText = encodeURIComponent(text.substring(0, 200));
  
  let voiceName = "Setha";
  if (langCode === 'en') voiceName = "Brian";
  else if (langCode === 'th') voiceName = "Nirvana";

  const audioUrl = `https://api.streamelements.com/kappa/v2/speech?voice=${voiceName}&text=${cleanText}`;

  player.src = audioUrl;
  player.style.display = "block";
  
  player.play().catch(error => {
    console.log("Autoplay blocked:", error);
  });
}

// --- ៥. គ្រប់គ្រងប្រវត្តិ និង Player ---
function saveToHistory(title, url) {
  let history = JSON.parse(localStorage.getItem('suno_song_history')) || [];
  history.unshift({ title: title || "បទចម្រៀង AI", url: url });
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
    div.innerHTML = `<span>🎵 ${item.title}</span><div><button class="btn-play-hist" onclick="playHistorySong('${item.url}')">▶️</button></div>`;
    historyList.appendChild(div);
  });
}

function playHistorySong(url) { 
  player.src = url; 
  player.style.display = "block"; 
  player.play(); 
}

function clearHistory() { 
  localStorage.removeItem('suno_song_history'); 
  loadSongHistory(); 
}

function playAudio() {
  const text = document.getElementById('textInput').value.trim();
  const lang = document.getElementById('langSelect').value;
  if (!text) return;
  playAudioText(text, lang);
}

function stopAudio() { 
  player.pause(); 
  player.currentTime = 0; 
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
    
