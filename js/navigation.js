// Navigation and Smooth Scrolling Functionality
class Navigation {
    constructor() {
        this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.mainNav = document.getElementById('mainNav');
        this.navLinks = document.querySelectorAll('nav a');
        this.sections = document.querySelectorAll('section');
        
        this.init();
    }
    
    init() {
        // Mobile menu toggle
        if (this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Smooth scrolling for navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
        
        // Active navigation based on scroll position
        window.addEventListener('scroll', () => this.updateActiveNav());
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => this.handleClickOutside(e));
    }
    
    toggleMobileMenu() {
        this.mainNav.classList.toggle('active');
        this.mobileMenuBtn.innerHTML = this.mainNav.classList.contains('active') ? '✕' : '☰';
    }
    
    handleNavClick(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#' || !targetId.startsWith('#')) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (this.mainNav.classList.contains('active')) {
                this.toggleMobileMenu();
            }
            
            // Smooth scroll to target
            this.scrollToElement(targetElement);
        }
    }
    
    scrollToElement(element) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
    
    updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.setActiveNav(sectionId);
            }
        });
    }
    
    setActiveNav(sectionId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    handleClickOutside(e) {
        if (!this.mainNav.contains(e.target) && 
            !this.mobileMenuBtn.contains(e.target) && 
            this.mainNav.classList.contains('active')) {
            this.toggleMobileMenu();
        }
    }
}

// Enhanced smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize navigation
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});