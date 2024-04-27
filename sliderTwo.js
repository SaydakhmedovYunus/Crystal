document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide.splider1', {
        perPage:2,
        rewind:true,
        autoplay:true,
        interval:2000,
        arrows:false,
        drag:true,
        gap:"10px",
        pagination:false,
        breakpoints:{
            390: {
                perPage: 1,
                arrows:false,
            },
            1285: {
                perPage: 2,
            },
        }
    });
    splide.mount();
});