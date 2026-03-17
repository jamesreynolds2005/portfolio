document.addEventListener('DOMContentLoaded', () => {
    // Select all the glass panels for the scroll reveal effect
    const panels = document.querySelectorAll('.glass-panel');

    // Create an intersection observer to trigger animations when elements become visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in and slide up when visible
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Optional: unobserve if you only want it to happen once
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,    // 10% of the element must be visible
        rootMargin: '0px 0px -50px 0px'
    });

    // Set initial states for animation and start observing
    panels.forEach((panel, index) => {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(40px)';
        // Stagger the transition speed slightly for a cascading effect
        panel.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${Math.min(index * 0.1, 0.3)}s, 
                                  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${Math.min(index * 0.1, 0.3)}s`;
        observer.observe(panel);
    });

    // Hover effect for the image placeholder (subtle floating)
    const imgPlaceholder = document.querySelector('.hero-image');
    if (imgPlaceholder) {
        document.addEventListener('mousemove', (e) => {
            // Simple parallax effect based on mouse movement
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            imgPlaceholder.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});
