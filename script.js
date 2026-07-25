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
        fr: { question: "3. Traitement spécifique du syndrome néphrotique :", answer: "+ Poussée initiale : Prednisolone 60 mg/m2/j (ou 2mg/kg/j), max 80mg/24h pendant 4 semaines\n+ En cas de rechute tardive (> 3 mois après arrêt)\n+ En cas de rechute précoce (≤ 3 mois après arrêt)" },
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
    },
    {
        id: 6, page: "53",
        km: { question: "៦. លក្ខណៈនៃលឿងទារកដោយសារប្រូតែអ៊ីនទឹកដោះម្តាយ (Ictère au lait de mère) ៖", answer: "• លេចឡើងនៅចុងសប្តាហ៍ទី១ ឬក្នុងសប្តាហ៍ទី២ នៃជីវិត\n• ទារកមានសុខភាពល្អជាធម្មតា លូតលាស់ល្អ\n• គ្មានសញ្ញាបែកគ្រាប់ឈាម ឬថ្លើមរីកធំឡើយ\n• បាត់ទៅវិញដោយខ្លួនឯងក្នុងរយៈពេល ៤-១២ សប្តាហ៍ ដោយមិនបាច់ផ្តាច់ទឹកដោះម្តាយ" },
        fr: { question: "6. Signes cliniques de l'ictère au lait maternel :", answer: "• Apparition en fin de 1ère semaine ou cours de la 2ème semaine\n• Enfant en bonne santé, excellente croissance\n• Pas de signes d'hémolyse ni d'hépatosplénomégalie\n• Disparition spontanée en 4 à 12 semaines sans arrêter l'allaitement" },
        en: { question: "6. Clinical features of Breast Milk Jaundice:", answer: "• Appears late in 1st week or during 2nd week of life\n• Infant is healthy with good growth\n• No signs of hemolysis or hepatosplenomegaly\n• Resolves spontaneously within 4-12 weeks without stopping breastfeeding" }
    },
    {
        id: 7, page: "54",
        km: { question: "៧. សញ្ញាគ្រោះថ្នាក់នៃជំងឺផ្លូវដង្ហើមស្រួចស្រាវលើកុមារ (Signes de gravité des infections respiratoires) ៖", answer: "- ពិបាកដកដង្ហើមខ្លាំង (Tirage intercostal/sous-costal)\n- ដកដង្ហើមញាប់ខុសធម្មតា (Polypnée)\n- ស្បែកខៀវស្រងាត់ (Cyanose)\n- មិនអាចបៅ ឬផឹកទឹកបាន (Incapacité de boire/téter)\n- ងងុយដេកតឹង ឬសន្លប់ (Léthargie ou coma)" },
        fr: { question: "7. Signes de gravité des infections respiratoires aiguës :", answer: "- Tirage sous-costal / intercostal sévère\n- Tachypnée / Polypnée importante\n- Cyanose\n- Incapacité de boire ou de téter\n- Léthargie ou altération de la conscience" },
        en: { question: "7. Danger signs of acute respiratory infections in children:", answer: "- Severe chest indrawing\n- Rapid breathing (Tachypnea)\n- Cyanosis\n- Inability to drink or breastfeed\n- Lethargy or unconsciousness" }
    },
    {
        id: 8, page: "55",
        km: { question: "៨. ការព្យាបាលជំងឺរាកស្រួចស្រាវគ្មានសញ្ញានៃការបាត់បង់ជាតិទឹក (Plan A) ៖", answer: "• ផ្តល់ជាតិទឹកបន្ថែមនៅផ្ទះ (ORALIT / SRO) ក្រោយរាកម្តងៗ\n• បន្តការបំបៅទឹកដោះម្តាយ ឬអាហារបន្ថែមជាធម្មតា\n• ផ្តល់ថ្នាំជាតិស័ង្កសី (Zinc) រយៈពេល ១០ ទៅ ១៤ ថ្ងៃ\n• ណែនាំម្តាយឱ្យនាំកុមារមកមន្ទីរពេទ្យវិញភ្លាមបើមានសញ្ញាគ្រោះថ្នាក់" },
        fr: { question: "8. Traitement de la diarrhée aiguë sans déshydratation (Plan A) :", answer: "• Donner plus de liquides à domicile (SRO) après chaque selle\n• Continuer l'alimentation et l'allaitement\n• Supplémentation en Zinc pendant 10-14 jours\n• Informer la mère des signes de danger pour revenir rapidement" },
        en: { question: "8. Treatment of acute diarrhea with no dehydration (Plan A):", answer: "• Give extra fluids at home (ORS) after each loose stool\n• Continue feeding and breastfeeding\n• Give Zinc supplement for 10 to 14 days\n• Advise mother on when to return immediately" }
    },
    {
        id: 9, page: "56",
        km: { question: "៩. សញ្ញាគ្លីនិកនៃជំងឺលាកសួតធ្ងន់ធ្ងរ (Pneumonie sévère) ៖", answer: "+ ក្តៅខ្លួន ជាមួយនឹងការក្អក ឬពិបាកដកដង្ហើម\n+ មានសញ្ញាផ្នត់ដើមទ្រូងផតខ្លាំងពេលដកដង្ហើម (Tirage sous-costal)\n+ មានសញ្ញាគ្រោះថ្នាក់ទូទៅ (ស្បែកខៀវ, មិនបៅ, សន្លប់)" },
        fr: { question: "9. Signes cliniques de la pneumonie sévère :", answer: "+ Fièvre avec toux ou difficulté respiratoire\n+ Présence de tirage sous-costal marqué\n+ Présence de signes généraux de danger (cyanose, refus de téter, léthargie)" },
        en: { question: "9. Clinical signs of severe pneumonia:", answer: "+ Fever with cough or difficulty breathing\n+ Presence of severe chest indrawing\n+ Presence of general danger signs" }
    },
    {
        id: 10, page: "57",
        km: { question: "១០. ការថែទាំ និងព្យាបាលជំងឺគ្រុនឈាមកម្រិតស្រាល (Dengue non sévère) ៖", answer: "• សម្រាក និងញ៉ាំទឹក ឬសេរ៉ូមប្រៃ/ORALIT ឱ្យបានច្រើន\n• ប្រើថ្នាំ Paracetamol ដើម្បបញ្ចុះកម្តៅ (ហាមប្រើ Aspirin/Ibuprofen)\n• តាមដានសញ្ញាគ្រោះថ្នាក់ (ឈឺពោះខ្លាំង, ក្អួតចង្អោរច្រើន, ហូរឈាមតាមច្រមុះ/អញ្ចាញធ្មេញ)" },
        fr: { question: "10. Prise en charge de la dengue non sévère :", answer: "• Repos et réhydratation orale abondante (SRO, jus de fruits)\n• Paracetamol pour la fièvre (Proscrire Aspirine et AINS/Ibuprofène)\n• Surveillance étroite des signes d'alerte" },
        en: { question: "10. Management of non-severe dengue:", answer: "• Rest and oral rehydration therapy (ORS, fluid intake)\n• Paracetamol for fever (Avoid Aspirin and NSAIDs/Ibuprofen)\n• Monitor closely for warning signs" }
    },
    {
        id: 11, page: "58",
        km: { question: "១១. ការព្យាបាលជំងឺគ្រុនស្វិតដៃជើង (Poliomyélite) ៖", answer: "• គ្មានការពាបាលជាក់លាក់ប្រឆាំងវីរុសឡើយ (Pas de traitement spécifique)\n• ការព្យាបាលតាមរោគសញ្ញា (សម្រាក, ប្រើថ្នាំបំបាត់ការឈឺចាប់, ស្អំកម្តៅ)\n• ការធ្វើចលនាស្តារសម្បទាឡើងវិញ (Kinésithérapie) ក្រោយបាត់ការឈឺចាប់\n• ការពារដោយការចាក់/បន្តក់វ៉ាក់សាំង OPV/IPV" },
        fr: { question: "11. Traitement de la poliomyélite :", answer: "• Pas de traitement antiviral spécifique\n• Traitement symptomatique (repos, antalgiques, chaleur locale)\n• Kinésithérapie précoce dès la disparition des douleurs\n• Prévention par vaccination (VPO/VPI)" },
        en: { question: "11. Treatment of Poliomyelitis:", answer: "• No specific antiviral treatment available\n• Symptomatic treatment (rest, analgesics, local heat)\n• Physical therapy (rehabilitation) after pain subsides\n• Prevention through vaccination (OPV/IPV)" }
    },
    {
        id: 12, page: "59",
        km: { question: "១២. រោគសញ្ញាគ្លីនិកនៃជំងឺលាកស្រទាប់ខួរក្បាលដោយបាក់តេរី (Méningite bactérienne) ៖", answer: "• ក្តៅខ្លួនខ្លាំងភ្លាមៗ (Fièvre élevée)\n• សញ្ញាប៉ះពាល់ស្រទាប់ខួរក្បាល ៖ រឹងក (Raideur de la nuque), សញ្ញា Kernig និង Brudzinski វិជ្ជមាន\n• ឈឺក្បាលខ្លាំង, ក្អួតចង្អោរ, ខ្លាចពន្លឺ (Photophobie)\n• លើទារកតូច ៖ ថប់ប៉ោង (Fontanelle bombante), យំស្រែកមិនបាត់" },
        fr: { question: "12. Signes cliniques de la méningite bactérienne :", answer: "• Fièvre élevée de survenue brutale\n• Syndrome méningé : raideur de la nuque, signes de Kernig et Brudzinski positifs\n• Céphalées vives, vomissements, photophobie\n• Chez le nourrisson : fontanelle bombante, cris hyperesthésiques" },
        en: { question: "12. Clinical signs of bacterial meningitis:", answer: "• Sudden high fever\n• Meningeal syndrome: neck stiffness, positive Kernig & Brudzinski signs\n• Severe headache, vomiting, photophobia\n• In infants: bulging fontanelle, persistent crying" }
    },
    {
        id: 13, page: "60",
        km: { question: "១៣. ផលវិបាកនៃជំងឺកញ្ជ្រឹល (Complications de la rougeole) ៖", answer: "- លើផ្លូវដង្ហើម ៖ លាកសួត (Pneumonie), លាកបំពង់ខ្យល់ (Laryngite)\n- លើប្រព័ន្ធប្រសាទ ៖ លាកខួរក្បាល (Encéphalite aiguë)\n- លើប្រព័ន្ធរំលាយអាហារ ៖ រាករូសធ្ងន់ធ្ងរ, ស្គមស្គាំងខ្លាំង\n- លើភ្នែក ៖ លាកកែវភ្នែក (Kératite) ដែលអាចឱ្យខកភ្នែក" },
        fr: { question: "13. Complications de la rougeole :", answer: "- Respiratoires : pneumonie, laryngite sévère\n- Neurologiques : encéphalite aiguë\n- Digestives : diarrhée sévère et dénutrition\n- Oculaires : kératite pouvant entraîner la cécité" },
        en: { question: "13. Complications of measles:", answer: "- Respiratory: pneumonia, severe laryngitis\n- Neurological: acute encephalitis\n- Digestive: severe diarrhea and malnutrition\n- Ocular: keratitis leading to potential blindness" }
    },
    {
        id: 14, page: "61",
        km: { question: "១៤. លក្ខណៈទឹកខួរឆ្អឹងខ្នងក្នុងជំងឺ Méningite bactérienne ៖", answer: "• ពណ៌ ៖ ល្អក់ ឬមានខ្ទុះ (LCR trouble ou purulent)\n• កោសិកា ៖ កើនឡើងខ្លាំង (> 1000/mm3) ដោយមាន Polynucléaires neutrophiles ច្រើន\n• ប្រូតែអ៊ីន ៖ កើនឡើង (Protéinorachie élevée > 1 g/L)\n• ស្ករ ៖ ថយចុះខ្លាំង (Hypoglycorachie < 0.4 de la glycémie)" },
        fr: { question: "14. Caractéristiques du LCR dans la méningite bactérienne :", answer: "• Aspect : trouble ou purulent\n• Cytologie : pléiocytose importante (>1000/mm3) à prédominance de PNN\n• Protéinorachie : très élevée (> 1 g/L)\n• Glycorachie : effondrée (hypoglycorachie < 40% de la glycémie)" },
        en: { question: "14. CSF characteristics in bacterial meningitis:", answer: "• Appearance: turbid or purulent\n• Cell count: high (>1000/mm3) with neutrophil predominance\n• Protein: highly elevated (> 1 g/L)\n• Glucose: significantly decreased (< 40% of blood glucose)" }
    },
    {
        id: 15, page: "62",
        km: { question: "១៥. ការព្យាបាលជំងឺអាសន្នរោគលើកុមារ (Traitement du choléra) ៖", answer: "• បំពេញជាតិទឹកភ្លាមៗ (Réhydratation urgente) ដោយប្រើ ORS ឬ Ringer Lactate\n• ផ្តល់ថ្នាំផ្សះ ៖ Azithromycin ឬ Doxycycline ដើម្បីកាត់បន្ថយរយៈពេលរាក\n• ផ្តល់ថ្នាំជាតិស័ង្កសី (Zinc) សម្រាប់កុមារ\n• បន្តអាហារូបត្ថម្ភភ្លាមៗក្រោយក្អួតបាត់" },
        fr: { question: "15. Traitement du choléra chez l'enfant :", answer: "• Réhydratation rapide et urgente (SRO ou Ringer Lactate en IV)\n• Antibiotique : Azithromycine ou Doxycycline\n• Supplémentation en Zinc\n• Maintien de l'alimentation dès que possible" },
        en: { question: "15. Treatment of cholera in children:", answer: "• Urgent fluid replacement (ORS or IV Ringer's Lactate)\n• Antibiotics: Azithromycin or Doxycycline\n• Zinc supplementation\n• Continued feeding as soon as vomiting stops" }
    },
    {
        id: 16, page: "63",
        km: { question: "១៦. រោគសញ្ញាគ្លីនិកនៃជំងឺគ្រុនពោះវៀន (Fièvre typhoïde) ៖", answer: "+ ក្តៅខ្លួនកើនឡើងជាលំដាប់ (Fièvre en plateau)\n+ ឈឺក្បាល, អស់កម្លាំង, ស្មារតីស្រទន់ (Tuphos)\n+ ឈឺពោះ, ទល់លាមក ឬរាកពណ៌ដូចស៊ុបសណ្តែក (Selles en purée d'encre/pois)\n+ ថ្លើមនិងអណ្តើករីក (Hépatosplénomégalie)" },
        fr: { question: "16. Signes cliniques de la fièvre typhoïde :", answer: "+ Fièvre progressive puis en plateau\n+ Céphalées, asthénie, stupéfaction (tuphos)\n+ Douleurs abdominales, constipation ou diarrhée jus de melon/pois\n+ Hépatosplénomégalie" },
        en: { question: "16. Clinical signs of typhoid fever:", answer: "+ Progressive high fever\n+ Headache, fatigue, lethargy/stupor (tuphos)\n+ Abdominal pain, constipation or 'pea-soup' diarrhea\n+ Hepatosplenomegaly" }
    },
    {
        id: 17, page: "64",
        km: { question: "១៧. ការធ្វើរោគវិនិច្ឆ័យជំងឺគ្រុនចាញ់ធ្ងន់ធ្ងរ (Paludisme grave) ៖", answer: "• មានវត្តមាន Plasmodium falciparum ក្នុងឈាម (Goutte épaisse / TDR (+))\n• រួមជាមួយសញ្ញាធ្ងន់ធ្ងរណាមួយ ៖ វង្វេង/សន្លប់ (Accès pernicieux), ស្លេកស្លាំងធ្ងន់ធ្ងរ (Hb < 5 g/dL), នោមខ្មៅ, ពិបាកដកដង្ហើម" },
        fr: { question: "17. Diagnostic du paludisme grave :", answer: "• Confirmation parasitologique à P. falciparum\n• Associée à au moins un critère de gravité : coma/convulsions, anémie sévère (Hb < 5 g/dl), détresses respiratoire, ictère" },
        en: { question: "17. Diagnosis of severe malaria:", answer: "• Parasitological confirmation of P. falciparum\n• Plus any danger criterion: cerebral malaria/coma, severe anemia (Hb < 5 g/dL), respiratory distress, hemoglobinuria" }
    },
    {
        id: 18, page: "65",
        km: { question: "១៨. ការព្យាបាលជំងឺគ្រុនចាញ់ធ្ងន់ធ្ងរ (Traitement du paludisme grave) ៖", answer: "+ ប្រើថ្នាំ Artesunate IV ឬ IM ជាជម្រើសទី១ (2.4 mg/kg ត្រង់ 0h, 12h, 24h រួច ១ដង/ថ្ងៃ)\n+ ប្តូរមកប្រើថ្នាំគ្រាប់ ACTs រយៈពេល ៣ ថ្ងៃ ពេលអ្នកជំងឺដឹងខ្លួន និងញ៉ាំបាន\n+ ការព្យាបាលគាំទ្រ ៖ បញ្ចុះកម្តៅ, ចាក់ឈាម (បើស្លេកខ្លាំង), បំពេញជាតិទឹក" },
        fr: { question: "18. Traitement du paludisme grave :", answer: "+ Artésunate IV ou IM en première intention (2,4 mg/kg à H0, H12, H24 puis 1j/j)\n+ Relais oral par un ACT complet dès que le patient peut tolérer\n+ Traitement associant : transfusion, antipyrétiques, réhydratation" },
        en: { question: "18. Treatment of severe malaria:", answer: "+ First line: IV or IM Artesunate (2.4 mg/kg at 0h, 12h, 24h then daily)\n+ Switch to full oral ACT course once patient can swallow\n+ Supportive therapy: blood transfusion, antipyretics, hydration" }
    },
    {
        id: 19, page: "66",
        km: { question: "១៩. សញ្ញាគ្លីនិកនៃជំងឺស្បែកក្រហម/ស្អក (Rubéole) ៖", answer: "- ក្តៅខ្លួនស្ទើៗ (Fièvre modérée)\n- លេចចេញកន្ទួលក្រហមតូចៗលើស្បែក ចាប់ពីមុខរាលដាលចុះក្រោម\n- មានរឹង/ហើមក្រពេញកូនកណ្តុរនៅខាងក្រោយត្រចៀក និងកញ្ចឹងក (Adénopathies occipitales/cervicales)\n- ឈឺសន្លាក់ដៃជើង (Arthralgies)" },
        fr: { question: "19. Signes cliniques de la rubéole :", answer: "- Fièvre modérée\n- Exanthème maculo-papuleux débutant au visage puis descendant\n- Adénopathies rétro-auriculaires et occipitales fréquentes\n- Arthralgies fréquentes chez les grands enfants" },
        en: { question: "19. Clinical signs of Rubella (German Measles):", answer: "- Mild fever\n- Maculopapular rash starting on face and spreading downward\n- Tender post-auricular and occipital lymphadenopathy\n- Joint pain / arthralgia" }
    },
    {
        id: 20, page: "67",
        km: { question: "២០. ការការពារជំងឺ Rubéole Congénitale (ជំងឺស្អកពីកំណើត) ៖", answer: "• ចាក់វ៉ាក់សាំង ROR (Rougeole-Oreillons-Rubéole) ដល់កុមារទាំងអស់\n• ចាក់វ៉ាក់សាំងការពារលើស្ត្រីវ័យបន្តពូជ មុនពេលយកផ្ទៃពោះ\n• ហាមឃាត់ការចាក់វ៉ាក់សាំងរ៉ូបេអូលលើស្ត្រីកំពុងមានផ្ទៃពោះ (Vaccin vivant atténué)" },
        fr: { question: "20. Prévention de la rubéole congénitale :", answer: "• Vaccination systématique des enfants par le vaccin ROR\n• Vaccination des femmes en âge de procréer (hors grossesse)\n• Contre-indication du vaccin vivant pendant la grossesse" },
        en: { question: "20. Prevention of congenital rubella syndrome:", answer: "• Universal childhood vaccination with MMR vaccine\n• Vaccination of non-pregnant women of childbearing age\n• Live attenuated vaccine is contraindicated during pregnancy" }
    },
    {
        id: 21, page: "68",
        km: { question: "២១. រោគសញ្ញាគ្លីនិកនៃជំងឺអុតស្វាយ (Varicelle) ៖", answer: "• ក្តៅខ្លួនល្មម\n• លេចចេញពងទឹកតូចៗលើស្បែក (Vésicules en gouttes de rosée)\n• កន្ទួលលេចឡើងជាច្រើនដំណាក់កាលក្នុងពេលតែមួយ (Eruption polymorphe : កន្ទួល, ពងទឹក, ក្រញ៉ម)\n• មានអាការៈរមាស់ខ្លាំង (Prurit intense)" },
        fr: { question: "21. Signes cliniques de la varicelle :", answer: "• Fièvre modérée\n• Éruption vésiculeuse généralisée (« gouttes de rosée »)\n• Évolution par poussées successives (coexistence de tous les stades)\n• Prurit intense" },
        en: { question: "21. Clinical signs of Chickenpox (Varicella):", answer: "• Mild fever\n• Generalized vesicular rash ('dew drops on rose petals')\n• Lesions present in multiple stages of development\n• Intense itching (pruritus)" }
    },
    {
        id: 22, page: "69",
        km: { question: "២២. ការព្យាបាល និងថែទាំជំងឺអុតស្វាយ (Traitement de la varicelle) ៖", answer: "• ប្រើថ្នាំប្រឆាំងការរមាស់ (Antihistaminique) និងកាត់ក្រចកដៃឱ្យខ្លី\n• ប្រើថ្នាំ Paracetamol បញ្ចុះកម្តៅ (**ដាច់ខាតហាមប្រើ Aspirin/Ibuprofen** ព្រោះប្រឈម Syndrome de Reye / Infection sévère)\n• លាងសម្អាតស្បែកជាមួយសាប៊ូកាត់មេរោគ\n• ប្រើ Acyclovir ក្នុងករណីមានផលវិបាក ឬលើអ្នកជំងឺខ្សោយប្រព័ន្ធការពារ" },
        fr: { question: "22. Prise en charge de la varicelle :", answer: "• Soins cutanés, coupage des ongles, antihistaminiques pour le prurit\n• Paracétamol pour la fièvre (**AINS et Aspirine contre-indiqués**)\n• Aciclovir en cas de formes graves ou d'immunodépression" },
        en: { question: "22. Management of chickenpox:", answer: "• Skin hygiene, short nails, antihistamines for itch\n• Paracetamol for fever (**NSAIDs & Aspirin strictly contraindicated**)\n• Oral/IV Acyclovir for severe cases or immunocompromised patients" }
    },
    {
        id: 23, page: "70",
        km: { question: "២៣. រោគសញ្ញានៃជំងឺពោះវៀនត្បៀតពីកំណើត (Sténose hypertrophique du pylore) ៖", answer: "+ ក្អួតបាញ់ខ្លាំងៗក្រោយបៅ (Vomissements en jet de lait non bileux)\n+ ចាប់ផ្តើមលេចឡើងនៅអាយុ ៣ ទៅ ៦ សប្តាហ៍ក្រោយកើត\n+ ទារកឃ្លានបៅភ្លាមៗក្រោយក្អួតរួច\n+ ស្ទាបប៉ះដុំសាច់ទំហំដូចគ្រាប់អូលីវនៅពោះ (Olive pylorique)" },
        fr: { question: "23. Signes cliniques de la sténose hypertrophique du pylore :", answer: "+ Vomissements en jet, tardifs après le biberon, non bilieux\n+ Début entre 3 et 6 semaines de vie\n+ Enfant affamé réclamant à téter après le vomissement\n+ Palpation de l'olive pylorique" },
        en: { question: "23. Clinical signs of Hypertrophic Pyloric Stenosis:", answer: "+ Projectile, non-bilious vomiting after feedings\n+ Onset usually between 3 to 6 weeks of age\n+ In
                // === ភាគទី ២ (សំណួរទី ៣១ ដល់ ៦០) ===
    {
        id: 31, page: "78",
        km: { question: "៣១. រោគសញ្ញាគ្លីនិកនៃជំងឺលាកប្រព័ន្ធផ្លូវដង្ហើម Bronchiolite លើទារក ៖", answer: "• ចាប់ផ្តើមដោយ Rhinopharyngite និងក្តៅខ្លួនស្ទើៗ 1-2 ថ្ងៃ\n• បន្ទាប់មកមានក្អក, ដកដង្ហើមលឿន (Tachypnée), ពិបាកដកដង្ហើម (Freinage expiratoire)\n• ស្ដាប់សួតឃើញមាន : Freinage expiratoire, Sibilants និង Râles sous-crépitants" },
        fr: { question: "31. Signes cliniques de la bronchiolite aiguë du nourrisson :", answer: "• Début par une rhinopharyngite avec fièvre modérée pendant 1 à 2 jours\n• Apparition d'une toux, d'une polypnée et d'une gêne respiratoire expiratoire\n• Auscultation : freinage expiratoire, sibilants et râles sous-crépitants" },
        en: { question: "31. Clinical signs of acute bronchiolitis in infants:", answer: "• Starts with rhinopharyngitis and mild fever for 1-2 days\n• Followed by cough, tachypnea, and expiratory wheezing/distress\n• Auscultation: expiratory wheezes and fine crackles" }
    },
    {
        id: 32, page: "79",
        km: { question: "៣២. វីរុសដែលជាដើមហេតុចម្បងនៃជំងឺ Bronchiolite ៖", answer: "• **VRS (Virus Respiratory Syncytial)** : ស្មើនឹង ៧០-៨០% នៃករណីទាំងអស់\n• វីរុសផ្សេងទៀត : Rhinovirus, Metapneumovirus, Influenza" },
        fr: { question: "32. Étiologie principale de la bronchiolite :", answer: "• **VRS (Virus Respiratoire Syncytial)** : responsable de 70 à 80% des cas\n• Autres virus : Rhinovirus, Métapneumovirus humain, Influenza" },
        en: { question: "32. Main etiology of bronchiolitis:", answer: "• **RSV (Respiratory Syncytial Virus)**: accounts for 70-80% of cases\n• Other viruses: Rhinovirus, Metapneumovirus, Influenza" }
    },
    {
        id: 33, page: "80",
        km: { question: "៣៣. ការព្យាបាល និងថែទាំជំងឺ Bronchiolite ស្រាលនៅផ្ទះ ៖", answer: "• ជូតសមាតច្រមុះដោយសេរ៉ូមប្រៃ (Désobstruction Rhinopharyngée - DRP) មុនពេលបៅ\n• បំបៅបន្តិចៗតែច្រើនដង (Fractionnement des repas)\n• លើកក្បាលឱ្យខ្ពស់បន្តិចពេលដេក (Position proclive 30°)\n• ផ្តល់ថ្នាំបញ្ចុះកម្តៅ Paracetamol បើមានកម្តៅ > 38.5°C" },
        fr: { question: "33. Traitement ambulatoire de la bronchiolite :", answer: "• Désobstruction rhinopharyngée (DRP) au sérum physiologique avant les repas\n• Fractionnement des repas\n• Position proclive dorsale à 30°\n• Antipyrétiques (Paracétamol) si fièvre > 38,5°C" },
        en: { question: "33. Home management of mild bronchiolitis:", answer: "• Nasal saline suctioning/drops (DRP) before feedings\n• Smaller, more frequent feedings\n• Elevate head of bed to 30 degrees\n• Paracetamol for fever > 38.5°C" }
    },
    {
        id: 34, page: "81",
        km: { question: "៣៤. លក្ខណៈនៃជំងឺគ្រុនពោះវៀនជ្រៀតចូលប្រព័ន្ធប្រសាទ (Encephalopathie typhique) ៖", answer: "• មានការប្រែប្រួលស្មារតីខ្លាំង (Coma, Stupeur)\n• មានអាការៈប្រដេញ/ប្រشنជើងដៃ (Tremblements, Convulsions)\n• ជាសញ្ញាគ្រោះថ្នាក់ខ្លាំងនៃជំងឺ Fièvre typhoïde ត្រូវប្រញាប់ប្រើ Steroid (Dexamethasone)" },
        fr: { question: "34. Signes de l'encéphalopathie typhique :", answer: "• Troubles de la conscience sévères (coma, stupéfaction)\n• Tremblements, myoclonies ou convulsions\n• Forme grave nécessitant une corticothérapie associative (Dexaméthasone)" },
        en: { question: "34. Features of Typhoid Encephalopathy:", answer: "• Severe altered mental status (coma, stupor)\n• Tremors, myoclonus, or seizures\n• Severe complication requiring adjunctive Corticosteroids (Dexamethasone)" }
    },
    {
        id: 35, page: "82",
        km: { question: "៣៥. សញ្ញាគ្លីនិកនៃជំងឺ Appendicite aiguë (លាកខ្នែងពោះវៀនស្រួចស្រាវ) លើកុមារ ៖", answer: "• ឈឺពោះនៅតំបន់ហើមស្ដាំ (Fosse iliaque droite)\n• ក្តៅខ្លួនស្ទើៗ (38°C - 38.5°C)\n• ចង់ក្អួត ឬក្អួត\n• សញ្ញាពិនិត្យ ៖ ឈឺចាប់ខ្លាំងពេលសង្កត់ត្រង់ចំណុច McBurney និងសញ្ញា Défense musculaire" },
        fr: { question: "35. Signes cliniques de l'appendicite aiguë :", answer: "• Douleur abdominale localisée à la fosse iliaque droite (FID)\n• Fébrilécule (38°C - 38,5°C)\n• Nausées ou vomissements\n• Signes physiques : douleur provoquée au point de McBurney et défense en FID" },
        en: { question: "35. Clinical signs of Acute Appendicitis in children:", answer: "• Abdominal pain localized to the right iliac fossa\n• Low-grade fever (38°C - 38.5°C)\n• Nausea or vomiting\n• Physical exam: McBurney point tenderness and localized muscle defense" }
    },
    {
        id: 36, page: "83",
        km: { question: "៣៦. ការធ្វើរោគវិនិច្ឆ័យជំងឺ Appendicite ៖", answer: "• **NFS** ៖ ឃើញ Hyperleucocytose à Polynucléaires Neutrophiles\n• **CRP** ៖ កើនឡើង (Indicateur d'inflammation)\n• **Échographie abdominale** : ឃើញ appendice រីកធំ (> 6 mm) និងមិនអាចសង្កត់ឱ្យរាបបាន" },
        fr: { question: "36. Examens complémentaires pour l'appendicite :", answer: "• **NFS** : hyperleucocytose à polynucléaires neutrophiles (> 10 000/mm3)\n• **CRP** : augmentée\n• **Échographie abdominale** : appendice aperçu, incompressible, diamètre > 6 mm" },
        en: { question: "36. Diagnostic workup for Appendicitis:", answer: "• **CBC**: Leukocytosis with neutrophilia\n• **CRP**: Elevated\n• **Abdominal Ultrasound**: Non-compressible appendix with diameter > 6 mm" }
    },
    {
        id: 37, page: "84",
        km: { question: "៣៧. រោគសញ្ញាគ្លីនិកនៃជំងឺ Invagination Intestinale Aiguë (IIA) ៖", answer: "+ ឈឺពោះចុកខ្លាំងភ្លាមៗជាលក្ខណៈរលក (Crises douloureuses paroxystiques)\n+ ក្អួត (Vomissements)\n+ ជុះលាមកមានឈាមលាយសំបោរ (Selles sanglantes / Rectorragies)\n+ ស្ទាបប៉ះដុំពោះ (Boudin d'invagination)" },
        fr: { question: "37. Triade clinique de l'Invagination Intestinale Aiguë (IIA) :", answer: "+ Douleurs abdominales paroxystiques violentes\n+ Vomissements\n+ Émissions de selles sanglantes (rectorragies)\n+ Palpation d'un boudin d'invagination" },
        en: { question: "37. Clinical features of Acute Intussusception (IIA):", answer: "+ Sudden, severe paroxysmal abdominal pain\n+ Vommiting\n+ 'Red currant jelly' bloody stools\n+ Palpable sausage-shaped abdominal mass" }
    },
    {
        id: 38, page: "85",
        km: { question: "៣៨. ការព្យាបាលជំងឺ Invagination Intestinale Aiguë (IIA) ៖", answer: "• **Lavement hydrostatique ou pneumatique** (ការបូមពង្រីកដោយខ្យល់ ឬទឹកសេរ៉ូម ក្រោមអេកូ/X-Ray) ជាជម្រើសទី១ បើគ្មាន Peritonite\n• **Chirurgie (ការវះកាត់)** ករណីបូមពង្រីកមិនជោគជ័យ ឬមានសញ្ញាធ្លុះពោះវៀន" },
        fr: { question: "38. Traitement de l'invagination intestinale aiguë :", answer: "• **Réduction de l'invagination** par lavement pneumatique ou hydrostatique (en l'absence de perforation/péritonite)\n• **Réduction chirurgicale** en cas d'échec du lavement ou de signes de nécrose/perforation" },
        en: { question: "38. Treatment of Intussusception:", answer: "• **Non-surgical reduction** (Air or Hydrostatic enema) as first-line if no peritonitis\n• **Surgical reduction** if enema fails or perforation/peritonitis is present" }
    },
    {
        id: 39, page: "86",
        km: { question: "៣៩. លក្ខណៈគ្លីនិកនៃជំងឺ Asthma (ហឺតកុមារ) ៖", answer: "- ក្អកជារ៉ាំរ៉ៃ ឬរើឡើងវិញ (ជាពិសេសពេលយប់ ឬពេលធ្វើចលនា)\n- ដកដង្ហើមមានសំឡេងចៃៗ (Sifflement/Wheezing)\n- ពិបាកដកដង្ហើម (Dyspnée expiratoire)\n- មានប្រវត្តិ Atopie ក្នុងគ្រួសារ (អាលែកហ្ស៊ី, កន្ទួលរមាស់ស្បែក, ផ្ដាសាយអាលែកហ្ស៊ី)" },
        fr: { question: "39. Signes cliniques de l'asthme chez l'enfant :", answer: "- Toux récurrente (particulièrement la nuit ou à l'effort)\n- Wheezing (sifflement expiratoire)\n- Dyspnée expiratoire récurrente\n- Terrain atopique personnel ou familial (eczéma, rhinite)" },
        en: { question: "39. Clinical signs of Asthma in children:", answer: "- Recurrent cough (especially at night or post-exercise)\n- Expiratory wheezing\n- Recurrent expiratory dyspnea\n- Personal or family history of atopy (eczema, allergic rhinitis)" }
    },
    {
        id: 40, page: "87",
        km: { question: "៤០. ការព្យាបាលវិបត្តិហឺតស្រួចស្រាវ (Crise d'asthme aiguë) ៖", answer: "• ប្រើថ្នាំពង្រីកបំពង់ខ្យល់ខ្លី ៖ **Salbutamol (Ventoline)** បាញ់ ឬ Salbutamol Nébulisation\n• ផ្តល់អុកស៊ីសែន (O2) ប្រសិនបើ SpO2 < 92%\n• ផ្តល់ថ្នាំ Corticoïde តាមមាត់ (Prednisolone 1-2 mg/kg) បើជាវិបត្តិកម្រិតមធ្យម ឬធ្ងន់" },
        fr: { question: "40. Traitement de la crise d'asthme aiguë :", answer: "• Bêta-2 mimétiques de courte durée d'action : **Salbutamol** en spray avec chambre d'inhalation ou nébulisation\n• Oxygénothérapie si SpO2 < 92%\n• Corticothérapie par voie orale (Prednisolone) si crise modérée à sévère" },
        en: { question: "41. Treatment of Acute Asthma Exacerbation:", answer: "• Short-acting beta-2 agonist: **Salbutamol (Albuterol)** via spacer or nebulizer\n• Oxygen supplementation if SpO2 < 92%\n• Systemic Corticosteroids (oral Prednisolone) for moderate to severe crises" }
    },
    {
        id: 41, page: "88",
        km: { question: "៤១. រោគសញ្ញាគ្លីនិកនៃជំងឺដក់ទឹកក្នុងខួរក្បាល (Hydrocéphalie) លើទារក ៖", answer: "• ទំហំប្រអប់ក្បាលរីកធំខុសធម្មតា (Macrocrénie / Périmètre crânien កើនឡើងលឿន)\n• ថង់ពោះវៀនក្បាល/ថប់ប៉ោង (Fontanelle antérieure bombante)\n• សញ្ញាភ្នែកធ្លាក់ចុះក្រោម (Signe du soleil couchant)\n• ឆ្អឹងលលាដ៍ក្បាលស្តើង និងសរសៃឈាមវ៉ែនលើក្បាលរីកធំ" },
        fr: { question: "41. Signes cliniques de l'hydrocéphalie chez le nourrisson :", answer: "• Augmentation rapide du périmètre crânien (Macrocrénie)\n• Fontanelle antérieure tendue et bombante\n• Regard en « soleil couchant »\n• Disjonction des sutures, peau du crâne fine avec circulation veineuse collatérale" },
        en: { question: "41. Clinical signs of Hydrocephalus in infants:", answer: "• Rapidly increasing head circumference (Macrocephaly)\n• Tense, bulging anterior fontanelle\n• 'Setting-sun' eye sign\n• Widened cranial sutures and prominent scalp veins" }
    },
    {
        id: 42, page: "89",
        km: { question: "៤២. ការធ្វើរោគវិនិច្ឆ័យ និងព្យាបាលជំងឺ Hydrocéphalie ៖", answer: "• **Diagnostic** ៖ Échographie transfontanellaire (ETF), TDM (CT-Scan) ឬ IRM cérébrale\n• **Traitement** ៖ ការវះកាត់ដាក់បំពង់បង្ហូរទឹកខួរក្បាល (Dérivation Ventriculo-Péritonéale - DVP) ឬ Endoscopic Third Ventriculostomy (ETV)" },
        fr: { question: "42. Diagnostic et traitement de l'hydrocéphalie :", answer: "• **Diagnostic** : Échographie transfontanellaire (ETF), TDMc ou IRM cérébrale\n• **Traitement** : Traitement chirurgical par Dérivation Ventriculo-Péritonéale (DVP) ou Ventriculocisternostomie (VCS)" },
        en: { question: "42. Diagnosis and Treatment of Hydrocephalus:", answer: "• **Diagnosis**: Cranial ultrasound (ETF), Brain CT, or MRI\n• **Treatment**: Surgical intervention via Ventriculoperitoneal (VP) Shunt or Endoscopic Third Ventriculostomy (ETV)" }
    },
    {
        id: 43, page: "90",
        km: { question: "៤៣. លក្ខណៈនៃជំងឺ Hypothyroïdie congénitale (ខ្សោយក្រពេញទីរ៉ូអ៊ីតពីកំណើត) ៖", answer: "- ទារកកើតមកលើសថ្ងៃ, ទំងន់ធ្ងន់\n- លឿងស្បែកអូសបន្លាយ (Ictère prolongé)\n- ទារកស្ងប់ស្ងាត់ពេក, សំឡេងយំស្អក, អណ្តាតធំ (Macroglossie)\n- ទល់លាមករ៉ាំរ៉ៃ, ស្បែកត្រជាក់ និងស្ងួត" },
        fr: { question: "43. Signes de l'hypothyroïdie congénitale chez le nouveau-né :", answer: "- Dépassement de terme, macrosomie\n- Ictère néonatal prolongé\n- Hypotonie, léthargie, cri rauque, macroglossie\n- Constipation opiniâtre, peau froide et sèche" },
        en: { question: "43. Signs of Congenital Hypothyroidism in newborns:", answer: "- Post-term birth, large birth weight\n- Prolonged neonatal jaundice\n- Hypotonia, lethargy, hoarse cry, macroglossia\n- Chronic constipation, cold and dry skin" }
    },
    {
        id: 44, page: "91",
        km: { question: "៤៤. ការព្យាបាលជំងឺ Congenital Hypothyroidism ៖", answer: "• ត្រូវតែព្យាបាលឱ្យបានឆាប់បំផុត (មុនអាយុ ២ សប្តាហ៍) ដើម្បីការពារការយឺតយ៉ាវប្រកេតស្មារតី (Retard mental)\n• ប្រើថ្នាំជំនួសអ័រម៉ូន ៖ **L-Thyroxine (Lévothyrox)** មួយជីវិត" },
        fr: { question: "44. Traitement de l'hypothyroïdie congénitale :", answer: "• Traitement précoce indispensable (avant 15 jours de vie) pour éviter le retard mental irréversible\n• Hormonothérapie substitutive : **L-Thyroxine (Lévothyrox)** à vie" },
        en: { question: "44. Treatment of Congenital Hypothyroidism:", answer: "• Early initiation of therapy (within 2 weeks of birth) to prevent irreversible intellectual disability\n• Lifelong hormone replacement therapy: **L-Thyroxine (Levothyroxine)**" }
    },
    {
        id: 45, page: "92",
        km: { question: "៤៥. សញ្ញាគ្លីនិកនៃជំងឺ Convulsion Fébrile (ប្រشنដោយសារកម្តៅឡើងខ្ពស់) ៖", answer: "• កើតលើកុមារអាយុពី ៦ ខែ ដល់ ៥ ឆ្នាំ\n• មានការប្រشن (ភាគច្រើនជា Convulsion tonico-clonique généralisée) ពេលកម្តៅឡើងលឿន (> 38.5°C)\n• រយៈពេលប្រشنខ្លី (< 15 នាទី)\n• គ្មានការឆ្លងមេរោគលើខួរក្បាល ឬប្រព័ន្ធប្រសាទឡើយ" },
        fr: { question: "45. Caractéristiques des convulsions fébriles simples :", answer: "• Survenue entre 6 mois et 5 ans\n• Crise tonico-clonique généralisée lors d'une ascension thermique rapide (> 38,5°C)\n• Durée brève (< 15 minutes)\n• Absence d'infection du système nerveux central" },
        en: { question: "45. Features of Simple Febrile Seizures:", answer: "• Occurs in children aged 6 months to 5 years\n• Generalized tonic-clonic seizure during rapid rise in temperature (> 38.5°C)\n• Duration under 15 minutes\n• Absence of central nervous system infection" }
    },
    {
        id: 46, page: "93",
        km: { question: "៤៦. ការព្យាបាលបន្ទាន់ពេលកុមារកំពុងប្រشن (Prise en charge d'une crise convulsive) ៖", answer: "• ដាក់កុមារឱ្យដេកផ្អៀង (Position Latérale de Sécurité - PLS)\n• មិនត្រូវញាត់អ្វីចូលក្នុងមាត់ដាច់ខាត\n• ផ្តល់ថ្នាំផ្តាច់ការប្រشن **Diazepam (Valium)** តាមគូទ (0.5 mg/kg) បើប្រشن > ៥ នាទី\n• បញ្ចុះកម្តៅដោយប្រើ Paracetamol និងជូតខ្លួន" },
        fr: { question: "46. Conduite à tenir pendant la crise convulsive :", answer: "• Mise en Position Latérale de Sécurité (PLS)\n• Ne rien introduire dans la bouche\n• Injection intra-rectale de **Diazépam (Valium)** : 0,5 mg/kg si la crise dure > 5 minutes\n• Traitement antipyrétique (Paracétamol)" },
        en: { question: "46. Emergency management of active seizures:", answer: "• Place child in Recovery Position (PLS)\n• Do NOT place anything in the mouth\n• Administer Rectal **Diazepam (Valium)** (0.5 mg/kg) if seizure lasts > 5 minutes\n• Administer antipyretics and active cooling" }
    },
    {
        id: 47, page: "94",
        km: { question: "៤៧. សញ្ញានៃជំងឺ Kwashiorkor (កង្វះអាហារូបត្ថម្ភធ្ងន់ធ្ងរប្រភេទប្រូតែអ៊ីន) ៖", answer: "- ហើម (Œdèmes) ចាប់ផ្តើមពីខ្នងជើង និងមុខ\n- ស្បែកមានស្នាមអុជខ្មៅប្រេះស្រកា (Dermatose en peinture écaillée)\n- សក់ក្រហម ស្រួយ រជ្រុះងាយ\n- ថ្លើមរីកធំ (Hépatomégalie) ដោយសារជាតិខ្លាញ់" },
        fr: { question: "47. Signes cliniques du Kwashiorkor :", answer: "- Œdèmes bilatéraux prenant le godet (pieds, membres, visage)\n- Lesions cutanées : dermatose craquelée hyperpigmentée\n- Modifications des cheveux (secs, cassants, décolorés)\n- Hépatomégalie stéatosique" },
        en: { question: "47. Clinical signs of Kwashiorkor (Severe Protein Malnutrition):", answer: "- Bilateral pitting edema (feet, legs, face)\n- Skin lesions: 'flaky-paint' dermatosis\n- Hair changes (sparse, brittle, reddish discoloration)\n- Fatty liver / Hepatomegaly" }
    },
    {
        id: 48, page: "95",
        km: { question: "៤៨. សញ្ញានៃជំងឺ Marasme (កង្វះអាហារូបត្ថម្ភធ្ងន់ធ្ងរប្រភេទថាមពល) ៖", answer: "• ស្គមស្គាំងខ្លាំង សល់តែស្បែករុំឆ្អឹង (Émaciation extrême)\n• បាត់បង់ជាតិខ្លាញ់ក្រោមស្បែក (បាត់ខ្លាញ់នៅគូទ និងទំពក់ថ្ពាល់ - Visage de vieillard)\n• គ្មានការហើម (Absence d'œdème) ឡើយ" },
        fr: { question: "48. Signes cliniques du Marasme :", answer: "• Émaciation intense, fonte musculaire et graisseuse globale\n• Visage de vieillard (disparition de la boule de Bichat)\n• Absence totale d'œdèmes" },
        en: { question: "48. Clinical signs of Marasmus (Severe Energy Malnutrition):", answer: "• Severe muscle wasting and loss of subcutaneous fat ('skin and bones')\n• Old man/wizened facial appearance\n• Complete absence of edema" }
    },
    {
        id: 49, page: "96",
        km: { question: "៤៩. គោលការណ៍សំខាន់ៗក្នុងការស្តារអាហារូបត្ថម្ភកុមារ (Prise en charge de la MAS) ៖", answer: "• កើតមានគ្រោះថ្នាក់ Syndrome de Renutrition (Refeeding Syndrome)\n• ប្រើប្រាស់ទឹកដោះគោរូបមន្តពិសេស **F-75** ដំណាក់កាលដំបូង និង **F-100** ឬ **ATPE/RUTF** ដំណាក់កាលស្តារឡើងវិញ\n• ការពារ និងព្យាបាល Hypoglycémie, Hypothermie, និងការឆ្លងរោគ" },
        fr: { question: "49. Principes de renutrition de la Malnutrition Aiguë Sévère (MAS) :", answer: "• Prévenir le syndrome de renutrition inappropriée\n• Phase initiale : lait **F-75** ; Phase de consolidation : lait **F-100** ou **ATPE**\n• Traiter/Prévenir l'hypoglycémie, l'hypothermie et les infections" },
        en: { question: "49. Principles of Severe Acute Malnutrition (SAM) management:", answer: "• Prevent Refeeding Syndrome\n• Initial stabilization phase: **F-75** formula; Rehabilitation phase: **F-100** or **RUTF**\n• Treat and prevent hypoglycemia, hypothermia, and systematic infections" }
    },
    {
        id: 50, page: "97",
        km: { question: "៥០. រោគសញ្ញាជំងឺរលាកថ្លើមដោយវីរុសប្រភេទ បេ ស្រួចស្រាវ (Hépatite B aiguë) ៖", answer: "• ដំណាក់កាលមុនលឿង ៖ ក្តៅខ្លួន, អស់កម្លាំង, ឈឺសន្លាក់, ចង់ក្អួត\n• ដំណាក់កាលលឿង ៖ ភ្នែកលឿង ស្បែកលឿង (Ictère conjunctival), ទឹកនោមពណ៌ក្រមៅ, លាមកពណ៌ស្លេក\n• Biologie : Transaminases (ALAT/ASAT) កើនឡើងខ្លាំង (> 10-20 ដងនៃធម្មតា)" },
        fr: { question: "50. Signes de l'hépatite B aiguë :", answer: "• Phase pré-ictérique : syndrome grippal, asthénie, arthralgies, nausées\n• Phase ictérique : ictère franc, urines foncées, selles décolorées\n• Biologie : élévation majeure des transaminases (ALAT > 10 fois la normale)" },
        en: { question: "50. Clinical features of Acute Hepatitis B:", answer: "• Pre-icteric phase: flu-like symptoms, fatigue, arthralgia, nausea\n• Icteric phase: overt jaundice, dark urine, pale stools\n• Labs: Marked elevation of transaminases (ALT/AST > 10x normal)" }
    },
    {
        id: 51, page: "98",
        km: { question: "៥១. ការធ្វើសេរ៉ូឡូជីដើម្បីបញ្ជាក់ជំងឺ Hepatitis B ៖", answer: "• **Ag HBs (+)** ៖ បញ្ជាក់ថាមានវត្តមានវីរុសក្នុងខ្លួន (Infection évolutive)\n• **Ac Anti-HBc IgM (+)** ៖ បញ្ជាក់ថាជាការឆ្លងស្រួចស្រាវ (Infection aiguë)\n• **Ac Anti-HBs (+)** តែមួយមុខ ៖ បញ្ជាក់ថាមានអង់ទីករការពាររាងកាយដោយសារការចាក់វ៉ាក់សាំង" },
        fr: { question: "51. Profils sérologiques de l'hépatite B :", answer: "• **Ag HBs (+)** : présence du virus dans l'organisme\n• **Ac anti-HBc IgM (+)** : marqueur d'une infection aiguë\n• **Ac anti-HBs (+)** isolé : immunité conférée par la vaccination" },
        en: { question: "51. Hepatitis B Serological Markers:", answer: "• **HBsAg (+)**: Indicates active HBV infection\n• **Anti-HBc IgM (+)**: Indicates acute infection\n• **Isolated Anti-HBs (+)**: Indicates immunity via vaccination" }
    },
    {
        id: 52, page: "99",
        km: { question: "៥២. ការពារការចម្លងវីរុសរលាកថ្លើម បេ ពីម្តាយទៅកូន (Prévention de la transmission mère-enfant du VHB) ៖", answer: "• ចាក់ **វ៉ាក់សាំងការពារ VHB** ដូសទី១ និង **Immunoglobulines anti-HBs (Ig anti-HBs)** ឱ្យទារកភ្លាមៗក្នុងរយ:ពេល **១២ ម៉ោងដំបូងក្រោយកើត**\n• បន្តចាក់វ៉ាក់សាំងការពារឱ្យគ្រប់ដូសតាមកាលវិភាគ" },
        fr: { question: "52. Prévention de la transmission mère-enfant du VHB :", answer: "• Administration combinée du **vaccin anti-HBV** et des **immunoglobulines anti-HBs** chez le nouveau-né dans les **12 premières heures de vie**\n• Poursuite du schéma vaccinal standard" },
        en: { question: "52. Prevention of Mother-to-Child Transmission of HBV:", answer: "• Administer both **HBV vaccine** and **Hepatitis B Immune Globulin (HBIG)** within **12 hours of birth**\n• Complete the remaining routine HBV immunization schedule" }
    },
    {
        id: 53, page: "100",
        km: { question: "៥៣. រោគសញ្ញាគ្លីនិកនៃជំងឺ Diabetes Type 1 (ទឹកនោមផ្អែមប្រភេទ១) លើកុមារ ៖", answer: "+ នោមច្រើន (Polyurie)\n+ ផឹកទឹកច្រើន (Polydipsie)\n+ ញ៉ាំច្រើនតែស្គមចុះ (Polyphagie avec maigrissement)\n+ អស់កម្លាំងខ្លាំង, នោមដាក់កន្លែងដេក (Énurésie secondaire)" },
        fr: { question: "53. Syndrome polyuro-polydipsique du 
                // === ភាគទី ៣ (សំណួរទី ៦១ ដល់ ៩៣) ===
    {
        id: 61, page: "111",
        km: { question: "៦១. រោគសញ្ញាគ្លីនិកនៃជំងឺ Draparnald/Parasitose - Ascaridiose (ព្រូនចង្កឹះ) ៖", answer: "• ដំណាក់កាលឆ្លងកាត់សួត (Syndrome de Löffler) ៖ ក្អកស្ងួត, មានកម្តៅស្ទើៗ, សំបូរ Eosinophiles ក្នុងឈាម\n• ដំណាក់កាលពោះវៀន ៖ ឈឺពោះជុំវិញផ្ចិត, ចង់ក្អួត, រាក ឬទល់លាមក\n• ផលវិបាក ៖ ស្ទះពោះវៀនដោយសារដុំព្រូន (Occlusion intestinale)" },
        fr: { question: "61. Signes cliniques de l'ascaridiose :", answer: "• Phase de migration larvaire (Syndrome de Löffler) : toux sèche, fièvre modérée, hyperéosinophilie\n• Phase d'état intestinale : douleurs abdominales péri-ombilicales, nausées, troubles du transit\n• Complications : occlusion intestinale aiguë par paquet d'ascaris" },
        en: { question: "61. Clinical features of Ascariasis:", answer: "• Lung migration phase (Löffler syndrome): dry cough, low-grade fever, marked eosinophilia\n• Intestinal phase: periumbilical abdominal pain, nausea, altered bowel habits\n• Complications: acute intestinal obstruction due to worm bolus" }
    },
    {
        id: 62, page: "112",
        km: { question: "៦២. ការព្យាបាលជំងឺ Ascaridiose (ព្រូនចង្កឹះ) ៖", answer: "• ប្រើថ្នាំទម្លាក់ព្រូន ៖ **Albendazole** (400 mg ដូសតែមួយ) ឬ **Mebendazole** (100 mg ថ្ងៃละ ២ដង រយៈពេល ៣ ថ្ងៃ)\n• ករណីស្ទះពោះវៀនដោយសារព្រូន ៖ សម្រាកពេទ្យ, ដាក់បំពង់បូមក្រពះ និងប្រើថ្នាំទម្លាក់ព្រូន ឬវះកាត់" },
        fr: { question: "62. Traitement de l'ascaridiose :", answer: "• Anthelminthiques : **Albendazole** (400 mg en prise unique) ou **Mébendazole** (100 mg 2 fois/jour pendant 3 jours)\n• En cas d'occlusion : sonde naso-gastrique, antispasmodiques et anthelminthiques ou chirurgie" },
        en: { question: "62. Treatment of Ascariasis:", answer: "• Anthelmintic therapy: **Albendazole** (400 mg single dose) or **Mebendazole** (100 mg bid for 3 days)\n• For intestinal obstruction: nasogastric decompression, anthelmintics, or surgery" }
    },
    {
        id: 63, page: "113",
        km: { question: "៦៣. សញ្ញាគ្លីនិកនៃជំងឺ Oxyurose (ព្រូនម្ជុល) ៖", answer: "• រមាស់ជុំវិញរន្ធគូទ (Prurit anal) ជាពិសេសនៅពេលយប់\n• កុមារគេងមិនលក់, យំអុករអុល, ញាប់ញ័រ\n• ពិនិត្យឃើញព្រូនតូចៗពណ៌សរវើកជុំវិញរន្ធគូទ ឬលើលាមក" },
        fr: { question: "63. Signes cliniques de l'oxyurose :", answer: "• Prurit anal à prédominance nocturne\n• Troubles du sommeil, irritabilité, cauchemars\n• Visualisation directe des petits vers blancs mobiles au niveau de la marge anale" },
        en: { question: "63. Clinical signs of Enterobiasis (Pinworm):", answer: "• Nocturnal anal itching (perianal pruritus)\n• Sleep disturbances, restlessness, irritability\n• Direct visualization of small white worms around the anus or in stool" }
    },
    {
        id: 64, page: "114",
        km: { question: "៦៤. ការធ្វើរោគវិនិច្ឆ័យ និងព្យាបាលជំងឺ Oxyurose ៖", answer: "• **Diagnostic** ៖ បិទស្កុតនៅរន្ធគូទពេលព្រឹកព្រលឹម (**Test à l'imprimé de Graham / Scotch-test**)\n• **Traitement** ៖ ប្រើ **Albendazole** ឬ **Flubendazole** ហើយ **ត្រូវលាប/ញ៉ាំឡើងវិញ ១៤ ថ្ងៃក្រោយ** (ដើម្បីកម្ចាត់ពងព្រូនដែលទើបញាស់)\n• ត្រូវព្យាបាលសមាជិកគ្រួសារទាំងអស់ក្នុងពេលតែមួយ" },
        fr: { question: "64. Diagnostic et traitement de l'oxyurose :", answer: "• **Diagnostic** : **Scotch-test de Graham** le matin avant la toilette\n• **Traitement** : **Albendazole** ou **Flubendazole** en prise unique, **à renouveler obligatoirement 15 jours plus tard**\n• Traitement systématique de toute la famille" },
        en: { question: "64. Diagnosis and treatment of Pinworm:", answer: "• **Diagnosis**: **Graham's Scotch tape test** performed in the early morning\n• **Treatment**: Single dose of **Albendazole** or **Mebendazole**, **repeated strictly after 2 weeks**\n• Treat all household family members simultaneously" }
    },
    {
        id: 65, page: "115",
        km: { question: "៦៥. សញ្ញាគ្លីនិកនៃជំងឺ Purpura de Henoch-Schönlein (Purpura Rhumatoïde) ៖", answer: "+ កន្ទួលឈាមលើស្បែក (Purpura vasculaire infiltré) នៅជើង និងគូទ\n+ ឈឺសន្លាក់ ឬហើមសន្លាក់ (Arthralgies / Arthrites)\n+ ឈឺពោះ (Douleurs abdominales) រកជុះឈាម\n+ ប៉ះពាល់តម្រងនោម (Atteinte rénale : Hématurie, Protéinurie)" },
        fr: { question: "65. Tétrade clinique du purpura rhumatoïde (Henoch-Schönlein) :", answer: "+ Purpura vasculaire déclive (membres inférieurs et fesses)\n+ Arthralgies/arthrites des grosses articulations\n+ Douleurs abdominales parfois compliquées d'IIA\n+ Atteinte rénale (hématurie, protéinurie)" },
        en: { question: "65. Clinical tetrad of IgA Vasculitis (Henoch-Schönlein Purpura):", answer: "+ Palpable purpura on lower extremities and buttocks\n+ Arthralgias / Arthritis of large joints\n+ Colicky abdominal pain\n+ Renal involvement (hematuria, proteinuria)" }
    },
    {
        id: 66, page: "116",
        km: { question: "៦៦. ការព្យាបាល និងតាមដានជំងឺ Purpura de Henoch-Schönlein ៖", answer: "• សម្រាក និងប្រើថ្នាំបំបាត់ការឈឺចាប់ (Paracetamol)\n• ប្រើ **Corticostéroïdes (Prednisolone)** ករណីឈឺពោះខ្លាំង ឬមានផលវិបាកលើតម្រងនោម\n• តាមដានទឹកនោម (Bandelette urinaire) និងសម្ពាធឈាមរៀងរាល់ខែ រយៈពេល ៦ ខែ ទៅ ១ ឆ្នាំ" },
        fr: { question: "66. Traitement et surveillance du purpura rhumatoïde :", answer: "• Repos et traitement antalgique simple\n• **Corticothérapie** si douleurs abdominales sévères ou atteinte rénale grave\n• Surveillance de la pression artérielle et de la bandelette urinaire pendant 6 à 12 mois" },
        en: { question: "66. Treatment and follow-up of IgA Vasculitis:", answer: "• Supportive care, rest, and analgesics\n• **Systemic Corticosteroids** for severe abdominal pain or renal failure\n• Monthly urine dipstick and blood pressure monitoring for 6 to 12 months" }
    },
    {
        id: 67, page: "117",
        km: { question: "៦៧. រោគសញ្ញាគ្លីនិកនៃជំងឺ Mucoviscidose (Cystic Fibrosis) ៖", answer: "- លើផ្លូវដង្ហើម ៖ ក្អករ៉ាំរ៉ៃ, លាកសួតរើឡើងវិញជាញឹកញាប់\n- លើប្រព័ន្ធរំលាយអាហារ ៖ ស្ទះពោះវៀនទារកកើតភ្លាម (Iléus méconial), រាកលាមកមានខ្លាញ់ (Stéatorrhée)\n- ថយចុះការលូតលាស់រាងកាយ (Retard staturo-pondéral)\n- ស្បែកមានរសជាតិប្រៃខ្លាំង" },
        fr: { question: "67. Signes cliniques de la mucoviscidose :", answer: "- Atteinte respiratoire : bronchopathies chroniques récidivantes, toux chronique\n- Atteinte digestive : iléus méconial à la naissance, diarrhée chronique graisseuse (stéatorrhée)\n- Retard staturo-pondéral\n- Sueur très salée" },
        en: { question: "67. Clinical manifestations of Cystic Fibrosis:", answer: "- Respiratory: Chronic productive cough, recurrent pneumonia\n- Digestive: Meconium ileus at birth, chronic fatty diarrhea (steatorrhea)\n- Failure to thrive / Poor growth\n- Excessively salty sweat" }
    },
    {
        id: 68, page: "118",
        km: { question: "៦៨. ការធ្វើរោគវិនិច្ឆ័យជំងឺ Mucoviscidose (Cystic Fibrosis) ៖", answer: "• **Test de la sueur (ការធ្វើតេស្តញើស)** ៖ ឃើញកម្រិត Clore (Cl-) កើនឡើងខ្ពស់ (**> 60 mmol/L**)\n• តេស្តហ្សែន (Analyse génétique) ៖ រកឃើញ mutation លើហ្សែន CFTR (ឧ. ΔF508)" },
        fr: { question: "68. Diagnostic de la mucoviscidose :", answer: "• **Test de la sueur** : dosage du chlorure dans la sueur **> 60 mmol/L** (examen de référence)\n• **Etude génétique** : mise en évidence de mutations du gène CFTR (ex: Delta F508)" },
        en: { question: "68. Diagnostic testing for Cystic Fibrosis:", answer: "• **Sweat Chloride Test**: Elevated chloride content (**> 60 mmol/L**) - Gold standard\n• **Genetic Testing**: Identification of CFTR gene mutations (e.g., F508del)" }
    },
    {
        id: 69, page: "119",
        km: { question: "៦៩. សញ្ញាគ្លីនិកនៃជំងឺ Hirschsprung (Megacolon congénital) ៖", answer: "+ យឺតយ៉ាវក្នុងការជុះលាមកដំបូង (Retard d'émission du méconium > 24-48h)\n+ ពោះវៀនធំឡើងប៉ោងខ្លាំង (Météorisme abdominal)\n+ ក្អួតចោត/ក្អួតពណ៌បៃតង (Vomissements bilieux)\n+ ការជុះលាមកបាញ់ចេញមកខ្លាំងពេលលូករន្ធគូទពិនិត្យ (Débâcle stercorale au TR)" },
        fr: { question: "69. Signes cliniques de la maladie de Hirschsprung :", answer: "+ Retard d'émission du méconium au-delà de 24-48 heures de vie\n+ Distension abdominale progressive\n+ Vomissements bilieux\n+ Évacuation explosive de gaz et de selles au toucher rectal" },
        en: { question: "69. Clinical signs of Hirschsprung Disease:", answer: "+ Delayed meconium passage (> 24-48 hours post-birth)\n+ Abdominal distension\n+ Bilious vomiting\n+ Explosive release of stool/gas upon Digital Rectal Examination (DRE)" }
    },
    {
        id: 70, page: "120",
        km: { question: "៧០. ការធ្វើរោគវិនិច្ឆ័យ និងព្យាបាលជំងឺ Hirschsprung ៖", answer: "• **Lavement baryté** ៖ បង្ហាញតំបន់ពោះវៀនត្បៀត (Zone d'achalasie) និងពោះវៀនផ្នែកខាងលើរីកធំ\n• **Biopsie rectale (ការកាត់សាច់គូទពិនិត្យ)** ៖ ជាវិធីសាស្ត្រច្បាស់លាស់ (Absence de cellules ganglionnaires)\n• **Chirurgie** ៖ ការវះកាត់កាត់ចោលផ្នែកពោះវៀនដែលគ្មានសរសៃប្រសាទ (Aganglionnaire)" },
        fr: { question: "70. Diagnostic et traitement de la maladie de Hirschsprung :", answer: "• **Lavement opacifié** : zone de transition entre le côlon d'amont dilaté et le rectum étroit\n• **Biopsie rectale** : confirme l'absence de cellules ganglionnaires parasympathiques (aganglionose)\n• **Chirurgie** : résection de la zone aganglionnaire" },
        en: { question: "70. Diagnosis and treatment of Hirschsprung Disease:", answer: "• **Contrast enema**: Transition zone between narrowed segment and dilated proximal colon\n• **Rectal Suction Biopsy**: Definitive diagnosis (absence of ganglion cells)\n• **Surgical resection** of the aganglionic intestinal segment" }
    },
    {
        id: 71, page: "121",
        km: { question: "៧១. រោគសញ្ញាគ្លីនិកនៃជំងឺ រលាកសន្លាក់កុមារ (Arthrite Juvénile Idiopathique - AJI) ៖", answer: "• ហើម, ក្តៅ, ឈឺ និងរឹងសន្លាក់ (រឹងសន្លាក់ពេលព្រឹក > 30 នាទី)\n• កើតមានលើសន្លាក់មួយ ឬច្រើន រយៈពេលយ៉ាងតិច ៦ សប្តាហ៍\n• អាចមានក្តៅខ្លួន, លេចកន្ទួលលើស្បែក និងលាកភ្នែក (Uvéite)" },
        fr: { question: "71. Signes cliniques de l'Arthrite Juvénile Idiopathique (AJI) :", answer: "• Gonflement, douleur, chaleur et raideur matinale des articulations (> 30 min)\n• Durée des symptômes > 6 semaines chez un enfant de moins de 16 ans\n• Formes systémiques : fièvre hectique, éruption cutanée fugace, adénopathies" },
        en: { question: "71. Clinical signs of Juvenile Idiopathic Arthritis (JIA):", answer: "• Joint swelling, pain, warmth, and morning stiffness (> 30 minutes)\n• Symptoms persisting for at least 6 weeks in children < 16 years\n• May include fever, transient rash, and uveitis" }
    },
    {
        id: 72, page: "122",
        km: { question: "៧២. ការព្យាបាលជំងឺ Arthrite Juvénile Idiopathique (AJI) ៖", answer: "• ថ្នាំបំបាត់ការលាកគ្មានស្តេរ៉ូអ៊ីត ៖ **AINS** (Ibuprofène, Naproxène)\n• ថ្នាំសម្រួលប្រព័ន្ធការពារ ៖ **Méthotrexate** ជម្រើសទី១ ករណីលាកច្រើនសន្លាក់\n• ថ្នាំជីវសាស្ត្រ (Biothérapies : Anti-TNF alpha) ករណីធ្ងន់ធ្ងរ\n• ការធ្វើចលនាស្តារសម្បទា (Kinésithérapie)" },
        fr: { question: "72. Traitement de l'AJI :", answer: "• Anti-inflammatoires non stéroïdiens (AINS) en 1ère intention\n• Traitement de fond : **Méthotrexate** en cas de polyarthrite\n• Biothérapies (Anti-TNF alpha : Étanercept) en cas d'échec\n• Kinésithérapie pour préserver la fonction articulaire" },
        en: { question: "72. Treatment of Juvenile Idiopathic Arthritis:", answer: "• Nonsteroidal Anti-inflammatory Drugs (NSAIDs) for symptom control\n• Disease-modifying antirheumatic drugs (DMARDs): **Methotrexate**\n• Biologic agents (Anti-TNF agents: Etanercept) for resistant cases\n• Physical therapy to maintain joint mobility" }
    },
    {
        id: 73, page: "123",
        km: { question: "៧៣. សញ្ញាគ្លីនិកនៃជំងឺ Bégaiement (ការនិយាយតាក់តែ) លើកុមារ ៖", answer: "• ការនិយាយត្រដិត, សំឡេងអូសបន្លាយ ឬទាក់ពាក្យ/ព្យាង្គ (Répétitions ou blocages)\n• មានការប្រឹងប្រែងសាច់ដុំមុខពេលនិយាយ\n• លេចឡើងច្បាស់នៅចន្លោះអាយុ ២ ដល់ ៥ ឆ្នាំ" },
        fr: { question: "73. Caractéristiques du bégaiement chez l'enfant :", answer: "• Répétitions involontaires de syllabes, prolongations de sons ou blocages\n• Tension musculaire associée du visage ou du cou lors de la parole\n• Début le plus souvent entre 2 et 5 ans" },
        en: { question: "73. Clinical features of Stuttering in children:", answer: "• Involuntary repetition of syllables, sound prolongations, or silent blocks\n• Facial or neck muscle strain during speech attempts\n• Onset typically between ages 2 and 5 years" }
    },
    {
        id: 74, page: "124",
        km: { question: "៧៤. ការថែទាំ និងព្យាបាលជំងឺ Bégaiement ៖", answer: "• ការហ្វឹកហាត់ភាសានិយាយជាមួយគ្រូជំនាញ (**Orthophonie**)\n• ជួយលើកទឹកចិត្តកុមារ, មិនត្រូវបង្ខំ ឬកាត់សម្តីពេលកុមារកំពុងនិយាយ\n• កាត់បន្ថយសម្ពាធ និងភាពតានតឹងក្នុងគ្រួសារ" },
        fr: { question: "74. Prise en charge du bégaiement :", answer: "• Rééducation orthophonique précoce\n• Guidance parentale : écouter sans interrompre, maintenir le contact visuel, ne pas presser l'enfant\n• Gestion de l'anxiété et du stress environnemental" },
        en: { question: "74. Management of Stuttering:", answer: "• Early Speech-Language Therapy (SLP / Orthophonie)\n• Parental guidance: maintain eye contact, do not interrupt or finish sentences\n• Reduce communicative stress in the child's environment" }
    },
    {
        id: 75, page: "125",
        km: { question: "៧៥. សញ្ញាគ្លីនិកនៃជំងឺ Rickets / Rachitisme (ជំងឺក្រិនឆ្អឹងខ្វះវីតាមីន ឌី) ៖", answer: "• ឆ្អឹងលលាដ៍ក្បាលទន់ (Craniotabès)\n• ពពកឆ្អឹងជំនីរីកធំដូចគ្រាប់អង្កាំ (Chapelet costal)\n• ឆ្អឹងដៃជើងកោង (Jambes en Varum ou Valgum)\n• ធ្មេញដុះយឺត, ពោះប៉ោងធំ" },
        fr: { question: "75. Signes cliniques du rachitisme carentiel :", answer: "• Craniotabès (ramollissement des os du crâne)\n• Chapelet costal (nourures épophysaires des côtes)\n• Déformations osseuses des membres (Genu varum ou valgum, bourrelets métaphysaires)\n• Retard d'éruption dentaire, hypotonie musculaire" },
        en: { question: "75. Clinical signs of Nutritional Rickets:", answer: "• Craniotabes (softening of skull bones)\n• Rachitic rosary (beading of costochondral junctions)\n• Leg deformities (Genu varum / bow-legs or Genu valgum / knock-knees)\n• Delayed tooth eruption and muscular hypotonia" }
    },
    {
        id: 76, page: "126",
        km: { question: "៧៦. ការព្យាបាល និងការពារជំងឺ Rachitisme ៖", answer: "• **Traitement** ៖ ផ្តល់ **Vitamine D3** (100,000 ទៅ 200,000 UI ដូសតែមួយ ឬចែកជាដូស) លាយជាមួយ **Calcium** តាមមាត់\n• **Prévention** ៖ ផ្តល់វីតាមីន ឌី ការពារជារៀងរាល់ថ្ងៃលើទារកទាំងអស់ (400 - 800 UI/ថ្ងៃ) ចាប់ពីកើតដល់អាយុ ២ ឆ្នាំ" },
        fr: { question: "76. Traitement et prévention du rachitisme :", answer: "• **Traitement** : **Vitamine D3** à forte dose (100 000 à 200 000 UI en prise unique) associée à un apport calcique\n• **Prévention** : Supplémentation quotidienne en Vitamine D (400 à 800 UI/j) chez tous les nourrissons jusqu'à 2 ans" },
        en: { question: "76. Treatment and prevention of Rickets:", answer: "• **Treatment**: Stoss therapy with **Vitamin D3** (100,000 - 200,000 IU) plus oral Calcium supplementation\n• **Prevention**: Daily Vitamin D supplementation (400-800 IU/day) for all infants until age 2" }
    },
    {
        id: 77, page: "127",
        km: { question: "៧៧. រោគសញ្ញាគ្លីនិកនៃជំងឺ Coeliaque (ជំងឺអាលែកហ្ស៊ីប្រូតែអ៊ីន Gluten) ៖", answer: "- ចាប់ផ្តើមលេចឡើងពេលកុមារញ៉ាំអាហារមាន Gluten (ម្សៅសាលី/ប៉័ង, ស្រូវសាលី)\n- រាករូសរ៉ាំរ៉ៃ លាមកមានក្លិនស្អុយខ្លាំង\n- ពោះប៉ោងធំ តែដៃជើងស្គមស្គាំង\n- ស្រកទម្ងន់ និងថយចុះការលូតលាស់ខ្លាំង" },
        fr: { question: "77. Signes cliniques de la maladie cœliaque :", answer: "- Début après l'introduction du gluten (farines, céréales)\n- Diarrhée chronique avec selles abondantes, luisantes et nauséabondes\n- Distension abdominale avec fonte musculaire des membres\n- Anorexie, cassure de la courbe staturo-pondérale" },
        en: { question: "77. Clinical manifestations of Celiac Disease:", answer: "- Onset following introduction of gluten-containing foods\n- Chronic diarrhea with pale, foul-smelling, bulky stools\n- Abdominal distention with wasted extremities\n- Anorexia and severe growth failure" }
    },
    {
        id: 78, page: "128",
        km: { question: "៧៨. ការធ្វើរោគវិនិច្ឆ័យ និងព្យាបាលជំងឺ Coeliaque ៖", answer: "• **Diagnostic** ៖ តេស្តឈាមរក **Ac anti-transglutaminase IgA** និងការឆ្លុះពោះវៀនអាតសាច់ (**Biopsie duodénale** ឃើញ Atrophie villositaire totale)\n• **Traitement** ៖ **Régime sans gluten (របបអាហារគ្មាន Gluten)** មួយជីវិត" },
        fr: { question: "78. Diagnostic et traitement de la maladie cœliaque :", answer: "• **Diagnostic** : Dosage des **Ac anti-transglutaminase IgA** et **biopsie duodénale** (atrophie villositaire)\n• **Traitement** : **Régime sans gluten** strict et à vie" },
        en: { question: "78. Diagnosis and management of Celiac Disease:", answer: "• **Diagnosis**: Serology (**IgA anti-tissue transglutaminase**) and **duodenal biopsy** showing villous atrophy\n• **Treatment**: Strict, lifelong **gluten-free diet**" }
    },
    {
        id: 79, page: "129",
        km: { question: "៧៩. សញ្ញាគ្លីនិកនៃជំងឺ Coqueluche (ក្អកមាន់) ដំណាក់កាល Quintes ៖", answer: "• ក្អកបន្តបន្ទាប់គ្នាយ៉ាងលឿនមិនទាន់ដកដង្ហើម (Quintes de toux asphyxiantes)\n• ពេលដកដង្ហើមចូលវិញមានសំឡេងដូចមាន់រោទ៍ (**Chant du coq**)\n• ក្អកឡើងស្វាយមុខ និងបញ្ចប់ដោយការក្អួតស្លេស្មស្អិត" },
        fr: { question: "79. Phase d me quintes de la coqueluche :", answer: "• Quintes de toux quinteuses, secousses expiratoires répétées sans inspiration intermédiaire\n• Reprise inspiratoire bruyante comparée au « **chant du coq** »\n• Cyanoante lors des accès, suivie d'une expectoration de glaires fluides et vomissements" },
        en: { question: "80. Paroxysmal stage of Pertussis (Whooping Cough):", answer: "• Paroxysms of rapid coughs followed by a high-pitched inspiratory '**whoop**'\n• Post-tussive cyanosis and vomiting of thick mucus\n• Symptoms worsen at night" }
    },
    {
        id: 80, page: "130",
        km: { question: "៨០. ការការពារ និងព្យាបាលជំងឺ Coqueluche ៖", answer: "• **Traitement** ៖ ប្រើថ្នាំផ្សះ **Azithromycine** ឬ **Erythromycine** (ដើម្បីកាត់បន្ថយការចម្លង)\n• **Prévention** ៖ ចាក់ **វ៉ាក់សាំងការពារ DTC (Diphtérie-Tétanos-Coqueluche)** តាមកាលវិភាគ" },
        fr: { question: "80. Traitement et prévention de la coqueluche :", answer: "• **Traitement** : Macrolides (**Azithromycine** ou Clarithromycine) pour réduire la contagiosité\n• **Prévention** : Vaccination obligatoire par le vaccin combiné (DTC) dès l'âge de 2 mois" },
        en: { question: "80. Treatment and prevention of Pertussis:", answer: "• **Treatment**: Macrolide antibiotics (**Azithromycin** or Erythromycin) to clear contagiousness\n• **Prevention**: **DTaP/Pentavalent vaccination** starting at 2 months of age" }
    },
    {
        id: 81, page: "131",
        km: { question: "៨១. សញ្ញាគ្លីនិកនៃជំងឺ Epiglottite aiguë (លាកគម្របបំពង់ខ្យល់) ៖", answer: "+ ជាករណីបន្ទាន់ខ្លាំង! ក្តៅខ្លួនខ្លាំងភ្លាមៗ (Fièvre élevée)\n+ ឈឺកខ្លាំង មិនអាចលេបទឹកមាត់បាន (Sialorrhée / ហូរទឹកមាត់)\n+ កុមារ ngồiទម្រង់ **Position du trépied** (អង្គុយទប់ដៃទៅមុខ ចែកចង្កា)\n+ ពិបាកដកដង្ហើម និងមានសំឡេង Stridor" },
        fr: { question: "81. Signes cliniques de l'épiglottite aiguë :", answer: "+ Urgence vitale absolue ! Fièvre élevée de survenue brutale\n+ Dysphagie majeure avec sialorrhée (l'enfant ne peut plus avaler sa salive)\n+ Position antalgique du « trépied » (penché en avant, bouche ouverte)\n+ Bradypnée inspiratoire avec stridor" },
        en: { question: "81. Clinical signs of Acute Epiglottitis:", answer: "+ Medical emergency! High sudden fever and toxic appearance\n+ Severe dysphagia with drooling (sialorrhea)\n+ Tripod positioning (sitting upright, leaning forward, chin out)\n+ Inspiratory stridor and respiratory distress" }
    },
    {
        id: 82, page: "132",
        km: { question: "៨២. ការព្យាបាលបន្ទាន់លើជំងឺ Epiglottite aiguë ៖", answer: "• **ហាមប្រើឈើពិនិត្យអណ្តាត (Abaisse-langue) មើលបំពង់កដាច់ខាត** (អាចបង្កឱ្យស្ទះផ្លូវដង្ហើមភ្លាមៗ)\n• រៀបចំសង្គ្រោះផ្លូវដង្ហើម (Intubation endotrachéale) ក្នុងបន្ទប់វះកាត់\n• ផ្តល់ថ្នាំផ្សះតាមសរសៃឈាម ៖ **Ceftriaxone 
