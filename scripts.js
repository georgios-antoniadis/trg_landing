document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.doc-sidebar a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            links.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
});