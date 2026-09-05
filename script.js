document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown) return;

    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
        dropbtn.classList.toggle('open');
    });

    window.addEventListener('click', (event) => {
        // If the menu is open and the click was outside the dropdown container
        if (dropdownContent.classList.contains('show') && !dropdown.contains(event.target)) {
            dropdownContent.classList.remove('show');
            dropbtn.classList.remove('open');
        }
    });
});
