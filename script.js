// 🔑 Groq API Key
const GROQ_API_KEY = "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";

const player = document.getElementById('audioPlayer');
let recognition = null;
let isListening = false;

document.addEventListener('DOMContentLoaded', () => {
  loadSongHistory();
});

// 1. មុខងារចាប់សំឡេង (Speech-to-Text)
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
    askAI();
  };

  recognition.onerror = function(event) {
    hideStatus();
    alert("មានបញ្ហាក្នុងការចាប់សំឡេង៖ " + event.error);
    isListening = false;
  };

  recognition.onend = function() {
    isListening = false;
  };
}

function startVoiceInput() {
  if (!recognition) {
    alert("Browser របស់អ្នកមិនគាំទ្រមុខងារចាប់សំឡេងទេ! សូមប្រើ Google Chrome។");
    return;
  }
  if (isListening) {
    recognition.stop();
    return;
  }
  const lang = document.getElementById('langSelect').value;
  recognition.lang = lang;
  stopAudio();
  recognition.start();
}

// 2. មុខងារសួរ AI ធម្មតា
async function askAI() {
  const prompt = document.getElementById('textInput').value.trim();
  const lang = document.getElementById('langSelect').value;

  if (!prompt) {
    alert("សូមបញ្ចូលសំណួរ ឬនិយាយដើម្បីសួរ AI!");
    return;
  }

  stopAudio();
  showStatus("🤖 AI កំពុងគិត និងរកចម្លើយ...");

  try {
    const systemInstruction = (lang === 'km-KH') 
      ? "អ្នកគឺជាអ្នកជំនាញឆ្លាតវៃ។ សូមឆ្លើយសំណួរជាភាសាខ្មែរឱ្យបានផ្លូវការ ច្បាស់លាស់ និងខ្លីល្មមសមរម្យសម្រាប់អានជាសំឡេង។" 
      : "You are a helpful assistant. Please answer concisely and accurately in English.";

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
          { role: "system", content: systemInstruction },
          { role: "user", content: prompt }
        ]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API Error Status: ${response.status} - សូមពិនិត្យមើល API Key ឡើងវិញ`);
    }

    const data = await response.json();
    if (data.choices && data.choices[0].message.content) {
      const reply = data.choices[0].message.content;
      document.getElementById('textInput').value = reply;
      hideStatus();
      playAudio();
    } else {
      alert("មិនមានចម្លើយពី AI ទេ!");
      hideStatus();
    }
  } catch (error) {
    hideStatus();
    alert("មានបញ្ហា連接ទៅ AI៖ " + error.message);
  }
}

// 3. មុខងារបង្កើតបទចម្រៀង 🎵
async function generateSunoMusic() {
  const prompt = document.getElementById('textInput').value.trim();
  const lang = document.getElementById('langSelect').value;

  if (!prompt) {
    alert("សូមបញ្ចូលប្រធានបទចម្រៀងជាមុនសិន!");
    return;
  }

  stopAudio();
  showStatus("🎵 AI កំពុងតែង និងបង្កើតបទចម្រៀង...");

  try {
    const systemInstruction = (lang === 'km-KH')
      ? "អ្នកគឺជាអ្នកតែងបទចម្រៀងអាជីព។ សូមតែងបទចម្រៀងខ្លីមួយមានចង្វាក់ ពិរោះ ផ្អែកលើប្រធានបទនេះ។ សរសេរតែទំនុកច្រៀងសុទ្ធ មិនបាច់ដាក់ពាក្យ Header ទេ។"
      : "You are a song writer. Write a short catchy song based on the prompt. Output only the song lyrics directly.";

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
          { role: "system", content: systemInstruction },
          { role: "user", content: prompt }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`Groq API Key មានបញ្ហា ឬអស់កំណត់ប្រើប្រាស់ (Status ${response.status})`);
    }

    const data = await response.json();
    if (data.choices && data.choices[0].message.content) {
      const lyrics = data.choices[0].message.content.trim();
      document.getElementById('textInput').value = lyrics;
      hideStatus();

      const cleanText = encodeURIComponent(lyrics.substring(0, 200));
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${cleanText}&tl=${lang.split('-')[0]}&client=tw-ob`;

      player.src = audioUrl;
      player.style.display = "block";
      player.play();

      const downloadContainer = document.getElementById('downloadContainer');
      const downloadBtn = document.getElementById('downloadBtn');
      if (downloadBtn && downloadContainer) {
        downloadBtn.href = audioUrl;
        downloadContainer.style.display = 'block';
      }

      saveToHistory(prompt, audioUrl);
      alert("🎉 បង្កើតបទចម្រៀងជោគជ័យ!");
    } else {
      hideStatus();
      alert("មិនអាចបង្កើតបទចម្រៀងបានទេ!");
    }
  } catch (error) {
    hideStatus();
    alert("មានបញ្ហា៖ " + error.message);
  }
}

