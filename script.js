// =========================================================================
// قاعدة بيانات الأسئلة المعتمدة (120 سؤال اختيار من متعدد MCQ)
// مقسمة إلى: سهل (easy) - متوسط (medium) - صعب (hard)
// =========================================================================
const quizDatabase = {
    // 1. Diagnosis of Pregnancy (40 MCQs)
    lec1: {
        title: "1. Diagnosis of Pregnancy",
        questions: [
            // EASY (14)
            {
                level: "easy",
                q: "What is the normal duration of human gestation from fertilization of the ovum until the estimated date of delivery?",
                options: ["About 24 weeks", "About 32 weeks", "About 40 weeks", "About 44 weeks"],
                answer: 2
            },
            {
                level: "easy",
                q: "Preterm pregnancy is defined as a pregnancy that ends before how many completed weeks of gestation?",
                options: ["35 completed weeks", "37 completed weeks", "40 completed weeks", "42 completed weeks"],
                answer: 1
            },
            {
                level: "easy",
                q: "Postterm pregnancy is defined as a pregnancy that extends after how many completed weeks of gestation?",
                options: ["38 completed weeks", "40 completed weeks", "41 completed weeks", "42 completed weeks"],
                answer: 3
            },
            {
                level: "easy",
                q: "Which term refers to a woman who has never been pregnant?",
                options: ["Nullipara", "Primigravida", "Nulligravida", "Multipara"],
                answer: 2
            },
            {
                level: "easy",
                q: "Which term refers to a woman who is pregnant for the first time?",
                options: ["Primigravida", "Multigravida", "Nulligravida", "Primipara"],
                answer: 0
            },
            {
                level: "easy",
                q: "Which term describes a woman who is in at least her second pregnancy?",
                options: ["Nulligravida", "Primigravida", "Multigravida", "Nullipara"],
                answer: 2
            },
            {
                level: "easy",
                q: "Which category of pregnancy signs can determine a pregnancy with 100% accuracy?",
                options: ["Presumptive (subjective) signs", "Probable (objective) signs", "Positive (diagnostic) signs", "Hormonal symptoms"],
                answer: 2
            },
            {
                level: "easy",
                q: "What is the earliest subjective (presumptive) symptom of pregnancy in a healthy woman with regular menstrual cycles?",
                options: ["Quickening", "Amenorrhea", "Morning sickness", "Frequency of micturition"],
                answer: 1
            },
            {
                level: "easy",
                q: "Why does amenorrhea occur as a presumptive symptom during pregnancy?",
                options: [
                    "Due to high levels of estrogen and progesterone produced during pregnancy",
                    "Due to a sudden drop in maternal thyroid hormones",
                    "Due to mechanical obstruction of the cervix",
                    "Due to increased maternal blood pressure"
                ],
                answer: 0
            },
            {
                level: "easy",
                q: "What is the dark line that runs from the umbilicus to the pubes during pregnancy called?",
                options: ["Chloasma", "Striae gravidarum", "Linea nigra", "Secondary areola"],
                answer: 2
            },
            {
                level: "easy",
                q: "Laboratory pregnancy tests are based on detecting which hormone in maternal urine or blood?",
                options: ["Oxytocin", "Prolactin", "Human chorionic gonadotropin (hCG)", "Follicle-stimulating hormone (FSH)"],
                answer: 2
            },
            {
                level: "easy",
                q: "Which urine specimen is best for performing a urine pregnancy test because it contains the highest concentration of hCG?",
                options: ["Mid-day specimen", "First morning urine specimen", "Evening specimen", "Post-meal specimen"],
                answer: 1
            },
            {
                level: "easy",
                q: "What is the normal baseline range of the fetal heart rate (FHR)?",
                options: ["60–100 beats/min", "90–110 beats/min", "120–160 beats/min", "170–200 beats/min"],
                answer: 2
            },
            {
                level: "easy",
                q: "Active fetal movements and fetal parts can be palpated by a trained examiner or obstetrician after about:",
                options: ["8 weeks of gestation", "12 weeks of gestation", "20 weeks of gestation", "36 weeks of gestation"],
                answer: 2
            },

            // MEDIUM (13)
            {
                level: "medium",
                q: "According to Naegele's rule, how is the estimated date of delivery (EDD) calculated from the first day of the last menstrual period (LMP)?",
                options: [
                    "Subtract 3 months and subtract 7 days",
                    "Subtract 3 months and add 7 days (plus 1 year if appropriate)",
                    "Add 3 months and add 7 days",
                    "Subtract 4 months and add 10 days"
                ],
                answer: 1
            },
            {
                level: "medium",
                q: "What is required for Naegele's rule to be used accurately to estimate the date of delivery?",
                options: [
                    "A regular 21-day menstrual cycle",
                    "A regular 28-day menstrual cycle",
                    "A regular 35-day menstrual cycle",
                    "Previous twin pregnancy"
                ],
                answer: 1
            },
            {
                level: "medium",
                q: "In the obstetric history, 'Parity' refers to the number of births carried past how many weeks of gestation, whether or not the fetus was born alive?",
                options: ["12 weeks of gestation", "16 weeks of gestation", "20 weeks of gestation", "28 weeks of gestation"],
                answer: 2
            },
            {
                level: "medium",
                q: "Morning sickness usually appears at about 6 weeks after the onset of the last menstrual period and disappears:",
                options: ["2 to 4 weeks later", "6 to 12 weeks later", "At 28 weeks of gestation", "At 40 weeks of gestation"],
                answer: 1
            },
            {
                level: "medium",
                q: "When does the secondary areola appear on the breast during pregnancy?",
                options: ["From 6 weeks", "From 12 weeks", "From 16 weeks", "From 28 weeks"],
                answer: 2
            },
            {
                level: "medium",
                q: "Quickening (a woman's first awareness of fetal movement) occurs in a primigravida at about:",
                options: ["10 to 12 weeks", "14 to 15 weeks", "18 to 20 weeks", "24 to 28 weeks"],
                answer: 2
            },
            {
                level: "medium",
                q: "In a multigravida, quickening may be perceived by the mother as early as:",
                options: ["8 weeks", "12 weeks", "16 weeks", "24 weeks"],
                answer: 2
            },
            {
                level: "medium",
                q: "Regular and rhythmic uterine contractions felt during bimanual examination as early as 4–8 weeks are known as:",
                options: ["Hegar's sign", "Palmer's sign", "Goodell's sign", "Osiander's sign"],
                answer: 1
            },
            {
                level: "medium",
                q: "Softening of the lower uterine segment allowing approximation of fingers during bimanual examination is called:",
                options: ["Chadwick's sign", "Hegar's sign", "Goodell's sign", "Palmer's sign"],
                answer: 1
            },
            {
                level: "medium",
                q: "Deep red to purple or bluish coloration of the mucous membranes of the cervix, vagina, and vulva seen at 6 to 8 weeks is:",
                options: ["Goodell's sign", "Chadwick's sign", "Osiander's sign", "Hegar's sign"],
                answer: 1
            },
            {
                level: "medium",
                q: "Increased pulsation felt in the lateral vaginal fornix due to increased pelvic vascularity is known as:",
                options: ["Osiander's sign", "Palmer's sign", "Chadwick's sign", "Braxton Hicks sign"],
                answer: 0
            },
            {
                level: "medium",
                q: "Softening of the cervix as early as the 6th week of pregnancy, making the cervix feel like the lips of the mouth, is known as:",
                options: ["Hegar's sign", "Goodell's sign", "Chadwick's sign", "Palmer's sign"],
                answer: 1
            },
            {
                level: "medium",
                q: "The fetal heart rate can be detected with a fetoscope by approximately:",
                options: ["6 to 8 weeks of pregnancy", "10 to 12 weeks of pregnancy", "17 to 20 weeks of pregnancy", "28 to 32 weeks of pregnancy"],
                answer: 2
            },

            // HARD (13)
            {
                level: "hard",
                q: "How is a twin delivery carried past 20 weeks of gestation recorded in the mother's Parity count?",
                options: [
                    "Counted as two parities because two fetuses were delivered",
                    "Counted as one parity because parity refers to the number of births, not the number of fetuses",
                    "Counted only if both twins are born alive",
                    "Excluded from parity and added only to gravidity"
                ],
                answer: 1
            },
            {
                level: "hard",
                q: "In the GTPAL system, how is an abortion or miscarriage classified in relation to Gravida and Parity?",
                options: [
                    "Included in Gravida if before 20 weeks of gestation; included in Parity if past 20 weeks of gestation",
                    "Always included in Parity regardless of gestational weeks",
                    "Included in Gravida if after 28 weeks of gestation",
                    "Never included in either Gravida or Parity"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "What is the pattern of frequency of micturition throughout the course of a normal pregnancy?",
                options: [
                    "Present only in the second trimester due to high progesterone",
                    "Present in the 1st trimester, disappears after the 1st trimester, and reappears near the end of pregnancy when the fetal head descends",
                    "Starts at 24 weeks and disappears before labor",
                    "Continuous and unchanged from 4 weeks until 40 weeks"
                ],
                answer: 1
            },
            {
                level: "hard",
                q: "Why are breast changes (such as secondary areola at 16 weeks) considered diagnostic in a primigravida but NOT in a multigravida?",
                options: [
                    "Multigravida women do not develop breast changes during pregnancy",
                    "In a multigravida, breast changes may persist from previous pregnancies",
                    "Primigravida women have lower estrogen levels",
                    "Secondary areola disappears immediately after the first trimester"
                ],
                answer: 1
            },
            {
                level: "hard",
                q: "When do Braxton Hicks contractions become palpable on abdominal examination, and when can the fetal outline be identified by palpation?",
                options: [
                    "Braxton Hicks after 12 weeks; fetal outline after 16 weeks",
                    "Braxton Hicks after 28 weeks; fetal outline after 24 weeks",
                    "Braxton Hicks after 36 weeks; fetal outline after 32 weeks",
                    "Both are palpable starting from 8 weeks of gestation"
                ],
                answer: 1
            },
            {
                level: "hard",
                q: "When does a urine pregnancy test become positive, and how early can a maternal blood test detect hCG?",
                options: [
                    "Urine test about 4 weeks after conception; blood test can detect hCG before a missed period",
                    "Urine test at 12 weeks; blood test at 8 weeks",
                    "Both urine and blood tests become positive only after 8 weeks of amenorrhea",
                    "Urine test before conception; blood test at 16 weeks"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "Why are laboratory hCG pregnancy tests classified under 'Probable' signs rather than 'Positive (Sure)' signs of pregnancy?",
                options: [
                    "Because hCG is never present in normal pregnancies",
                    "Because conditions other than pregnancy (such as vesicular mole) can also cause positive hCG results",
                    "Because hCG can only be detected after 28 weeks of gestation",
                    "Because urine tests are 100% false in primigravidas"
                ],
                answer: 1
            },
            {
                level: "hard",
                q: "By ultrasonography, at what gestational age can the gestational sac and fetal cardiac movement be detected?",
                options: [
                    "Gestational sac after 4–5 weeks of amenorrhea; cardiac movement noted at 4 to 8 weeks",
                    "Gestational sac after 12 weeks; cardiac movement at 16 weeks",
                    "Gestational sac after 1–2 weeks; cardiac movement at 20 weeks",
                    "Both can only be detected after 16 weeks of pregnancy"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "At what week of pregnancy does radiological X-ray show the fetal skeleton, and during which period is its teratogenic effect particularly hazardous?",
                options: [
                    "Shows skeleton from 8th week; teratogenic particularly after 32 weeks",
                    "Shows skeleton from 16th week; teratogenic particularly before 10 weeks",
                    "Shows skeleton from 28th week; teratogenic only during labor",
                    "Shows skeleton from 4th week; no teratogenic hazards exist"
                ],
                answer: 1
            },
            {
                level: "hard",
                q: "Besides teratogenicity before 10 weeks, what are the other documented fetal hazards of radiological X-ray during pregnancy?",
                options: [
                    "Chromosomal changes in fetal gonads (genetic disorders in following generations) and subsequent leukemia in childhood",
                    "Fetal macrosomia and twin pregnancy",
                    "Polyhydramnios and vesicular mole",
                    "Premature closure of fetal fontanelles"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "All of the following are causes of an oversized uterus (larger than expected gestational weeks) EXCEPT:",
                options: ["Vesicular mole", "Hydramnios", "Oligohydramnios", "Macrosomia or hydrocephalus"],
                answer: 2
            },
            {
                level: "hard",
                q: "Which of the following combinations represents causes of a smaller-than-expected uterine size during pregnancy?",
                options: [
                    "Twins, hydramnios, and vesicular mole",
                    "Anencephaly, oligohydramnios, transverse lie, and missed abortion",
                    "Macrosomia, hydrocephalus, and multiple gestation",
                    "Polyhydramnios and fetal hydrocephalus"
                ],
                answer: 1
            },
            {
                level: "hard",
                q: "Which factor can be a cause of an oversized uterus AND a cause of a small-sized uterus when comparing fundal height to amenorrhea?",
                options: ["Miscalculation of gestational age", "Anencephaly", "Vesicular mole", "Transverse lie"],
                answer: 0
            }
        ]
    },

    // 2. Physiological Changes During Pregnancy (40 MCQs)
    lec2: {
        title: "2. Physiological Changes During Pregnancy",
        questions: [
            // EASY (14)
            {
                level: "easy",
                q: "Why does ovulation cease during pregnancy?",
                options: [
                    "Due to pituitary inhibition caused by high levels of estrogen and progesterone",
                    "Due to increased secretion of FSH and LH",
                    "Due to degeneration of the fallopian tubes",
                    "Due to high levels of maternal oxytocin"
                ],
                answer: 0
            },
            {
                level: "easy",
                q: "Which protein hormone secreted by the corpus luteum relaxes the symphysis pubis and other pelvic joints?",
                options: ["Prolactin", "Oxytocin", "Relaxin", "Aldosterone"],
                answer: 2
            },
            {
                level: "easy",
                q: "What is the function of the thick mucus plug secreted by endocervical glands during pregnancy?",
                options: [
                    "Stimulates uterine contractions",
                    "Obstructs the cervical canal and prevents bacteria from ascending into the uterus",
                    "Nourishes the fetus in the third trimester",
                    "Increases vaginal bleeding"
                ],
                answer: 1
            },
            {
                level: "easy",
                q: "What is the thick yellowish fluid that can be expressed from the nipples nearly after the second trimester?",
                options: ["Sebum", "Colostrum", "Amniotic fluid", "Serous exudate"],
                answer: 1
            },
            {
                level: "easy",
                q: "Hypertrophic sebaceous glands that appear as elevations in the primary areola of the breast during pregnancy are called:",
                options: ["Nabothian follicles", "Graafian follicles", "Montgomery's follicles", "Bartholin's glands"],
                answer: 2
            },
            {
                level: "easy",
                q: "What is the butterfly-shaped brownish pigmentation appearing on the cheeks, nose, and forehead during pregnancy called?",
                options: ["Striae albicans", "Chloasma (pregnancy mask)", "Linea nigra", "Palmar erythema"],
                answer: 1
            },
            {
                level: "easy",
                q: "What is 'Palmar erythema' observed during pregnancy?",
                options: [
                    "Dark line on the abdomen",
                    "Pinkish-red mottling over the palms of the hands",
                    "Stretch marks on the thighs",
                    "Edema of the ankles"
                ],
                answer: 1
            },
            {
                level: "easy",
                q: "Excessive salivation during pregnancy, which is more common in association with oral sepsis, is termed:",
                options: ["Gingivitis", "Ptyalism", "Hyperemesis", "Pyrosis"],
                answer: 1
            },
            {
                level: "easy",
                q: "Nausea (morning sickness) and vomiting (emesis gravidarum) in the early months of pregnancy occur due to rising levels of:",
                options: ["Oxytocin", "hCG hormone", "Relaxin", "Insulin"],
                answer: 1
            },
            {
                level: "easy",
                q: "How is the appendix displaced as the uterus enlarges during pregnancy?",
                options: [
                    "Displaced downwards into the pelvis",
                    "Displaced upwards by the enlarged uterus",
                    "Displaced to the left iliac fossa",
                    "Remains in its exact non-pregnant position"
                ],
                answer: 1
            },
            {
                level: "easy",
                q: "Which posterior pituitary hormone increases near term to stimulate the onset of labor?",
                options: ["Prolactin", "Oxytocin", "Thyroxine", "Parathyroid hormone"],
                answer: 1
            },
            {
                level: "easy",
                q: "Why do the parathyroid glands increase in size and activity during pregnancy?",
                options: [
                    "To regulate the increased calcium metabolism",
                    "To suppress maternal immunity",
                    "To stimulate bile secretion",
                    "To decrease maternal heart rate"
                ],
                answer: 0
            },
            {
                level: "easy",
                q: "What is the average total weight gain during a normal pregnancy?",
                options: ["3–5 kg", "10–12 kg", "18–22 kg", "25–30 kg"],
                answer: 1
            },
            {
                level: "easy",
                q: "Psychological changes in the first trimester typically include anxiety about losing the baby, whereas in the third trimester anxiety shifts to:",
                options: [
                    "Fear of the baby's arrival, labor, and birth",
                    "Denial of pregnancy",
                    "Complete absence of any worries",
                    "Fear of ovulation returning"
                ],
                answer: 0
            },

            // MEDIUM (13)
            {
                level: "medium",
                q: "During pregnancy, the corpus luteum starts to degenerate after how many weeks when the placenta is formed?",
                options: ["4 weeks", "10 weeks", "18 weeks", "28 weeks"],
                answer: 1
            },
            {
                level: "medium",
                q: "During pregnancy, the weight of the uterus increases from about 50 grams in the non-pregnant state to how many grams at 40 weeks of gestation?",
                options: ["250 grams", "500 grams", "1000 grams", "2000 grams"],
                answer: 2
            },
            {
                level: "medium",
                q: "How much does the capacity of the uterus increase from the non-pregnant state to full term (40 weeks)?",
                options: ["From 4 ml to 400 ml", "From 4 ml to 1000 ml", "From 4 ml to 4000 ml", "From 10 ml to 2000 ml"],
                answer: 2
            },
            {
                level: "medium",
                q: "What is the shape of the pregnant uterus by the 14th week and by the 16th week till term?",
                options: [
                    "Pyriform by the 14th week and globular by the 16th week",
                    "Globular by the 14th week and pyriform by the 16th week till term",
                    "Triangular throughout pregnancy",
                    "Cylindrical from the 12th week till term"
                ],
                answer: 1
            },
            {
                level: "medium",
                q: "At term (40 weeks), uterine blood flow increases progressively to reach about:",
                options: ["100 ml/minute", "250 ml/minute", "500 ml/minute", "1000 ml/minute"],
                answer: 2
            },
            {
                level: "medium",
                q: "After 12 weeks of gestation, the uterine isthmus (0.5 cm) expands gradually to form the lower uterine segment, which measures at term:",
                options: ["2.5 cm in length", "5 cm in length", "10 cm in length", "20 cm in length"],
                answer: 2
            },
            {
                level: "medium",
                q: "After delivery, reddish abdominal stretch marks (striae gravidarum) become white in color and are called:",
                options: ["Linea nigra", "Chloasma", "Striae albicans", "Palmar erythema"],
                answer: 2
            },
            {
                level: "medium",
                q: "Total blood volume increases steadily during pregnancy to reach a maximum of 45% above the non-pregnant level at:",
                options: ["16 weeks", "20 weeks", "32 weeks", "40 weeks"],
                answer: 2
            },
            {
                level: "medium",
                q: "During pregnancy, the normal hemoglobin range is 10–14 g/dL; anemia in pregnancy is diagnosed when hemoglobin falls below:",
                options: ["12 g/dL", "11.5 g/dL", "10 g/dL", "8 g/dL"],
                answer: 2
            },
            {
                level: "medium",
                q: "By how much does the resting pulse rate increase during pregnancy?",
                options: ["2–4 beats/min", "10–15 beats/min", "30–40 beats/min", "50–60 beats/min"],
                answer: 1
            },
            {
                level: "medium",
                q: "Cardiac output increases mainly by increased stroke volume, reaching a maximum of 40% above the non-pregnant level at:",
                options: ["8 weeks", "12 weeks", "20 weeks", "36 weeks"],
                answer: 2
            },
            {
                level: "medium",
                q: "During pregnancy, oxygen consumption increases by 15%–20%, while tidal volume increases by:",
                options: ["5%–10%", "10%–15%", "30%–40%", "60%–70%"],
                answer: 2
            },
            {
                level: "medium",
                q: "During pregnancy, thyroid gland activity increases as evidenced by an increase in Basal Metabolic Rate (BMR) by about:",
                options: ["10%", "20%", "30%", "50%"],
                answer: 2
            },

            // HARD (13)
            {
                level: "hard",
                q: "Until which week of gestation do the tissues of the uterus continue to grow in weight (from 50g to 1000g) before only stretching to accommodate the fetus?",
                options: ["First 10 weeks", "First 14 weeks", "First 20 weeks", "Up to 38 weeks"],
                answer: 2
            },
            {
                level: "hard",
                q: "How are the muscle fibers of the upper uterine segment arranged, and what is the specific role of the middle layer?",
                options: [
                    "Outer longitudinal, middle oblique (forming 8-shaped fibers around blood vessels to control postpartum hemorrhage), and inner circular",
                    "Outer circular, middle longitudinal, and inner spiral fibers that dilate the cervix",
                    "A single thin layer of longitudinal smooth muscle fibers",
                    "Two layers of striated voluntary muscle fibers"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "Why does physiological anemia (hemodilution) occur during pregnancy, and what is the average blood volume increase in singleton vs. twin pregnancy?",
                options: [
                    "Plasma volume increases by 40% while RBC mass increases by 20%; average increase is 50% in singleton and 70% in twin pregnancy",
                    "Plasma volume decreases by 20% while RBC mass increases by 40%; average increase is 20% in singleton and 30% in twin pregnancy",
                    "Both plasma and RBC mass decrease by 30% in twin pregnancy",
                    "Red blood cells are destroyed by placental hormones at 12 weeks"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "How do leucocyte count, fibrinogen level, and erythrocyte sedimentation rate (ESR) change during pregnancy?",
                options: [
                    "Leucocytes increase (7,000 to 10,500/mm3, up to 16,000 in labor), fibrinogen increases (200–400 to 400–600 mg/dl), and ESR increases (12 to 50 mm)",
                    "Leucocytes, fibrinogen, and ESR all decrease due to hemodilution",
                    "Leucocytes decrease while fibrinogen drops below 100 mg/dl",
                    "ESR drops to 2 mm while leucocytes remain unchanged"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "Why do serum creatinine, blood urea nitrogen (BUN), and uric acid levels decrease during normal pregnancy?",
                options: [
                    "Due to hepatic failure during pregnancy",
                    "Due to plasma expansion and increased glomerular filtration rate (GFR) leading to increased renal clearance",
                    "Due to decreased renal plasma flow and urinary retention",
                    "Due to excessive protein restriction in maternal diet"
                ],
                answer: 1
            },
            {
                level: "hard",
                q: "What causes Supine Hypotensive Syndrome in late pregnancy, and how is the apex of the maternal heart displaced?",
                options: [
                    "Heavy uterus compresses the inferior vena cava reducing venous return and cardiac output; heart apex is displaced upwards and to the left into the 4th intercostal space outside the mid-clavicular line",
                    "Uterus compresses the carotid artery; heart apex moves downwards to the 6th intercostal space",
                    "High estrogen causes severe hypertension in the supine position",
                    "Fetal head compresses the pulmonary artery causing tachycardia"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "How does arterial blood pressure change by 24 weeks of gestation, and what is the physiological mechanism behind this change?",
                options: [
                    "Systolic falls 5–10 mmHg and diastolic falls 10–15 mmHg below baseline due to peripheral vasodilatation caused by estrogens and prostaglandins",
                    "Systolic rises 20 mmHg and diastolic rises 15 mmHg due to progesterone vasoconstriction",
                    "Systolic falls 30 mmHg in the third trimester due to blood loss",
                    "Blood pressure remains completely unchanged throughout all trimesters"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "Which hormones suppress the maternal immune response and depress lymphocyte function during pregnancy?",
                options: [
                    "Oxytocin and relaxin",
                    "hCG and prolactin",
                    "Thyroxine and insulin",
                    "FSH and LH"
                ],
                answer: 1
            },
            {
                level: "hard",
                q: "What is the physiological effect of pregnancy hyperventilation on maternal arterial CO2 and fetal gas exchange?",
                options: [
                    "Causes a 15–20% decrease in maternal arterial CO2, which facilitates the transfer of CO2 from the fetus to the mother",
                    "Causes a 30% increase in maternal CO2, leading to fetal acidosis",
                    "Increases expiratory residual volume by 50%",
                    "Decreases inspiratory capacity and oxygen consumption"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "Why are pregnant women more prone to constipation, hemorrhoids, and gallstones?",
                options: [
                    "Progesterone slows GI motility/relaxes vein walls, aldosterone increases water reabsorption, pelvic veins are compressed, and gallbladder has atony/delayed emptying",
                    "Increased gastric acid and hypermotility of the small intestine",
                    "Decreased portal vein pressure and rapid gallbladder contraction",
                    "High oxytocin levels in the first trimester"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "Why does urinary stasis occur in the kidneys during pregnancy, and what causes stress incontinence in the bladder?",
                options: [
                    "Dilated renal pelvis and ureters cause urinary stasis (increasing UTI risk); decreased urethral pressure and decreased urethral length cause stress incontinence",
                    "Constricted ureters prevent urine formation; increased urethral pressure causes incontinence",
                    "Decreased glomerular filtration rate stops urine flow",
                    "Hyperactive bladder sphincter increases urethral length"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "To what level does anterior pituitary prolactin increase at term, and what is the rate of maternal weight gain per week in the 2nd and 3rd trimesters?",
                options: [
                    "Prolactin increases up to 150 mg/ml at term; weight gain rate is 350–400 gm/week",
                    "Prolactin decreases to 10 mg/ml; weight gain rate is 1000 gm/week",
                    "Prolactin increases to 500 mg/ml; weight gain occurs only in the 1st trimester",
                    "Prolactin remains unchanged; weight gain rate is 50 gm/week"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "What causes aching, numbness, and weakness in the upper extremities late in pregnancy?",
                options: [
                    "Lordosis and pressure on the ulnar nerve",
                    "Compression of the sciatic nerve in the pelvis",
                    "Decreased parathyroid hormone levels",
                    "Carpal bone fusion induced by relaxin"
                ],
                answer: 0
            }
        ]
    },

    // 3. Bleeding in Early Pregnancy (40 MCQs)
    lec3: {
        title: "3. Bleeding in Early Pregnancy",
        questions: [
            // EASY (14)
            {
                level: "easy",
                q: "Vaginal bleeding occurs in 20% to 30% of confirmed pregnancies during the first:",
                options: ["8 weeks of gestation", "12 weeks of gestation", "20 weeks of gestation", "36 weeks of gestation"],
                answer: 2
            },
            {
                level: "easy",
                q: "What is the first leading cause of maternal mortality in Egypt according to the course lecture?",
                options: ["Cardiac disease", "Hemorrhage", "Gestational diabetes", "Urinary tract infection"],
                answer: 1
            },
            {
                level: "easy",
                q: "Abortion is defined medically as the loss of pregnancy before the fetus is viable, meaning a fetus of less than how many weeks or weighing less than 500 g?",
                options: ["Less than 12 weeks", "Less than 16 weeks", "Less than 20 weeks", "Less than 28 weeks"],
                answer: 2
            },
            {
                level: "easy",
                q: "What is the definition of 'Spontaneous Abortion' (Miscarriage)?",
                options: [
                    "Termination of pregnancy without action taken by the woman or another person",
                    "Legal termination of pregnancy by a physician due to medical indications",
                    "Illegal termination of pregnancy without medical indications",
                    "Delivery of a fetus after 37 completed weeks"
                ],
                answer: 0
            },
            {
                level: "easy",
                q: "Smoking more than how many cigarettes a day increases the risk of miscarriage?",
                options: ["1 cigarette a day", "3 cigarettes a day", "10 cigarettes a day", "40 cigarettes a day"],
                answer: 2
            },
            {
                level: "easy",
                q: "Which type of spontaneous abortion is characterized by spotting vaginal bleeding, a closed cervical os, and intact membranes?",
                options: ["Inevitable abortion", "Incomplete abortion", "Threatened abortion", "Complete abortion"],
                answer: 2
            },
            {
                level: "easy",
                q: "Which type of abortion occurs when all embryonic and placental components have been expelled completely and spontaneously, causing pain to stop and the cervix to close?",
                options: ["Threatened abortion", "Incomplete abortion", "Complete abortion", "Missed abortion"],
                answer: 2
            },
            {
                level: "easy",
                q: "What is 'Habitual (Recurrent) Abortion'?",
                options: [
                    "One spontaneous abortion in a primigravida",
                    "Two abortions separated by a normal birth",
                    "Three or more consecutive spontaneous abortions",
                    "Any induced criminal abortion"
                ],
                answer: 2
            },
            {
                level: "easy",
                q: "What is 'Septic Abortion'?",
                options: [
                    "Threatened abortion with mild backache",
                    "Incomplete abortion complicated by infection of the uterine cavity",
                    "Complete abortion with negative pregnancy test",
                    "Ectopic pregnancy in the ovary"
                ],
                answer: 1
            },
            {
                level: "easy",
                q: "What is the illegal termination of pregnancy when there are no medical or obstetrical indications called?",
                options: ["Therapeutic abortion", "Spontaneous abortion", "Criminal abortion", "Habitual abortion"],
                answer: 2
            },
            {
                level: "easy",
                q: "What is an 'Ectopic Pregnancy'?",
                options: [
                    "Implantation of a fertilized ovum in an area outside the uterine cavity",
                    "Implantation of twins inside the upper uterine segment",
                    "Retention of a dead fetus inside the uterus for 8 weeks",
                    "Proliferation of chorionic villi into grapelike vesicles"
                ],
                answer: 0
            },
            {
                level: "easy",
                q: "More than 95%–98% of ectopic pregnancies occur in which anatomical structure?",
                options: ["Ovary", "Cervix", "Fallopian tube", "Abdominal cavity"],
                answer: 2
            },
            {
                level: "easy",
                q: "Which condition is a gestational trophoblastic disease characterized by proliferation and edema of chorionic villi forming grapelike clusters of vesicles?",
                options: ["Ectopic pregnancy", "Placenta previa", "Hydatidiform mole (Vesicular mole)", "Missed abortion"],
                answer: 2
            },
            {
                level: "easy",
                q: "In a complete molar pregnancy, what is found inside the uterus?",
                options: [
                    "A normal fetus and normal placenta",
                    "Only placental parts (vesicles) with no baby/fetus, formed when sperm fertilizes an empty egg",
                    "Twins with excessive amniotic fluid",
                    "A viable fetus with a short umbilical cord"
                ],
                answer: 1
            },

            // MEDIUM (13)
            {
                level: "medium",
                q: "About 80% of all recognized spontaneous abortions occur during which period of pregnancy?",
                options: [
                    "The first 2 weeks of pregnancy",
                    "The 2nd or 3rd months (about 8 to 12 weeks) of pregnancy",
                    "Between 20 and 24 weeks of pregnancy",
                    "After 28 weeks of pregnancy"
                ],
                answer: 1
            },
            {
                level: "medium",
                q: "Pregnant women who develop a fever of at least what temperature appear to have an increased risk of miscarriage?",
                options: ["36.5°C", "37.0°C", "37.5°C or more", "40.5°C only"],
                answer: 2
            },
            {
                level: "medium",
                q: "Which of the following is the primary aim of treatment in a threatened abortion?",
                options: [
                    "Immediate surgical evacuation of the uterus",
                    "Conserve the pregnancy by complete bed rest, uterine relaxants, and sedatives",
                    "Administer high-dose oxytocin infusion",
                    "Give enemas and purgatives daily"
                ],
                answer: 1
            },
            {
                level: "medium",
                q: "In which type of abortion is the expulsion of products of conception irreversible, presenting with excessive red bleeding with clots, severe colicky pain, a dilated cervical os, and ruptured membranes?",
                options: ["Threatened abortion", "Missed abortion", "Inevitable abortion", "Complete abortion"],
                answer: 2
            },
            {
                level: "medium",
                q: "After a complete abortion, how long is it recommended that a couple wait before trying to conceive again?",
                options: [
                    "At least one regular menstrual cycle",
                    "At least 2 years",
                    "At least 5 years",
                    "Immediate conception within 3 days"
                ],
                answer: 0
            },
            {
                level: "medium",
                q: "When a fetus dies during the first half of pregnancy (before 20 weeks) but is retained in the uterus for two months (8 weeks) or longer, it is called:",
                options: ["Threatened abortion", "Incomplete abortion", "Missed abortion", "Septic abortion"],
                answer: 2
            },
            {
                level: "medium",
                q: "What is the most important cause of habitual (recurrent) abortion?",
                options: ["Cervical incompetence", "Hyperemesis gravidarum", "Multiparity", "Fetal macrosomia"],
                answer: 0
            },
            {
                level: "medium",
                q: "If cervical incompetence is the cause of habitual abortion, the cervical opening is sutured (cerclage) until which week of gestation?",
                options: ["20th week of gestation", "28th week of gestation", "32nd week of gestation", "37th week of gestation"],
                answer: 3
            },
            {
                level: "medium",
                q: "Where do 75% to 80% of tubal ectopic pregnancies occur within the fallopian tube, and what is the overall incidence of ectopic pregnancy?",
                options: [
                    "In the ampulla; occurs in about 1 in 60 pregnancies",
                    "In the interstitial portion; occurs in 1 in 5 pregnancies",
                    "In the cervix; occurs in 1 in 1000 pregnancies",
                    "In the ovary; occurs in 50% of pregnancies"
                ],
                answer: 0
            },
            {
                level: "medium",
                q: "What is the most feared complication of an ectopic pregnancy?",
                options: [
                    "Gestational diabetes",
                    "Rupture of the fallopian tube leading to severe internal bleeding, shock, and death",
                    "Choriocarcinoma",
                    "Polyhydramnios"
                ],
                answer: 1
            },
            {
                level: "medium",
                q: "What is a 'Partial Molar Pregnancy'?",
                options: [
                    "A mass containing both abnormal trophoblastic cells and an embryo that has severe defects",
                    "Fertilization of an empty egg with no embryo at all",
                    "A normal twin pregnancy with two healthy placentas",
                    "An ectopic pregnancy implanted in the peritoneal cavity"
                ],
                answer: 0
            },
            {
                level: "medium",
                q: "Which of the following is a major risk factor for developing a hydatidiform (vesicular) mole?",
                options: [
                    "Maternal age between 22 and 28 years",
                    "Maternal age above 40 (or 45) years or below 19 years, protein malnutrition, and previous vesicular mole",
                    "High protein diet during preconception",
                    "First pregnancy with normal BMI"
                ],
                answer: 1
            },
            {
                level: "medium",
                q: "What is the standard surgical method used to evacuate a hydatidiform mole?",
                options: ["Hysterectomy in all patients", "Suction curettage (with IV oxytocin)", "Laparotomy", "Cervical cerclage"],
                answer: 1
            },

            // HARD (13)
            {
                level: "hard",
                q: "According to the lecture, what are the incidence percentages of placental site bleeding (and its subtypes) vs. non-placental site bleeding in antepartum hemorrhage?",
                options: [
                    "Placental site bleeding 62% (placenta previa 22%, abruptio placentae 30%, marginal separation 10%) and non-placental site bleeding 28%",
                    "Placental site bleeding 20% and non-placental site bleeding 80%",
                    "Placenta previa 80% and abruptio placentae 20%",
                    "Marginal separation 70% and local lesions 30%"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "In a patient with inevitable abortion experiencing severe bleeding and shock, which medications and dosages are indicated in emergency management?",
                options: [
                    "IM/IV Pethidine 100 mg or Diazepam 10 mg, IV fluids/blood transfusion, and IV Oxytocin 5–10 units or Ergometrine 0.5 mg",
                    "Oral paracetamol only and discharge home",
                    "High-dose progesterone and enema administration",
                    "Magnesium sulfate 10 g IM every 4 hours"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "Why is D&C NOT performed in an incomplete abortion if the pregnancy has advanced beyond 14 weeks, and what is the alternative management?",
                options: [
                    "Because of the danger of excessive bleeding; instead, oxytocin or prostaglandin is administered to stimulate uterine contractions until all products are expelled",
                    "Because the cervix closes permanently after 14 weeks; cesarean section is required",
                    "Because the fetus becomes viable at 14 weeks; pregnancy is conserved",
                    "Because hCG levels become undetectable after 14 weeks"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "Which clinical features distinguish a 'Missed Abortion' from other types of spontaneous abortion?",
                options: [
                    "Disappearance of pregnancy signs, negative pregnancy test, fundal height does not increase, absent FHR/movement, brownish vaginal discharge, closed cervical os, and possible breast milk secretion",
                    "Bright red profuse hemorrhage, dilated cervical os, and oversized doughy uterus",
                    "High fever, chills, offensive purulent vaginal discharge, and open cervix",
                    "Positive hCG test with grapelike vesicles passed per vagina"
                ],
                answer: 0
            },
            {
                level: "hard",
                q: "What are the major complications of a missed abortion, and how should uterine evacuation be managed if signs of uterine infection exist?",
                options: [
                    "Complications are infection and DIC; if uterine infection exists (fever, foul discharge, abdominal pain), evacuation is delayed until cultures are obtained and antimicrobial therapy is initiated",
                    "Complication is choriocarcinoma; immediate D&C is done without antibiotics",
                    "Complication is pre-eclampsia; pregnancy is maintained until 37 weeks",
                    "No complications occur; patient needs no medical follow-up"
                ],
                answer: 0
            },
            {
                level: "h