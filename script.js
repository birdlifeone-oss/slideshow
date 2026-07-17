function fadeAnime(){

    $('.fadeLeftTrigger').each(function(){
        var elemPos = $ (this).offset().top-150;
        var scroll = $(window).scrollTop();
        var windowHeight =$(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('fadeLeft');
        }else{
            $(this).removeClass('fadeLeft');
        }

    });



    $('.fadeOnlyTrigger').each(function(){
        var elemPos = $ (this).offset().top-150;
        var scroll = $(window).scrollTop();
        var windowHeight =$(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('fadeOnly');
        }else{
            $(this).removeClass('fadeOnly');
        }

    });



    $('.fadeTopTrigger').each(function(){
        var elemPos = $ (this).offset().top-150;
        var scroll = $(window).scrollTop();
        var windowHeight =$(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('fadeTop');
        }else{
            $(this).removeClass('fadeTop');
        }

    });
}

$(window).scroll(function(){
    fadeAnime();
   
});
$(window).on('load',function(){
    fadeAnime();

});

