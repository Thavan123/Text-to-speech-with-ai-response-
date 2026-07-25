// ផ្ទុកទិន្នន័យសំណួរ-ចម្លើយ (អ្នកអាចថែមសំណួររហូតដល់ ៩០+ តាមទម្រង់នេះ)
const questionsData = [
    {
        id: 1, page: "41",
        km: { question: "១. លក្ខណៈនៃលឿងទារកដែលជាជំងឺ/មិនធម្មតា (Ictère néonatal pathologique) ៖", answer: "- ចាប់ផ្តើមស្តែងឡើងលឿន (មុន ២៤ ម៉ោងដំបូងក្រោយកើត)\n- ករណីបែកគ្រាប់ឈាមក្រហមធ្ងន់ធ្ងរ៖ មានរោគសញ្ញាស្លេកស្លាំង, ថ្លើមនិងអណ្តើករីកធំ\n- កម្រិត bilirubin libre កើនឡើងខ្លាំង\n- មានសញ្ញាស្លេកស្លាំង (Anémie normo-macrocytaire, hyper-réticulocytose)" },
        fr: { question: "1. Caractère ictère néonatal pathologique :", answer: "- Début précoce avant 24 heures de vie ;\n- En cas d'hémolyse sévère : syndrome anémique, hépatosplénomégalie ;\n- Ictère à bilirubine libre d'intensité plus forte ;\n- Anémie (normo-macrocytaire, hyper-réticulocytose)." },
        en: { question: "1. Pathological Neonatal Jaundice Characteristics:", answer: "- Early onset within first 24 hours of life\n- Severe hemolysis: anemia syndrome, hepatosplenomegaly\n- High intensity unconjugated bilirubinemia\n- Anemia (normo-macrocytic, hyper-reticulocytosis)" }
    },
    {
        id: 2, page: "41",
        km: { question: "២. រោគសញ្ញាគ្លីនិកនៃជំងឺ Trichinosis ៖", answer: "• រាករូស (Diarrhea)\n• ឈឺពោះ (Abdominal pain)\n• អស់កម្លាំង (Fatigue)\n• ចង់ក្អួត និងក្អួត (Nausea and vomiting)" },
        fr: { question: "2. Clinical manifestation of trichinosis :", answer: "• Diarrhea\n• Abdominal pain\n• Fatigue\n• Nausea and vomiting" },
        en: { question: "2. Clinical Manifestations of Trichinosis:", answer: "• Diarrhea\n• Abdominal pain\n• Fatigue\n• Nausea and vomiting" }
    },
    {
        id: 3, page: "41",
        km: { question: "៣. ការព្យាបាលជាក់លាក់លើរោគសញ្ញាតម្រងនោម Nephrotic Syndrome ៖", answer: "+ ការព្យាបាលលើកដំបូង៖ ប្រើ Prednisolone 60 mg/m2/day (ឬ 2mg/kg/day) មិនឱ្យលើស 80mg/24h រយៈពេល ៤ សប្តាហ៍\n+ ការព្យាបាលពេលលេចឡើងវិញ (Relapse > 3 ខែ ក្រោយព្យាបាលចប់)\n+ ការព្យាបាលពេលលេចឡើងវិញភ្លាមៗ (Relapse ≤ 3 ខែ)" },
        fr: { question: "3. Specific Treatment Nephrotic syndrome :", answer: "+ Initial episode: Prednisolone 60 mg/m2/day (or 2mg/kg/day), max 80mg/24h for 4 weeks\n+ Relapse > 3 months after completion\n+ Relapse ≤ 3 months after completion" },
        en: { question: "3. Specific Treatment for Nephrotic Syndrome:", answer: "+ Initial episode: Prednisolone 60 mg/m2/day (or 2mg/kg/day), max 80mg/24h for 4 weeks\n+ Relapse > 3 months after completion\n+ Relapse ≤ 3 months after completion" }
    },
    {
        id: 4, page: "51",
        km: { question: "៤. ការធ្វើរោគវិនិច្ឆ័យជំងឺតេតាណូស (Diagnostic du tétanos) ៖", answer: "• ផ្អែកលើប្រវត្តិ ៖ ស្នាមរបួស, ប្រវត្តិផ្ទាល់ខ្លួននៃការចាក់វ៉ាក់សាំង\n• ផ្អែកលើសញ្ញាគ្លីនិក ៖ អាការៈស្ទះថ្គាមខ្លាំងមិនអាចបើកបាន (Trismus invincible), ការកញ្រ្ជោលសាច់ដុំកើនឡើងពេលមានរំញោច" },
        fr: { question: "4. Diagnostic du tétanos :", answer: "+ Arguments anamnestiques : Notions de la plaie, Notion de la vaccination\n+ Arguments cliniques : Trismus invincible, contracture s'accentuant lors du stimulus" },
        en: { question: "4. Diagnosis of Tetanus:", answer: "+ History: Wound history, vaccination history\n+ Clinical signs: Lockjaw (trismus), muscle spasms, intact consciousness" }
    },
    {
        id: 5, page: "52",
        km: { question: "៥. ការព្យាបាលជំងឺក្អកមាន់ (Traitement de la coqueluche) ៖", answer: "• សម្រាកពេទ្យសម្រាប់ទារកអាយុ < ៣ ខែ\n• ធ្វើការរៀបចំនូវការផ្តាច់ខ្លួន និងផ្អាកការសិក្សារយៈពេល ៣០ ថ្ងៃ\n• ផ្តល់អុកស៊ីសែន និងកែសម្រួលជាតិទឹកបើចាំបាច់\n• ប្រើថ្នាំ Erythromycine : 50 mg/kg/ថ្ងៃ ចែកជា ៤ ដង" },
        fr: { question: "5. Traitement de la coqueluche :", answer: "- Hospitalisation pour les nourrissons < 3 mois\n- Isolement et éviction scolaire de 30 jours\n- Erythromycine : 50 mg/kg/j en 4 prises" },
        en: { question: "5. Treatment of Pertussis:", answer: "- Hospitalization for infants <3 months\n- Isolation for 30 days\n- Erythromycin: 50 mg/kg/day in 4 doses" }
    }
    // 💡 សំណួរទី ៦ ដល់ ៩០+ នឹងត្រូវបន្ថែមបន្តនៅទីនេះ!
];

