//延时加载
$(document).ready(function(){
    $("#footer").css({opacity:0})
});
var windowScreen=window.innerHeight;
$(document).ready(function(){
    if($(window).scrollTop()>=0){
        $("#solution").animate({opacity:1},500);
    } if($(window).scrollTop()<=(1405+windowScreen)&&$(window).scrollTop()>=(1405-windowScreen)){
        $("#products").animate({opacity:1},500);
    }
    if($(window).scrollTop()>=(2825-windowScreen)){
        $("#footer").animate({opacity:1},500);
    }
});
$(window).scroll(function(){
    if($(window).scrollTop()>=(1405-windowScreen/2)){
        $("#products").animate({opacity:1},1800);
    } if($(window).scrollTop()>=(2825-4*windowScreen/5)){
        $("#footer").animate({opacity:1},1800);
    }
});

//背景粒子效果
 window.onload = function(){
    var config = {
        vx: 4,
        vy:  4,
        height: 4,
        width: 4,
        count: 200,
        color: "0, 122, 240",
        stroke: "0, 122, 240",
        dist: 6000,
        e_dist: 20000,
        max_conn: 10
    }
    CanvasParticle(config);
}
//首页案例聚焦效果
$(".sol_content ul li").hover(function(){//实现图片hover效果
    $(this).find(".sol_text").stop().animate({top:"160px"},600);
    $(this).find("a").stop().animate({bottom:"50px"},600);
    $(this).find(".fix_bg").addClass("current");
},function(){
    $(this).find(".sol_text").stop().animate({top:"180px"},600);
    $(this).find("a").stop().animate({bottom:"-50px"},600);
    $(this).find(".fix_bg").removeClass("current");
});
//产品聚焦效果
$(".pro_content ul li").hover(function(){//实现图片hover效果
    $(this).find(".pro_icon").stop().animate({top:"14%"},600);
    $(this).find("a").stop().animate({bottom:"30px"},600);
    //$(this).find(".fix_bg").addClass("current");
},function(){
    $(this).find(".pro_icon").stop().animate({top:"18%"},600);
    $(this).find("a").stop().animate({bottom:"-30px"},600);
    //$(this).find(".fix_bg").removeClass("current");
});

