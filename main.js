class Portfolio {
    constructor() {
        this.projects = [
            {
                title: 'Billionaire Motivation',
                image: 'Projects/Billionaire Motivation/Screenshot 2025-01-09 221453.png',
                tech: ['JavaScript', 'Motivation', 'Content Management'],
                url: 'https://tyler1201623.github.io/Billionaire-Motivation/'
            },
            {
                title: 'Budget Tracking',
                image: 'Projects/Budget Tracking/Screenshot 2024-11-26 045410.png',
                tech: ['JavaScript', 'Charts.js', 'Financial Analytics'],
                url: 'https://tyler1201623.github.io/Budget-Tracking/'
            },
            {
                title: 'Crypto Price Tracker',
                image: 'Projects/Crypto Price Tracker/Screenshot 2024-11-13 185702.png',
                tech: ['React', 'API Integration', 'Real-time Data'],
                url: 'https://tyler1201623.github.io/Crypto-Price-Tracker/'
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
                title: 'Electrical Engineering Platform',
                image: 'Projects/Electrical Engineering Platform/Screenshot 2024-11-13 182047.png',
                tech: ['React', 'Engineering', 'Educational'],
                url: 'https://tyler1201623.github.io/Electrical-Engineering-Platform/'
            },
            {
                title: 'Object Detection',
                image: 'Projects/Object Detection/Screenshot 2025-01-09 203524.png',
                tech: ['Javascript', 'React', 'Machine Learning'],
                url: 'https://tyler1201623.github.io/Object-Detection/'
            },
            {
                title: 'Productivity Booster',
                image: 'Projects/Productivity Booster/Screenshot 2025-01-09 204129.png',
                tech: ['React', 'Javascript', 'Productivity Tools'],
                url: 'https://tyler1201623.github.io/Productivity-Booster/'
            },
            {
                title: 'PyLearn-IDE',
                image: 'Projects/PyLearn/Screenshot 2025-01-10 064928.png',
                tech: ['Python', 'Educational', 'Interactive Learning'],
                url: 'https://tyler1201623.github.io/PyLearn-IDE/'
            },
            {
                title: 'TypeScript ToDo List',
                image: 'Projects/Type Script To-Do List/Screenshot 2025-01-09 204231.png',
                tech: ['JavaScript', 'React', 'State Management'],
                url: 'https://tyler1201623.github.io/TypeScript-ToDo-List/'
            },
            {
                title: 'Typing Speed Test',
                image: 'Projects/Typing Speed Test/Screenshot 2025-01-07 123535.png',
                tech: ['JavaScript', 'Performance Metrics', 'UI/UX'],
                url: 'https://tyler1201623.github.io/Typing-Speed-Test/'
            },
            {
                title: 'Website URLs',
                image: 'Projects/Website URLS/Screenshot 2025-01-09 221525.png',
                tech: ['JavaScript', 'URL Management', 'Web Development'],
                url: 'https://tyler1201623.github.io/Website-URLS/'
            }
        ];

        this.initializePortfolio();
    }

    initializePortfolio() {
        this.loadProjects();
        this.initTypeWriter();
        this.initScrollAnimation();
        this.initNavigation();
        this.initSkills();
        this.initResumeDownload();
        this.initTimelineAnimation();
        this.initServiceCards();
        this.initProjectAnimations();
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-project', project.title);

        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.url}" target="_blank" class="view-project-btn">
                    <span>View Live Project</span>
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;

        return card;
    }

    loadProjects() {
        const projectGrid = document.querySelector('.project-grid');
        projectGrid.innerHTML = '';
        this.projects.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectGrid.appendChild(projectCard);
        });
    }

    initTypeWriter() {
        const text = document.querySelector('.typing-text');
        const words = [
            'Software Engineer',
            'Full Stack Developer',
            'AI Integration Expert',
            'Machine Learning Engineer',
            'Javascript Developer',
            'AI Solutions Architect',
            'Deep Learning Specialist',
            'NLP Engineer',
            'Python Developer',
            'AI Expert',
            'Rust Developer',
            'Automation Engineer',
            'Go Lang Developer',
            'AI Research Engineer',
            'Tech Innovator'
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
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
        };

        type();
    }

    initScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('section').forEach(section => observer.observe(section));
    }

    initNavigation() {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(link.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    initSkills() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.skill-bar').forEach(bar => {
                        const level = bar.getAttribute('data-level');
                        bar.style.width = `${level}%`;
                        bar.style.opacity = '1';
                    });
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.skills-grid').forEach(grid => {
            observer.observe(grid);
        });
    }

    initTimelineAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `fadeInUp 0.6s ease forwards ${entry.target.dataset.delay || '0s'}`;
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.dataset.delay = `${index * 0.2}s`;
            observer.observe(item);
        });
    }

    initServiceCards() {
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    initProjectAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            observer.observe(card);
        });
    }

    initResumeDownload() {
        document.querySelector('.cta-secondary').addEventListener('click', (e) => {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = 'resume/Tyler_Keesee_Resume.pdf';
            link.download = 'Tyler_Keesee_Resume.pdf';
            link.click();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});