// 4. ប្រព័ន្ធគ្រប់គ្រងប្រវត្តិ
function saveToHistory(title, url) {
  let history = JSON.parse(localStorage.getItem('suno_song_history')) || [];
  const newItem = {
    title: title || "បទចម្រៀង AI",
    url: url,
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  
  history.unshift(newItem);
  if (history.length > 15) history.pop();

  localStorage.setItem('suno_song_history', JSON.stringify(history));
  loadSongHistory();
}

function loadSongHistory() {
  const historyList = document.getElementById('historyList');
  if (!historyList) return;
  let history = JSON.parse(localStorage.getItem('suno_song_history')) || [];

  if (history.length === 0) {
    historyList.innerHTML = '<p style="font-size: 0.85em; color: #888; margin-top: 5px;">មិនទាន់មានប្រវត្តិបទចម្រៀងនៅឡើយទេ</p>';
    return;
  }

  historyList.innerHTML = '';
  history.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
      <span>🎵 ${item.title} <small style="color:#aaa;">(${item.date})</small></span>
      <div>
        <button class="btn-play-hist" onclick="playHistorySong('${item.url}')">▶️ ចាក់</button>
        <a href="${item.url}" target="_blank" download="song_${index}.mp3" class="btn-download">📥</a>
      </div>
    `;
    historyList.appendChild(div);
  });
}

function playHistorySong(url) {
  player.src = url;
  player.style.display = "block";
  player.play();
  
  const downloadContainer = document.getElementById('downloadContainer');
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn && downloadContainer) {
    downloadBtn.href = url;
    downloadContainer.style.display = 'block';
  }
}

function clearHistory() {
  if (confirm("តើអ្នកពិតជាចង់លុបប្រវត្តិបទចម្រៀងទាំងអស់មែនទេ?")) {
    localStorage.removeItem('suno_song_history');
    loadSongHistory();
  }
}

// 5. មុខងារចាក់ Audio
function playAudio() {
  const text = document.getElementById('textInput').value.trim();
  const lang = document.getElementById('langSelect').value;

  if (!text) {
    alert("សូមបញ្ចូលអត្ថបទជាមុនសិន!");
    return;
  }

  const cleanText = encodeURIComponent(text.substring(0, 200));
  const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${cleanText}&tl=${lang.split('-')[0]}&client=tw-ob`;

  player.src = audioUrl;
  player.style.display = "block";
  player.play().catch(() => {
    useWebSpeech(text, lang);
  });
}

function useWebSpeech(text, lang) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  }
}

function stopAudio() {
  player.pause();
  player.currentTime = 0;
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function clearAll() {
  stopAudio();
  document.getElementById('textInput').value = '';
  player.style.display = "none";
  const downloadContainer = document.getElementById('downloadContainer');
  if (downloadContainer) downloadContainer.style.display = 'none';
}

function showStatus(msg) {
  const statusBox = document.getElementById('statusBox');
  const statusText = document.getElementById('statusText');
  if (statusBox) statusBox.style.display = 'block';
  if (statusText) statusText.innerText = msg;
}

function hideStatus() {
  const statusBox = document.getElementById('statusBox');
  if (statusBox) statusBox.style.display = 'none';
}
