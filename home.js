// Get all the elements with the class name "read-more-btn"
const readMoreButtons = document.querySelectorAll('.read-more-btn');

// Loop through each button and add a click event listener
readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the display of the corresponding popup
        this.nextElementSibling.classList.toggle('show');
    });
});

// Get all the elements with the class name "close-btn"
const closeButtons = document.querySelectorAll('.close-btn');

// Loop through each close button and add a click event listener
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Hide the corresponding popup
        this.parentNode.classList.remove('show');
    });
});
// dynamic data
