const lang = {

    ru: {
        home: "Главная",
        courses: "Курсы",
        about: "О нас",
        register: "Регистрация",
        title: "ORLEU",
        hero: "Центр повышения квалификации педагогов Республики Казахстан. Современные образовательные программы для профессионального развития.",
        button: "Наши программы",

coursesTitle:"Образовательные программы",

course1Title:"🏫 Организация предметно-пространственной среды дошкольной организации",
course1Text:"Организация современной предметно-развивающей среды в дошкольной организации.",

course2Title:"👶 Работа с детьми с особыми образовательными потребностями",
course2Text:"Практические методы работы с детьми с особыми образовательными потребностями.",

course3Title:"♿ Инклюзивное образование",
course3Text:"Формирование базовых компетенций педагогов инклюзивного образования.",
        
course4Title:"🔬 Зерттеушілік және жобалық іс-әрекеті",
course4Text:"Развитие исследовательской и проектной деятельности учащихся начальной школы.",

course5Title:"🌍 Жаһандық құзыреттер",
course5Text:"Развитие глобальных компетенций и навыков XXI века.",

course6Title:"🇬🇧 Ағылшын тілін оқытудағы инновациялық технологиялар",
course6Text:"Современные технологии преподавания английского языка.",

course7Title:"🎓 Қазіргі заманғы білім беру ұйымын тиімді басқару",
course7Text:"Современные подходы к управлению образовательными организациями.",
       
        aboutTitle:"О центре ORLEU",

aboutText:"ORLEU — образовательная платформа повышения квалификации педагогических работников. Мы предлагаем современные программы обучения, направленные на развитие профессиональных компетенций, внедрение инновационных образовательных технологий и повышение качества образования.",

feature1:"7 программ",
feature2:"Опытные преподаватели",
feature3:"Сертификаты",
feature4:"Онлайн обучение",
    },

    kz: {
        home: "Басты бет",
        courses: "Курстар",
        about: "Біз туралы",
        register: "Тіркелу",
        title: "ӨРЛЕУ",
        hero: "Қазақстан Республикасы педагогтерінің біліктілігін арттыруға арналған заманауи білім беру бағдарламалары.",
       button:"Курстар",

coursesTitle:"Білім беру бағдарламалары",

course1Title:"🏫 Мектепке дейінгі ұйымның заттық кеңістіктік даму ортасын ұйымдастыру",
course1Text:"Мектепке дейінгі ұйымдағы заманауи заттық-дамытушы ортаны ұйымдастыру.",

course2Title:"👶 Ерекше білім беру қажеттіліктері бар балалармен жұмысты ұйымдастыру",
course2Text:"Ерекше білім беру қажеттіліктері бар балалармен жұмыс жүргізудің тиімді тәсілдері.",

course3Title:"♿ Инклюзивті білім беру",
course3Text:"Инклюзивті білім беруді іске асыратын педагогтердің базалық құзыреттерін қалыптастыру.",
   
course4Title:"🔬 Зерттеушілік және жобалық іс-әрекеті",
course4Text:"Бастауыш сынып оқушыларының зерттеушілік және жобалық қызметін дамыту.",

course5Title:"🌍 Жаһандық құзыреттер",
course5Text:"XXI ғасыр дағдылары мен жаһандық құзыреттерді дамыту.",

course6Title:"🇬🇧 Ағылшын тілін оқытудағы инновациялық технологиялар",
course6Text:"Ағылшын тілін оқытудың заманауи инновациялық технологиялары.",

course7Title:"🎓 Қазіргі заманғы білім беру ұйымын тиімді басқару",
course7Text:"Білім беру ұйымдарын тиімді басқарудың заманауи тәсілдері.",

aboutTitle:"ӨРЛЕУ орталығы туралы",

aboutText:"ӨРЛЕУ — педагогтердің біліктілігін арттыруға арналған білім беру платформасы. Біз кәсіби құзыреттерді дамытуға, инновациялық технологияларды енгізуге және білім сапасын арттыруға бағытталған заманауи бағдарламаларды ұсынамыз.",

feature1:"7 бағдарлама",
feature2:"Тәжірибелі оқытушылар",
feature3:"Сертификаттар",
feature4:"Онлайн оқу",        
    }

};

function setLanguage(l){

    document.getElementById("navHome").textContent = lang[l].home;
    document.getElementById("navCourses").textContent = lang[l].courses;
    document.getElementById("navAbout").textContent = lang[l].about;
    document.getElementById("navRegister").textContent = lang[l].register;

    document.getElementById("heroTitle").textContent = lang[l].title;
    document.getElementById("heroText").textContent = lang[l].hero;
    document.getElementById("heroButton").textContent = lang[l].button;
    document.getElementById("coursesTitle").textContent = lang[l].coursesTitle;

document.getElementById("course1Title").textContent = lang[l].course1Title;
document.getElementById("course1Text").textContent = lang[l].course1Text;

document.getElementById("course2Title").textContent = lang[l].course2Title;
document.getElementById("course2Text").textContent = lang[l].course2Text;

document.getElementById("course3Title").textContent = lang[l].course3Title;
document.getElementById("course3Text").textContent = lang[l].course3Text;
    document.getElementById("course4Title").textContent = lang[l].course4Title;
document.getElementById("course4Text").textContent = lang[l].course4Text;

document.getElementById("course5Title").textContent = lang[l].course5Title;
document.getElementById("course5Text").textContent = lang[l].course5Text;

document.getElementById("course6Title").textContent = lang[l].course6Title;
document.getElementById("course6Text").textContent = lang[l].course6Text;

document.getElementById("course7Title").textContent = lang[l].course7Title;
document.getElementById("course7Text").textContent = lang[l].course7Text;

document.getElementById("aboutTitle").textContent = lang[l].aboutTitle;
document.getElementById("aboutText").textContent = lang[l].aboutText;

document.getElementById("feature1").textContent = lang[l].feature1;
document.getElementById("feature2").textContent = lang[l].feature2;
document.getElementById("feature3").textContent = lang[l].feature3;
document.getElementById("feature4").textContent = lang[l].feature4;    

}
