/* =========================
   MOBILE MENU
========================= */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
});

/* =========================
   ACTIVE NAV LINK + STICKY
========================= */

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    sections.forEach(section => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });

    document.querySelector('.header')
        .classList.toggle('sticky', scrollY > 100);

    // Close mobile menu on scroll
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-x');
});

/* =========================
   SCROLL REVEAL
========================= */

ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 1200,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* =========================
   DARK MODE (SAVED)
========================= */

const darkToggle = document.getElementById('darkModeToggle');

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        darkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}
loadTheme();

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    darkToggle.innerHTML = isDark
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
});

/* =========================
   TRANSLATIONS
========================= */

const translations = {
    en: {
        title: "Majd Trabelsi",
        logo: "Portfolio",
        home: "Home",
        about: "About",
        services: "Services",
        skills:"Skills",
        portfolio: "Portfolio",
        hello: "Hello, It's Me",
        role: "And I'm a Full Stack Developer",
        home_desc: "I design and develop full-stack applications from front-end to back-end.",
        about_title: "About Me",
        about_dev: "Full Stack Developer",
        about_desc: "Passionate about building modern, scalable and user-friendly applications.",
        services_title: "Our Services",
        service_web: "Web Development",
        service_web_desc: "Modern & responsive websites.",
        service_mobile: "Mobile Apps",
        service_mobile_desc: "Flutter & Android applications.",
        service_desktop: "Desktop Apps",
        service_desktop_desc: "Powerful desktop solutions.",
        portfolio_title: "Latest Projects",
        project_coffee: "Coffee Shop Website",
        project_coffee_desc: "Modern coffee website.",
        project_company: "Company Website",
        project_company_desc: "Appointment management system.",
        project_graduation: "Graduation Project",
        project_graduation_desc: "Freelance platform.",
        read_more: "Read More",
        download_cv: "Download CV",
        copyright: "© 2025 Majd Trabelsi | All Rights Reserved",
        skills_title: "My Skills" 
    },

    fr: {
        title: "Majd Trabelsi",
        logo: "Portfolio",
        home: "Accueil",
        about: "À propos",
        services: "Services",
        skills:"Compétences",
        portfolio: "Portfolio",
        hello: "Bonjour, c’est moi",
        role: "Je suis Développeur Full Stack",
        home_desc: "Je conçois et développe des applications full stack du front au back-end.",
        about_title: "À propos de moi",
        about_dev: "Développeur Full Stack",
        about_desc: "Passionné par la création d’applications modernes et performantes.",
        services_title: "Mes Services",
        service_web: "Développement Web",
        service_web_desc: "Sites modernes et responsives.",
        service_mobile: "Applications Mobiles",
        service_mobile_desc: "Applications Flutter & Android.",
        service_desktop: "Applications Desktop",
        service_desktop_desc: "Solutions desktop puissantes.",
        portfolio_title: "Derniers Projets",
        project_coffee: "Site Café",
        project_coffee_desc: "Site moderne pour café.",
        project_company: "Site Entreprise",
        project_company_desc: "Gestion de rendez-vous.",
        project_graduation: "Projet de Fin d’Études",
        project_graduation_desc: "Plateforme freelance.",
        read_more: "Lire plus",
        download_cv: "Télécharger le CV",
        copyright: "© 2025 Majd Trabelsi | Tous droits réservés",
        skills_title: "Mes Compétences" 

    },

    ar: {
        title: "مجد طرابلسي",
        logo: "أعمالي",
        home: "الرئيسية",
        about: "عنّي",
        services: "الخدمات",
        skills:"مهاراتي",
        portfolio: "أعمالي",
        hello: "مرحباً، أنا",
        role: "مطور Full Stack",
        home_desc: "أصمم وأطور تطبيقات متكاملة من الواجهة إلى الخلفية.",
        about_title: "عنّي",
        about_dev: "مطور Full Stack",
        about_desc: "شغوف بإنشاء تطبيقات حديثة وسهلة الاستخدام.",
        services_title: "خدماتي",
        service_web: "تطوير المواقع",
        service_web_desc: "مواقع حديثة ومتجاوبة.",
        service_mobile: "تطبيقات الهاتف",
        service_mobile_desc: "تطبيقات Flutter و Android.",
        service_desktop: "تطبيقات سطح المكتب",
        service_desktop_desc: "حلول قوية لسطح المكتب.",
        portfolio_title: "أحدث المشاريع",
        project_coffee: "موقع مقهى",
        project_coffee_desc: "موقع حديث لمقهى.",
        project_company: "موقع شركة",
        project_company_desc: "نظام إدارة المواعيد.",
        project_graduation: "مشروع التخرج",
        project_graduation_desc: "منصة عمل حر.",
        read_more: "اقرأ المزيد",
        download_cv: "تحميل السيرة الذاتية",
        copyright: "© 2025 مجد طرابلسي | جميع الحقوق محفوظة",
        skills_title: "مهاراتي" 

    }
};

/* =========================
   LANGUAGE SWITCH (SAVED)
========================= */

const langButtons = document.querySelectorAll('.lang-switch button');

function setActiveLang(lang) {
    langButtons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');
}

function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    localStorage.setItem('lang', lang);
    setActiveLang(lang);
}

/* 🔥 THIS WAS MISSING */
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.id.split('-')[1];
        translatePage(lang);
    });
});

// Load saved language
const savedLang = localStorage.getItem('lang') || 'en';
translatePage(savedLang);


/* =========================
   SKILLS ANIMATION
========================= */

ScrollReveal().reveal('.skill-box', { interval: 150 });

const skillSection = document.querySelector('.skills');
const progressBars = document.querySelectorAll('.progress span');

let skillsLoaded = false;

window.addEventListener('scroll', () => {
    if (!skillSection) return;

    const sectionTop = skillSection.offsetTop - window.innerHeight / 1.3;

    if (window.scrollY > sectionTop && !skillsLoaded) {
        progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute('style').split(':')[1];
        });
        skillsLoaded = true;
    }
});
