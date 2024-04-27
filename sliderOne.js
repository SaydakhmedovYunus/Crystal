        document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        // Define breakpoints
        breakpoints: {
            390: {
                perPage: 1,
            },
            1285: {
                perPage: 3,
            },
        },
        // Default options
        perPage: 3,
        type: 'loop',
    }).mount();
});