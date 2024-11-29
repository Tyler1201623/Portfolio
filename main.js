<<<<<<< HEAD
  // Initialize AOS
  AOS.init({
      duration: 1000,
      once: true
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

          document.querySelector('.typing-text').textContent = letter;
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
          description: "Secure authentication system with advanced user management"
      },
      {
          title: "Automated Trading",
          image: "Projects/Automated Trading/Screenshot 2024-11-13 153847.png",
          description: "Algorithmic trading platform with real-time market analysis"
      },
      {
          title: "Budget Tracking",
          image: "Projects/Budget Tracking/Screenshot 2024-11-26 045154.png",
          description: "Personal finance management system"
      },
      {
          title: "Crypto Price Tracker",
          image: "Projects/Crypto Price Tracker/Screenshot 2024-11-13 185702.png",
          description: "Real-time cryptocurrency price monitoring"
      },
      {
          title: "Electrical Engineering Platform",
          image: "Projects/Electrical Engineering Platform/Screenshot 2024-11-13 182047.png",
          description: "Educational platform for electrical engineering concepts"
      },
      {
          title: "File Analyzer",
          image: "Projects/File Analyzer/Screenshot 2024-11-27 110335.png",
          description: "Advanced file analysis and management tool"
      },
      {
          title: "Hard Drive Analyzer",
          image: "Projects/Hard Drive Analyzer/Screenshot 2024-11-27 112529.png",
          description: "Disk space analysis and optimization tool"
      },
      {
          title: "Hardware Analyzer",
          image: "Projects/Hardware Analyzer/Screenshot 2024-10-30 045323.png",
          description: "System hardware diagnostics and monitoring"
      },
      {
          title: "Notepad",
          image: "Projects/Notepad/Screenshot 2024-11-27 112752.png",
          description: "Enhanced text editor with advanced features"
      },
      {
          title: "Object Detection",
          image: "Projects/Object Detection/Screenshot 2024-11-27 112910.png",
          description: "Real-time object detection using computer vision"
      },
      {
          title: "SecuSign",
          image: "Projects/SecuSign/Screenshot 2024-11-27 161146.png",
          description: "Digital signature and document security platform"
      },
      {
          title: "Soundboard",
          image: "Projects/Soundboard/Screenshot 2024-11-13 155352.png",
          description: "Interactive audio mixing and playback system"
      },
      {
          title: "Whiffs Contracting",
          image: "Projects/Whiffs Contracting/Screenshot_13-11-2024_15504_.jpeg",
          description: "Construction company management platform"
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

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
      typingEffect();
      populateProjects();
  });

// Add this to your existing main.js
let lastScroll = 0;
const nav = document.querySelector('.nav-glass');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down - hide nav
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show nav
        nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});
