$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().slideDown();
        $("header").addClass("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().slideUp();
        $("header").removeClass("on");
    });
});