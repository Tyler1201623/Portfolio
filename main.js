class Portfolio {
    constructor() {
        this.projects = [
            {
                title: 'Budget Tracking',
                image: 'Projects/Budget Tracking/Screenshot 2024-11-26 045410.png',
                tech: ['JavaScript', 'Charts.js', 'Financial Analytics'],
                url: 'https://tyler1201623.github.io/Budget-Tracking/'
            },
            {
                title: 'Digital Clock',
                image: 'Projects/Digital Clock/Screenshot 2025-01-07 123315.png',
                tech: ['JavaScript', 'HTML5', 'CSS3'],
                url: 'https://tyler1201623.github.io/Digital-Clock/'
            },
            {
                title: 'Donation Link',
                image: 'Projects/Donation Link/Screenshot 2025-01-07 123504.png',
                tech: ['React', 'Payment Integration', 'UI/UX'],
                url: 'https://tyler1201623.github.io/Donation-Link/'
            },
            {
                title: 'Ecom',
                image: 'Projects/Ecom/Screenshot 2025-01-07 123420.png',
                tech: ['React', 'E-commerce', 'State Management'],
                url: 'https://tyler1201623.github.io/Ecom/'
            },
            {
                title: 'Object Detection',
                image: 'Projects/Object Detection/Screenshot 2025-01-09 203524.png',
                tech: ['Python', 'OpenCV', 'Machine Learning'],
                url: 'https://tyler1201623.github.io/Object-Detection/'
            },
            {
                title: 'Productivity Booster',
                image: 'Projects/Productivity Booster/Screenshot 2025-01-09 204129.png',
                tech: ['React', 'TypeScript', 'Productivity Tools'],
                url: 'https://tyler1201623.github.io/Productivity-Booster/'
            },
            {
                title: 'TypeScript ToDo List',
                image: 'Projects/Type Script To-Do List/Screenshot 2025-01-09 204231.png',
                tech: ['TypeScript', 'React', 'State Management'],
                url: 'https://tyler1201623.github.io/TypeScript-ToDo-List/'
            },
            {
                title: 'Typing Speed Test',
                image: 'Projects/Typing Speed Test/Screenshot 2025-01-07 123535.png',
                tech: ['JavaScript', 'Performance Metrics', 'UI/UX'],
                url: 'https://tyler1201623.github.io/Typing-Speed-Test/'
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

        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="tech-stack">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    ${project.url ? `
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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.3 });

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
