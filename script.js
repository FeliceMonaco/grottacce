function filterMenu(category) {
    const buttons = document.querySelectorAll('.menu-btn');
    const cards = document.querySelectorAll('.menu-card');

    buttons.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('bg-[#1C3127]', 'text-white');
            btn.classList.remove('bg-white', 'text-[#1C3127]');
        } else {
            btn.classList.remove('bg-[#1C3127]', 'text-white');
            btn.classList.add('bg-white', 'text-[#1C3127]');
        }
    });

    cards.forEach(card => {
        const categories = card.getAttribute('data-categories').split(' ');
        if (category === 'all' || categories.includes(category)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
