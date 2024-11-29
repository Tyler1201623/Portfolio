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
