$(function(){
        $(".nav_icon").click(function(){
            $("nav").fadeIn()
        })
        $(".nav_wrap .close").click(function(){
            $("nav , .sub2_nav , .sub_nav").fadeOut();
        })
        $(".main_nav > .all").click(function(){
            $(".sub_nav").fadeIn();
        });
        $(".sub_nav .back").click(function(){
            $(".sub2_nav , .sub_nav").slideUp()
        });
        $(".sub2_nav .back").click(function(){
            $(".sub2_nav").slideUp()
        });



        $(".sub_nav .sub_menu li").click(function(){
            $(".sub2_nav").show();
            var $indextop = $(".sub_nav .sub_menu li").index(this); //3번방법
            
            $(this).css('fontWeight', 600).siblings().css('fontWeight',100);
            switch ($indextop){
                case 0 : $(".korea").fadeIn().siblings().fadeOut();
                break;
                case 1 : $(".foreign").fadeIn().siblings().fadeOut();;
                break;
                case 2 : $(".music").fadeIn().siblings().fadeOut();;
                break;
                case 3 : $(".dvd").fadeIn().siblings().fadeOut();;
                break;
                case 4 : $("").fadeOut().siblings().fadeIn();
                break;
            }
            $(".sub3_nav").show();
        });
        // var i = $(".sub2_nav .sub_menu > li").index(this)
        
        $(".sub2_nav .sub_menu > li").click(function(){
            var i = $(".sub2_nav .sub_menu > li").index(this)
            $(".baby_menu").eq(i).fadeToggle()  
            $(".sub2_nav .sub_menu > li").mouseleave(function(){
                $(".baby_menu").eq(i).hide(400)
            })
            $(this).css('fontWeight', 600).siblings().css('fontWeight',100);
        })














    var slickOpts = {
        prevArrow : false,
        nextArrow : false,
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1000,
    }

    $('.imgbox').slick(slickOpts);


    var slickOpt2 = {
        prevArrow : false,
        nextArrow : false,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay : true,
        autoplaySpeed : 2000,
        draggable : true,
        pauseOnHover : true,
        variableWidth : true,
        centerMode: false,


    }
    $('.slickTrap').slick(slickOpt2);

    $("a" ).on("click", function(e){e.preventDefault();});


});