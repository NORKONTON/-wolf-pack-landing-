// Wolf Pack Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile navbar if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        }
    });
    
    // Play Demo button action
    const playDemoBtn = document.getElementById('playDemo');
    if (playDemoBtn) {
        playDemoBtn.addEventListener('click', function() {
            // For now, show alert. Later link to actual game.
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-info alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-5 z-3';
            alertDiv.style.minWidth = '300px';
            alertDiv.innerHTML = `
                <strong>Coming Soon!</strong> Game demo will be available in March 2026.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            document.body.appendChild(alertDiv);
            
            // Auto dismiss after 5 seconds
            setTimeout(() => {
                if (alertDiv.parentNode) {
                    alertDiv.remove();
                }
            }, 5000);
        });
    }
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe cards and timeline items
    document.querySelectorAll('.card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
    
    // Tokenomics counter animation (example)
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString() + ' WPK';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString() + ' WPK';
            }
        }, 16);
    }
    
    // Uncomment if you want counter animation
    // const totalSupplyElement = document.querySelector('.total-supply');
    // if (totalSupplyElement) {
    //     animateCounter(totalSupplyElement, 1000000000);
    // }
    
    // Current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Telegram link tracking (example)
    document.querySelectorAll('a[href*="t.me"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Telegram link clicked:', this.href);
            // You can add analytics here
        });
    });
    
    // Add current year to footer if not present
    const footerParagraphs = document.querySelectorAll('footer p');
    if (footerParagraphs.length > 0) {
        const lastParagraph = footerParagraphs[footerParagraphs.length - 1];
        if (lastParagraph.textContent.includes('2026')) {
            // Already has year
        } else {
            lastParagraph.innerHTML = lastParagraph.innerHTML.replace('All rights reserved.', `&copy; ${new Date().getFullYear()} Wolf Pack. All rights reserved.`);
        }
    }
});

// Additional helper functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { copyToClipboard };
}