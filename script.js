// 🔑 API Keys
const GROQ_API_KEY = "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";
const GOAPI_KEY = "61eea210b4b30af17f637f16c57e7eee1df15c4980736baf972f225788bdfdb2";

const player = document.getElementById('audioPlayer');
let recognition = null;
let isListening = false;

// ផ្ទុកប្រវត្តិបទចម្រៀងពេលបើក Web ដំបូង
document.addEventListener('DOMContentLoaded', () => {
  loadSongHistory();
});

// 1. មុខងារចាប់សំឡេងនិយាយ (Speech-to-Text)
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

// 2. មុខងារសួរ Groq AI
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
    alert("មានបញ្ហាភ្ជាប់ទៅ AI៖ " + error.message);
  }
}

// 3. មុខងារបង្កើតបទចម្រៀងតាម Suno AI (តាម GoAPI + CORS Proxy) 🎵
async function generateSunoMusic() {
  const prompt = document.getElementById('textInput').value.trim();

  if (!prompt) {
    alert("សូមបញ្ចូលប្រធានបទចម្រៀងជាមុនសិន! (ឧ. Love song, pop music)");
    return;
  }

  stopAudio();
  showStatus("🎵 Suno AI កំពុងបង្កើតបទចម្រៀង... (សូមរង់ចាំប្រមាណ ៣០-៦០ វិនាទី)");

  const corsProxy = "https://corsproxy.io/?";
  const apiUrl = corsProxy + encodeURIComponent("https://api.goapi.ai/api/suno/v1/music");

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": GOAPI_KEY
      },
      body: JSON.stringify({
        custom_mode: false,
        input: {
          gpt_description_prompt: prompt,
          make_instrumental: false
        }
      })
    });

    const data = await response.json();

    if (data.data && data.data.task_id) {
      checkMusicStatus(data.data.task_id, prompt);
    } else if (data.data && data.data.audio_url) {
      handleMusicSuccess(data.data.audio_url, prompt);
    } else {
      hideStatus();
      alert("មិនអាចបង្កើតបទចម្រៀងបានទេ៖ " + (data.message || "សូមពិនិត្យមើល Credit/API Key"));
    }
  } catch (error) {
    hideStatus();
    console.error("Music Error:", error);
    alert("មានបញ្ហាភ្ជាប់ទៅ API៖ " + error.message);
  }
}

// មុខងាររង់ចាំទាញយកចម្រៀងដែល Render រួចរាល់
async function checkMusicStatus(taskId, prompt) {
  const corsProxy = "https://corsproxy.io/?";
  const apiUrl = corsProxy + encodeURIComponent(`https://api.goapi.ai/api/suno/v1/music/${taskId}`);

  setTimeout(async () => {
    try {
      const response = await fetch(apiUrl, {
        headers: { "X-API-Key": GOAPI_KEY }
      });
      const data = await response.json();

      if (data.data && (data.data.audio_url || (data.data.clips && data.data.clips[0]?.audio_url))) {
        const audioUrl = data.data.audio_url || data.data.clips[0].audio_url;
        handleMusicSuccess(audioUrl, prompt);
      } else if (data.data && (data.data.status === "processing" || data.data.status === "pending")) {
        checkMusicStatus(taskId, prompt);
      } else {
        hideStatus();
        alert("ការបង្កើតចម្រៀងបរាជ័យ!");
      }
    } catch (e) {
      hideStatus();
      console.error(e);
    }
  }, 5000);
}

// បង្ហាញចម្រៀង + Download + រក្សាទុកក្នុងប្រវត្តិ
function handleMusicSuccess(audioUrl, prompt) {
  hideStatus();
  player.src = audioUrl;
  player.style.display = "block";
  player.play();

  // បង្ហាញប៊ូតុង Download
  const downloadContainer = document.getElementById('downloadContainer');
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.href = audioUrl;
  downloadContainer.style.display = 'block';

  // រក្សាទុកក្នុងប្រវត្តិ
  saveToHistory(prompt, audioUrl);
  alert("🎉 បង្កើតបទចម្រៀងជោគជ័យ!");
}

// 4. ប្រព័ន្ធគ្រប់គ្រងប្រវត្តិបទចម្រៀង (LocalStorage)
function saveToHistory(title, url) {
  let history = JSON.parse(localStorage.getItem('suno_song_history')) || [];
  const newItem = {
    title: title || "បទចម្រៀង AI",
    url: url,
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  
  history.unshift(newItem); // បញ្ចូលខាងដើម
  if (history.length > 20) history.pop(); // រក្សាទុកត្រឹម ២០ បទចុងក្រោយ

  localStorage.setItem('suno_song_history', JSON.stringify(history));
  loadSongHistory();
}

function loadSongHistory() {
  const historyList = document.getElementById('historyList');
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
  downloadBtn.href = url;
  downloadContainer.style.display = 'block';
}

function clearHistory() {
  if (confirm("តើអ្នកពិតជាចង់លុបប្រវត្តិបទចម្រៀងទាំងអស់មែនទេ?")) {
    localStorage.removeItem('suno_song_history');
    loadSongHistory();
  }
}

// 5. មុខងារចាក់សំឡេង Google TTS & គ្រប់គ្រង
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
  document.getElementById('downloadContainer').style.display = 'none';
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
  document.getElementById('downloadContainer').style.display = 'none';
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
  
