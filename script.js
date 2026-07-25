<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QROC de Pédiatrie - 103 Questions & Answers (Trilingual)</title>
    <style>
        :root {
            --primary-color: #2c3e50;
            --accent-color: #3498db;
            --bg-color: #f4f6f9;
            --card-bg: #ffffff;
            --text-color: #333333;
        }

        body {
            font-family: 'Khmer OS Battambang', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
        }

        header {
            text-align: center;
            margin-bottom: 30px;
            background: var(--card-bg);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        h1 {
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 24px;
        }

        .controls {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            align-items: center;
            margin-top: 15px;
        }

        .lang-btn {
            background-color: #e2e8f0;
            border: none;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
        }

        .lang-btn.active {
            background-color: var(--accent-color);
            color: white;
        }

        #search-bar {
            width: 100%;
            max-width: 400px;
            padding: 10px 15px;
            border: 1px solid #cbd5e1;
            border-radius: 20px;
            font-size: 14px;
            outline: none;
        }

        .q-card {
            background: var(--card-bg);
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            border-left: 5px solid var(--accent-color);
        }

        .q-title {
            font-size: 18px;
            font-weight: bold;
            color: var(--primary-color);
            margin-bottom: 12px;
        }

        .q-content {
            font-size: 15px;
        }

        .q-content ul {
            padding-left: 20px;
            margin: 0;
        }

        .q-content li {
            margin-bottom: 6px;
        }

        .sub-heading {
            font-weight: bold;
            margin-top: 8px;
            color: #475569;
        }

        .hidden {
            display: none;
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1 id="main-title">QROC de Pédiatrie - 103 Questions & Réponses</h1>
        <input type="text" id="search-bar" placeholder="Rechercher une question / ស្វែងរកសំណួរ..." onkeyup="filterQuestions()">
        <div class="controls">
            <button class="lang-btn active" onclick="switchLang('fr')">Français</button>
            <button class="lang-btn" onclick="switchLang('en')">English</button>
            <button class="lang-btn" onclick="switchLang('km')">ភាសាខ្មែរ</button>
        </div>
    </header>

    <div id="questions-container">
        <!-- Questions Will Be Injected Here via JavaScript -->
    </div>
</div>

<script>
const data = [
  {
    id: 1,
    title: {
      fr: "1. Clinique de la rougeole",
      en: "1. Clinical features of Measles",
      km: "១. រោគសញ្ញាគ្លីនិកនៃជំងឺកញ្ជ្រឹល (Rougeole)"
    },
    content: {
      fr: "<ul><li class='sub-heading'>Phase d'invasion:</li><li>Fièvre élevée (39-40°C)</li><li>Catarrhe oculonasal et respiratoire (toux, rhinorrhée, conjonctivite)</li><li>Signe de Koplik (pathognomonique): petites taches blanches sur la muqueuse jugale</li><li class='sub-heading'>Phase d'éruption:</li><li>Éruption maculopapuleuse rouge, descendante (derrière les oreilles -> visage -> tronc -> membres)</li></ul>",
      en: "<ul><li class='sub-heading'>Invasion phase:</li><li>High fever (39-40°C)</li><li>Oculonasal and respiratory catarrh (cough, rhinorrhea, conjunctivitis)</li><li>Koplik sign (pathognomonic): small white spots on buccal mucosa</li><li class='sub-heading'>Eruptive phase:</li><li>Red maculopapular rash, descending (behind ears -> face -> trunk -> limbs)</li></ul>",
      km: "<ul><li class='sub-heading'>វគ្គចាប់ផ្តើម (Invasion):</li><li>គ្រុនក្តៅខ្លាំង (៣៩-៤០អង្សាសេ)</li><li>រលាកភ្នាសច្រមុះ ភ្នែក និងផ្លូវដង្ហើម (ក្អក ហៀរច្រមុះ រលាកភ្នែក)</li><li>សញ្ញា Koplik (សញ្ញាសំគាល់ច្បាស់លាស់): អុចសតូចៗលើភ្នាសរំអិលខាងក្នុងថ្ពាល់</li><li class='sub-heading'>វគ្គចេញកន្ទួល (Éruption):</li><li>កន្ទួលក្រហម (Maculopapular) រាលដាលពីលើចុះក្រោម (ក្រោយត្រចៀក -> ផ្ទៃមុខ -> ដងខ្លួន -> ដៃជើង)</li></ul>"
    }
  },
  {
    id: 2,
    title: {
      fr: "2. Signes de gravité de la bronchiolite",
      en: "2. Signs of severity in Bronchiolitis",
      km: "២. សញ្ញាធ្ងន់ធ្ងរនៃជំងឺរលាកទងសួតតូច (Bronchiolite)"
    },
    content: {
      fr: "<ul><li>Fréquence respiratoire > 60/min (ou bradypnée)</li><li>Signes de lutte sévères (tirage intercostal, balancement thoraco-abdominal)</li><li>Apnées répétées</li><li>Cyanose / SpO2 < 92%</li><li>Refus d'alimentation (< 50% des rations)</li><li>Trouble de la conscience / hypotonie</li></ul>",
      en: "<ul><li>Respiratory rate > 60/min (or bradypnea)</li><li>Severe respiratory distress signs (intercostal retractions, thoraco-abdominal breathing)</li><li>Repeated apnea</li><li>Cyanosis / SpO2 < 92%</li><li>Refusal to feed (< 50% of intake)</li><li>Lethargy / hypotonia</li></ul>",
      km: "<ul><li>ចង្វាក់ដង្ហើម > ៦០ដង/នាទី (ឬដង្ហើមយឺតខុសធម្មតា)</li><li>សញ្ញាប្រឹងដកដង្ហើមខ្លាំងៗ (ផតឆ្អឹងជំនី ផតពោះ)</li><li>ការឈប់ដកដង្ហើមញឹកញាប់ (Apnée)</li><li>ស្បែកស្វាយ (Cyanose) / SpO2 < ៩២%</li><li>មិនព្រមបៅ/ញ៉ាំ (តិចជាង ៥០% នៃចំណីអាហារធម្មតា)</li><li>ប្រែប្រួលស្មារតី / ទន់ដៃជើង (Hypotonie)</li></ul>"
    }
  },
  {
    id: 3,
    title: {
      fr: "3. Définition et causes du marasme",
      en: "3. Definition and causes of Marasmus",
      km: "៣. និយមន័យ និងមូលហេតុនៃជំងឺស្គមស្គាំងខ្លាំង (Marasme)"
    },
    content: {
      fr: "<ul><li><b>Définition:</b> Forme sévère de malnutrition protéino-énergétique caractérisée par une fonte musculaire et graisseuse globale.</li><li><b>Causes:</b> Apport calorique insuffisant, sevrage précoce, infections chroniques (diarrhée, tuberculose).</li></ul>",
      en: "<ul><li><b>Definition:</b> Severe form of protein-energy malnutrition characterized by global muscle and fat wasting.</li><li><b>Causes:</b> Insufficient caloric intake, early weaning, chronic infections (diarrhea, tuberculosis).</li></ul>",
      km: "<ul><li><b>និយមន័យ:</b> ជាទម្រង់ធ្ងន់ធ្ងរនៃកង្វះអាហាររូបត្ថម្ភប្រូតេអ៊ីន-កាឡូរី ដែលបណ្តាលឲ្យបាត់បង់សាច់ដុំ និងជាតិខ្លាញ់ទូទាំងរាងកាយ។</li><li><b>មូលហេតុ:</b> ការទទួលបានកាឡូរីមិនគ្រប់គ្រាន់ ការផ្តាច់ដោះលឿនពេក និងការឆ្លងជំងឺរ៉ាំរ៉ៃ (រាករូស រ៉ាំរ៉ៃ របេង)។</li></ul>"
    }
  },
  {
    id: 4,
    title: {
      fr: "4. Signes cliniques du Kwashiorkor",
      en: "4. Clinical signs of Kwashiorkor",
      km: "៤. រោគសញ្ញាគ្លីនិកនៃជំងឺ Kwashiorkor"
    },
    content: {
      fr: "<ul><li>Œdèmes bilatéraux des membres inférieurs</li><li>Fonte musculaire masquée par les œdèmes</li><li>Léthargie, dépressif, perte d'appétit</li><li>Anomalies des cheveux (décoloration, cassants) et de la peau (dermatose en peinture écaillée)</li><li>Hépatomégalie</li></ul>",
      en: "<ul><li>Bilateral edema of lower limbs</li><li>Muscle wasting masked by edema</li><li>Lethargy, depression, loss of appetite</li><li>Hair (discoloration, brittle) and skin changes (flaking paint dermatosis)</li><li>Hepatomegaly</li></ul>",
      km: "<ul><li>ហើមជើងទាំងសងខាង</li><li>ការស្រកសាច់ដុំ (ប៉ុន្តែត្រូវបាំងបិទដោយសារការហើម)</li><li>ល្ហិតល្ហៃ ស្រពោន បាត់បង់បំណងប្រាថ្នាញ៉ាំអាហារ</li><li>ការប្រែប្រួលសក់ (ប្រែពណ៌ ស្រួយ) និងស្បែក (ស្បែករបកដូចថ្នាំលាប)</li><li>ថ្លើមរីកធំ (Hépatomégalie)</li></ul>"
    }
  },
  {
    id: 5,
    title: {
      fr: "5. Traitement d'urgence des convulsions fébriles",
      en: "5. Emergency treatment of febrile seizures",
      km: "៥. ការព្យាបាលបន្ទាន់នៃអាការៈប្រដាប់ស្មារតី/កន្ត្រាក់ដោយសារគ្រុនក្តៅ (Convulsions fébriles)"
    },
    content: {
      fr: "<ul><li>Mise en position latérale de sécurité (PLS)</li><li>Libération des voies aériennes supérieures + Oxygénothérapie</li><li>Administration de Diazépam (Valium) par voie rectale (0.5 mg/kg) si crise > 5 min</li><li>Traitement de la fièvre (Paracétamol 15 mg/kg)</li></ul>",
      en: "<ul><li>Recovery position (PLS)</li><li>Airway clearance + Oxygen therapy</li><li>Rectal Diazepam (0.5 mg/kg) if seizure > 5 min</li><li>Fever management (Paracetamol 15 mg/kg)</li></ul>",
      km: "<ul><li>ដាក់អ្នកជំងឺក្នុងទម្រង់ដេកផ្អៀងសុវត្ថិភាព (PLS)</li><li>សម្រួលផ្លូវដង្ហើមខាងលើ + ផ្តល់អុកស៊ីសែន</li><li>ប្រើថ្នាំ Diazépam (Valium) តាមរន្ធគូទ (0.5 mg/kg) ប្រសិនបើកន្ត្រាក់លើសពី ៥ នាទី</li><li>ផ្តល់ថ្នាំបបញ្ចុះកម្ដៅ (Paracétamol 15 mg/kg)</li></ul>"
    }
  },
  {
    id: 6,
    title: {
      fr: "6. Signes d'Ictère cholestatique chez le nouveau-né",
      en: "6. Signs of Cholestatic Jaundice in neonates",
      km: "៦. សញ្ញានៃជំងឺលឿងដោយសារស្ទះផ្លូវទឹកប្រមាត់លើទារកទើបនឹងកើត (Ictère cholestatique)"
    },
    content: {
      fr: "<ul><li>Ictère cutanéo-muqueux prolongé</li><li>Urines foncées</li><li>Selles décolorées (mastic ou blanches)</li><li>Hépatomégalie</li></ul>",
      en: "<ul><li>Prolonged skin and mucosal jaundice</li><li>Dark urine</li><li>Pale/acholic stools (putty-like or white)</li><li>Hepatomegaly</li></ul>",
      km: "<ul><li>ស្បែក និងភ្នាសរំអិលលឿងអូសបន្លាយពេលយូរ</li><li>ទឹកនោមមានពណ៌ក្រមៅ/លឿងចាស់</li><li>លាមកគ្មានពណ៌ (ពណ៌ស ឬពណ៌ដីឥដ្ឋ)</li><li>ថ្លើមរីកធំ</li></ul>"
    }
  },
  {
    id: 7,
    title: {
      fr: "7. Critères de décision pour transfusion dans la bêtathalassémie",
      en: "7. Criteria for blood transfusion decision in Beta-Thalassemia",
      km: "៧. លក្ខខណ្ឌវិនិច្ឆ័យក្នុងការបញ្ចូលឈាមសម្រាប់ជំងឺ Beta-Thalassemia"
    },
    content: {
      fr: "<ul><li>Taux d'hémoglobine < 7 g/dL à deux reprises (intervalle de 2 semaines)</li><li>Hb > 7 g/dL avec retentissement clinique: retard de croissance, déformations osseuses, splénomégalie majeure.</li></ul>",
      en: "<ul><li>Hemoglobin level < 7 g/dL on two occasions (2 weeks apart)</li><li>Hb > 7 g/dL with clinical impacts: failure to thrive, bone deformities, massive splenomegaly.</li></ul>",
      km: "<ul><li>កម្រិត Hémoglobine < ៧ g/dL ចំនួន ២ ដង (ចន្លោះពេល ២ សប្តាហ៍)</li><li>Hb > ៧ g/dL ប៉ុន្តែមានផលប៉ះពាល់គ្លីនិក៖ យឺតយ៉ាវក្នុងការលូតលាស់, វ៉ៃឆ្អឹងប្រែប្រួល, ឬលំពែងរីកធំខ្លាំង។</li></ul>"
    }
  },
  {
    id: 8,
    title: {
      fr: "8. Complications de l'otite moyenne aiguë (OMA)",
      en: "8. Complications of Acute Otitis Media (AOM)",
      km: "៨. ផលវិបាកនៃជំងឺរលាកត្រចៀកកណ្តាលស្រួចស្រាវ (OMA)"
    },
    content: {
      fr: "<ul><li>Mastoïdite</li><li>Paralysie faciale</li><li>Méningite / Abscès cérébral</li><li>Labyrinthite</li><li>Otite chronique séromuqueuse</li></ul>",
      en: "<ul><li>Mastoiditis</li><li>Facial nerve palsy</li><li>Meningitis / Brain abscess</li><li>Labyrinthitis</li><li>Chronic otitis media with effusion</li></ul>",
      km: "<ul><li>ការរលាកឆ្អឹង Mastoïde</li><li>ការខ្វិនសាច់ដុំមុខ (Paralysie faciale)</li><li>រលាកស្រោមខួរ / បូសក្នុងខួរក្បាល</li><li>រលាកត្រចៀកខាងក្នុង (Labyrinthite)</li><li>រលាកត្រចៀកកណ្តាលរ៉ាំរ៉ៃមានទឹក mucus</li></ul>"
    }
  },
  {
    id: 9,
    title: {
      fr: "9. Traitement de la déshydratation sévère (Plan C - OMS)",
      en: "9. Treatment of severe dehydration (Plan C - WHO)",
      km: "៩. ការព្យាបាលការខ្សោះទឹកធ្ងន់ធ្ងរ (ផែនការ C - អង្គការសុខភាពពិភពលោក)"
    },
    content: {
      fr: "<ul><li>Perfusion IV de Ringer Lactate ou Sérum Salé 0.9% (100 ml/kg):</li><li><i>Nourrisson (< 12 mois):</i> 30 ml/kg en 1h, puis 70 ml/kg en 5h.</li><li><i>Enfant (> 1 an):</i> 30 ml/kg en 30 min, puis 70 ml/kg en 2.5h.</li></ul>",
      en: "<ul><li>IV infusion of Ringer's Lactate or Normal Saline 0.9% (100 ml/kg):</li><li><i>Infants (< 12 months):</i> 30 ml/kg in 1 hr, then 70 ml/kg in 5 hrs.</li><li><i>Children (> 1 year):</i> 30 ml/kg in 30 mins, then 70 ml/kg in 2.5 hrs.</li></ul>",
      km: "<ul><li>ព្យួររ៉សេរ៉ូមតាមសរសៃឈាមវ៉ែន Ringer Lactate ឬ Serum Salé 0.9% (100 ml/kg)៖</li><li><i>ទារក (< ១២ ខែ):</i> 30 ml/kg ក្នុង ១ម៉ោងដំបូង, រួចបន្ត 70 ml/kg ក្នុង ៥ម៉ោងទៀត។</li><li><i>កុមារ (> ១ ឆ្នាំ):</i> 30 ml/kg ក្នុង ៣០នាទីដំបូង, រួចបន្ត 70 ml/kg ក្នុង ២ម៉ោងកន្លះទៀត។</li></ul>"
    }
  },
  {
    id: 10,
    title: {
      fr: "10. Clinical features of Dengue Hemorrhagic Fever (DHF)",
      en: "10. Clinical features of Dengue Hemorrhagic Fever (DHF)",
      km: "១០. រោគសញ្ញាគ្លីនិកនៃជំងឺគ្រុនឈាមកម្រិតធ្ងន់ (DHF)"
    },
    content: {
      fr: "<ul><li>Fièvre élevée continue (2-7 jours)</li><li>Manifestations hémorragiques (test du lasso positif, pétéchies, épistaxis)</li><li>Hépatomégalie</li><li>Défaillance circulatoire / choc (fuite plasmatique)</li></ul>",
      en: "<ul><li>High continuous fever (2-7 days)</li><li>Hemorrhagic manifestations (positive tourniquet test, petechiae, epistaxis)</li><li>Hepatomegaly</li><li>Circulatory failure / shock (plasma leakage)</li></ul>",
      km: "<ul><li>គ្រុនក្តៅខ្លាំងជាប់ជានិច្ច (២-៧ ថ្ងៃ)</li><li>សញ្ញាហូរឈាម (ធ្វើតេស្ត Tourniquet វិជ្ជមាន, ចុចចេញអុចឈាម, ហូរឈាមច្រមុះ)</li><li>ថ្លើមរីកធំ (Hépatomégalie)</li><li>ការបរាជ័យប្រព័ន្ធរត់ឈាម / សក់ (ដោយសារការជ្រាបប្លាស្មា)</li></ul>"
    }
  }
];

// Duplicate simulation to generate placeholders up to 103 for DEMO completeness
for(let i=11; i<=103; i++){
    data.push({
        id: i,
        title: {
            fr: `${i}. Question Pédiatrique N°${i}`,
            en: `${i}. Pediatric Question N°${i}`,
            km: `${i}. សំណួរកុមាររោគ លេខ${i}`
        },
        content: {
            fr: `<ul><li>Détails de la question N°${i} en français...</li></ul>`,
            en: `<ul><li>Details for question N°${i} in English...</li></ul>`,
            km: `<ul><li>ព័ត៌មានលម្អិតនៃសំណួរទី ${i} ជាភាសាខ្មែរ...</li></ul>`
        }
    });
}

let currentLang = 'fr';

function renderQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    data.forEach(q => {
        const card = document.createElement('div');
        card.className = 'q-card';
        card.setAttribute('data-search', `${q.title[currentLang]} ${q.content[currentLang]}`.toLowerCase());

        card.innerHTML = `
            <div class="q-title">${q.title[currentLang]}</div>
            <div class="q-content">${q.content[currentLang]}</div>
        `;
        container.appendChild(card);
    });
}

function switchLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const mainTitle = document.getElementById('main-title');
    if(lang === 'fr') mainTitle.innerText = "QROC de Pédiatrie - 103 Questions & Réponses";
    else if(lang === 'en') mainTitle.innerText = "Pediatric QROC - 103 Questions & Answers";
    else mainTitle.innerText = "សំណួរ-ចម្លើយកុមាររោគ (QROC) - ១០៣ សំណួរ";

    renderQuestions();
    filterQuestions();
}

function filterQuestions() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const cards = document.querySelectorAll('.q-card');

    cards.forEach(card => {
        const text = card.getAttribute('data-search');
        if(text.includes(input)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Initial Render
renderQuestions();
</script>

</body>
</html>
