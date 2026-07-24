const GROQ_API_KEY = "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";
const player = document.getElementById('audioPlayer');
let recognition = null;
let isListening = false;

// ផ្ទុកប្រវត្តិបទចម្រៀងពេលបើក Web ភ្លាម
document.addEventListener('DOMContentLoaded', () => {
  loadSongHistory();
});

// --- AI, Speech, MP3 Functions ---
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = function() { isListening = true; showStatus("🎤 កំពុងស្ដាប់សំឡេងរបស់អ្នក..."); };
  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('textInput').value = transcript;
    askAI();
  };
  recognition.onerror = function(event) { hideStatus(); alert("មានបញ្ហាក្នុងការចាប់សំឡេង៖ " + event.error); isListening = false; };
  recognition.onend = function() { isListening = false; };
}

function startVoiceInput() {
  if (!recognition) { alert("Browser របស់អ្នកមិនគាំទ្រមុខងារចាប់សំឡេងទេ!"); return; }
  if (isListening) { recognition.stop(); return; }
  recognition.lang = document.getElementById('langSelect').value;
  stopAudio();
  recognition.start();
}

async function askAI() {
  const prompt = document.getElementById('textInput').value.trim();
  const lang = document.getElementById('langSelect').value;
  if (!prompt) { alert("សូមបញ្ចូលសំណួរ!"); return; }
  stopAudio();
  showStatus("🤖 AI កំពុងគិត និងរកចម្លើយ...");
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_API_KEY}` },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
        messages: [{ role: "system", content: `Respond in language code: ${lang}. Concise.` }, { role: "user", content: prompt }]
      })
    });
    const data = await response.json();
    if (data.choices && data.choices[0].message.content) {
      document.getElementById('textInput').value = data.choices[0].message.content;
      hideStatus();
      playAudio();
    }
  } catch (error) { hideStatus(); alert("មានបញ្ហាភ្ជាប់ទៅ AI៖ " + error.message); }
}

async function generateSunoMusic() {
  const prompt = document.getElementById('textInput').value.trim();
  const lang = document.getElementById('langSelect').value;
  if (!prompt) { alert("សូមបញ្ចូលប្រធានបទចម្រៀង!"); return; }
  stopAudio();
  showStatus("🎵 AI កំពុងតែងបទចម្រៀង...");
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_API_KEY}` },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        messages: [{ role: "system", content: `Write short lyrics in language code: ${lang}. Output ONLY lyrics.` }, { role: "user", content: prompt }]
      })
    });
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
      if (downloadBtn && downloadContainer) { downloadBtn.href = audioUrl; downloadContainer.style.display = 'block'; }
      saveToHistory(prompt, audioUrl);
    }
  } catch (error) { hideStatus(); alert("មានបញ្ហា៖ " + error.message); }
}

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
  if (history.length === 0) { historyList.innerHTML = '<p style="font-size: 0.85em; color: #888;">មិនទាន់មានប្រវត្តិ</p>'; return; }
  historyList.innerHTML = '';
  history.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `<span>🎵 ${item.title}</span><div><button class="btn-play-hist" onclick="playHistorySong('${item.url}')">▶️</button><a href="${item.url}" target="_blank" class="btn-download">📥</a></div>`;
    historyList.appendChild(div);
  });
}

function playHistorySong(url) { player.src = url; player.style.display = "block"; player.play(); }
function clearHistory() { localStorage.removeItem('suno_song_history'); loadSongHistory(); }
function playAudio() {
  const text = document.getElementById('textInput').value.trim();
  const lang = document.getElementById('langSelect').value;
  if (!text) return;
  const cleanText = encodeURIComponent(text.substring(0, 200));
  player.src = `https://translate.google.com/translate_tts?ie=UTF-8&q=${cleanText}&tl=${lang.split('-')[0]}&client=tw-ob`;
  player.style.display = "block";
  player.play();
}
function stopAudio() { player.pause(); player.currentTime = 0; }
function clearAll() { stopAudio(); document.getElementById('textInput').value = ''; }
function showStatus(msg) { const statusBox = document.getElementById('statusBox'); if (statusBox) { statusBox.style.display = 'block'; document.getElementById('statusText').innerText = msg; } }
function hideStatus() { const statusBox = document.getElementById('statusBox'); if (statusBox) statusBox.style.display = 'none'; }
                          
