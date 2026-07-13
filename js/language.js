const lang = {

    ru: {
        home: "Главная",
        courses: "Курсы",
        about: "О нас",
        register: "Регистрация",
        title: "ORLEU",
        hero: "Центр повышения квалификации педагогов Республики Казахстан. Современные образовательные программы для профессионального развития.",
        button: "Наши программы"
    },

    kz: {
        home: "Басты бет",
        courses: "Курстар",
        about: "Біз туралы",
        register: "Тіркелу",
        title: "ӨРЛЕУ",
        hero: "Қазақстан Республикасы педагогтерінің біліктілігін арттыруға арналған заманауи білім беру бағдарламалары.",
        button: "Курстар"
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

}
