// 🔑 Groq API Key
const GROQ_API_KEY = "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";

const player = document.getElementById('audioPlayer');

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

// មុខងារសួរ Groq AI ជាមួយរបៀបដោះស្រាយ CORS
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
  statusText.innerText = "Groq AI កំពុងគិត និងរកចម្លើយ...";

  try {
    const systemInstruction = (lang === 'km-KH') 
      ? "សូមឆ្លើយសំណួរជាភាសាខ្មែរ ឱ្យបានត្រឹមត្រូវ និងច្បាស់លាស់។" 
      : "Please answer concisely and accurately in English.";

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
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
      playAudio();
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
