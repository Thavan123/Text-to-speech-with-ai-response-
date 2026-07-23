// 🔑 API Keys
const GROQ_API_KEY = "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";
const GOAPI_KEY = "61eea210b4b30af17f637f16c57e7eee1df15c4980736baf972f225788bdfdb2"; // Key របស់ GoAPI

const player = document.getElementById('audioPlayer');
let recognition = null;
let isListening = false;

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

// 3. មុខងារបង្កើតបទចម្រៀងតាម Suno AI (តាមរយៈ GoAPI) 🎵
async function generateSunoMusic() {
  const prompt = document.getElementById('textInput').value.trim();

  if (!prompt) {
    alert("សូមបញ្ចូលប្រធានបទចម្រៀង ឬអត្ថបទចម្រៀងជាមុនសិន! (ឧ. បទចម្រៀងស្នេហាមនោសញ្ចេតនា)");
    return;
  }

  stopAudio();
  showStatus("🎵 Suno AI កំពុងបង្កើតបទចម្រៀង... (អាចចំណាយពេល 30-60 វិនាទី)");

  try {
    const response = await fetch("https://api.goapi.ai/api/v1/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": GOAPI_KEY
      },
      body: JSON.stringify({
        model: "suno-v3.5",
        task_type: "generate_music",
        input: {
          prompt: prompt,
          custom_mode: false,
          make_instrumental: false
        }
      })
    });

    const data = await response.json();

    if (data.data && data.data.audio_url) {
      hideStatus();
      player.src = data.data.audio_url;
      player.style.display = "block";
      player.play();
      alert("🎉 បង្កើតបទចម្រៀងជោគជ័យ! កំពុងចាក់ភ្លេង...");
    } else if (data.data && data.data.task_id) {
      // ប្រសិនបើ API បញ្ជូន Task ID មក ត្រូវរង់ចាំទាញយកសំឡេង
      checkMusicStatus(data.data.task_id);
    } else {
      hideStatus();
      alert("មិនអាចបង្កើតបទចម្រៀងបានទេ៖ " + (data.message || "សូមពិនិត្យមើល Credit ក្នុង GoAPI"));
    }
  } catch (error) {
    hideStatus();
    alert("មានបញ្ហាភ្ជាប់ទៅ GoAPI៖ " + error.message);
  }
}

// មុខងាររង់ចាំទាញយកបទចម្រៀងប្រសិនបើវាកំពុង Render
async function checkMusicStatus(taskId) {
  setTimeout(async () => {
    try {
      const response = await fetch(`https://api.goapi.ai/api/v1/task/${taskId}`, {
        headers: { "X-API-Key": GOAPI_KEY }
      });
      const data = await response.json();
      if (data.data && data.data.audio_url) {
        hideStatus();
        player.src = data.data.audio_url;
        player.style.display = "block";
        player.play();
        alert("🎉 បង្កើតបទចម្រៀងជោគជ័យ!");
      } else if (data.data && data.data.status === "processing") {
        checkMusicStatus(taskId); // រង់ចាំបន្តទៀត
      } else {
        hideStatus();
        alert("ការបង្កើតចម្រៀងបរាជ័យ!");
      }
    } catch (e) {
      hideStatus();
    }
  }, 5000);
}

// 4. មុខងារចាក់ និងគ្រប់គ្រង Audio
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
