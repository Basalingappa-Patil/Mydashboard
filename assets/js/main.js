document.addEventListener('DOMContentLoaded', () => {
    // Login functionality
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = loginForm.querySelector('button');
            const originalText = btn.innerText;
            
            // Loading state
            btn.innerText = 'Authenticating...';
            btn.style.opacity = '0.8';
            
            setTimeout(() => {
                // Mock success
                window.location.href = 'dashboard.html';
            }, 1500);
        });
    }

    // Dashboard Animations
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.5s ease-out forwards ${index * 0.1}s`;
    });
});
