// Structured Data for SEO
class StructuredData {
    static generateWebsiteSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Sex Education For All",
            "url": "https://sexeduforall.duckdns.org/",
            "description": "Comprehensive, evidence-based sex education resources",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sexeduforall.duckdns.org/?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        };
    }

    static generateOrganizationSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sex Education For All",
            "url": "https://sexeduforall.duckdns.org/",
            "logo": "https://sexeduforall.duckdns.org/images/logo.png",
            "description": "Educational organization providing comprehensive sex education",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@sexeduforall.duckdns.org"
            }
        };
    }

    static generateFAQSchema(questions) {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": questions.map(q => ({
                "@type": "Question",
                "name": q.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.answer
                }
            }))
        };
    }
}

// Auto-inject structured data
document.addEventListener('DOMContentLoaded', function() {
    const structuredData = [];
    
    // Add website schema
    structuredData.push(StructuredData.generateWebsiteSchema());
    
    // Add organization schema
    structuredData.push(StructuredData.generateOrganizationSchema());
    
    // Inject into page
    structuredData.forEach(data => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
    });
});