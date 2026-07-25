// ==========================================
// ១. ទិន្នន័យសំណួរ-ចម្លើយ ទាំង ៩៦ (Questions Data)
// ==========================================
const questionsData = [
  { id: 1, page: "1", km: { question: "១. តើសរីរាង្គណាខ្លះដែលស្ថិតនៅក្នុងប្រព័ន្ធប្រសាទកណ្ដាល (CNS)?", answer: "ប្រព័ន្ធប្រសាទកណ្ដាល (CNS) រួមមាន៖\n- ខួរក្បាល (Brain)\n- ខួរឆ្អឹងខ្នង (Spinal Cord)" }, fr: { question: "1. Quels sont les organes qui composent le système nerveux central (SNC) ?", answer: "Le système nerveux central (SNC) comprend :\n- L'encéphale (Cerveau)\n- La moelle épinière" } },
  { id: 2, page: "2", km: { question: "២. តើផ្នែកណាខ្លះនៃសួតដែលស្ថិតនៅក្នុង Respiratory Zone?", answer: "Respiratory Zone រួមមាន៖\n- Respiratory bronchioles\n- Alveolar ducts\n- Alveoli" }, fr: { question: "2. Quelles sont les parties du poumon situées dans la zone respiratoire ?", answer: "La zone respiratoire comprend :\n- Les bronchioles respiratoires\n- Les conduits alvéolaires\n- Les alvéoles pulmonaires" } },
  { id: 3, page: "3", km: { question: "៣. តើអង់ស៊ីមអ្វីដែលដើរតួនាទីសំខាន់ក្នុងការរំលាយអាហារក្នុងក្រពះ?", answer: "អង់ស៊ីមសំខាន់គឺ Pepsin (កាត់ប្រូតេអ៊ីន) និង Gastric Lipase" }, fr: { question: "3. Quelle est l'enzyme principale de la digestion gastrique ?", answer: "L'enzyme principale est la pepsine et la lipase gastrique." } },
  { id: 4, page: "4", km: { question: "៤. តើឆ្អឹងអ្វីខ្លះដែលបង្កើតបានជា Axial Skeleton?", answer: "Axial Skeleton រួមមាន៖\n- ឆ្អឹងលលាដ៍ក្បាល (Skull)\n- ឆ្អឹងខ្នង (Vertebral column)\n- ឆ្អឹងជំនីរ និងឆ្អឹងទ្រូង (Ribs & Sternum)" }, fr: { question: "4. Quels os composent le squelette axial ?", answer: "Le squelette axial comprend :\n- Le crâne\n- La colonne vertébrale\n- Les côtes et le sternum" } },
  { id: 5, page: "5", km: { question: "៥. តើសរសៃឈាមណាដែលនាំឈាមមានអុកស៊ីសែនចេញពីបេះដូងទៅកាន់រាងកាយ?", answer: "គឺ Aorta (អាអត)" }, fr: { question: "5. Quelle artère transporte le sang oxygéné du cœur vers le corps ?", answer: "C'est l'aorte." } },
  { id: 6, page: "6", km: { question: "៦. តើកោសិកាឈាមក្រហមមានអាយុកាលប្រហែលប៉ុន្មានថ្ងៃ?", answer: "ប្រហែល ១២០ ថ្ងៃ" }, fr: { question: "6. Quelle est la durée de vie moyenne d'un globule rouge ?", answer: "Environ 120 jours." } },
  { id: 7, page: "7", km: { question: "៧. តើតម្រងនោមមាននាទីចម្បងអ្វីខ្លះ?", answer: "- ត្រងកាកសំណល់ចេញពីឈាម\n- រក្សាលំនឹងទឹក និងអេឡិចត្រូលីត\n- ផលិតអ័រម៉ូន Erythropoietin" }, fr: { question: "7. Quelles sont les fonctions principales des reins ?", answer: "- Filtrer les déchets du sang\n- Maintenir l'équilibre hydrique et électrolytique\n- Sécréter l'érythropoïétine" } },
  { id: 8, page: "8", km: { question: "៨. តើថ្លើមផលិតសារធាតុអ្វីសម្រាប់ជួយរំលាយជាតិខ្លាញ់?", answer: "ទឹកប្រម៉ាត់ (Bile)" }, fr: { question: "8. Que produit le foie pour faciliter la digestion des lipides ?", answer: "La bile." } },
  { id: 9, page: "9", km: { question: "៩. តើលំពែង (Pancreas) បញ្ចេញអ័រម៉ូនអ្វីខ្លះដើម្បីគ្រប់គ្រងកម្រិតស្ករក្នុងឈាម?", answer: "- Insulin (បន្ធូរកម្រិតស្ករ)\n- Glucagon (បង្កើនកម្រិតស្ករ)" }, fr: { question: "9. Quelles hormones le pancréas sécrète-t-il pour réguler la glycémie ?", answer: "- L'insuline\n- Le glucagon" } },
  { id: 10, page: "10", km: { question: "១០. តើសាច់ដុំបេះដូងជាប្រភេទទម្រង់សាច់ដុំអ្វី?", answer: "សាច់ដុំស្វ័យប្រវត្តិ (Involuntary striated muscle)" }, fr: { question: "10. Quel type de muscle est le muscle cardiaque ?", answer: "Muscle strié involontaire." } },
  { id: 11, page: "11", km: { question: "១១. តើណឺរ៉ូន (Neuron) មានផ្នែកសំខាន់ៗអ្វីខ្លះ?", answer: "- Cell body (Soma)\n- Dendrites\n- Axon" }, fr: { question: "11. Quelles sont les parties principales d'un neurone ?", answer: "- Le corps cellulaire (Soma)\n- Les dendrites\n- L'axone" } },
  { id: 12, page: "12", km: { question: "១២. តើឆ្អឹងវែងជាងគេបំផុតក្នុងរាងកាយមនុស្សគឺឆ្អឹងអ្វី?", answer: "ឆ្អឹងផ្លូវ (Femur)" }, fr: { question: "12. Quel est l'os le plus long du corps humain ?", answer: "Le fémur." } },
  { id: 13, page: "13", km: { question: "១៣. តើសួតខាងស្តាំមានប៉ុន្មានកញ្ចប់ (Lobes)?", answer: "មាន ៣ កញ្ចប់ (Superior, Middle, Inferior lobes)" }, fr: { question: "13. Combien de lobes le poumon droit possède-t-il ?", answer: "3 lobes (supérieur, moyen, inférieur)." } },
  { id: 14, page: "14", km: { question: "១៤. តើសួតខាងឆ្វេងមានប៉ុន្មានកញ្ចប់ (Lobes)?", answer: "មាន ២ កញ្ចប់ (Superior និង Inferior lobes)" }, fr: { question: "14. Combien de lobes le poumon gauche possède-t-il ?", answer: "2 lobes (supérieur et inférieur)." } },
  { id: 15, page: "15", km: { question: "១៥. តើអ័រម៉ូន Thyroid Stimulating Hormone (TSH) ត្រូវបានផលិតចេញពីណា?", answer: "ក្រពេញតួ Pituitary Gland (Anterior pituitary)" }, fr: { question: "15. Où est produite la TSH ?", answer: "Par l'hypophyse antérieure." } },
  { id: 16, page: "16", km: { question: "១៦. តើលីមហ្វូស៊ីត T (T-cells) ធំធាត់ និងអភិវឌ្ឍនៅឯណា?", answer: "នៅក្នុងក្រពេញ Thymus" }, fr: { question: "16. Où mûrissent les lymphocytes T ?", answer: "Dans le thymus." } },
  { id: 17, page: "17", km: { question: "១៧. តើលីមហ្វូស៊ីត B (B-cells) ផលិតនៅឯណា?", answer: "នៅក្នុងខួរឆ្អឹង (Bone marrow)" }, fr: { question: "17. Où sont produits les lymphocytes B ?", answer: "Dans la moelle osseuse." } },
  { id: 18, page: "18", km: { question: "១៨. តើសម្ពាធឈាមធម្មតារបស់មនុស្សពេញវ័យគឺប៉ុន្មាន?", answer: "ប្រហែល 120/80 mmHg" }, fr: { question: "18. Quelle est la pression artérielle normale chez un adulte ?", answer: "Environ 120/80 mmHg." } },
  { id: 19, page: "19", km: { question: "១៩. តើលំពែងស្ថិតនៅផ្នែកណានៃពោះ?", answer: "ផ្នែកខាងលើខាងឆ្វេងនៃពោះ (Epigastrium / Left hypochondrium)" }, fr: { question: "19. Où se situe le pancréas ?", answer: "Dans la partie supérieure gauche de l'abdomen." } },
  { id: 20, page: "20", km: { question: "២០. តើស្រទាប់ក្រៅបង្អែកនៃស្បែកហៅថាអ្វី?", answer: "Epidermis (អេពីដែម)" }, fr: { question: "20. Comment s'appelle la couche superficielle de la peau ?", answer: "L'épiderme." } },
  { id: 21, page: "21", km: { question: "២១. តើតម្រងនោមមានកោសិកាមូលដ្ឋានគ្រឹះសម្រាប់ត្រងហៅថាអ្វី?", answer: "Nephron (ណេហ្វ្រុង)" }, fr: { question: "21. Quelle est l'unité structurelle et fonctionnelle du rein ?", answer: "Le néphron." } },
  { id: 22, page: "22", km: { question: "២២. តើសារធាតុ Neurotransmitter ណាដែលដើរតួយ៉ាងសំខាន់ក្នុងការកន្ត្រាក់សាច់ដុំ?", answer: "Acetylcholine (ACh)" }, fr: { question: "22. Quel neurotransmetteur intervient principalement dans la contraction musculaire ?", answer: "L'acétylcholine (ACh)." } },
  { id: 23, page: "23", km: { question: "២៣. តើប្រព័ន្ធបេះដូងមានថតចំនួនប៉ុន្មាន?", answer: "មាន ៤ ថត (Right Atrium, Left Atrium, Right Ventricle, Left Ventricle)" }, fr: { question: "23. Combien de cavités le cœur possède-t-il ?", answer: "4 cavités (2 atriums et 2 ventricules)." } },
  { id: 24, page: "24", km: { question: "២៤. តើសរសៃឈាមវ៉ែនណាដែលនាំឈាមមានអុកស៊ីសែនពីសួតមកកាន់បេះដូង?", answer: "Pulmonary Vein (សរសៃឈាមវ៉ែនសួត)" }, fr: { question: "24. Quelles veines transportent le sang oxygéné des poumons vers le cœur ?", answer: "Les veines pulmonaires." } },
  { id: 25, page: "25", km: { question: "២៥. តើអ័រម៉ូនអ្វីដែលផលិតដោយ Adrenal Cortex ដើម្បីប្រឆាំងការរលាក?", answer: "Cortisol (កវទីសូល)" }, fr: { question: "25. Quelle hormone anti-inflammatoire est sécrétée par le cortex surrénal ?", answer: "Le cortisol." } },
  { id: 26, page: "26", km: { question: "២៦. តើសរីរាង្គណាដែលជួយរក្សាលំនឹងរាងកាយ (Balance)?", answer: "ត្រចៀកខាងក្នុង (Inner ear / Semicircular canals)" }, fr: { question: "26. Quel organe aide à maintenir l'équilibre du corps ?", answer: "L'oreille interne (les canaux semi-circulaires)." } },
  { id: 27, page: "27", km: { question: "២៧. តើពោះវៀនតូចមានប៉ុន្មានផ្នែក?", answer: "មាន ៣ ផ្នែក៖\n- Duodenum\n- Jejunum\n- Ileum" }, fr: { question: "27. Quelles sont les trois parties de l'intestin grêle ?", answer: "- Le duodénum\n- Le jéjunum\n- L'iléon" } },
  { id: 28, page: "28", km: { question: "២៨. តើប្លាកែត (Platelets) មាននាទីសំខាន់អ្វីខ្លះ?", answer: "ជួយក្នុងការកកឈាម (Blood clotting)" }, fr: { question: "28. Quel est le rôle principal des plaquettes sanguines ?", answer: "La coagulation sanguine." } },
  { id: 29, page: "29", km: { question: "២៩. តើលលាដ៍ក្បាលការពារសរីរាង្គមួយណា?", answer: "ខួរក្បាល (Brain)" }, fr: { question: "29. Quel organe le crâne protège-t-il ?", answer: "L'encéphale (le cerveau)." } },
  { id: 30, page: "30", km: { question: "៣០. តើ Hemoglobin មាននៅក្នុងកោសិកាអ្វី?", answer: "កោសិកាឈាមក្រហម (Erythrocytes / Red Blood Cells)" }, fr: { question: "30. Dans quelles cellules trouve-t-on l'hémoglobine ?", answer: "Dans les globules rouges (érythrocytes)." } },
  { id: 31, page: "31", km: { question: "៣១. តើការដកដង្ហើមចេញចូលត្រូវបានគ្រប់គ្រងដោយផ្នែកណានៃខួរក្បាល?", answer: "Medulla Oblongata និង Pons" }, fr: { question: "31. Quelle partie du cerveau contrôle la respiration ?", answer: "Le bulbe rachidien (Medulla oblongata) et le pont." } },
  { id: 32, page: "32", km: { question: "៣២. តើឆ្អឹងខ្នងមនុស្សមានប៉ុន្មានកង់ (Vertebrae)?", answer: "មាន ៣៣ កង់ (៣៣ vertebrae)" }, fr: { question: "32. Combien de vertèbres compte la colonne vertébrale humaine ?", answer: "33 vertèbres." } },
  { id: 33, page: "33", km: { question: "៣៣. តើអ័រម៉ូន Oxytocin ត្រូវចេញពីក្រពេញណា?", answer: "Posterior Pituitary Gland" }, fr: { question: "33. Quelle glande libère l'ocytocine ?", answer: "L'hypophyse postérieure." } },
  { id: 34, page: "34", km: { question: "៣៤. តើស្រទាប់រុំសួតហៅថាអ្វី?", answer: "Pleura (ផ្លឺរ៉ា)" }, fr: { question: "34. Comment s'appelle la membrane qui entoure les poumons ?", answer: "La plèvre." } },
  { id: 35, page: "35", km: { question: "៣៥. តើស្រទាប់រុំបេះដូងហៅថាអ្វី?", answer: "Pericardium (ប៉េរីកាដ)" }, fr: { question: "35. Comment s'appelle la membrane qui entoure le cœur ?", answer: "Le péricarde." } },
  { id: 36, page: "36", km: { question: "៣៦. តើវីតាមីនណាដែលជួយក្នុងការស្រូបយកជាតិកាល់ស្យូម?", answer: "វីតាមីន D (Vitamin D)" }, fr: { question: "36. Quelle vitamine favorise l'absorption du calcium ?", answer: "La vitamine D." } },
  { id: 37, page: "37", km: { question: "៣៧. តើសារធាតុអង់ទីករ (Antibodies) ត្រូវបានផលិតដោយកោសិកាអ្វី?", answer: "Plasma cells (កើតចេញពី B-lymphocytes)" }, fr: { question: "37. Quelles cellules produisent les anticorps ?", answer: "Les plasmocytes (dérivés des lymphocytes B)." } },
  { id: 38, page: "38", km: { question: "៣៨. តើលំពែងមាន Exocrine Function សម្រាប់ធ្វើអ្វី?", answer: "ផលិត Pancreatic juice / អង់ស៊ីមសម្រាប់រំលាយអាហារ" }, fr: { question: "38. Quelle est la fonction exocrine du pancréas ?", answer: "Sécréter le jus pancréatique contenant des enzymes digestives." } },
  { id: 39, page: "39", km: { question: "៣៩. តើជាតិស្ករដែលរក្សាទុកក្នុងថ្លើម និងសាច់ដុំមានឈ្មោះអ្វី?", answer: "Glycogen (គ្លីកូសែន)" }, fr: { question: "39. Sous quelle forme le glucose est-il stocké dans le foie et les muscles ?", answer: "Sous forme de glycogène." } },
  { id: 40, page: "40", km: { question: "៤០. តើផ្នែកណានៃភ្នែកដែលទទួលពន្លឺ និងរូបភាព?", answer: "Retina (រ៉េទីន)" }, fr: { question: "40. Quelle partie de l'œil capte la lumière et les images ?", answer: "La rétine." } },
  { id: 41, page: "41", km: { question: "៤១. តើប្រភេទឈាម O អាចផ្តល់ឱ្យអ្នកជំងឺក្រុមឈាមណាខ្លះ?", answer: "អាចផ្តល់ឱ្យក្រុមឈាមទាំងអស់ (Universal Donor)" }, fr: { question: "41. À qui le groupe sanguin O peut-il donner du sang ?", answer: "À tous les groupes sanguins (Donneur universel)." } },
  { id: 42, page: "42", km: { question: "៤២. តើប្រភេទឈាម AB អាចទទួលឈាមពីក្រុមណាខ្លះ?", answer: "អាចទទួលពីក្រុមឈាមទាំងអស់ (Universal Recipient)" }, fr: { question: "42. De qui le groupe sanguin AB peut-il recevoir du sang ?", answer: "De tous les groupes sanguins (Récipendiaire universel)." } },
  { id: 43, page: "43", km: { question: "៤៣. តើអ័រម៉ូន Erythropoietin (EPO) មាននាទីធ្វើអ្វី?", answer: "ញ៉ាំងឱ្យខួរឆ្អឹងផលិតកោសិកាឈាមក្រហម" }, fr: { question: "43. Quel est le rôle de l'érythropoïétine (EPO) ?", answer: "Stimuler la production de globules rouges dans la moelle osseuse." } },
  { id: 44, page: "44", km: { question: "៤៤. តើសរសៃឈាមអាអត (Aorta) ចេញពីថតបេះដូងមួយណា?", answer: "Left Ventricle (ថតក្រោមឆ្វេង)" }, fr: { question: "44. De quelle cavité cardiaque part l'aorte ?", answer: "Du ventricule gauche." } },
  { id: 45, page: "45", km: { question: "៤៥. តើប្រព័ន្ធបេះដូងមានស្វ័យប្រវត្តិកម្មចម្បងផ្តើមចេញពីណា?", answer: "Sinoatrial node (SA node)" }, fr: { question: "45. Quel est le pacemaker naturel du cœur ?", answer: "Le nœud sinusal (Nœud SA)." } },
  { id: 46, page: "46", km: { question: "៤៦. តើឆ្អឹងជំនីរមនុស្សមានប៉ុន្មានគូ?", answer: "មាន ១២ គូ (២៤ ឆ្អឹង)" }, fr: { question: "46. Combien de paires de côtes le corps humain possède-t-il ?", answer: "12 paires de côtes." } },
  { id: 47, page: "47", km: { question: "៤៧. តើអ័រម៉ូន Calcitonin មាននាទីធ្វើអ្វី?", answer: "បន្ធូរកម្រិតកាល់ស្យូមក្នុងឈាម (រុញកាល់ស្យូមចូលឆ្អឹង)" }, fr: { question: "47. Quel est le rôle de la calcitonine ?", answer: "Diminuer le taux de calcium dans le sang." } },
  { id: 48, page: "48", km: { question: "៤៨. តើអ័រម៉ូន Parathyroid Hormone (PTH) មាននាទីធ្វើអ្វី?", answer: "បង្កើនកម្រិតកាល់ស្យូមក្នុងឈាម" }, fr: { question: "48. Quel est le rôle de la parathormone (PTH) ?", answer: "Augmenter le taux de calcium dans le sang." } },
  { id: 49, page: "49", km: { question: "៤៩. តើខួរក្បាលផ្នែក Cerebellum មាននាទីសំខាន់អ្វី?", answer: "គ្រប់គ្រងចលនាសាច់ដុំ និងរក្សាលំនឹងរាងកាយ" }, fr: { question: "49. Quel est le rôle principal du cervelet (Cerebellum) ?", answer: "Coordonner les mouvements et maintenir l'équilibre." } },
  { id: 50, page: "50", km: { question: "៥០. តើ Glomerulus ស្ថិតនៅក្នុងសរីរាង្គណា?", answer: "នៅក្នុងតម្រងនោម (Kidney)" }, fr: { question: "50. Dans quel organe se trouve le glomérule ?", answer: "Dans le rein." } },
  { id: 51, page: "51", km: { question: "៥១. តើអ័រម៉ូន ADH (Antidiuretic Hormone) ត្រូវផលិតនៅឯណា?", answer: "ផលិតនៅ Hypothalamus និងបញ្ចេញតាម Posterior Pituitary" }, fr: { question: "51. Où est produite l'hormone antidiurétique (ADH) ?", answer: "Produite par l'hypothalamus et libérée par l'hypophyse postérieure." } },
  { id: 52, page: "52", km: { question: "៥២. តើការផ្លាស់ប្តូរឧស្ម័ន (O2 និង CO2) ធ្វើឡើងនៅកន្លែងណាខ្លះ?", answer: "នៅក្នុង Alveoli (ថង់ខ្យល់សួត) និងកោសិកា" }, fr: { question: "52. Où se produisent les échanges gazeux (O2 et CO2) ?", answer: "Dans les alvéoles pulmonaires et les tissus." } },
  { id: 53, page: "53", km: { question: "៥៣. តើ Gastrin ជាអ្វី?", answer: "ជាអ័រម៉ូនដែលជំរុញឱ្យក្រពះបញ្ចេញអាស៊ីត (Gastric acid)" }, fr: { question: "53. Qu'est-ce que la gastrine ?", answer: "Une hormone qui stimule la sécrétion d'acide gastrique." } },
  { id: 54, page: "54", km: { question: "៥៤. តើ Pharynx ដើរតួនាទីក្នុងប្រព័ន្ធណាខ្លះ?", answer: "ប្រព័ន្ធរំលាយអាហារ និងប្រព័ន្ធដកដង្ហើម" }, fr: { question: "54. À quels systèmes le pharynx appartient-il ?", answer: "Aux systèmes digestif et respiratoire." } },
  { id: 55, page: "55", km: { question: "៥៥. តើដង្ហើមសួតកើតឡើងដោយសារចលនានៃសាច់ដុំអ្វី?", answer: "សាច់ដុំស្បៃខណ្ឌ (Diaphragm) និង Intercostal muscles" }, fr: { question: "55. Quels sont les muscles principaux de la respiration ?", answer: "Le diaphragme et les muscles intercostaux." } },
  { id: 56, page: "56", km: { question: "៥៦. តើកោសិកា Monocytes អភិវឌ្ឍទៅជាកោសិកាអ្វីពេលចូលទៅក្នុងលិកា?", answer: "Macrophages" }, fr: { question: "56. En quoi les monocytes se différencient-ils dans les tissus ?", answer: "En macrophages." } },
  { id: 57, page: "57", km: { question: "៥៧. តើសារធាតុ Surfactant នៅក្នុងសួតមាននាទីអ្វី?", answer: "កាត់បន្ថយកម្លាំងតង់ស្យុងផ្ទៃ (Surface tension) ការពារសួតកុំឱ្យស្វិត" }, fr: { question: "57. Quel est le rôle du surfactant pulmonaire ?", answer: "Réduire la tension superficielle pour empêcher l'affaissement des alvéoles." } },
  { id: 58, page: "58", km: { question: "៥៨. តើក្រពេញធំជាងគេក្នុងរាងកាយមនុស្សគឺអ្វី?", answer: "ថ្លើម (Liver)" }, fr: { question: "58. Quelle est la plus grande glande du corps humain ?", answer: "Le foie." } },
  { id: 59, page: "59", km: { question: "៥៩. តើបំពង់អាហារ (Esophagus) មានប្រវែងប្រហែលប៉ុន្មាន?", answer: "ប្រហែល ២៥ សង់ទីម៉ែត្រ" }, fr: { question: "59. Quelle est la longueur moyenne de l'œsophage ?", answer: "Environ 25 cm." } },
  { id: 60, page: "60", km: { question: "៦០. តើសារធាតុ Melatonin ត្រូវផលិតដោយក្រពេញណា?", answer: "Pineal gland (ក្រពេញប៉ីនេអាល់)" }, fr: { question: "60. Quelle glande sécrète la mélatonine ?", answer: "La glande pinéale." } },
  { id: 61, page: "61", km: { question: "៦១. តើក្រពេញ Thyroid ស្ថិតនៅត្រង់ផ្នែកណានៃរាងកាយ?", answer: "ស្ថិតនៅផ្នែកខាងមុខនៃក (Anterior neck)" }, fr: { question: "61. Où se situe la glande thyroïde ?", answer: "Dans la partie antérieure du cou." } },
  { id: 62, page: "62", km: { question: "៦២. តើអ័រម៉ូន Aldosterone មាននាទីធ្វើអ្វី?", answer: "ជួយតម្រូវកម្រិតសូដ្យូម និងប៉ូតាស្យូមក្នុងតម្រងនោម" }, fr: { question: "62. Quel est le rôle de l'aldostérone ?", answer: "Réguler le sodium et le potassium dans les reins." } },
  { id: 63, page: "63", km: { question: "៦៣. តើសរសៃឈាម Coronary Arteries មាននាទីធ្វើអ្វី?", answer: "ផ្គត់ផ្គង់ឈាម និងអុកស៊ីសែនទៅកាន់សាច់ដុំបេះដូង" }, fr: { question: "63. Quel est le rôle des artères coronaires ?", answer: "Apporter du sang et de l'oxygène au muscle cardiaque." } },
  { id: 64, page: "64", km: { question: "៦៤. តើស្រទាប់បេះដូងខាងក្នុងគេបង្អស់ហៅថាអ្វី?", answer: "Endocardium (អង់ដូកាដ)" }, fr: { question: "64. Comment s'appelle la couche interne du cœur ?", answer: "L'endocarde." } },
  { id: 65, page: "65", km: { question: "៦៥. តើស្រទាប់សាច់ដុំបេះដូងកណ្តាលហៅថាអ្វី?", answer: "Myocardium (មីយ៉ូកាដ)" }, fr: { question: "65. Comment s'appelle la couche musculaire du cœur ?", answer: "Le myocarde." } },
  { id: 66, page: "66", km: { question: "៦៦. តើសារធាតុ Hemoglobin មានផ្ទុកធាតុរ៉ែអ្វីសំខាន់?", answer: "ធាតុដែក (Iron / Fe)" }, fr: { question: "66. Quel minéral est essentiel à l'hémoglobine ?", answer: "Le fer." } },
  { id: 67, page: "67", km: { question: "៦៧. តើលំពែងបញ្ចេញអ័រម៉ូនចូលទៅក្នុងប្រព័ន្ធណា?", answer: "ប្រព័ន្ធអង់ដូគ្រីន (Endocrine system)" }, fr: { question: "67. Dans quel système le pancréas déverse-t-il ses hormones ?", answer: "Dans le système endocrinien." } },
  { id: 68, page: "68", km: { question: "៦៨. តើពោះវៀនធំមាននាទីចម្បងអ្វី?", answer: "ស្រូបយកទឹក និងអេឡិចត្រូលីត រួចបង្កើតលាមក" }, fr: { question: "68. Quelle est la fonction principale du gros intestin ?", answer: "Absorber l'eau et former les selles." } },
  { id: 69, page: "69", km: { question: "៦៩. តើបំពង់ Ureter មាននាទីធ្វើអ្វី?", answer: "ដឹកនាំទឹកនោមពីតម្រងនោមទៅកាន់ប្លោកនោម" }, fr: { question: "69. Quel est le rôle de l'uretère ?", answer: "Transporter l'urine des reins vers la vessie." } },
  { id: 70, page: "70", km: { question: "៧០. តើបំពង់ Urethra មាននាទីធ្វើអ្វី?", answer: "បញ្ចេញទឹកនោមពីប្លោកនោមទៅខាងក្រៅ" }, fr: { question: "70. Quel est le rôle de l'urètre ?", answer: "Évacuer l'urine de la vessie vers l'extérieur." } },
  { id: 71, page: "71", km: { question: "៧១. តើកោសិកា العصبي (Neuron) ភ្ជាប់គ្នាត្រង់កន្លែងណា?", answer: "Synapse (ស៊ីណាប់)" }, fr: { question: "71. Comment s'appelle la zone de jonction entre deux neurones ?", answer: "La synapse." } },
  { id: 72, page: "72", km: { question: "៧២. តើស្រទាប់បស្រោបខួរក្បាលហៅថាអ្វី?", answer: "Meninges (មេណាំង)" }, fr: { question: "72. Comment s'appellent les membranes qui enveloppent le cerveau ?", answer: "Les méninges." } },
  { id: 73, page: "73", km: { question: "៧៣. តើ Meninges មានប៉ុន្មានស្រទាប់?", answer: "មាន ៣ ស្រទាប់ (Dura mater, Arachnoid mater, Pia mater)" }, fr: { question: "73. Combien de couches composent les méninges ?", answer: "3 couches (Dure-mère, Arachnoïde, Pie-mère)." } },
  { id: 74, page: "74", km: { question: "៧៤. តើទឹកខួរក្បាល និងខួរឆ្អឹងខ្នងហៅថាអ្វី?", answer: "Cerebrospinal Fluid (CSF)" }, fr: { question: "74. Comment s'appelle le liquide cérébro-spinal ?", answer: "Le liquide céphalo-rachidien (LCR)." } },
  { id: 75, page: "75", km: { question: "៧៥. តើសាច់ដុំណាដែលបំបែកទ្រូង និងពោះ?", answer: "Diaphragm (សាច់ដុំស្បៃខណ្ឌ)" }, fr: { question: "75. Quel muscle sépare la cavité thoracique de la cavité abdominale ?", answer: "Le diaphragme." } },
  { id: 76, page: "76", km: { question: "៧៦. តើកោសិកា osteoblasts មាននាទីធ្វើអ្វី?", answer: "បង្កើត និងកសាងលិកាឆ្អឹង" }, fr: { question: "76. Quel est le rôle des ostéoblastes ?", answer: "Former le tissu osseux." } },
  { id: 77, page: "77", km: { question: "៧៧. តើកោសិកា osteoclasts មាននាទីធ្វើអ្វី?", answer: "រំលាយ និងបំបែកលិកាឆ្អឹងចាស់" }, fr: { question: "77. Quel est le rôle des ostéoclastes ?", answer: "Résorber le tissu osseux." } },
  { id: 78, page: "78", km: { question: "៧៨. តើសរសៃពួរ Tendon ភ្ជាប់អ្វីនិងអ្វី?", answer: "ភ្ជាប់សាច់ដុំទៅនឹងឆ្អឹង" }, fr: { question: "78. Que relie un tendon ?", answer: "Un muscle à un os." } },
  { id: 79, page: "79", km: { question: "៧៩. តើសរសៃពួរ Ligament ភ្ជាប់អ្វីនិងអ្វី?", answer: "ភ្ជាប់ឆ្អឹងទៅនឹងឆ្អឹង" }, fr: { question: "79. Que relie un ligament ?", answer: "Un os à un autre os." } },
  { id: 80, page: "80", km: { question: "៨០. តើអ័រម៉ូន Insulin ផលិតដោយកោសិកាអ្វីនៃលំពែង?", answer: "Beta cells (Islets of Langerhans)" }, fr: { question: "80. Quelles cellules pancréatiques sécrètent l'insuline ?", answer: "Les cellules bêta (des îlots de Langerhans)." } },
  { id: 81, page: "81", km: { question: "៨១. តើអ័រម៉ូន Glucagon ផលិតដោយកោសិកាអ្វីនៃលំពែង?", answer: "Alpha cells (Islets of Langerhans)" }, fr: { question: "81. Quelles cellules pancréatiques sécrètent le glucagon ?", answer: "Les cellules alpha (des îlots de Langerhans)." } },
  { id: 82, page: "82", km: { question: "៨២. តើអ័រម៉ូន Growth Hormone (GH) ផលិតចេញពីណា?", answer: "Anterior Pituitary Gland" }, fr: { question: "82. Où est produite l'hormone de croissance (GH) ?", answer: "Par l'hypophyse antérieure." } },
  { id: 83, page: "83", km: { question: "៨៣. តើតំបន់ដកដង្ហើម Conducting Zone មាននាទីអ្វីខ្លះ?", answer: "ដឹកនាំខ្យល់ កំដៅខ្យល់ ផ្តល់សំណើម និងត្រងធូលី" }, fr: { question: "83. Quels sont les rôles de la zone de conduction respiratoire ?", answer: "Acheminer, réchauffer, humidifier et filtrer l'air." } },
  { id: 84, page: "84", km: { question: "៨៤. តើបំពង់ Trachea (បំពង់ខ្យល់) មានទម្រង់ជារូបរាងអ្វី?", answer: "ជាបំពង់មានកងឆ្អឹងខ្ចីរាងអក្សរ C (C-shaped cartilage rings)" }, fr: { question: "84. Quelle est la structure de la trachée ?", answer: "Un tube renforcé par des anneaux cartilagineux en forme de C." } },
  { id: 85, page: "85", km: { question: "៨៥. តើសន្ទះបេះដូងរវាង Right Atrium និង Right Ventricle មានឈ្មោះអ្វី?", answer: "Tricuspid Valve (សន្ទះធ្មេញបី)" }, fr: { question: "85. Quelle valve se trouve entre l'atrium droit et le ventricule droit ?", answer: "La valve tricuspide." } },
  { id: 86, page: "86", km: { question: "៨៦. តើសន្ទះបេះដូងរវាង Left Atrium និង Left Ventricle មានឈ្មោះអ្វី?", answer: "Bicuspid Valve (or Mitral Valve)" }, fr: { question: "86. Quelle valve se trouve entre l'atrium gauche et le ventricule gauche ?", answer: "La valve bicuspide (ou mitrale)." } },
  { id: 87, page: "87", km: { question: "៨៧. តើសរសៃឈាមតូចៗបង្អែកដែលផ្លាស់ប្តូរសារធាតុរវាងឈាម និងកោសិកាហៅថាអ្វី?", answer: "Capillaries (សរសៃឈាមបណ្តាញកៃ)" }, fr: { question: "87. Comment s'appellent les plus petits vaisseaux sanguins ?", answer: "Les capillaires." } },
  { id: 88, page: "88", km: { question: "៨៨. តើក្រពេញ Adrenal Gland ស្ថិតនៅទីណា?", answer: "ស្ថិតនៅពីលើតម្រងនោមទាំងពីរ (Superior to the kidneys)" }, fr: { question: "88. Où se situent les glandes surrénales ?", answer: "Au-dessus de chaque rein." } },
  { id: 89, page: "89", km: { question: "៨៩. តើអ័រម៉ូន Epinephrine (Adrenaline) ត្រូវបញ្ចេញពីផ្នែកណានៃ Adrenal Gland?", answer: "Adrenal Medulla" }, fr: { question: "89. Quelle partie de la surrénale sécrète l'adrénaline ?", answer: "La médullosurrénale." } },
  { id: 90, page: "90", km: { question: "៩០. តើអាំងស៊ុយលីនមានឥទ្ធិពលយ៉ាងណាចំពោះកម្រិតស្ករ?", answer: "បន្ធូរកម្រិតស្ករក្នុងឈាម (Hypoglycemic effect)" }, fr: { question: "90. Quel est l'effet de l'insuline sur la glycémie ?", answer: "Diminuer le taux de sucre dans le sang (effet hypoglycémiant)." } },
  { id: 91, page: "91", km: { question: "៩១. តើកោសិកាឈាមស White Blood Cells (Leukocytes) មាននាទីចម្បងអ្វី?", answer: "ការពាររាងកាយប្រឆាំងនឹងមេរោគ និងជំងឺ" }, fr: { question: "91. Quel est le rôle principal des globules blancs ?", answer: "Défendre l'organisme contre les infections." } },
  { id: 92, page: "92", km: { question: "៩២. តើស្រទាប់ស្បែក Dermis មានផ្ទុកអ្វីខ្លះ?", answer: "សរសៃឈាម សរសៃប្រសាទ ក្រពេញញើស និងឬសសក់" }, fr: { question: "92. Que contient le derme ?", answer: "Des vaisseaux sanguins, des nerfs, des glandes sudoripares et des follicules pileux." } },
  { id: 93, page: "93", km: { question: "៩៣. តើអ័រម៉ូន Prolactin មាននាទីធ្វើអ្វី?", answer: "ជំរុញការផលិតទឹកដោះ" }, fr: { question: "93. Quel est le rôle de la prolactine ?", answer: "Stimuler la production de lait maternel." } },
  { id: 94, page: "94", km: { question: "៩៤. តើ Gallbladder (ប្លោកប្រម៉ាត់) មាននាទីអ្វី?", answer: "រក្សាទុក និងកំហាប់ទឹកប្រម៉ាត់ (Stores & concentrates bile)" }, fr: { question: "94. Quel est le rôle de la vésicule biliaire ?", answer: "Stocker et concentrer la bile." } },
  { id: 95, page: "95", km: { question: "៩៥. តើកោសិកាបំផ្លាញមេរោគ Phagocytes រួមមានកោសិកាអ្វីខ្លះ?", answer: "Neutrophils និង Macrophages" }, fr: { question: "95. Quelles sont les principales cellules phagocytaires ?", answer: "Les neutrophiles et les macrophages." } },
  { id: 96, page: "96", km: { question: "៩៦. តើសរីរាង្គណាខ្លះជា Filter សំខាន់ក្នុងប្រព័ន្ធ lymphatic system?", answer: "Lymph nodes (កូនកណ្តុរ)" }, fr: { question: "96. Quels sont les filtres principaux du système lymphatique ?", answer: "Les ganglions lymphatiques." } }
];

