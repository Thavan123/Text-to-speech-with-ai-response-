const questionsData = [
    {
        id: 1, page: "78",
        km: { question: "១. រោគសញ្ញាគ្លីនិកនៃជំងឺលាកប្រព័ន្ធផ្លូវដង្ហើម Bronchiolite លើទារក ៖", answer: "• ចាប់ផ្តើមដោយ Rhinopharyngite និងក្តៅខ្លួនស្ទើៗ 1-2 ថ្ងៃ\n• បន្ទាប់មកមានក្អក, ដកដង្ហើមលឿន (Tachypnée), ពិបាកដកដង្ហើម (Freinage expiratoire)\n• ស្ដាប់សួតឃើញមាន : Freinage expiratoire, Sibilants និង Râles sous-crépitants" },
        fr: { question: "1. Signes cliniques de la bronchiolite aiguë du nourrisson :", answer: "• Début par une rhinopharyngite avec fièvre modérée pendant 1 à 2 jours\n• Apparition d'une toux, d'une polypnée et d'une gêne respiratoire expiratoire\n• Auscultation : freinage expiratoire, sibilants et râles sous-crépitants" },
        en: { question: "1. Clinical signs of acute bronchiolitis in infants:", answer: "• Starts with rhinopharyngitis and mild fever for 1-2 days\n• Followed by cough, tachypnea, and expiratory wheezing/distress\n• Auscultation: expiratory wheezes and fine crackles" }
    },
    {
        id: 2, page: "79",
        km: { question: "២. វីរុសដែលជាដើមហេតុចម្បងនៃជំងឺ Bronchiolite ៖", answer: "• **VRS (Virus Respiratory Syncytial)** : ស្មើនឹង ៧០-៨០% នៃករណីទាំងអស់\n• វីរុសផ្សេងទៀត : Rhinovirus, Metapneumovirus, Influenza" },
        fr: { question: "2. Étiologie principale de la bronchiolite :", answer: "• **VRS (Virus Respiratoire Syncytial)** : responsable de 70 à 80% des cas\n• Autres virus : Rhinovirus, Métapneumovirus humain, Influenza" },
        en: { question: "2. Main etiology of bronchiolitis:", answer: "• **RSV (Respiratory Syncytial Virus)**: accounts for 70-80% of cases\n• Other viruses: Rhinovirus, Metapneumovirus, Influenza" }
    },
    {
        id: 3, page: "80",
        km: { question: "៣. ការព្យាបាល និងថែទាំជំងឺ Bronchiolite ស្រាលនៅផ្ទះ ៖", answer: "• ជូតសមាតច្រមុះដោយសេរ៉ូមប្រៃ (Désobstruction Rhinopharyngée - DRP) មុនពេលបៅ\n• បំបៅបន្តិចៗតែច្រើនដង (Fractionnement des repas)\n• លើកក្បាលឱ្យខ្ពស់បន្តិចពេលដេក (Position proclive 30°)\n• ផ្តល់ថ្នាំបញ្ចុះកម្តៅ Paracetamol បើមានកម្តៅ > 38.5°C" },
        fr: { question: "3. Traitement ambulatoire de la bronchiolite :", answer: "• Désobstruction rhinopharyngée (DRP) au sérum physiologique avant les repas\n• Fractionnement des repas\n• Position proclive dorsale à 30°\n• Antipyrétiques (Paracétamol) si fièvre > 38,5°C" },
        en: { question: "3. Home management of mild bronchiolitis:", answer: "• Nasal saline suctioning/drops (DRP) before feedings\n• Smaller, more frequent feedings\n• Elevate head of bed to 30 degrees\n• Paracetamol for fever > 38.5°C" }
    },
    {
        id: 4, page: "81",
        km: { question: "៤. លក្ខណៈនៃជំងឺគ្រុនពោះវៀនជ្រៀតចូលប្រព័ន្ធប្រសាទ (Encephalopathie typhique) ៖", answer: "• មានការប្រែប្រួលស្មារតីខ្លាំង (Coma, Stupeur)\n• មានអាការៈប្រដេញ/ប្រشنជើងដៃ (Tremblements, Convulsions)\n• ជាសញ្ញាគ្រោះថ្នាក់ខ្លាំងនៃជំងឺ Fièvre typhoïde ត្រូវប្រញាប់ប្រើ Steroid (Dexamethasone)" },
        fr: { question: "4. Signes de l'encéphalopathie typhique :", answer: "• Troubles de la conscience sévères (coma, stupéfaction)\n• Tremblements, myoclonies ou convulsions\n• Forme grave nécessitant une corticothérapie associative (Dexaméthasone)" },
        en: { question: "4. Features of Typhoid Encephalopathy:", answer: "• Severe altered mental status (coma, stupor)\n• Tremors, myoclonus, or seizures\n• Severe complication requiring adjunctive Corticosteroids (Dexamethasone)" }
    },
    {
        id: 5, page: "82",
        km: { question: "៥. សញ្ញាគ្លីនិកនៃជំងឺ Appendicite aiguë (លាកខ្នែងពោះវៀនស្រួចស្រាវ) លើកុមារ ៖", answer: "• ឈឺពោះនៅតំបន់ហើមស្ដាំ (Fosse iliaque droite)\n• ក្តៅខ្លួនស្ទើៗ (38°C - 38.5°C)\n• ចង់ក្អួត ឬក្អួត\n• សញ្ញាពិនិត្យ ៖ ឈឺចាប់ខ្លាំងពេលសង្កត់ត្រង់ចំណុច McBurney និងសញ្ញា Défense musculaire" },
        fr: { question: "5. Signes cliniques de l'appendicite aiguë :", answer: "• Douleur abdominale localisée à la fosse iliaque droite (FID)\n• Fébrilécule (38°C - 38,5°C)\n• Nausées ou vomissements\n• Signes physiques : douleur provoquée au point de McBurney et défense en FID" },
        en: { question: "5. Clinical signs of Acute Appendicitis in children:", answer: "• Abdominal pain localized to the right iliac fossa\n• Low-grade fever (38°C - 38.5°C)\n• Nausea or vomiting\n• Physical exam: McBurney point tenderness and localized muscle defense" }
    },
    {
        id: 6, page: "83",
        km: { question: "៦. ការធ្វើរោគវិនិច្ឆ័យជំងឺ Appendicite ៖", answer: "• **NFS** ៖ ឃើញ Hyperleucocytose à Polynucléaires Neutrophiles\n• **CRP** ៖ កើនឡើង (Indicateur d'inflammation)\n• **Échographie abdominale** : ឃើញ appendice រីកធំ (> 6 mm) និងមិនអាចសង្កត់ឱ្យរាបបាន" },
        fr: { question: "6. Examens complémentaires pour l'appendicite :", answer: "• **NFS** : hyperleucocytose à polynucléaires neutrophiles (> 10 000/mm3)\n• **CRP** : augmentée\n• **Échographie abdominale** : appendice aperçu, incompressible, diamètre > 6 mm" },
        en: { question: "6. Diagnostic workup for Appendicitis:", answer: "• **CBC**: Leukocytosis with neutrophilia\n• **CRP**: Elevated\n• **Abdominal Ultrasound**: Non-compressible appendix with diameter > 6 mm" }
    },
    {
        id: 7, page: "84",
        km: { question: "៧. រោគសញ្ញាគ្លីនិកនៃជំងឺ Invagination Intestinale Aiguë (IIA) ៖", answer: "+ ឈឺពោះចុកខ្លាំងភ្លាមៗជាលក្ខណៈរលក (Crises douloureuses paroxystiques)\n+ ក្អួត (Vomissements)\n+ ជុះលាមកមានឈាមលាយសំបោរ (Selles sanglantes / Rectorragies)\n+ ស្ទាបប៉ះដុំពោះ (Boudin d'invagination)" },
        fr: { question: "7. Triade clinique de l'Invagination Intestinale Aiguë (IIA) :", answer: "+ Douleurs abdominales paroxystiques violentes\n+ Vomissements\n+ Émissions de selles sanglantes (rectorragies)\n+ Palpation d'un boudin d'invagination" },
        en: { question: "7. Clinical features of Acute Intussusception (IIA):", answer: "+ Sudden, severe paroxysmal abdominal pain\n+ Vommiting\n+ 'Red currant jelly' bloody stools\n+ Palpable sausage-shaped abdominal mass" }
    },
    {
        id: 8, page: "85",
        km: { question: "៨. ការព្យាបាលជំងឺ Invagination Intestinale Aiguë (IIA) ៖", answer: "• **Lavement hydrostatique ou pneumatique** ជាជម្រើសទី១ បើគ្មាន Peritonite\n• **Chirurgie (ការវះកាត់)** ករណីបូមពង្រីកមិនជោគជ័យ ឬមានសញ្ញាធ្លុះពោះវៀន" },
        fr: { question: "8. Traitement de l'invagination intestinale aiguë :", answer: "• **Réduction de l'invagination** par lavement pneumatique ou hydrostatique\n• **Réduction chirurgicale** en cas d'échec du lavement ou de signes de nécrose/perforation" },
        en: { question: "8. Treatment of Intussusception:", answer: "• **Non-surgical reduction** (Air or Hydrostatic enema) as first-line if no peritonitis\n• **Surgical reduction** if enema fails or perforation/peritonitis is present" }
    },
    {
        id: 9, page: "86",
        km: { question: "៩. លក្ខណៈគ្លីនិកនៃជំងឺ Asthma (ហឺតកុមារ) ៖", answer: "- ក្អកជារ៉ាំរ៉ៃ ឬរើឡើងវិញ (ជាពិសេសពេលយប់ ឬពេលធ្វើចលនា)\n- ដកដង្ហើមមានសំឡេងចៃៗ (Sifflement/Wheezing)\n- ពិបាកដកដង្ហើម (Dyspnée expiratoire)\n- មានប្រវត្តិ Atopie ក្នុងគ្រួសារ" },
        fr: { question: "9. Signes cliniques de l'asthme chez l'enfant :", answer: "- Toux récurrente (particulièrement la nuit ou à l'effort)\n- Wheezing (sifflement expiratoire)\n- Dyspnée expiratoire récurrente\n- Terrain atopique personnel ou familial" },
        en: { question: "9. Clinical signs of Asthma in children:", answer: "- Recurrent cough (especially at night or post-exercise)\n- Expiratory wheezing\n- Recurrent expiratory dyspnea\n- Personal or family history of atopy" }
    },
    {
        id: 10, page: "87",
        km: { question: "១០. ការព្យាបាលវិបត្តិហឺតស្រួចស្រាវ (Crise d'asthme aiguë) ៖", answer: "• ប្រើថ្នាំពង្រីកបំពង់ខ្យល់ខ្លី ៖ **Salbutamol (Ventoline)**\n• ផ្តល់អុកស៊ីសែន (O2) ប្រសិនបើ SpO2 < 92%\n• ផ្តល់ថ្នាំ Corticoïde តាមមាត់ (Prednisolone 1-2 mg/kg)" },
        fr: { question: "10. Traitement de la crise d'asthme aiguë :", answer: "• Bêta-2 mimétiques de courte durée d'action : **Salbutamol**\n• Oxygénothérapie si SpO2 < 92%\n• Corticothérapie par voie orale (Prednisolone) si crise modérée à sévère" },
        en: { question: "10. Treatment of Acute Asthma Exacerbation:", answer: "• Short-acting beta-2 agonist: **Salbutamol (Albuterol)**\n• Oxygen supplementation if SpO2 < 92%\n• Systemic Corticosteroids (oral Prednisolone)" }
    },
    {
        id: 11, page: "88",
        km: { question: "១១. រោគសញ្ញាគ្លីនិកនៃជំងឺដក់ទឹកក្នុងខួរក្បាល (Hydrocéphalie) លើទារក ៖", answer: "• ទំហំប្រអប់ក្បាលរីកធំខុសធម្មតា (Macrocrénie)\n• ថង់ពោះវៀនក្បាល/ថប់ប៉ោង (Fontanelle antérieure bombante)\n• សញ្ញាភ្នែកធ្លាក់ចុះក្រោម (Signe du soleil couchant)" },
        fr: { question: "11. Signes cliniques de l'hydrocéphalie chez le nourrisson :", answer: "• Augmentation rapide du périmètre crânien (Macrocrénie)\n• Fontanelle antérieure tendue et bombante\n• Regard en « soleil couchant »" },
        en: { question: "11. Clinical signs of Hydrocephalus in infants:", answer: "• Rapidly increasing head circumference (Macrocephaly)\n• Tense, bulging anterior fontanelle\n• 'Setting-sun' eye sign" }
    },
    {
        id: 12, page: "89",
        km: { question: "១២. ការធ្វើរោគវិនិច្ឆ័យ និងព្យាបាលជំងឺ Hydrocéphalie ៖", answer: "• **Diagnostic** ៖ Échographie transfontanellaire (ETF), TDM (CT-Scan) ឬ IRM\n• **Traitement** ៖ ការវះកាត់ដាក់បំពង់បង្ហូរទឹកខួរក្បាល (DVP) ឬ ETV" },
        fr: { question: "12. Diagnostic et traitement de l'hydrocéphalie :", answer: "• **Diagnostic** : Échographie transfontanellaire (ETF), TDMc ou IRM cérébrale\n• **Traitement** : Traitement chirurgical par Dérivation Ventriculo-Péritonéale (DVP)" },
        en: { question: "12. Diagnosis and Treatment of Hydrocephalus:", answer: "• **Diagnosis**: Cranial ultrasound (ETF), Brain CT, or MRI\n• **Treatment**: Surgical intervention via VP Shunt or ETV" }
    },
    {
        id: 13, page: "90",
        km: { question: "១៣. លក្ខណៈនៃជំងឺ Hypothyroïdie congénitale (ខ្សោយក្រពេញទីរ៉ូអ៊ីតពីកំណើត) ៖", answer: "- ទារកកើតមកលើសថ្ងៃ, ទំងន់ធ្ងន់\n- លឿងស្បែកអូសបន្លាយ (Ictère prolongé)\n- ទារកស្ងប់ស្ងាត់ពេក, សំឡេងយំស្អក, អណ្តាតធំ (Macroglossie)" },
        fr: { question: "13. Signes de l'hypothyroïdie congénitale chez le nouveau-né :", answer: "- Dépassement de terme, macrosomie\n- Ictère néonatal prolongé\n- Hypotonie, léthargie, cri rauque, macroglossie" },
        en: { question: "13. Signs of Congenital Hypothyroidism in newborns:", answer: "- Post-term birth, large birth weight\n- Prolonged neonatal jaundice\n- Hypotonia, lethargy, hoarse cry, macroglossia" }
    },
    {
        id: 14, page: "91",
        km: { question: "១៤. ការព្យាបាលជំងឺ Congenital Hypothyroidism ៖", answer: "• ត្រូវតែព្យាបាលឱ្យបានឆាប់បំផុត (មុនអាយុ ២ សប្តាហ៍)\n• ប្រើថ្នាំជំនួសអ័រម៉ូន ៖ **L-Thyroxine (Lévothyrox)** មួយជីវិត" },
        fr: { question: "14. Traitement de l'hypothyroïdie congénitale :", answer: "• Traitement précoce indispensable (avant 15 jours de vie)\n• Hormonothérapie substitutive : **L-Thyroxine (Lévothyrox)** à vie" },
        en: { question: "14. Treatment of Congenital Hypothyroidism:", answer: "• Early initiation of therapy (within 2 weeks of birth)\n• Lifelong hormone replacement therapy: **L-Thyroxine (Levothyroxine)**" }
    },
    {
        id: 15, page: "92",
        km: { question: "១៥. សញ្ញាគ្លីនិកនៃជំងឺ Convulsion Fébrile (ប្រشنដោយសារកម្តៅឡើងខ្ពស់) ៖", answer: "• កើតលើកុមារអាយុពី ៦ ខែ ដល់ ៥ ឆ្នាំ\n• មានការប្រشن ពេលកម្តៅឡើងលឿន (> 38.5°C)\n• រយៈពេលប្រشنខ្លី (< 15 នាទី)\n• គ្មានការឆ្លងមេរោគលើខួរក្បាលឡើយ" },
        fr: { question: "15. Caractéristiques des convulsions fébriles simples :", answer: "• Survenue entre 6 mois et 5 ans\n• Crise tonico-clonique généralisée lors d'une ascension thermique rapide (> 38,5°C)\n• Durée brève (< 15 minutes)" },
        en: { question: "15. Features of Simple Febrile Seizures:", answer: "• Occurs in children aged 6 months to 5 years\n• Generalized tonic-clonic seizure during rapid rise in temperature (> 38.5°C)\n• Duration under 15 minutes" }
    },
    {
        id: 16, page: "93",
        km: { question: "១៦. ការព្យាបាលបន្ទាន់ពេលកុមារកំពុងប្រشن (Prise en charge d'une crise convulsive) ៖", answer: "• ដាក់កុមារឱ្យដេកផ្អៀង (Position Latérale de Sécurité - PLS)\n• មិនត្រូវញាត់អ្វីចូលក្នុងមាត់ដាច់ខាត\n• ផ្តល់ថ្នាំ **Diazepam (Valium)** តាមគូទ (0.5 mg/kg) បើប្រشن > ៥ នាទី" },
        fr: { question: "16. Conduite à tenir pendant la crise convulsive :", answer: "• Mise en Position Latérale de Sécurité (PLS)\n• Ne rien introduire dans la bouche\n• Injection intra-rectale de **Diazépam (Valium)** : 0,5 mg/kg si la crise dure > 5 minutes" },
        en: { question: "16. Emergency management of active seizures:", answer: "• Place child in Recovery Position (PLS)\n• Do NOT place anything in the mouth\n• Administer Rectal **Diazepam (Valium)** (0.5 mg/kg) if seizure lasts > 5 minutes" }
    },
    {
        id: 17, page: "94",
        km: { question: "១៧. សញ្ញានៃជំងឺ Kwashiorkor (កង្វះអាហារូបត្ថម្ភធ្ងន់ធ្ងរប្រភេទប្រូតែអ៊ីន) ៖", answer: "- ហើម (Œdèmes) ចាប់ផ្តើមពីខ្នងជើង និងមុខ\n- ស្បែកមានស្នាមអុជខ្មៅប្រេះស្រកា\n- សក់ក្រហម ស្រួយ រជ្រុះងាយ\n- ថ្លើមរីកធំ (Hépatomégalie)" },
        fr: { question: "17. Signes cliniques du Kwashiorkor :", answer: "- Œdèmes bilatéraux prenant le godet (pieds, membres, visage)\n- Lesions cutanées : dermatose craquelée hyperpigmentée\n- Modifications des cheveux (secs, cassants, décolorés)" },
        en: { question: "17. Clinical signs of Kwashiorkor:", answer: "- Bilateral pitting edema (feet, legs, face)\n- Skin lesions: 'flaky-paint' dermatosis\n- Hair changes (sparse, brittle, reddish discoloration)" }
    },
    {
        id: 18, page: "95",
        km: { question: "១៨. សញ្ញានៃជំងឺ Marasme (កង្វះអាហារូបត្ថម្ភធ្ងន់ធ្ងរប្រភេទថាមពល) ៖", answer: "• ស្គមស្គាំងខ្លាំង សល់តែស្បែករុំឆ្អឹង (Émaciation extrême)\n• បាត់បង់ជាតិខ្លាញ់ក្រោមស្បែក (Visage de vieillard)\n• គ្មានការហើម (Absence d'œdème) ឡើយ" },
        fr: { question: "18. Signes cliniques du Marasme :", answer: "• Émaciation intense, fonte musculaire et graisseuse globale\n• Visage de vieillard\n• Absence totale d'œdèmes" },
        en: { question: "18. Clinical signs of Marasmus:", answer: "• Severe muscle wasting and loss of subcutaneous fat\n• Old man/wizened facial appearance\n• Complete absence of edema" }
    },
    {
        id: 19, page: "96",
        km: { question: "១៩. គោលការណ៍សំខាន់ៗក្នុងការស្តារអាហារូបត្ថម្ភកុមារ (Prise en charge de la MAS) ៖", answer: "• ការពារ Syndrome de Renutrition (Refeeding Syndrome)\n• ប្រើប្រាស់ទឹកដោះគោរូបមន្តពិសេស **F-75** និង **F-100** / **ATPE**\n• ការពារ និងព្យាបាល Hypoglycémie, Hypothermie" },
        fr: { question: "19. Principes de renutrition de la Malnutrition Aiguë Sévère (MAS) :", answer: "• Prévenir le syndrome de renutrition inappropriée\n• Phase initiale : lait **F-75** ; Phase de consolidation : **F-100** ou **ATPE**\n• Traiter/Prévenir l'hypoglycémie et l'hypothermie" },
        en: { question: "19. Principles of Severe Acute Malnutrition (SAM) management:", answer: "• Prevent Refeeding Syndrome\n• Initial phase: **F-75**; Rehabilitation phase: **F-100** or **RUTF**\n• Treat and prevent hypoglycemia and hypothermia" }
    },
    {
        id: 20, page: "97",
        km: { question: "២០. រោគសញ្ញាជំងឺរលាកថ្លើមដោយវីរុសប្រភេទ បេ ស្រួចស្រាវ (Hépatite B aiguë) ៖", answer: "• ដំណាក់កាលមុនលឿង ៖ ក្តៅខ្លួន, អស់កម្លាំង, ឈឺសន្លាក់\n• ដំណាក់កាលលឿង ៖ ភ្នែកលឿង ស្បែកលឿង, ទឹកនោមពណ៌ក្រមៅ\n• Biologie : Transaminases (ALAT/ASAT) កើនឡើងខ្លាំង" },
        fr: { question: "20. Signes de l'hépatite B aiguë :", answer: "• Phase pré-ictérique : syndrome grippal, asthénie, arthralgies\n• Phase ictérique : ictère franc, urines foncées, selles décolorées\n• Biologie : élévation majeure des transaminases (ALAT > 10 fois la normale)" },
        en: { question: "20. Clinical features of Acute Hepatitis B:", answer: "• Pre-icteric phase: flu-like symptoms, fatigue, arthralgia\n• Icteric phase: overt jaundice, dark urine, pale stools\n• Labs: Marked elevation of transaminases" }
    },
    {
        id: 21, page: "98",
        km: { question: "២១. ការធ្វើសេរ៉ូឡូជីដើម្បីបញ្ជាក់ជំងឺ Hepatitis B ៖", answer: "• **Ag HBs (+)** ៖ បញ្ជាក់ថាមានវត្តមានវីរុសក្នុងខ្លួន\n• **Ac Anti-HBc IgM (+)** ៖ បញ្ជាក់ថាជាការឆ្លងស្រួចស្រាវ\n• **Ac Anti-HBs (+)** តែមួយមុខ ៖ មានអង់ទីករដោយសារការចាក់វ៉ាក់សាំង" },
        fr: { question: "21. Profils sérologiques de l'hépatite B :", answer: "• **Ag HBs (+)** : présence du virus dans l'organisme\n• **Ac anti-HBc IgM (+)** : marqueur d'une infection aiguë\n• **Ac anti-HBs (+)** isolé : immunité conférée par la vaccination" },
        en: { question: "21. Hepatitis B Serological Markers:", answer: "• **HBsAg (+)**: Indicates active HBV infection\n• **Anti-HBc IgM (+)**: Indicates acute infection\n• **Isolated Anti-HBs (+)**: Indicates immunity via vaccination" }
    },
    {
        id: 22, page: "99",
        km: { question: "២២. ការពារការចម្លងវីរុសរលាកថ្លើម បេ ពីម្តាយទៅកូន ៖", answer: "• ចាក់ **វ៉ាក់សាំង VHB** និង **Ig anti-HBs** ឱ្យទារកក្នុងរយ:ពេល **១២ ម៉ោងដំបូងក្រោយកើត**\n• បន្តចាក់វ៉ាក់សាំងការពារឱ្យគ្រប់ដូស" },
        fr: { question: "22. Prévention de la transmission mère-enfant du VHB :", answer: "• Administration du **vaccin anti-HBV** et des **immunoglobulines anti-HBs** dans les **12 premières heures de vie**\n• Poursuite du schéma vaccinal standard" },
        en: { question: "22. Prevention of Mother-to-Child Transmission of HBV:", answer: "• Administer both **HBV vaccine** and **HBIG** within **12 hours of birth**\n• Complete routine immunization schedule" }
    },
    {
        id: 23, page: "100",
        km: { question: "២៣. រោគសញ្ញាគ្លីនិកនៃជំងឺ Diabetes Type 1 លើកុមារ ៖", answer: "+ នោមច្រើន (Polyurie)\n+ ផឹកទឹកច្រើន (Polydipsie)\n+ ញ៉ាំច្រើនតែស្គមចុះ (Polyphagie avec maigrissement)\n+ អស់កម្លាំងខ្លាំង, នោមដាក់កន្លែងដេក" },
        fr: { question: "23. Syndrome polyuro-polydipsique du diabète de type 1 :", answer: "+ Polyurie\n+ Polydipsie\n+ Polyphagie avec amaigrissement rapide\n+ Asthénie et énurésie secondaire" },
        en: { question: "23. Signs of Type 1 Diabetes Mellitus in children:", answer: "+ Polyuria\n+ Polydipsia\n+ Polyphagia with rapid weight loss\n+ Fatigue and secondary enuresis" }
    },
    {
        id: 24, page: "101",
        km: { question: "២៤. សញ្ញានៃជំងឺបង្កដោយផលវិបាក Acidocétose Diabétique (DKA) ៖", answer: "• ដកដង្ហើមញាប់ខ្លាំង (Respiration de Kussmaul)\n• ខ្យល់ដង្ហើមមានក្លិនអាសេតូន (Odeur acétonique)\n• ក្អួត, ឈឺពោះខ្លាំង\n• ស្មារតីស្រទន់ ឬសន្លប់" },
        fr: { question: "24. Signes de l'acidocétose diabétique (ACD) :", answer: "• Dyspnée de Kussmaul\n• Haleine à odeur d'acétonémie\n• Douleurs abdominales, vomissements\n• Troubles de la conscience" },
        en: { question: "24. Signs of Diabetic Ketoacidosis (DKA):", answer: "• Kussmaul breathing\n• Fruity/acetone breath odor\n• Abdominal pain, nausea, vomiting\n• Altered mental status progressing to coma" }
    },
    {
        id: 25, page: "102",
        km: { question: "២៥. ការព្យាបាលជំងឺ Diabetes Type 1 លើកុមារ ៖", answer: "• ការចាក់ **Insuline** ជំនួសមួយជីវិត\n• ការតាមដានកម្រិតស្ករក្នុងឈាម (Glycémie)\n• ការរៀបចំរបបអាហារសមស្រប" },
        fr: { question: "25. Traitement du diabète de type 1 :", answer: "• Insulinothérapie substitutive à vie\n• Auto-surveillance glycémique\n• Éducation thérapeutique et équilibre diététique" },
        en: { question: "25. Management of Type 1 Diabetes in children:", answer: "• Lifelong Insulin replacement therapy\n• Frequent blood glucose monitoring\n• Patient education and dietary planning" }
    },
    {
        id: 26, page: "103",
        km: { question: "២៦. សញ្ញាគ្លីនិកនៃជំងឺ Anémie Ferriprive (ស្លេកស្លាំងដោយខ្វះជាតិដែក) ៖", answer: "• ស្បែក និងភ្នាសរំអិលស្លេកស្កាំង\n• អស់កម្លាំង, លឿនហត់\n• ក្រចកដៃសំប៉ែត ឬខូង (Koilonychie)\n• ញ៉ាំរបស់ចម្លែកៗ (Pica : ញ៉ាំដី, អង្ករឆៅ)" },
        fr: { question: "26. Signes cliniques de l'anémie ferriprive :", answer: "• Pâleur cutanéo-muqueuse progressive\n• Asthénie, fatigabilité à l'effort\n• Ongles cassants, koïlonychie\n• Trouble du comportement alimentaire (Pica)" },
        en: { question: "26. Clinical features of Iron Deficiency Anemia:", answer: "• Pallor of skin and mucous membranes\n• Fatigue, exercise intolerance\n• Spoon-shaped nails (koilonychia)\n• Pica (eating non-food items)" }
    },
    {
        id: 27, page: "107",
        km: { question: "២៧. លក្ខណៈជីវគីមីឈាមនៃជំងឺ Anémie Ferriprive (NFS/Bilan martial) ៖", answer: "• **Hb** ថយចុះ (< 11 g/dL)\n• **VGM** ថយចុះ (< 80 fL : Anémie Microcytaire)\n• **Ferritine sérique** ថយចុះខ្លាំង" },
        fr: { question: "27. Bilan biologique de l'anémie ferriprive :", answer: "• **Hémoglobine** effondrée (< 11 g/dl)\n• **VGM** diminué (< 80 fl : microcytose)\n• **Ferritine sérique** effondrée" },
        en: { question: "27. Laboratory profile of Iron Deficiency Anemia:", answer: "• Low **Hemoglobin** (< 11 g/dL)\n• Low **MCV** (< 80 fL: Microcytic anemia)\n• Significantly low **Serum Ferritin**" }
    },
    {
        id: 28, page: "108",
        km: { question: "២៨. ការព្យាបាលជំងឺ Anémie Ferriprive ៖", answer: "• ផ្តល់ថ្នាំជាតិដែកតាមមាត់ ៖ **Sulfate ferreux** (3-6 mg/kg/day) រយៈពេល ៣ ទៅ ៦ ខែ\n• បន្ថែមអាហារសម្បូរជាតិដែក" },
        fr: { question: "28. Traitement de l'anémie ferriprive :", answer: "• Supplémentation martiale orale : **Sels de fer ferreux** pendant 3 à 6 mois\n• Diversification alimentaire adaptée" },
        en: { question: "28. Treatment of Iron Deficiency Anemia:", answer: "• Oral iron therapy: **Ferrous sulfate** for 3 to 6 months\n• Dietary modifications (iron-rich foods)" }
    },
    {
        id: 29, page: "109",
        km: { question: "២៩. សញ្ញាគ្លីនិកនៃជំងឺ Thalassemia ធ្ងន់ធ្ងរ (Bêta-Thalassémie majeure) ៖", answer: "• ស្លេកស្លាំងធ្ងន់ធ្ងរលេចឡើងចាប់ពីអាយុ ៦ ខែ\n• ថ្លើម និងអណ្តើករីកធំខ្លាំង (Splénomégalie)\n• ទម្រង់មុខផ្លាស់ប្តូរ (Faciès thalassémique)" },
        fr: { question: "29. Signes de la Bêta-thalassémie majeure :", answer: "• Anémie sévère progressive dès l'âge de 6 mois\n• Hépatosplénomégalie volumineuse\n• Deformations osseuses cranio-faciales" },
        en: { question: "29. Features of Beta-Thalassemia Major:", answer: "• Severe progressive anemia onset around 6 months\n• Massive hepatosplenomegaly\n• Characteristic craniofacial bone changes" }
    },
    {
        id: 30, page: "110",
        km: { question: "៣០. ការព្យាបាលជំងឺ Bêta-Thalassémie majeure ៖", answer: "• ចាក់បញ្ចូលគ្រាប់ឈាមក្រហម រៀងរាល់ ៣ ទៅ ៤ សប្តាហ៍ម្តង\n• ប្រើថ្នាំបណ្តេញជាតិដែកលើស (Chélateurs du fer)\n• អាចព្យាបាលជាដាច់ដោយសារ **Greffe de moelle osseuse**" },
        fr: { question: "30. Traitement de la Bêta-thalassémie majeure :", answer: "• Transfusions régulières de culots globulaires toutes les 3 à 4 semaines\n• Traitement chélateur du fer\n• Traitement curatif : **Allogreffe de moelle osseuse**" },
        en: { question: "30. Management of Beta-Thalassemia Major:", answer: "• Regular packed red blood cell transfusions\n• Iron chelation therapy\n• Definitive cure: **Bone marrow transplantation**" }
    },
    {
        id: 31, page: "111",
        km: { question: "៣១. សញ្ញាគ្លីនិកនៃជំងឺ Meningite Aiguë (រលាកភ្នាសខួរក្បាលស្រួចស្រាវ) លើកុមារ ៖", answer: "• ក្តៅខ្លួនខ្លាំងភ្លាមៗ\n• រឹងក (Raideur de la nuque)\n• ក្អួត, ឈឺក្បាលខ្លាំង, ក្តៅក្រហាយពន្លឺ (Photophobie)" },
        fr: { question: "31. Syndrome méningé de la méningite aiguë :", answer: "• Début brutal avec fièvre élevée\n• Raideur de la nuque, signe de Kernig et Brudzinski\n• Céphalées violentes, vomissements en jet, photophobie" },
        en: { question: "31. Clinical signs of Acute Meningitis in children:", answer: "• Sudden onset of high fever\n• Nuchal rigidity (stiff neck), Kernig/Brudzinski signs\n• Severe headache, projectile vomiting, photophobia" }
    },
    {
        id: 32, page: "112",
        km: { question: "៣២. ការប្រឡងពិនិត្យទឹកខួរក្បាល (Ponction Lombaire) ករណី រលាកភ្នាសខួរក្បាលដោយបាក់តេរី ៖", answer: "• ទឹកខួរក្បាលល្អក់ (LCR trouble/purulent)\n• កោសិកាឈាមសកើនឡើងខ្លាំង (Polynucleaires Neutrophiles)\n• Glycorachie ថយចុះ, Protéinorachie កើនឡើង" },
        fr: { question: "32. Analyse du LCR dans la méningite bactérienne :", answer: "• Aspect du LCR : trouble ou purulent\n• Hyperleucocytose à prédominance de polynucléaires neutrophiles\n• Hypoglycorachie, hyperprotéinorachie" },
        en: { question: "32. CSF analysis in Bacterial Meningitis:", answer: "• Cloudy or purulent CSF appearance\n• Predominance of neutrophilic leukocytosis\n• Decreased CSF glucose, elevated CSF protein" }
    },
    {
        id: 33, page: "113",
        km: { question: "៣៣. ការព្យាបាលបន្ទាន់ជំងឺ Méningite Bactérienne ៖", answer: "• ប្រើថ្នាំផ្សះ **Ceftriaxone** ឬ **Céfotaxime** ដូសខ្ពស់ភ្លាមៗតាមសរសៃឈាម\n• ប្រើ **Dexamethasone** មុន ឬជាមួយថ្នាំផ្សះដំបូង" },
        fr: { question: "33. Traitement antibiotique urgence de la méningite :", answer: "• Céphalo. de 3ème génération : **Ceftriaxone** ou **Céfotaxime** IV à forte dose\n• Dexaméthasone IV associée lors de la première injection" },
        en: { question: "33. Emergency treatment for Bacterial Meningitis:", answer: "• High-dose IV 3rd gen Cephalosporins: **Ceftriaxone** or **Cefotaxime**\n• Adjunctive IV **Dexamethasone** with/before first antibiotic dose" }
    },
    {
        id: 34, page: "114",
        km: { question: "៣៤. សញ្ញាគ្លីនិកនៃជំងឺ Syndrome Néphrotique (រោគសញ្ញាម្រាមតម្រងនោម) ៖", answer: "+ ហើមពាសពេញរាងកាយ (Œdèmes généralisés / Anasarque)\n+ ទឹកនោមមានប្រូតេអ៊ីនច្រើន (Protéinurie massive)\n+ ឈាមមានអាល់ប៊ុយមីនទាប (Hypoalbuminémie)" },
        fr: { question: "34. Triade du Syndrome Néphrotique :", answer: "+ Œdèmes mous, blancs, prenant le godet (visage, membres, anasarque)\n+ Protéinurie massive (> 50 mg/kg/j)\n+ Hypoalbuminémie (< 30 g/L)" },
        en: { question: "34. Clinical triad of Nephrotic Syndrome:", answer: "+ Generalized pitting edema (anasarca)\n+ Massive proteinuria\n+ Hypoalbuminemia" }
    },
    {
        id: 35, page: "115",
        km: { question: "៣៥. ការព្យាបាលជំងឺ Nephrotic Syndrome ប្រភេទដំបូងលើកុមារ ៖", answer: "• ប្រើថ្នាំ Corticoïde ៖ **Prednisolone** (2 mg/kg/day) រយៈពេល ៤ ទៅ ៦ សប្តាហ៍\n• ពិសារអាហារកាត់បន្ថយអំបិល (Régime hyposodé)" },
        fr: { question: "35. Traitement de première ligne du syndrome néphrotique :", answer: "• Corticothérapie orale : **Prednisolone** (60 mg/m²/j) pendant 4 à 6 semaines\n• Régime strict sans sel" },
        en: { question: "35. First-line management of Nephrotic Syndrome:", answer: "• Oral Corticosteroids: **Prednisolone** for 4 to 6 weeks\n• Strict low-sodium diet" }
    },
    {
        id: 36, page: "116",
        km: { question: "៣៦. សញ្ញាគ្លីនិកនៃជំងឺ Glomérulonéphrite Aiguë (GNA) ក្រោយឆ្លង Streptocoque ៖", answer: "• នោមមានឈាម (Hématurie macroscopique / ទឹកនោមពណ៌ត្នោត)\n• ឡើងសម្ពាធឈាម (Hypertension artérielle)\n• ហើមត្របកភ្នែក និងជើង (Œdèmes)" },
        fr: { question: "36. Signes de la Glomérulonéphrite Aiguë post-streptococcique :", answer: "• Hématurie macroscopique (urines bouillon de culture)\n• Hypertension artérielle (HTA)\n• Œdèmes modérés (visage et chevilles)" },
        en: { question: "36. Signs of Post-Streptococcal Glomerulonephritis (PSGN):", answer: "• Macroscopic hematuria (cola-colored urine)\n• Hypertension\n• Periorbital and lower extremity edema" }
    },
    {
        id: 37, page: "117",
        km: { question: "៣៧. ការពិនិត្យមន្ទីរពិសោធន៍សម្រាប់ជំងឺ PSGN / GNA ៖", answer: "• **ASLO** ឡើងខ្ពស់ (បញ្ជាក់ថាធ្លាប់ឆ្លង Streptocoque)\n• កម្រិត **C3 Fraction du complément** ថយចុះ\n• នោមមានគ្រាប់ឈាមក្រហម (Hématurie)" },
        fr: { question: "37. Bilan biologique de la GNA post-streptococcique :", answer: "• Élévation des anticorps **ASLO**\n• Baisse transitoire du **facteur C3 du complément**\n• Hématurie microscopique/macroscopique avec cylindres hématiques" },
        en: { question: "37. Diagnostic evaluation for PSGN:", answer: "• Elevated **ASLO** titers\n• Transient decrease in serum **C3 complement** level\n• Hematuria with dysmorphic RBCs or RBC casts" }
    },
    {
        id: 38, page: "118",
        km: { question: "៣៨. សញ្ញានៃជំងឺគ្រុនឈាម (Dengue) ដំណាក់កាលស្រួចស្រាវ ៖", answer: "• ក្តៅខ្លួនខ្លាំងភ្លាមៗ (39°C - 40°C) 2-7 ថ្ងៃ\n• ឈឺក្បាល, ឈឺក្រោយប្រអប់ភ្នែក, ឈឺសាច់ដុំ/ឆ្អឹង\n• មានស្នាមកន្ទួលក្រហមលើស្បែក (Éruption cutanée)" },
        fr: { question: "38. Phase fébrile de la Dengue :", answer: "• Fièvre élevée à début brutal (39-40°C) durant 2 à 7 jours\n• Céphalées rétro-orbitaires, myalgies, arthralgies\n• Érythème cutané ou exanthème" },
        en: { question: "38. Febrile phase of Dengue Fever:", answer: "• Sudden onset of high fever lasting 2 to 7 days\n• Retro-orbital headache, severe myalgia/arthralgia\n• Transient macular rash" },
    },
    {
        id: 39, page: "119",
        km: { question: "៣៩. សញ្ញាព្រមាននៃជំងឺគ្រុនឈាមធ្ងន់ធ្ងរ (Warning signs of severe Dengue) ៖", answer: "• ឈឺពោះខ្លាំង ឬចុចឈឺ\n• ក្អួតជារឿយៗ\n• មានហូរឈាមតាមភ្នាស (អញ្ចាញធ្មេញ, ច្រមុះ, ក្អួតឈាម)\n• លឹមៗ ឬម្នោះម្នេញ" },
        fr: { question: "39. Signes d'alerte de la Dengue sévère :", answer: "• Douleurs abdominales intenses ou provoquées\n• Vomissements persistants\n• Saignements des muqueuses\n• Léthargie ou agitation" },
        en: { question: "39. Warning signs of Severe Dengue:", answer: "• Severe abdominal pain or tenderness\n• Persistent vomiting\n• Mucosal bleeding\n• Lethargy or restlessness" }
    },
    {
        id: 40, page: "120",
        km: { question: "៤០. ការព្យាបាល និងថែទាំជំងឺគ្រុនឈាម (Dengue) ៖", answer: "• ផ្តល់ទឹកអូរ៉ាសូល (ORS) ឬបញ្ចូលសេរ៉ូមតាមតម្រូវការ\n• ប្រើតែ **Paracetamol** បញ្ចុះកម្តៅ (ហាមប្រើ Ibuprofen/Aspirin ដាច់ខាត)\n• តាមដាន Hematocrite (HCT) និងគ្រាប់ប្លាកែត" },
        fr: { question: "40. Prise en charge de la Dengue :", answer: "• Réhydratation orale (SRO) ou réhydratation IV selon la sévérité\n• Antipyrétique : **Paracétamol uniquement** (AINS et Aspirine contre-indiqués)\n• Surveillance stricte de l'hématocrite et des plaquettes" },
        en: { question: "40. Management of Dengue Fever:", answer: "• Adequate fluid replacement (ORS or IV fluids as needed)\n• Fever control: **Paracetamol ONLY** (Aspirin/NSAIDs strictly contraindicated)\n• Close monitoring of Hematocrit and Platelet count" }
            }    {
        id: 41, page: "121",
        km: { question: "៤១. សញ្ញាគ្លីនិកនៃជំងឺ Otite Moyenne Aiguë - OMA (រលាកត្រចៀកកណ្តាលស្រួចស្រាវ) ៖", answer: "• ឈឺត្រចៀក (Otalgie) ឬកុមារយកដៃទាញត្រចៀក\n• ក្តៅខ្លួន\n• ពិនិត្យ Otoscopie ឃើញ membrane tympanique ឡើងក្រហម ប៉ោង ឬមានខ្ទុះ" },
        fr: { question: "41. Signes cliniques de l'Otite Moyenne Aiguë (OMA) :", answer: "• Otalgie (ou pleurs inhabituels, enfant qui touche son oreille)\n• Fièvre\n• Otoscopie : tympan congestif, bombé ou perforé avec otorrhée" },
        en: { question: "41. Clinical signs of Acute Otitis Media (AOM):", answer: "• Ear pain (otalgia) or infant tugging at the ear\n• Fever\n• Otoscopy: bulging, erythematous tympanic membrane or otorrhea" }
    },
    {
        id: 42, page: "122",
        km: { question: "៤២. ការព្យាបាលជំងឺ Otite Moyenne Aiguë លើកុមារ ៖", answer: "• ថ្នាំបំបាត់ការឈឺចាប់ និងបញ្ចុះកម្តៅ (Paracetamol)\n• ថ្នាំផ្សះ **Amoxicillin** (80-90 mg/kg/day) ជាជម្រើសទី១ ករណី OMA Purulente" },
        fr: { question: "42. Traitement de l'Otite Moyenne Aiguë purulente :", answer: "• Antalgiques et antipyrétiques (Paracétamol)\n• Antibiothérapie de 1ère intention : **Amoxicilline** à forte dose (80-90 mg/kg/j)" },
        en: { question: "42. Treatment of Acute Otitis Media:", answer: "• Analgesics and antipyretics (Paracetamol)\n• First-line antibiotic: High-dose **Amoxicillin** (80-90 mg/kg/day)" }
    },
    {
        id: 43, page: "123",
        km: { question: "៤៣. លក្ខណៈនៃជំងឺ Laryngite Aiguë (រលាកបំពង់សំឡេងស្រួចស្រាវលើកុមារ) ៖", answer: "• ក្អកគ្រល : Toux rauque / aboyante\n• សំឡេងស្អក : Dysphonie\n• ស្រែកដកដង្ហើមចូល : Stridor inspiratoire" },
        fr: { question: "43. Triade clinique de la Laryngite Aiguë sous-glottique :", answer: "• Toux rauque ou aboyante\n• Dysphonie (voix enrouée)\n• Stridor inspiratoire avec bradypnée inspiratoire" },
        en: { question: "43. Clinical triad of Acute Croup (Laryngotracheitis):", answer: "• Barking cough\n• Hoarseness (dysphonia)\n• Inspiratory stridor" }
    },
    {
        id: 44, page: "124",
        km: { question: "៤៤. ការព្យាបាលជំងឺ Laryngite Aiguë ៖", answer: "• ផ្តល់ **Dexamethasone** តាមមាត់ ឬចាក់ (0.15 - 0.6 mg/kg) មួយដូស\n• បាញ់ **Adrénaline (Epinephrine) nebulized** ករណីមាន Stridor ពេលសម្រាក" },
        fr: { question: "44. Traitement de la laryngite aiguë :", answer: "• Corticothérapie : **Dexaméthasone** orale ou IV (dose unique)\n• Nébulisation d'**Adrénaline** en cas de stridor de repos ou gêne sévère" },
        en: { question: "44. Treatment of Acute Croup:", answer: "• Single dose of oral/parenteral **Dexamethasone**\n• Nebulized **Epinephrine** for stridor at rest or severe distress" }
    },
    {
        id: 45, page: "125",
        km: { question: "៤៥. សញ្ញាគ្លីនិកនៃជំងឺ Epiglottite Aiguë (រលាកគម្របបំពង់ខ្យល់ - អាសន្នរោគ) ៖", answer: "• ក្តៅខ្លួនខ្លាំង ស្រួចស្រាវ\n• លេបទឹកមាត់មិនរួច ហូរទឹកមាត់ (Sialorrhée)\n• អង្គុយទោរទៅមុខ (Position du trépied)\n• ហាមប្រើឈើពិនិត្យបំពង់ក (Abaisse-langue) ដាច់ខាត" },
        fr: { question: "45. Signes de l'Épiglottite Aiguë (Urgence vitale) :", answer: "• Fièvre élevée de survenue brutale\n• Dysphagie majeure avec sialorrhée (l'enfant bave)\n• Position assise du trépied (penché en avant)\n• **Contre-indication absolue de l'abaisse-langue**" },
        en: { question: "45. Signs of Acute Epiglottitis (Medical Emergency):", answer: "• High fever with sudden onset\n• Severe dysphagia and drooling\n• Tripod positioning\n• **Strictly avoid tongue depressor exam**" }
    },
    {
        id: 46, page: "126",
        km: { question: "៤៦. មេរោគដើមហេតុ និងការពាបាលជំងឺ Epiglottite Aiguë ៖", answer: "• ដើមហេតុ ៖ **Haemophilus influenzae type b (Hib)**\n• ព្យាបាល ៖ បើកផ្លូវដង្ហើមបន្ទាន់ (Intubation) + ថ្នាំផ្សះ **Ceftriaxone** IV" },
        fr: { question: "46. Étiologie et traitement de l'épiglottite :", answer: "• Agent causal principal : **Haemophilus influenzae de type b**\n• Prise en charge : Sécurisation des voies aériennes (Intubation) + **Ceftriaxone** IV" },
        en: { question: "46. Etiology and management of Epiglottitis:", answer: "• Main pathogen: **Haemophilus influenzae type b (Hib)**\n• Management: Airway protection (Endotracheal intubation) + IV **Ceftriaxone**" }
    },
    {
        id: 47, page: "127",
        km: { question: "៤៧. សញ្ញាគ្លីនិកនៃជំងឺ PNEUMONIE (រលាកសួត) លើកុមារ ៖", answer: "• ក្តៅខ្លួន + ក្អក\n• ដកដង្ហើមលឿន (Tachypnée)\n• សញ្ញាពិបាកដកដង្ហើម (Tirage intercostal, Battement des ailes du nez)\n• ស្ដាប់សួតឃើញមាន Râles crépitants" },
        fr: { question: "47. Signes cliniques d'une pneumonie aiguë :", answer: "• Fièvre élevée et toux\n• Polypnée (tachypnée)\n• Signes de lutte respiratoire (tirage, battement des ailes du nez)\n• Auscultation : rÂles crépitants localisés" },
        en: { question: "47. Clinical signs of Pneumonia in children:", answer: "• Fever and cough\n• Tachypnea\n• Respiratory distress (intercostal retractions, nasal flaring)\n• Auscultation: Focal crackles" }
    },
    {
        id: 48, page: "128",
        km: { question: "៤៨. ការកំណត់ដង្ហើមលឿន (Tachypnée) តាមអាយុរបស់ WHO ៖", answer: "• អាយុ < ២ ខែ ៖ ≥ ៦០ ដង/នាទី\n• អាយុ ២-១១ ខែ ៖ ≥ ៥០ ដង/នាទី\n• អាយុ ១២ ខែ - ៥ ឆ្នាំ ៖ ≥ ៤០ ដង/នាទី" },
        fr: { question: "48. Seuils de tachypnée selon l'OMS :", answer: "• < 2 mois : ≥ 60 respirations/min\n• 2 à 11 mois : ≥ 50 respirations/min\n• 12 mois à 5 ans : ≥ 40 respirations/min" },
        en: { question: "48. WHO thresholds for Tachypnea:", answer: "• < 2 months: ≥ 60 breaths/min\n• 2 to 11 months: ≥ 50 breaths/min\n• 12 months to 5 years: ≥ 40 breaths/min" }
    },
    {
        id: 49, page: "129",
        km: { question: "៤៩. ការព្យាបាលជំងឺ Pneumonie FRANCHE LOBAIRE AIGUË (PFLA) ៖", answer: "• មេរោគចម្បង ៖ **Streptococcus pneumoniae (Pneumocoque)**\n• ថ្នាំផ្សះជម្រើសទី១ ៖ **Amoxicillin** ដូសខ្ពស់ (80-100 mg/kg/day)" },
        fr: { question: "49. Traitement de la pneumonie franche lobaire aiguë (PFLA) :", answer: "• Étiologie principale : **Pneumocoque (Streptococcus pneumoniae)**\n• Antibiotique de 1ère intention : **Amoxicilline** à forte dose (80-100 mg/kg/j)" },
        en: { question: "49. Treatment of Acute Lobar Pneumonia:", answer: "• Primary pathogen: **Streptococcus pneumoniae**\n• First-line antibiotic: High-dose **Amoxicillin** (80-100 mg/kg/day)" }
    },
    {
        id: 50, page: "130",
        km: { question: "៥០. លក្ខណៈនៃជំងឺ Atypic Pneumonia (រលាកសួតមិនសមស្រប) ៖", answer: "• មេរោគ ៖ **Mycoplasma pneumoniae** ឬ Chlamydia pneumoniae\n• កើតលើកុមារអាយុ > ៥ ឆ្នាំ, ក្អកស្ងួតអូសបន្លាយ\n• ព្យាបាលដោយថ្នាំក្រុម **Macrolides** (Azithromycin, Clarithromycin)" },
        fr: { question: "50. Caractéristiques de la pneumonie atypique :", answer: "• Agent : **Mycoplasma pneumoniae**\n• Fréquent chez l'enfant de plus de 5 ans, toux sèche quinteuse\n• Traitement : **Macrolides** (Azithromycine)" },
        en: { question: "50. Features of Atypical Pneumonia:", answer: "• Pathogen: **Mycoplasma pneumoniae**\n• Common in children > 5 years, persistent dry cough\n• Treatment: **Macrolides** (Azithromycin)" }
    },
    {
        id: 51, page: "131",
        km: { question: "៥១. រោគសញ្ញាគ្លីនិកនៃជំងឺ Coqueluche (ក្អកមាន់) ៖", answer: "• ក្អកជាខ្សែៗជាប់ៗគ្នា (Quintes de toux)\n• ស្រែកដកដង្ហើមចូលដូចមាន់រងាវ (Chant du coq)\n• ក្អួតក្រោយពេលក្អក (Vomissements post-tussifs)" },
        fr: { question: "51. Signes cliniques de la Coqueluche :", answer: "• Quintes de toux paroxystiques épuisantes\n• Reprise inspiratoire en « chant du coq »\n• Vomissements post-tussifs" },
        en: { question: "51. Clinical signs of Pertussis (Whooping Cough):", answer: "• Paroxysmal coughing fits\n• High-pitched inspiratory 'whoop'\n• Post-tussive vomiting" }
    },
    {
        id: 52, page: "132",
        km: { question: "៥២. មេរោគ និងការព្យាបាលជំងឺ Coqueluche ៖", answer: "• មេរោគ ៖ **Bordetella pertussis**\n• ព្យាបាល ៖ ថ្នាំផ្សះក្រុម **Macrolides** (Azithromycin, Clarithromycin) ដើម្បីកាត់បន្ថយការចម្លង" },
        fr: { question: "52. Étiologie et traitement de la coqueluche :", answer: "• Agent responsable : **Bordetella pertussis**\n• Traitement : **Macrolides** (Clarithromycine/Azithromycine) pour réduire la contagiosité" },
        en: { question: "52. Etiology and treatment of Pertussis:", answer: "• Causative agent: **Bordetella pertussis**\n• Treatment: **Macrolides** (Azithromycin) to reduce contagiousness" }
    },
    {
        id: 53, page: "133",
        km: { question: "៥៣. សញ្ញាគ្លីនិកនៃជំងឺ Rougeole (ជ្រឹល) ៖", answer: "• ក្តៅខ្លួន, ក្អក, ហូរទឹកច្រមុះ, ក្រហមភ្នែក (Catarrhe oculonasal)\n• ស្នាមអុច **Koplik** ក្នុងមាត់ (Signe de Koplik)\n• កន្ទួលក្រហមចាប់ផ្តើមពីមុខ ចុះមកក្រោម (Éruption maculopapuleuse descendante)" },
        fr: { question: "53. Triade et signes de la Rougeole :", answer: "• Fièvre, catarrhe oculo-naso-respiratoire (toux, rhinite, conjonctivite)\n• **Taches de Koplik** sur la muqueuse buccale\n• Éruption maculo-papuleuse descendante (visage puis tronc et membres)" },
        en: { question: "53. Signs of Measles (Rubeola):", answer: "• Fever, 3 Cs (Cough, Coryza, Conjunctivitis)\n• **Koplik spots** on buccal mucosa\n• Maculopapular rash spreading cephalocaudally" }
    },
    {
        id: 54, page: "134",
        km: { question: "៥៤. ផលវិបាក និងការផ្តល់ថ្នាំបន្ថែមក្នុងជំងឺ Rougeole ៖", answer: "• ផលវិបាក ៖ Otite, Pneumonie, Encéphalite\n• ផ្តល់ **Vitamin A** ២ ដូស ដើម្បីកាត់បន្ថយអត្រាស្លាប់" },
        fr: { question: "54. Complications et supplémentation dans la rougeole :", answer: "• Complications : Otite, pneumopathie, encéphalite aiguë\n• Supplémentation en **Vitamine A** recommandée pour prévenir les complications graves" },
        en: { question: "54. Complications and supplementation in Measles:", answer: "• Complications: Otitis media, pneumonia, encephalitis\n• Mandatory **Vitamin A** supplementation to reduce mortality" }
    },
    {
        id: 55, page: "135",
        km: { question: "៥៥. សញ្ញាគ្លីនិកនៃជំងឺ Varicelle (អុតស្វាយ) ៖", answer: "• កន្ទួលពងទឹក (Vésicules en gouttes de rosée)\n• មានគ្រប់ដំណាក់កាលលើស្បែកតែមួយ (Macules, Vésicules, Croûtes)\n• រមាស់ខ្លាំង (Prurit intense)" },
        fr: { question: "55. Caractéristiques de l'éruption de la Varicelle :", answer: "• Vésicules « en gouttes de rosée » sur base érythémateuse\n• Coexistence de tous les stades éruptifs (macules, vésicules, croûtes)\n• Prurit intense" },
        en: { question: "55. Clinical features of Varicella (Chickenpox):", answer: "• 'Dewdrops on a rose petal' vesicular rash\n• Lesions in various stages of development simultaneously\n• Intense pruritus" }
    },
    {
        id: 56, page: "136",
        km: { question: "៥៦. ការព្យាបាល និងបម្រាមក្នុងជំងឺ Varicelle ៖", answer: "• អនាម័យស្បែក, ថ្នាំកាត់បន្ថយការរមាស់ (Antihistaminique)\n• **ហាមប្រើ Ibuprofen/Aspirin ដាច់ខាត** (ប្រយុទ្ធនឹង Surinfection bactérienne / Syndrome de Reye)" },
        fr: { question: "56. Prise en charge et contre-indications de la varicelle :", answer: "• Soins d'hygiène, antihistaminiques sédatifs si prurit\n• **Contre-indication stricte des AINS (Ibuprofène)** et de l'Aspirine" },
        en: { question: "56. Management and contraindications in Chickenpox:", answer: "• Skincare, oral antihistamines for itching\n• **Strictly avoid NSAIDs (Ibuprofen)** and Aspirin" }
    },
    {
        id: 57, page: "137",
        km: { question: "៥៧. សញ្ញាគ្លីនិកនៃជំងឺ Oreillons (ពពកជ្រូក) ៖", answer: "• រលាកហើមក្រពេញទឹកមាត់ត្រចៀក (Parotidite ourlienne) សងខាង ឬម្ខាង\n• ក្តៅខ្លួន, ឈឺចាប់ពេលទំពារ\n• ផលវិបាក ៖ Orchite (រលាកពងស្វាសលើកុមារពេញវ័យ), Méningite" },
        fr: { question: "57. Signes et complications des Oreillons :", answer: "• Parotidite ourlienne bilatérale ou unilatérale douloureuse\n• Fièvre modérée, gène à la mastication\n• Complications : Orchite post-pubertaire, méningite aseptique" },
        en: { question: "57. Signs and complications of Mumps:", answer: "• Painful parotid gland swelling (Parotitis)\n• Low-grade fever, discomfort with chewing\n• Complications: Post-pubertal orchitis, aseptic meningitis" }
    },
    {
        id: 58, page: "138",
        km: { question: "៥៨. សញ្ញាគ្លីនិកនៃជំងឺ Rubéole (ស្អូក) ៖", answer: "• កន្ទួលក្រហមស្រាលៗ (Éruption maculopapuleuse rose)\n• ហើមក្រពេញទឹកលឿងនៅក្រោយក និង occipital (Adénopathies occipitales)\n• គ្រោះថ្នាក់ខ្លាំងលើស្ត្រីមានផ្ទៃពោះ (Rubéole congénitale)" },
        fr: { question: "58. Features of Rubella (Rubéole) :", answer: "• Éruption maculo-papuleuse rosée transitoire\n• Adénopathies rétro-auriculaires et occipitales doucereuses\n• Risque majeur de malformations fœtales en cas de grossesse" },
        en: { question: "58. Clinical features of Rubella (German Measles):", answer: "• Pink maculopapular rash\n• Tender suboccipital and postauricular lymphadenopathy\n• High risk of congenital malformations in pregnancy" }
    },
    {
        id: 59, page: "139",
        km: { question: "៥៩. សញ្ញាគ្លីនិកនៃជំងឺ Scarlatine (គ្រុនក្រហម) ៖", answer: "• ក្តៅខ្លួន + រលាកបំពង់ក (Angine aiguë)\n• អណ្តាតក្រហមដូចផ្លែស្ត្រប៊ែរី (Langue framboisée)\n• កន្ទួលក្រហមស្បែកដូចក្រដាសខាត់ (Exanthème granité en papier de verre)" },
        fr: { question: "59. Signes cliniques de la Scarlatine :", answer: "• Angine aiguë érythémateuse avec fièvre\n• Desquamation de la langue (aspect « framboisé »)\n• Exanthème scarlatiniforme granité (« peau de chagrin »)" },
        en: { question: "59. Clinical signs of Scarlet Fever:", answer: "• Acute streptococcal pharyngitis with fever\n• 'Strawberry tongue'\n• Sandpaper-textured erythematous rash" }
    },
    {
        id: 60, page: "140",
        km: { question: "៦០. មេរោគ និងការព្យាបាលជំងឺ Scarlatine ៖", answer: "• មេរោគ ៖ **Streptocoque β-hémolytique du groupe A**\n• ព្យាបាល ៖ **Amoxicillin** តាមមាត់ រយៈពេល ៦ ថ្ងៃ" },
        fr: { question: "60. Étiologie et traitement de la scarlatine :", answer: "• Agent responsable : **Streptocoque β-hémolytique du groupe A**\n• Traitement : **Amoxicilline** orale pendant 6 jours" },
        en: { question: "60. Etiology and treatment of Scarlet Fever:", answer: "• Causative agent: **Group A Streptococcus (GAS)**\n• Treatment: Oral **Amoxicillin** for 6 days" }
        }    {
        id: 61, page: "141",
        km: { question: "៦១. សញ្ញាគ្លីនិកនៃជំងឺ Mégalérythème Épidémique (Erythema Infectiosum / ជំងឺទី៥) ៖", answer: "• ស្នាមក្រហមលើថ្ពាល់ទាំងសងខាងដូចត្រូវគេទះ (Joues souffletées / Slapped cheek)\n• កន្ទួលក្រហមលើដងខ្លួន និងអវយវៈ មានលក្ខណៈដូចចក/សំណាញ់ (Aspect réticulé / en dentelle)\n• បង្កដោយ **Parvovirus B19**" },
        fr: { question: "61. Caractéristiques du Mégalérythème Épidémique (Cinquième maladie) :", answer: "• Érythème du visage en « joues souffletées »\n• Éruption réticulée « en dentelle » sur le tronc et les membres\n• Agent responsable : **Parvovirus B19**" },
        en: { question: "61. Features of Erythema Infectiosum (Fifth Disease):", answer: "• 'Slapped cheek' rash appearance on the face\n• Reticulated / lace-like rash on trunk and extremities\n• Etiology: **Parvovirus B19**" }
    },
    {
        id: 62, page: "142",
        km: { question: "៦២. សញ្ញាគ្លីនិកនៃជំងឺ Exanthème Brusque (Roséole / ជំងឺទី៦) ៖", answer: "• ក្តៅខ្លួនខ្លាំង (39°C - 40°C) រយៈពេល ៣ ទៅ ៥ ថ្ងៃ ដោយគ្មានសញ្ញាអ្វីផ្សេង\n• ក្តៅខ្លួនស្រឡះភ្លាមៗ ទើបលេចចេញកន្ទួលក្រហមតូចៗ (Éruption maculopapuleuse) លើទ្រូង និងពោះ\n• បង្កដោយ **HHV-6 (Human Herpesvirus 6)**" },
        fr: { question: "62. Caractéristiques de la Roséole (Exanthème Brusque) :", answer: "• Fièvre élevée isolée (39-40°C) pendant 3 à 5 jours\n• Défervescence thermique thermique brutale suivie de l'apparition d'un exanthème maculo-papuleux\n• Agent responsable : **HHV-6**" },
        en: { question: "62. Clinical features of Roseola Infantum (Sixth Disease):", answer: "• High fever (39-40°C) for 3 to 5 days without localization\n• Abrupt defervescence immediately followed by a maculopapular rash on trunk\n• Etiology: **HHV-6**" }
    },
    {
        id: 63, page: "143",
        km: { question: "៦៣. សញ្ញាគ្លីនិកនៃជំងឺ Syndrome Pieds-Mains-Bouche (ជំងឺដៃ ជើង និងមាត់) ៖", answer: "• មានពងទឹកតូចៗ ឬដំបៅក្នុងមាត់ (Stomatite / Aphthy)\n• មានពងទឹកតូចៗលើបាតដៃ បាតជើង និងក้น\n• បង្កដោយវីរុស **Coxsackie A16** ឬ **Enterovirus 71 (EV71)**" },
        fr: { question: "63. Signes du Syndrome Pieds-Mains-Bouche :", answer: "• Vésicules et aphtes buccaux douloureux\n• Éruption vésiculeuse des paumes des mains, plantes des pieds et fesses\n• Agents principaux : **Coxsackievirus A16** et **Enterovirus 71**" },
        en: { question: "63. Clinical signs of Hand, Foot, and Mouth Disease (HFMD):", answer: "• Painful oral vesicles/ulcers\n• Vesicular eruption on palms, soles, and buttocks\n• Main causative agents: **Coxsackievirus A16** and **Enterovirus 71**" }
    }
];


             
