class ArticlePage {
    constructor() {
        this.init();
    }

    init() {
        this.addScrollAnimation();
        this.addCodeHighlighting();
        this.initProgressBar();
    }

    addScrollAnimation() {
        const sections = document.querySelectorAll('.article-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.6s ease-out';
            observer.observe(section);
        });
    }

    addCodeHighlighting() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            block.style.display = 'block';
            block.style.padding = '1rem';
            block.style.background = 'rgba(0, 0, 0, 0.2)';
            block.style.borderRadius = '8px';
        });
    }

    initProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = `${progress}%`;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ArticlePage();
});
