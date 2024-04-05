     
var splide = new splide( '.splide', {
type   : 'loop',
perPage: 3,
perMove: 1,
} );

splide.mount();

document.addEventListener('DOMContentLoaded', function () {
    new splide('.splide', {
        // Define breakpoints
        breakpoints: {
            600: {
                perPage: 1,
            },
            800: {
                perPage: 2,
            },
            1000: {
                perPage: 3,
            }
        },
        // Default options
        perPage: 4,
        type: 'loop',
    }).mount();
});