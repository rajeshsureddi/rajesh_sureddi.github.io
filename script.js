document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Function to show a specific section
    function showSection(targetId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Add active class to corresponding nav link
        const activeLink = document.querySelector(`a[href="#${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            
            // Update URL hash without scrolling
            history.pushState(null, null, `#${targetId}`);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            showSection(hash);
        } else {
            showSection('about');
        }
    });

    // Initialize based on current URL hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash && document.getElementById(initialHash)) {
        showSection(initialHash);
    } else {
        showSection('about');
    }

    // Profile image placeholder
    const profileImg = document.getElementById('profile-img');
    
    // Create a placeholder if image fails to load
    profileImg.onerror = function() {
        this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        this.innerHTML = 'RS';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.style.color = 'white';
        this.style.fontSize = '48px';
        this.style.fontWeight = '600';
    };

    // Set placeholder initially since we don't have an actual image
    profileImg.onerror();

    // Smooth scrolling for in-page navigation (if needed)
    function smoothScroll(target) {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Add some interactive effects
    const publicationCards = document.querySelectorAll('.publication');
    const researchCards = document.querySelectorAll('.research-area');

    // Add hover effects for publication cards
    publicationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add hover effects for research area cards
    researchCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Interest tags hover effect
    const interestTags = document.querySelectorAll('.interests li');
    interestTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.background = '#3498db';
            this.style.color = 'white';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.background = '#ecf0f1';
            this.style.color = '#2c3e50';
        });
    });

    // Console log for debugging
    console.log('Rajesh Sureddi\'s website loaded successfully!');
});