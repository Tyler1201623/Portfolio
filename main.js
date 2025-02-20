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
                title: 'Habit Flow | Track Your Success',
                image: 'Projects/Habit Tracker/Screenshot_11-1-2025_64948_.jpeg',
                tech: ['JavaScript', 'Habit Tracking', 'Data Visualization'],
                url: 'https://tyler1201623.github.io/Habit-Tracker/'
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
                title: 'Recipe Master',
                image: 'Projects/Recipe Master/Screenshot 2025-02-14 035417.png',
                tech: ['JavaScript', 'Recipe API', 'UI/UX Design'],
                url: 'https://tyler1201623.github.io/Recipe-Master/'
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

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <button class="view-project-btn" onclick="window.open('${project.url}', '_blank')">
                    <span>View Live Project</span>
                    <i class="fas fa-external-link-alt"></i>
                </button>
            </div>
        `;
        
        return card;
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

    initTypeWriter() {
        const text = document.querySelector('.typing-text');
        const words = [
            'Self-Taught Developer',
            'Full Stack Developer',
            'AI Integration Expert',
            'Machine Learning Engineer',
            'Javascript Developer',
            'AI Solutions Architect',
            'Deep Learning Specialist',
            'Python Developer',
            'AI Expert',
            'Rust Developer',
            'Automation Engineer',
            'Go Lang Developer',
            'Tech Innovator'
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentWord = words[wordIndex];
            const isMobile = window.innerWidth <= 480;
            
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
                // Adjust timing for mobile
                if (isMobile) {
                    setTimeout(type, isDeleting ? 30 : 80);
                } else {
                    setTimeout(type, isDeleting ? 50 : 100);
                }
            }
        };

        type();
    }

    loadProjects() {
        const projectGrid = document.querySelector('.project-grid');
        projectGrid.innerHTML = '';
        this.projects.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectGrid.appendChild(projectCard);
        });
    }

    initProjectFilters() {
        const filters = document.querySelectorAll('.filter-btn');
        filters.forEach(filter => {
            filter.addEventListener('click', () => {
                const category = filter.dataset.filter;
                this.filterProjects(category);
            });
        });
    }

    filterProjects(category) {
        const projects = document.querySelectorAll('.project-card');
        projects.forEach(project => {
            if (category === 'all' || project.dataset.category === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }
}

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.initThemeToggle();
    }

    initThemeToggle() {
        const toggle = document.querySelector('.theme-toggle');
        if (!toggle) return;

        // Set initial icon
        this.updateThemeIcon(toggle);
        
        toggle.addEventListener('click', () => {
            this.toggleTheme();
            this.updateThemeIcon(toggle);
        });
        
        this.applyTheme();
    }

    updateThemeIcon(toggle) {
        const icon = toggle.querySelector('i');
        icon.className = `fas ${this.theme === 'dark' ? 'fa-moon' : 'fa-sun'}`;
        
        // Update wrapper background
        const wrapper = toggle.parentElement;
        wrapper.style.background = this.theme === 'dark' 
            ? 'rgba(13, 13, 43, 0.8)' 
            : 'rgba(255, 255, 255, 0.9)';
    }

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
    }
}

// Performance Optimizations
class PerformanceOptimizer {
    constructor() {
        this.initIntersectionObserver();
        this.initImageLazyLoading();
        this.debouncedResize();
        this.initNetworkStatus();
    }

    initIntersectionObserver() {
        // Use a single observer for all animations
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Unobserve after animation
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        // Observe all animated elements
        document.querySelectorAll('.animate-on-scroll').forEach(
            el => this.observer.observe(el)
        );
    }

    initImageLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    debouncedResize() {
        let timeout;
        window.addEventListener('resize', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                // Handle resize events
                this.handleResize();
            }, 250);
        });
    }

    initNetworkStatus() {
        window.addEventListener('online', this.handleNetworkChange);
        window.addEventListener('offline', this.handleNetworkChange);
    }

    handleNetworkChange(event) {
        const status = event.type === 'online';
        // Show network status toast
        this.showToast(`You are ${status ? 'online' : 'offline'}`);
    }

    showToast(message) {
        // Implement toast notification
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    handleResize() {
        // Update any necessary responsive elements
        document.documentElement.style.setProperty(
            '--vh', 
            `${window.innerHeight * 0.01}px`
        );
    }
}

// Error Handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Implement error reporting service here
});

// Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
        }, 0);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    new Portfolio();
    new ThemeManager();
    new PerformanceOptimizer();
    new PortfolioEnhancements();
    new TestimonialCarousel();
    // Remove redundant initLazyLoading call since it's now part of PerformanceOptimizer
});

function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    
    // Toggle menu
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Handle link clicks
    links.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Performance optimization
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll handlers
const optimizedScroll = debounce(() => {
    // Your scroll handling code
}, 16);

window.addEventListener('scroll', optimizedScroll, { passive: true });

class PortfolioEnhancements {
    constructor() {
        this.initMicroInteractions();
        this.initLearningSection();
    }

    initMicroInteractions() {
        // Add hover effects to cards
        document.querySelectorAll('.hover-lift').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-5px)';
                element.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
            });
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateY(0)';
                element.style.boxShadow = 'none';
            });
        });
    }

    initLearningSection() {
        const updateLearning = () => {
            const learningList = document.querySelector('.learning-card ul');
            if (learningList) {
                const newItem = document.createElement('li');
                newItem.textContent = 'New Technology Learned';
                newItem.style.opacity = '0';
                learningList.appendChild(newItem);
                setTimeout(() => newItem.style.opacity = '1', 100);
            }
        };
        
        // Simplified production check without using process.env
        if (window.location.hostname !== 'localhost' && 
            window.location.hostname !== '127.0.0.1') {
            setInterval(updateLearning, 604800000); // 7 days in milliseconds
        }
    }
}

class TestimonialCarousel {
    constructor() {
        this.testimonials = document.querySelector('.testimonials');
        this.cards = this.testimonials?.children;
        this.currentIndex = 0;
        this.isAnimating = false;
        
        if (this.cards?.length > 1) {
            this.initCarousel();
        }
    }

    initCarousel() {
        setInterval(() => this.nextTestimonial(), 5000);
        this.addSwipeSupport();
    }

    nextTestimonial() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const current = this.cards[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        const next = this.cards[this.currentIndex];

        current.style.transform = 'translateX(-100%)';
        next.style.transform = 'translateX(0)';
        
        setTimeout(() => {
            current.style.transform = '';
            this.isAnimating = false;
        }, 500);
    }

    addSwipeSupport() {
        let touchStartX = 0;
        
        this.testimonials.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.testimonials.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                this.nextTestimonial();
            }
        }, { passive: true });
    }
}