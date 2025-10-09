// Navigation.js
class Navigation {
  constructor() {
    this.mobileMenuBtn = document.getElementById("mobileMenuBtn");
    this.mainNav = document.getElementById("mainNav");
    this.navLinks = document.querySelectorAll("nav a");
    this.sections = document.querySelectorAll("section");
    this.init();
  }

  init() {
    // Mobile menu toggle
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener("click", () => this.toggleMobileMenu());
    }

    // Navigation link clicks
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (event) => this.handleNavClick(event));
    });

    // Scroll event to update active link
    window.addEventListener("scroll", () => this.updateActiveNav());

    // Close mobile menu if clicking outside
    document.addEventListener("click", (event) => this.handleClickOutside(event));
  }

  toggleMobileMenu() {
    this.mainNav.classList.toggle("active");
    this.mobileMenuBtn.innerHTML = this.mainNav.classList.contains("active") ? "✕" : "☰";
  }

  handleNavClick(event) {
    const href = event.currentTarget.getAttribute("href");

    // Only handle internal links starting with #
    if (href.startsWith("#")) {
      event.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        // Close mobile menu if open
        if (this.mainNav.classList.contains("active")) this.toggleMobileMenu();

        this.scrollToElement(targetEl);
      }
    }
    // External/page links will navigate normally
  }

  scrollToElement(el) {
    const headerHeight = document.querySelector("header").offsetHeight;
    const top = el.offsetTop - headerHeight - 20; // 20px extra spacing
    window.scrollTo({ top, behavior: "smooth" });
  }

  updateActiveNav() {
    const scrollPos = window.scrollY + 100; // Adjust for header offset
    this.sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.clientHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        this.setActiveNav(id);
      }
    });
  }

  setActiveNav(id) {
    this.navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${id}`) {
        link.classList.add("active");
      }
    });
  }

  handleClickOutside(event) {
    if (
      !this.mainNav.contains(event.target) &&
      !this.mobileMenuBtn.contains(event.target) &&
      this.mainNav.classList.contains("active")
    ) {
      this.toggleMobileMenu();
    }
  }
}

// Initialize navigation after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Navigation();
});
