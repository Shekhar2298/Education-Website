// Main JavaScript functionality
class SexEducationApp {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupAccessibility();
        this.setupPerformance();
        this.displayLastUpdated();
    }
    
    setupEventListeners() {
        // Add loading states to buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (btn.classList.contains('btn-loading')) return;
                
                // Add loading state for buttons that might trigger async actions
                if (btn.getAttribute('href') === '#' || !btn.getAttribute('href')) {
                    this.addButtonLoadingState(btn);
                }
            });
        });
        
        // Handle external links
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        });
        
        // Add focus styles for keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
    
    setupAccessibility() {
        // Add skip to content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add ARIA labels where needed
        this.enhanceAccessibility();
    }
    
    enhanceAccessibility() {
        // Add aria-labels to icon buttons
        document.querySelectorAll('.mobile-menu-btn').forEach(btn => {
            btn.setAttribute('aria-label', 'Toggle navigation menu');
        });
        
        // Add aria-current to current page links
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll(`a[href="${currentPage}"]`).forEach(link => {
            link.setAttribute('aria-current', 'page');
        });
    }
    
    setupPerformance() {
        // Lazy load images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
    
    addButtonLoadingState(button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<span class="loading"></span> Loading...';
        button.classList.add('btn-loading');
        button.disabled = true;
        
        // Simulate loading completion (replace with actual async operation)
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('btn-loading');
            button.disabled = false;
        }, 2000);
    }
    
    displayLastUpdated() {
        const lastUpdated = document.getElementById('lastUpdated');
        if (lastUpdated) {
            lastUpdated.textContent = new Date().toLocaleDateString();
        }
    }
    
    // Utility function to show emergency resources
    showEmergencyResources() {
        const crisisSection = document.getElementById('resources');
        if (crisisSection) {
            crisisSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Utility function to track user engagement (for analytics)
    trackEvent(category, action, label) {
        // This would integrate with Google Analytics or similar
        console.log(`Tracking: ${category}, ${action}, ${label}`);
        
        // Example implementation:
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }
}

// CSS for keyboard navigation and skip link
const additionalStyles = `
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--emergency-red);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 10000;
    transition: top 0.3s;
}

.skip-link:focus {
    top: 6px;
}

.keyboard-navigation *:focus {
    outline: 2px solid var(--secondary-blue);
    outline-offset: 2px;
}

.btn-loading {
    pointer-events: none;
    opacity: 0.7;
}
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new SexEducationApp();
    
    // Track page view
    if (typeof window.ga !== 'undefined') {
        window.ga('send', 'pageview');
    }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SexEducationApp;
}