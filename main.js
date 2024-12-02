// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// Typing Effect
function typingEffect() {
    const texts = [
        "Self Educated", "Software Engineer", "Full Stack Developer",
        "Web Developer", "PC Builder", "Tech Enthusiast", "Problem Solver",
        "UI/UX Enthusiast", "CyberSecurity Enthusiast", "Data Analyst",
        "Creative Thinker", "Team Player"
    ];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        const typingElement = document.querySelector('.typing-text');
        typingElement.textContent = letter;
        typingElement.style.borderRight = "0.2em solid var(--accent-color)";

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    })();
}

// Project Data
const projects = [
    {
        title: "Account Login System",
        image: "Projects/Account Login System/Screenshot 2024-11-27 161008.png",
        description: "Secure authentication system with advanced user management",
        tech: ["Node.js", "Express", "MongoDB", "Security"]
    },
    {
        title: "Automated Trading",
        image: "Projects/Automated Trading/Screenshot 2024-11-13 153847.png",
        description: "Algorithmic trading platform with real-time market analysis",
        tech: ["Python", "APIs", "Data Analysis", "Finance"]
    },
    {
        title: "Budget Tracking",
        image: "Projects/Budget Tracking/Screenshot 2024-11-26 045154.png",
        description: "Personal finance management system",
        tech: ["JavaScript", "Charts.js", "Local Storage"]
    },
    {
        title: "Crypto Price Tracker",
        image: "Projects/Crypto Price Tracker/Screenshot 2024-11-13 185702.png",
        description: "Real-time cryptocurrency price monitoring",
        tech: ["React", "Crypto APIs", "WebSocket"]
    },
    {
        title: "Electrical Engineering Platform",
        image: "Projects/Electrical Engineering Platform/Screenshot 2024-11-13 182047.png",
        description: "Educational platform for electrical engineering concepts",
        tech: ["HTML5", "CSS3", "JavaScript", "SVG"]
    },
    {
        title: "File Analyzer",
        image: "Projects/File Analyzer/Screenshot 2024-11-27 110335.png",
        description: "Advanced file analysis and management tool",
        tech: ["Python", "File Systems", "Data Processing"]
    },
    {
        title: "Hard Drive Analyzer",
        image: "Projects/Hard Drive Analyzer/Screenshot 2024-11-27 112529.png",
        description: "Disk space analysis and optimization tool",
        tech: ["C++", "System APIs", "Data Visualization"]
    },
    {
        title: "Hardware Analyzer",
        image: "Projects/Hardware Analyzer/Screenshot 2024-10-30 045323.png",
        description: "System hardware diagnostics and monitoring",
        tech: ["C#", "Windows API", "Hardware Integration"]
    },
    {
        title: "Notepad",
        image: "Projects/Notepad/Screenshot 2024-11-27 112752.png",
        description: "Enhanced text editor with advanced features",
        tech: ["Java", "Swing", "File I/O"]
    },
    {
        title: "Object Detection",
        image: "Projects/Object Detection/Screenshot 2024-11-27 112910.png",
        description: "Real-time object detection using computer vision",
        tech: ["Python", "OpenCV", "Machine Learning"]
    },
    {
        title: "SecuSign",
        image: "Projects/SecuSign/Screenshot 2024-11-27 161146.png",
        description: "Digital signature and document security platform",
        tech: ["Blockchain", "Cryptography", "Web3"]
    },
    {
        title: "Soundboard",
        image: "Projects/Soundboard/Screenshot 2024-11-13 155352.png",
        description: "Interactive audio mixing and playback system",
        tech: ["Web Audio API", "JavaScript", "UI Design"]
    },
    {
        title: "Whiffs Contracting",
        image: "Projects/Whiffs Contracting/Screenshot_13-11-2024_15504_.jpeg",
        description: "Construction company management platform",
        tech: ["React", "Node.js", "MongoDB"]
    }
];

// Populate Projects
function populateProjects() {
    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const projectCard = `
            <div class="project-card" data-aos="fade-up">
                <div class="project-images">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        projectGrid.innerHTML += projectCard;
    });
}

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.querySelector('i').classList.toggle('fa-sun');
    themeToggle.querySelector('i').classList.toggle('fa-moon');
});

// Scroll Hide/Show Navigation
let lastScroll = 0;
const nav = document.querySelector('.nav-glass');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    typingEffect();
    populateProjects();
    AOS.refresh();
});

// Add this to your existing main.js
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.nav-content').appendChild(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});
