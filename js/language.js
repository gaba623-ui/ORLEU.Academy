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
course3Text:"Формирование базовых компетенций педагогов инклюзивного образования."
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
course3Text:"Инклюзивті білім беруді іске асыратын педагогтердің базалық құзыреттерін қалыптастыру."
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

}
