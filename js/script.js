let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');  // toggle the "X" icon
    navbar.classList.toggle('active');  // show/hide navbar
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');

            });
        }
    }) 

    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    menuIcon.classList.toggle('fa-x');  // toggle the "X" icon
    navbar.classList.remove('active');  // show/hide navbar
};




ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });



/* =========================
   DARK MODE (SAVED)
========================= */

const darkToggle = document.getElementById('darkModeToggle');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    darkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
    darkToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

// Toggle + Save
darkToggle.onclick = () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        darkToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
};


/* =========================
   LANGUAGE SWITCH (EN / FR)
========================= */

const translations = {
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        portfolio: "Portfolio",

        hello: "Hello, It's Me",
        role: "And I'm a Full Stack Developer",
        home_desc: "I design and develop full-stack applications — from dynamic front-end interfaces to robust back-end systems.",

        about_title: "About Me",
        about_desc: "I’m a passionate Full-Stack Developer who loves building modern, efficient, and user-friendly digital experiences.",

        download_cv: "Download CV",
        about_dev:"Full Stack Developer"
    },

    fr: {
        home: "Accueil",
        about: "À propos",
        services: "Services",
        portfolio: "Portfolio",

        hello: "Bonjour, c’est moi",
        role: "Je suis Développeur Full Stack",
        home_desc: "Je conçois et développe des applications full stack, des interfaces modernes jusqu’aux systèmes back-end robustes.",

        about_title: "À propos de moi",
        about_desc: "Je suis un développeur Full Stack passionné par la création d’expériences numériques modernes, performantes et intuitives.",
        about_dev:"Développeur Full Stack",

        download_cv: "Télécharger le CV"
    }
};


const langButtons = {
    en: document.getElementById("lang-en"),
    fr: document.getElementById("lang-fr")
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("lang", lang);
}

langButtons.en.addEventListener("click", () => setLanguage("en"));
langButtons.fr.addEventListener("click", () => setLanguage("fr"));

/* Load saved language */
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);



function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll(".lang-switch button")
        .forEach(btn => btn.classList.remove("active"));

    document.getElementById(`lang-${lang}`).classList.add("active");

    localStorage.setItem("lang", lang);
}
