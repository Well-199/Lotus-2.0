$("#telefone").mask("(00) 00000-0000");

    $(document).ready(function(){
        $('.carousel').slick({
            centerMode: true,
            centerPadding: '40px',
            // autoplay: true,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
                },
                {
                    breakpoint: 1070,
                    settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
                },
                {
                    breakpoint: 870,
                    settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
                },
                {
                breakpoint: 730,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                },
                {
                breakpoint: 630,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                }
            ]
        });
    });