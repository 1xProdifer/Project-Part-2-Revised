$(document).ready(function() {
    // Smooth scrolling for navigation
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Toggle visibility of content in 'Evolution' section
    $('#evolution-section').on('click', function() {
        $('.evolution-images').toggle();
        $('.content p').toggle();
    });

    // Change the text color on hover over section headings
    $('h2').hover(function() {
        $(this).css('color', '#f00');
    }, function() {
        $(this).css('color', '#000');
    });
});