let currentIndex = 0;
let currentLang = 'km';

const uiText = {
    km: { title: "សំណួរ-ចម្លើយ Pédiatrie", author: "រៀបចំដោយ៖ ឃួន ថាវ៉ាន់", qPrefix: "សំណួរទី", pagePrefix: "ទំព័រ", prev: "⬅️ ថយក្រោយ", next: "បន្តទៅមុខ ➡️" },
    fr: { title: "Q&R Pédiatrie", author: "Préparé par : KHUON THAVAN", qPrefix: "Question n°", pagePrefix: "Page", prev: "⬅️ Précédent", next: "Suivant ➡️" },
    en: { title: "Pédiatrie Q&A", author: "Prepared by: KHUON THAVAN", qPrefix: "Question No.", pagePrefix: "Page", prev: "⬅️ Previous", next: "Next ➡️" }
};

function updateDisplay() {
    if (!questionsData || questionsData.length === 0) return;

    const currentData = questionsData[currentIndex];
    const langData = currentData[currentLang] || currentData['km'];
    const ui = uiText[currentLang];

    document.getElementById('app-title').textContent = ui.title;
    document.getElementById('author-name').textContent = ui.author;
    document.getElementById('q-number').textContent = `${ui.qPrefix} ${currentIndex + 1} / ${questionsData.length}`;
    document.getElementById('q-page').textContent = `${ui.pagePrefix} ${currentData.page}`;
    
    document.getElementById('question-text').textContent = langData.question;
    document.getElementById('answer-text').textContent = langData.answer;

    document.getElementById('prev-btn').textContent = ui.prev;
    document.getElementById('next-btn').textContent = ui.next;

    // បើក/បិទ ប៊ូតុងតាមចំនួនសំណួរជាក់ស្តែង
    document.getElementById('prev-btn').disabled = (currentIndex === 0);
    document.getElementById('next-btn').disabled = (currentIndex === questionsData.length - 1);
}

function setLanguage(lang) {
    currentLang = lang;
    ['km', 'fr', 'en'].forEach(l => {
        const btn = document.getElementById(`btn-${l}`);
        if(btn) btn.classList.toggle('active', l === lang);
    });
    updateDisplay();
}

function nextQuestion() {
    if (currentIndex < questionsData.length - 1) {
        currentIndex++;
        updateDisplay();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
}

document.addEventListener("DOMContentLoaded", updateDisplay);
    