// ==========================================
// ២. កូដបញ្ជាដំណើរការ (Logic Script)
// ==========================================
let currentIndex = 0;
let currentLang = 'km';

function loadQuestion() {
  const q = questionsData[currentIndex];
  if (!q) return;

  const qNumElem = document.getElementById('question-number');
  const pNumElem = document.getElementById('page-number');
  const qTextElem = document.getElementById('question-text');
  const aTextElem = document.getElementById('answer-text');

  if (qNumElem) qNumElem.innerText = `សំណួរទី ${currentIndex + 1} / ${questionsData.length}`;
  if (pNumElem) pNumElem.innerText = `ទំព័រ ${q.page}`;

  const content = q[currentLang] || q['km'];
  if (qTextElem) qTextElem.innerText = content.question;
  if (aTextElem) aTextElem.innerHTML = content.answer.replace(/\n/g, '<br>');
}

function setLanguage(lang) {
  currentLang = lang;
  loadQuestion();
}

function nextQuestion() {
  if (currentIndex < questionsData.length - 1) {
    currentIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuestion();

  const btnKm = document.getElementById('btn-km');
  const btnFr = document.getElementById('btn-fr');
  const btnEn = document.getElementById('btn-en');
  const btnNext = document.getElementById('btn-next');
  const btnPrev = document.getElementById('btn-prev');

  if (btnKm) btnKm.addEventListener('click', () => setLanguage('km'));
  if (btnFr) btnFr.addEventListener('click', () => setLanguage('fr'));
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnNext) btnNext.addEventListener('click', nextQuestion);
  if (btnPrev) btnPrev.addEventListener('click', prevQuestion);
});
