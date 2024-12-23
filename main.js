class DesktopOS {
    constructor() {
        this.windows = new Map();
        this.activeWindow = null;
        this.projects = [];
        this.initializeDesktop();
        this.setupEventListeners();
        this.startClock();
        this.initializeSearch();
        this.initializeStartMenu();
    }

    startClock() {
        const timeElement = document.querySelector('.time');
        const updateTime = () => {
            const now = new Date();
            const options = { hour: 'numeric', minute: 'numeric', hour12: true };
            timeElement.textContent = now.toLocaleTimeString('en-US', options);
        };
        updateTime();
        setInterval(updateTime, 1000);
    }

    initializeSearch() {
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                this.filterDesktopIcons(query);
            });
        }
    }

    filterDesktopIcons(query) {
        document.querySelectorAll('.icon').forEach(icon => {
            const title = icon.querySelector('span').textContent.toLowerCase();
            if (query === '') {
                icon.style.display = 'flex';
                icon.style.opacity = '1';
            } else if (title.includes(query)) {
                icon.style.display = 'flex';
                icon.style.opacity = '1';
            } else {
                icon.style.opacity = '0.3';
            }
        });
    }

    initializeStartMenu() {
        const startButton = document.querySelector('.start-button');
        const startMenu = this.createStartMenu();
        document.body.appendChild(startMenu);

        startButton.addEventListener('click', () => {
            startMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!startMenu.contains(e.target) && !startButton.contains(e.target)) {
                startMenu.classList.remove('active');
            }
        });
    }

    createStartMenu() {
        const menu = document.createElement('div');
        menu.className = 'start-menu';
        menu.innerHTML = `
            <div class="start-menu-header">
                <div class="user-profile">
                    <img src="Picture Of Me/302094755_5812631322161322_4653173079054672043_n.jpg" alt="Tyler Keesee">
                    <span>Tyler Keesee</span>
                </div>
            </div>
            <div class="start-menu-content">
                <div class="pinned-apps">
                    <h3>Pinned</h3>
                    <div class="app-grid">
                        <div class="app-item" data-app="about">
                            <i class="fas fa-user"></i>
                            <span>About Me</span>
                        </div>
                        <div class="app-item" data-app="projects">
                            <i class="fas fa-code"></i>
                            <span>Projects</span>
                        </div>
                        <div class="app-item" data-app="resume">
                            <i class="fas fa-file-alt"></i>
                            <span>Resume</span>
                        </div>
                        <div class="app-item" data-app="contact">
                            <i class="fas fa-envelope"></i>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        menu.querySelectorAll('.app-item').forEach(item => {
            item.addEventListener('click', () => {
                const appType = item.dataset.app;
                switch(appType) {
                    case 'about':
                        this.createAboutWindow();
                        break;
                    case 'projects':
                        this.createProjectsWindow();
                        break;
                    case 'resume':
                        const link = document.createElement('a');
                        link.href = 'resume/Tyler_Keesee_Resume.pdf';
                        link.download = 'Tyler_Keesee_Resume.pdf';
                        link.click();
                        break;
                    case 'contact':
                        const mailLink = document.createElement('a');
                        mailLink.href = 'mailto:keeseetyler@yahoo.com';
                        mailLink.click();
                        break;
                }
                menu.classList.remove('active');
            });
        });

        return menu;
    }

    createWindow(title, content) {
        const window = document.createElement('div');
        window.className = 'window';
        
        window.innerHTML = `
            <div class="window-header">
                <div class="window-controls">
                    <div class="control-button close"></div>
                    <div class="control-button minimize"></div>
                    <div class="control-button maximize"></div>
                </div>
                <div class="window-title">${title}</div>
            </div>
            <div class="window-content">
                ${content}
            </div>
        `;

        const closeButton = window.querySelector('.close');
        closeButton.addEventListener('click', () => {
            window.classList.add('closing');
            setTimeout(() => {
                window.remove();
            }, 300);
        });
        
        this.makeDraggable(window);
        document.querySelector('.windows-container').appendChild(window);
        
        return window;
    }

    createAboutWindow() {
        const content = `
            <div class="about-window">
                <div class="about-header">
                    <img src="Picture Of Me/302094755_5812631322161322_4653173079054672043_n.jpg" 
                         alt="Tyler Keesee" 
                         class="about-profile-image">
                    <h1>Tyler Keesee</h1>
                    <div class="typing-container">
                        <span class="typing-text"></span>
                    </div>
                    <div class="tagline">
                        Engineering the Future of Technology - One Line of Code, One Custom PC, One Solution at a Time.
                    </div>
                </div>
                <div class="about-content">
                    <div class="journey-text">
                        I began my journey into technology at the age of 18, teaching myself how to build custom gaming PCs. This early passion for technology ignited my drive to explore software development, web technologies, and system optimization. Through self-education and hands-on experience, I have developed a diverse skill set that spans both hardware and software, allowing me to approach technical challenges with a comprehensive understanding of technology.

                        As a self-taught software engineer, I specialize in leveraging AI to deliver efficient, scalable, and innovative solutions. My expertise includes full-stack development, creating robust applications, and solving complex problems across multiple domains. I am fluent in a wide range of programming languages, including Go, Rust, Java, C++, Python, JavaScript, HTML, and CSS. By integrating cutting-edge AI tools into my workflow, I can accelerate coding, debugging, and optimization, enabling me to deliver results faster and with greater precision.

                        With a focus on solving real-world problems, I bring both creativity and technical depth to every project. My approach combines the power of AI with my versatile technical knowledge to create impactful and scalable solutions tailored to modern challenges.
                    </div>
                </div>
            </div>
        `;
        
        const window = this.createWindow('About Me', content);
        
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
        
        function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            const typingElement = window.querySelector('.typing-text');
            if (typingElement) {
                typingElement.textContent = letter;
                typingElement.style.borderRight = "0.2em solid var(--accent-color)";

                if (letter.length === currentText.length) {
                    setTimeout(() => {
                        count++;
                        index = 0;
                        type();
                    }, 2000);
                } else {
                    setTimeout(type, 100);
                }
            }
        }
        
        type();
    }

    createProjectsWindow() {
        const content = this.projects.map(project => `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <div class="tech-stack">
                    ${project.tech ? project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('') : ''}
                </div>
            </div>
        `).join('');
        
        this.createWindow('Projects', content);
    }

    createContactWindow() {
        const content = `
            <div class="contact-window">
                <div class="contact-links">
                    <a href="mailto:keeseetyler@yahoo.com" class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>keeseetyler@yahoo.com</span>
                    </a>
                    <a href="https://github.com/Tyler1201623" target="_blank" class="contact-item">
                        <i class="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/tyler-keesee-677baa326/" target="_blank" class="contact-item">
                        <i class="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        `;
        this.createWindow('Contact', content);
    }

    initializeDesktop() {
        this.projects = [
            {
                id: 'about-me',
                title: 'About Me',
                image: 'Picture Of Me/302094755_5812631322161322_4653173079054672043_n.jpg',
                description: 'Software Engineer specializing in full-stack development and innovative solutions'
            },
            {
                id: 'account-login',
                title: 'Account Login System',
                image: 'Projects/Account Login System/Screenshot 2024-11-27 161008.png',
                tech: ['Node.js', 'Express', 'MongoDB', 'Security']
            },
            {
                id: 'automated-trading',
                title: 'Automated Trading',
                image: 'Projects/Automated Trading/Screenshot 2024-11-13 153847.png',
                tech: ['Python', 'APIs', 'Data Analysis']
            },
            {
                id: 'budget-tracking',
                title: 'Budget Tracking',
                image: 'Projects/Budget Tracking/Screenshot 2024-11-26 045154.png',
                tech: ['JavaScript', 'Charts.js']
            },
            {
                id: 'crypto-tracker',
                title: 'Crypto Price Tracker',
                image: 'Projects/Crypto Price Tracker/Screenshot 2024-11-13 185702.png',
                tech: ['React', 'Crypto APIs']
            },
            {
                id: 'electrical-engineering',
                title: 'Electrical Engineering Platform',
                image: 'Projects/Electrical Engineering Platform/Screenshot 2024-11-13 182047.png',
                tech: ['HTML5', 'CSS3', 'JavaScript']
            },
            {
                id: 'file-analyzer',
                title: 'File Analyzer',
                image: 'Projects/File Analyzer/Screenshot 2024-11-27 110335.png',
                tech: ['Python', 'File Systems']
            },
            {
                id: 'hard-drive-analyzer',
                title: 'Hard Drive Analyzer',
                image: 'Projects/Hard Drive Analyzer/Screenshot 2024-11-27 112529.png',
                tech: ['C++', 'System APIs']
            },
            {
                id: 'hardware-analyzer',
                title: 'Hardware Analyzer',
                image: 'Projects/Hardware Analyzer/Screenshot 2024-10-30 045323.png',
                tech: ['Python', 'Hardware Integration']
            },
            {
                id: 'notepad',
                title: 'Notepad',
                image: 'Projects/Notepad/Screenshot 2024-11-27 112752.png',
                tech: ['Python', 'Tkinter']
            },
            {
                id: 'object-detection',
                title: 'Object Detection',
                image: 'Projects/Object Detection/Screenshot 2024-11-27 112910.png',
                tech: ['Python', 'OpenCV']
            },
            {
                id: 'secusign',
                title: 'SecuSign',
                image: 'Projects/SecuSign/Screenshot 2024-11-27 161146.png',
                tech: ['Blockchain', 'Web3']
            },
            {
                id: 'soundboard',
                title: 'Soundboard',
                image: 'Projects/Soundboard/Screenshot 2024-11-13 155352.png',
                tech: ['Web Audio API', 'JavaScript']
            },
            {
                id: 'whiffs-contracting',
                title: 'Whiffs Contracting',
                image: 'Projects/Whiffs Contracting/Screenshot_13-11-2024_15504_.jpeg',
                tech: ['React', 'Node.js', 'MongoDB']
            }
        ];

        const desktopIcons = document.querySelector('.desktop-icons');
        desktopIcons.innerHTML = '';

        this.projects.forEach(project => {
            const icon = this.createDesktopIcon(project);
            desktopIcons.appendChild(icon);
        });

        desktopIcons.appendChild(this.createResumeIcon());
    }

    createDesktopIcon(project) {
        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.dataset.window = project.id;
        icon.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <span>${project.title}</span>
            <div class="icon-buttons">
                <a href="${project.website || '#'}" class="website-btn" target="_blank">
                    <i class="fas fa-globe"></i> Visit
                </a>
            </div>
        `;
        return icon;
    }

    createResumeIcon() {
        const icon = document.createElement('div');
        icon.className = 'icon resume-icon';
        icon.innerHTML = `
            <div class="icon-glow"></div>
            <i class="fas fa-file-alt fa-2x"></i>
            <span>Resume</span>
        `;
        
        icon.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = 'resume/Tyler_Keesee_Resume.pdf';
            link.download = 'Tyler_Keesee_Resume.pdf';
            link.click();
        });
        return icon;
    }

    makeDraggable(window) {
        const header = window.querySelector('.window-header');
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;

        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            initialX = e.clientX - window.offsetLeft;
            initialY = e.clientY - window.offsetTop;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
                window.style.left = `${currentX}px`;
                window.style.top = `${currentY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    setupEventListeners() {
        document.querySelectorAll('.icon').forEach(icon => {
            icon.addEventListener('click', () => {
                const projectId = icon.dataset.window;
                if (projectId === 'about-me') {
                    this.createAboutWindow();
                } else {
                    const project = this.projects.find(p => p.id === projectId);
                    if (project) {
                        const content = `
                            <div class="project-window">
                                <img src="${project.image}" alt="${project.title}">
                                <h3>${project.title}</h3>
                                <div class="tech-stack">
                                    ${project.tech ? project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('') : ''}
                                </div>
                            </div>
                        `;
                        this.createWindow(project.title, content);
                    }
                }
            });
        });
    }
}

// Initialize the desktop environment
document.addEventListener('DOMContentLoaded', () => {
    const desktop = new DesktopOS();
});
