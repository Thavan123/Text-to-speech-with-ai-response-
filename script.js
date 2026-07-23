// 🔑 Groq API Key របស់អ្នក
const GROQ_API_KEY = "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";

const player = document.getElementById('audioPlayer');
let recognition = null;
let isListening = false;

// 1. កំណត់មុខងារចាប់សំឡេងនិយាយ (Speech-to-Text / Voice Input)
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = function() {
    isListening = true;
    const statusText = document.getElementById('statusText');
    const statusBox = document.getElementById('statusBox');
    if (statusBox) statusBox.style.display = 'block';
    if (statusText) statusText.innerText = "🎤 កំពុងស្ដាប់សំឡេងរបស់អ្នក...";
  };

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('textInput').value = transcript;
    
    // ពេលចាប់សំឡេងបានហើយ ផ្ញើទៅ AI ស្វ័យប្រវត្តិ
    askAI();
  };

  recognition.onerror = function(event) {
    console.error("Speech Recognition Error:", event.error);
    const statusBox = document.getElementById('statusBox');
    if (statusBox) statusBox.style.display = 'none';
    alert("មានបញ្ហាក្នុងការចាប់សំឡេង៖ " + event.error);
    isListening = false;
  };

  recognition.onend = function() {
    isListening = false;
  };
}

// មុខងារចុចប៊ូតុងនិយាយ
function startVoiceInput() {
  if (!recognition) {
    alert("Browser របស់អ្នកមិនគាំទ្រមុខងារចាប់សំឡេងទេ! សូមប្រើ Google Chrome លើទូរស័ព្ទ។");
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

// 2. មុខងារចាក់សំឡេង (TTS)
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

// 3. មុខងារសួរ Groq AI
async function askAI() {
  const prompt = document.getElementById('textInput').value.trim();
  const statusBox = document.getElementById('statusBox');
  const statusText = document.getElementById('statusText');
  const lang = document.getElementById('langSelect').value;

  if (!prompt) {
    alert("សូមបញ្ចូលសំណួរ ឬនិយាយដើម្បីសួរ AI!");
    return;
  }

  stopAudio();
  statusBox.style.display = 'block';
  statusText.innerText = "🤖 AI កំពុងគិត និងរកចម្លើយ...";

  try {
    const systemInstruction = (lang === 'km-KH') 
      ? "អ្នកគឺជាអ្នកជំនាញឆ្លាតវៃ។ សូមឆ្លើយសំណួរជាភាសាខ្មែរឱ្យបានផ្លូវការ ច្បាស់លាស់ ត្រឹមត្រូវតាមអក្ខរាវិរុទ្ធ និងខ្លីល្មមសមរម្យសម្រាប់អានជាសំឡេង។" 
      : "You are a helpful assistant. Please answer concisely and accurately in English suitable for speech output.";

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
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.choices && data.choices[0].message.content) {
      const reply = data.choices[0].message.content;
      document.getElementById('textInput').value = reply;
      statusBox.style.display = 'none';
      playAudio(); // ចាក់សំឡេងឆ្លើយតបស្វ័យប្រវត្តិ
    } else {
      alert("មិនមានចម្លើយពី AI ទេ!");
      statusBox.style.display = 'none';
    }
  } catch (error) {
    console.error("API Error Detail:", error);
    statusBox.style.display = 'none';
    alert("មានបញ្ហាភ្ជាប់ទៅ AI៖ " + error.message);
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
    
