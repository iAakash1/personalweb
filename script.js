// Fade-in Animation on Scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.style.opacity = '1';
        }
    });
});

// Back-to-Top Button
window.addEventListener('scroll', () => {
    const topButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Project Modal
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'flex';
    // Dummy project data, replace with dynamic data if needed
    document.getElementById('modal-title').innerText = 'Project ' + projectId;
    document.getElementById('modal-description').innerText = 'Detailed description for project ' + projectId;
    document.getElementById('modal-link').href = '#';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}

// GSAP Animation for Hero Text
gsap.from('.hero-text', { duration: 1.5, y: -50, opacity: 0, ease: 'bounce' });