=======
(function() {
    'use strict';

    // Initialize AOS with enhanced settings
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });

    // Enhanced typing effect with advanced animations
    (function typingEffect() {
        const texts = ["Self Educated", "Software Engineer", "Full Stack Developer", "Web Developer", "PC Builder", "Tech Enthusiast", "Problem Solver", "UI/UX Enthusiast", "CyberSecurity Enthusiast", "Data Analyst", "Creative Thinker", "Team Player"];
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";

        function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);
            
            const typingElement = document.querySelector(".typing-text");
            typingElement.textContent = letter;
            typingElement.style.borderRight = "0.2em solid var(--accent-color)";
            
            if (letter.length === currentText.length) {
                typingElement.style.animation = "pulse 1s infinite";
                count++;
                index = 0;
                setTimeout(type, 2000);
            } else {
                setTimeout(type, 100);
            }
        }
        type();
    })();

    // Project data with placeholder links maintained
    const projects = [
        {
            title: "Account Login System",
            description: "Secure authentication system with user management capabilities",
            tech: ["Python", "Security", "Database", "Authentication"],
            images: [],
            github: "#",
            live: "#"
        },
        {
            title: "Automated Trading",
            description: "Advanced trading automation system with real-time market analysis",
            tech: ["Python", "APIs", "Algorithmic Trading", "Data Analysis"],
            images: [
                "Projects/Automated Trading/Screenshot 2024-11-13 153847.png",
                "Projects/Automated Trading/Screenshot 2024-11-13 153901.png",
                "Projects/Automated Trading/Screenshot 2024-11-13 154019.png"
            ],
            github: "#",
            live: "#"
        },
        {
            title: "Budget Tracking",
            description: "Personal finance management tool with expense tracking and visualization",
            tech: ["JavaScript", "React", "Charts.js", "Database"],
            images: [
                "Projects/Budget Tracking/Screenshot 2024-11-26 045154.png",
                "Projects/Budget Tracking/Screenshot 2024-11-26 045410.png"
            ],
            github: "#",
            live: "#"
        },
        {
            title: "Crypto Price Tracker",
            description: "Real-time cryptocurrency price monitoring and analysis platform",
            tech: ["React", "Crypto APIs", "WebSocket", "Data Visualization"],
            images: ["Projects/Crypto Price Tracker/Screenshot 2024-11-13 185702.png"],
            github: "#",
            live: "#"
        },
        {
            title: "Ecom",
            description: "Full-featured e-commerce platform with shopping cart and payment integration",
            tech: ["React", "Node.js", "MongoDB", "Payment APIs"],
            images: [],
            github: "#",
            live: "#"
        },
        {
            title: "Electrical Engineering Platform",
            description: "Educational platform for electrical engineering concepts and calculations",
            tech: ["HTML5", "CSS3", "JavaScript", "Engineering Tools"],
            images: ["Projects/Electrical Engineering Platform/Screenshot 2024-11-13 182047.png"],
            github: "#",
            live: "#"
        },
        {
            title: "File Analyzer",
            description: "Advanced file analysis and management system",
            tech: ["Python", "File Processing", "Data Analysis"],
            images: ["Projects/File Analyzer/Screenshot 2024-11-27 110335.png"],
            github: "#",
            live: "#"
        },
        {
            title: "Hard Drive Analyzer",
            description: "Storage analysis and optimization tool",
            tech: ["Python", "System Analysis", "Storage Management"],
            images: ["Projects/Hard Drive Analyzer/Screenshot 2024-11-27 112529.png"],
            github: "#",
            live: "#"
        },
        {
            title: "Hardware Analyzer",
            description: "System hardware analysis and benchmarking tool",
            tech: ["Python", "Hardware APIs", "System Analysis"],
            images: ["Projects/Hardware Analyzer/Screenshot 2024-10-30 045323.png"],
            github: "#",
            live: "#"
        },
        {
            title: "Notepad Application",
            description: "Feature-rich text editing application",
            tech: ["Python", "GUI", "File I/O"],
            images: ["Projects/Notepad/Screenshot 2024-11-27 112752.png"],
            github: "#",
            live: "#"
        },
        {
            title: "Object Detection",
            description: "Real-time object detection and recognition system",
            tech: ["Python", "Computer Vision", "Machine Learning"],
            images: ["Projects/Object Detection/Screenshot 2024-11-27 112910.png"],
            github: "#",
            live: "#"
        },
        {
            title: "Parents 25TH Anniversary",
            description: "Custom website celebrating parents' 25th wedding anniversary",
            tech: ["HTML", "CSS", "JavaScript", "Animation"],
            images: ["Projects/Parents 25TH Anniversary/Screenshot_13-11-2024_155114_.jpeg"],
            github: "#",
            live: "#"
        },
        {
            title: "SecuSign",
            description: "Digital signature and document security platform",
            tech: ["Cryptography", "Document Processing", "Security"],
            images: [],
            github: "#",
            live: "#"
        },
        {
            title: "Soundboard",
            description: "Custom soundboard application with audio manipulation features",
            tech: ["JavaScript", "Web Audio API", "UI/UX Design"],
            images: ["Projects/Soundboard/Screenshot 2024-11-13 155352.png"],
            github: "#",
            live: "#"
        },
        {
            title: "Visionary Board",
            description: "Interactive visualization and planning platform",
            tech: ["JavaScript", "Canvas", "Interactive Design"],
            images: [],
            github: "#",
            live: "#"
        },
        {
            title: "Whiffs Contracting",
            description: "Professional website for contracting business with portfolio showcase",
            tech: ["React", "Responsive Design", "SEO", "Contact Forms"],
            images: ["Projects/Whiffs Contracting/Screenshot_13-11-2024_15504_.jpeg"],
            github: "#",
            live: "#"
        }
    ];

    // Enhanced skills data with proficiency levels
    const skills = [
        "JavaScript", "Python", "React", "Node.js", "TypeScript",
        "AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL",
        "GraphQL", "REST APIs", "CI/CD", "Git", "Agile"
    ];

    const skillLevels = [90, 85, 80, 75, 70, 65, 60, 55, 75, 70, 65, 80, 70, 85, 80];

    // Improved theme toggle with smooth transitions
    (function themeToggle() {
        const themeToggleButton = document.querySelector('.theme-toggle');
        if (themeToggleButton) {
            themeToggleButton.addEventListener('click', () => {
                document.body.classList.toggle('light-mode');
                const themeIcon = themeToggleButton.querySelector('i');
                themeIcon.classList.toggle('fa-moon');
                themeIcon.classList.toggle('fa-sun');
                localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
            });
        }
    })();

    // Enhanced project population with improved image handling
    (function populateProjects() {
        const projectGrid = document.querySelector('.project-grid');
        if (projectGrid) {
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.setAttribute('data-aos', 'fade-up');

                const imageSlider = project.images.map(img => `
                    <img src="${img}" alt="${project.title}" class="project-image" loading="lazy">
                `).join('');

                projectCard.innerHTML = `
                    <div class="project-images">
                        ${imageSlider}
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="project-btn">View Code</a>
                        <a href="${project.live}" target="_blank" class="project-btn">Live Demo</a>
                    </div>
                `;
                projectGrid.appendChild(projectCard);
            });
        }
    })();

    // Populate skills
    (function populateSkills() {
        const skillsContainer = document.querySelector('.skills-container');
        if (skillsContainer) {
            skills.forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.setAttribute('data-aos', 'fade-up');
                skillItem.textContent = skill;
                skillsContainer.appendChild(skillItem);
            });
        }
    })();

    // Form handling
    (function formHandling() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Message sent successfully!');
                this.reset();
            });
        }
    })();

    // Smooth scrolling for navigation
    (function smoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    })();

    // Initialize particlesJS
    (function particlesJSInit() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS.load('particles-js', {
                particles: {
                    number: { value: 80 },
                    color: { value: '#0984e3' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.5 },
                    size: { value: 3 },
                    move: { speed: 2 }
                }
            });
        }
    })();

    // Initialize skill chart
    (function initSkillChart() {
        const skillsChartElement = document.getElementById('skillsChart');
        if (skillsChartElement && typeof Chart !== 'undefined') {
            const ctx = skillsChartElement.getContext('2d');
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: skills,
                    datasets: [{
                        data: skillLevels,
                        backgroundColor: 'rgba(9, 132, 227, 0.4)',
                        borderColor: '#0984e3'
                    }]
                },
                options: {
                    scales: {
                        r: {
                            beginAtZero: true,
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }
                }
            });
        }
    })();

    // Custom cursor
    (function customCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', e => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    })();

    // Initialize LocomotiveScroll
    (function initLocomotiveScroll() {
        if (typeof LocomotiveScroll !== 'undefined') {
            new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                multiplier: 0.8
            });
        }
    })();

    // Enhanced project filtering with active state
    (function projectFiltering() {
        const filters = ['All', 'Web', 'Python', 'Engineering'];
        const filterContainer = document.querySelector('.filter-container');
        const projectGrid = document.querySelector('.project-grid');

        if (filterContainer && projectGrid) {
            filters.forEach(filter => {
                const button = document.createElement('button');
                button.textContent = filter;
                button.className = filter === 'All' ? 'active' : '';
                button.addEventListener('click', (e) => {
                    document.querySelectorAll('.filter-container button').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    filterProjects(filter);
                });
                filterContainer.appendChild(button);
            });

            function filterProjects(category) {
                const projectCards = projectGrid.querySelectorAll('.project-card');
                projectCards.forEach(card => {
                    const techStack = card.querySelector('.tech-stack').textContent;
                    if (category === 'All' || techStack.includes(category)) {
                        card.style.display = '';
                        card.style.animation = 'fadeIn 0.5s ease-in-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        }
    })();

    // Add 3D tilt effect to project cards
    (function addTiltEffect() {
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(document.querySelectorAll(".project-card"), {
                max: 15,
                speed: 400,
                glare: true,
                "max-glare": 0.5
            });
        }
    })();

    // Add infinite scroll gallery for project images
    (function infiniteScrollGallery() {
        if (typeof InfiniteScroll !== 'undefined') {
            const galleries = document.querySelectorAll('.project-images');
            galleries.forEach(gallery => {
                new InfiniteScroll(gallery, {
                    path: '.pagination__next',
                    append: '.project-image',
                    history: false
                });
            });
        }
    })();

    // Smooth transitions between sections
    (function smoothTransitions() {
        if (typeof LocomotiveScroll !== 'undefined') {
            new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                lerp: 0.05
            });
        }
    })();

})();
>>>>>>> 44984e978107a4a7218fd56b94af4611e74ab48b
