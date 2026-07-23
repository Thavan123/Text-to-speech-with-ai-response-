// 🔑 API Key របស់អ្នក
const GEMINI_API_KEY = "AQ.Ab8RN6IIQZwQjC4KjaBFOB9C84VWhQjrCTKulgFZkOXXUIs9w";

const player = document.getElementById('audioPlayer');

// 1. មុខងារចាក់សំឡេង
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

// 2. មុខងារសួរ AI (Gemini API)
async function askAI() {
  const prompt = document.getElementById('textInput').value.trim();
  const statusBox = document.getElementById('statusBox');
  const statusText = document.getElementById('statusText');
  const lang = document.getElementById('langSelect').value;

  if (!prompt) {
    alert("សូមបញ្ចូលសំណួរដើម្បីសួរ AI!");
    return;
  }

  stopAudio();
  statusBox.style.display = 'block';
  statusText.innerText = "AI កំពុងគិត និងរកចម្លើយ...";

  try {
    const instruction = (lang === 'km-KH') 
      ? "សូមឆ្លើយសំណួរខាងក្រោមជាភាសាខ្មែរ ឱ្យបានត្រឹមត្រូវ និងច្បាស់លាស់៖ " 
      : "Please answer concisely and accurately in English: ";

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: instruction + prompt }] }]
      })
    });

    const data = await response.json();
    
    if (data.candidates && data.candidates[0].content.parts[0].text) {
      const reply = data.candidates[0].content.parts[0].text;
      document.getElementById('textInput').value = reply;
      statusBox.style.display = 'none';
      playAudio();
    } else {
      alert("មានបញ្ហា API ៖ " + (data.error?.message || "សូមពិនិត្យមើលម្ដងទៀត"));
      statusBox.style.display = 'none';
    }
  } catch (error) {
    console.error(error);
    statusBox.style.display = 'none';
    alert("មិនអាចភ្ជាប់ទៅ AI បានទេ! សូមពិនិត្យមើលការតភ្ជាប់អ៊ីនធឺណិត។");
  }
}

function clearAll() {
  stopAudio();
  document.getElementById('textInput').value = '';
  player.style.display = "none";
}

function shareText() {
  const text = document.getElementById('textInput').value.trim();
  if (!text) return;
  if (navigator.share) {
    navigator.share({ title: 'AI Response', text: text });
  } else {
    navigator.clipboard.writeText(text);
    alert("បាន Copy អត្ថបទរួចរាល់!");
  }
  }
