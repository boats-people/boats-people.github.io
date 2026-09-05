const dropdown = document.querySelector('.dropdown');

if (dropdown) {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    document.addEventListener('click', function(event) {
        // Check if the click was on or inside the button
        if (dropbtn.contains(event.target)) {
            // If so, toggle the menu's visibility
            dropdownContent.classList.toggle('show');
            dropbtn.classList.toggle('open');
        } 
        // Otherwise, check if the click was outside the entire dropdown container
        else if (!dropdown.contains(event.target)) {
            // If the menu is open, close it
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                dropbtn.classList.remove('open');
            }
        }
        // If the click is inside the dropdown but not on the button (e.g., on a link),
        // nothing happens, and the link click proceeds as normal.
    });
}
