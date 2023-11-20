$(function(){
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(() => {
        currentIndex++;
        $(".sliderWrap").animate({marginTop:-100 * currentIndex + "vh"}, 600);

        if(currentIndex == 3){
            setTimeout(() => {
                $("sliderWrap").animate({marginTop:0}, 0);
                currentIndex = 0;
            }, 700)
        }
    }, 3000);
});