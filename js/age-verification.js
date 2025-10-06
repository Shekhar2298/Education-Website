// Age Verification Modal Functionality
class AgeVerification {
    constructor() {
        this.modal = document.getElementById('ageModal');
        this.confirmBtn = document.getElementById('confirmAge');
        this.exitBtn = document.getElementById('exitSite');
        this.verified = localStorage.getItem('ageVerified');
        
        this.init();
    }
    
    init() {
        // Check if user has already confirmed age
        if (!this.verified) {
            this.showModal();
        } else {
            this.hideModal();
        }
        
        // Set up event listeners
        this.confirmBtn.addEventListener('click', () => this.confirmAge());
        this.exitBtn.addEventListener('click', () => this.exitSite());
        
        // Prevent right-click and text selection on modal
        this.modal.addEventListener('contextmenu', (e) => e.preventDefault());
        this.modal.style.userSelect = 'none';
    }
    
    showModal() {
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    hideModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    confirmAge() {
        // Add loading state to button
        const originalText = this.confirmBtn.innerHTML;
        this.confirmBtn.innerHTML = '<span class="loading"></span> Verifying...';
        this.confirmBtn.disabled = true;
        
        // Simulate verification process
        setTimeout(() => {
            localStorage.setItem('ageVerified', 'true');
            this.hideModal();
            
            // Restore button state
            this.confirmBtn.innerHTML = originalText;
            this.confirmBtn.disabled = false;
            
            // Track confirmation (analytics would go here)
            console.log('Age verification confirmed');
        }, 1000);
    }
    
    exitSite() {
        // Redirect to a safe exit page or Google
        window.location.href = 'https://www.google.com';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AgeVerification();
});