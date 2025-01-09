class Portfolio {
    constructor() {
        this.projects = [
            {
                title: 'Account Login System',
                image: 'Projects/Account Login System/Screenshot 2024-11-27 161008.png',
                tech: ['Node.js', 'Express', 'MongoDB', 'Security'],
                url: 'https://tyler1201623.github.io/Account-Login-System/'
            },
            {
                title: 'Automated Trading',
                image: 'Projects/Automated Trading/Screenshot 2024-11-13 153847.png',
                tech: ['Python', 'APIs', 'Data Analysis'],
                url: 'https://tyler1201623.github.io/Automated-Trading/'
            },
            {
                title: 'Budget Tracking',
                image: 'Projects/Budget Tracking/Screenshot 2024-11-26 045410.png',
                tech: ['JavaScript', 'Charts.js'],
                url: 'https://tyler1201623.github.io/Budget-Tracking/'
            },
            {
                title: 'Crypto Price Tracker',
                image: 'Projects/Crypto Price Tracker/Screenshot 2024-11-13 185702.png',
                tech: ['React', 'Crypto APIs', 'Real-time Data'],
                url: 'https://tyler1201623.github.io/Crypto-Tracker/'
            },
            {
                title: 'Notepad',
                image: 'Projects/Notepad/Screenshot 2024-11-27 112752.png',
                tech: ['Python', 'Tkinter'],
                url: 'https://tyler1201623.github.io/Notepad/'
            },
            {
                title: 'Electrical Engineering Platform',
                image: 'Projects/Electrical Engineering Platform/Screenshot 2024-11-13 182047.png',
                tech: ['HTML5', 'CSS3', 'JavaScript'],
                url: 'https://tyler1201623.github.io/Electrical-Engineering/'
            },
            {
                title: 'Object Detection',
                image: 'Projects/Object Detection/Screenshot 2024-11-27 112910.png',
                tech: ['Python', 'OpenCV', 'Machine Learning'],
                url: 'https://tyler1201623.github.io/Object-Detection/'
            },
            {
                title: 'Whiffs Contracting',
                image: 'Projects/Whiffs Contracting/Screenshot_13-11-2024_15504_.jpeg',
                tech: ['React', 'Node.js', 'MongoDB']
            }
        ];
        this.loadProjects();
        this.initTypeWriter();
        this.initScrollAnimation();
        this.initNavigation();
        this.initSkillBars();
        this.initResumeDownload();
        this.initTimelineAnimation();
        this.initServiceCards();
    }

    initTimelineAnimation() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `fadeInUp 0.6s ease forwards ${entry.target.dataset.delay || '0s'}`;
                }
            });
        }, { threshold: 0.2 });

        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.dataset.delay = `${index * 0.2}s`;
            observer.observe(item);
        });
    }

    initServiceCards() {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    loadProjects() {
        const projectGrid = document.querySelector('.project-grid');
        this.projects.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectGrid.appendChild(projectCard);
        });
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-project', project.title);

        const hideButtonProjects = [
            'Account Login System',
            'Automated Trading',
            'Whiffs Contracting'
        ];

        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="tech-stack">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    ${!hideButtonProjects.includes(project.title) && project.url ? `
                        <a href="${project.url}" target="_blank" class="view-project-btn">
                            <span>View Live Project</span>
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
            <h3>${project.title}</h3>
        `;
        return card;
    }

    initTypeWriter() {
        const text = document.querySelector('.typing-text');
        const words = [
            'Software Engineer',
            'Full Stack Developer',
            'AI Integration Expert',
            'Machine Learning Engineer',
            'Javascript',
            'AI Solutions Architect',
            'Deep Learning Specialist',
            'NLP Engineer',
            'Python Developer',
            'Rust',
            'Automation Engineer',
            'Go Lang',
            'AI Research Engineer',
            'Tech Innovator'
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                text.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                text.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }

        type();
    }

    initScrollAnimation() {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    initNavigation() {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            const progress = bar.querySelector('.skill-progress');
            if (progress) {
                progress.style.width = '0%';
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            progress.style.width = `${level}%`;
                        }
                    });
                }, { threshold: 0.5 });

                observer.observe(bar);
            }
        });
    }

    initResumeDownload() {
        const resumeButton = document.querySelector('.cta-secondary');
        resumeButton.addEventListener('click', (e) => {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = 'resume/Tyler_Keesee_Resume.pdf';
            link.download = 'Tyler_Keesee_Resume.pdf';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});
