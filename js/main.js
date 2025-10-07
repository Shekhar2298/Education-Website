class SexEducationApp{constructor(){this.init()}init(){this.setupEventListeners(),this.setupAccessibility(),this.setupPerformance(),this.displayLastUpdated()}setupEventListeners(){document.querySelectorAll(".btn").forEach(e=>{e.addEventListener("click",t=>{e.classList.contains("btn-loading")||"#"!==e.getAttribute("href")&&e.getAttribute("href")||this.addButtonLoadingState(e)})}),document.querySelectorAll('a[href^="http"]').forEach(e=>{e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")}),document.addEventListener("keydown",e=>{"Tab"===e.key&&document.body.classList.add("keyboard-navigation")}),document.addEventListener("mousedown",()=>{document.body.classList.remove("keyboard-navigation")})}setupAccessibility(){let e=document.createElement("a");e.href="#main-content",e.className="skip-link",e.textContent="Skip to main content",document.body.insertBefore(e,document.body.firstChild),this.enhanceAccessibility()}enhanceAccessibility(){document.querySelectorAll(".mobile-menu-btn").forEach(e=>{e.setAttribute("aria-label","Toggle navigation menu")});let e=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll(`a[href="${e}"]`).forEach(e=>{e.setAttribute("aria-current","page")})}setupPerformance(){if("IntersectionObserver"in window){let e=new IntersectionObserver((t,n)=>{t.forEach(t=>{if(t.isIntersecting){let n=t.target;n.src=n.dataset.src,n.classList.remove("lazy"),e.unobserve(n)}})});document.querySelectorAll("img[data-src]").forEach(t=>{e.observe(t)})}}addButtonLoadingState(e){let t=e.innerHTML;e.innerHTML='<span class="loading"></span> Loading...',e.classList.add("btn-loading"),e.disabled=!0,setTimeout(()=>{e.innerHTML=t,e.classList.remove("btn-loading"),e.disabled=!1},2e3)}displayLastUpdated(){let e=document.getElementById("lastUpdated");e&&(e.textContent=new Date().toLocaleDateString())}showEmergencyResources(){let e=document.getElementById("resources");e&&e.scrollIntoView({behavior:"smooth"})}trackEvent(e,t,n){console.log(`Tracking: ${e}, ${t}, ${n}`),"undefined"!=typeof gtag&&gtag("event",t,{event_category:e,event_label:n})}}const additionalStyles=`
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
`,styleSheet=document.createElement("style");styleSheet.textContent=additionalStyles,document.head.appendChild(styleSheet),document.addEventListener("DOMContentLoaded",()=>{new SexEducationApp,void 0!==window.ga&&window.ga("send","pageview")}),"undefined"!=typeof module&&module.exports&&(module.exports=SexEducationApp);