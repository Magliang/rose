/**
 * Created by YS on 2017/4/18.
 */
$(".case ul li").hover(function(){//实现图片hover效果
    $(this).find("span").stop().animate({top:"240px"},600);
    $(this).find("div a").stop().animate({marginTop:"340px"},600);
    $(this).find("div").css({background:"rgba(0,102,204,.7)"});
    $(this).find()
},function(){
    $(this).find("span").stop().animate({top:"300px"},600);
    $(this).find("div a").stop().animate({marginTop:"740px"},600);
    $(this).find("div").css({background:"rgba(0,102,204,0)"});
});

$(".c_left a").on("click",function(e){//动态的效果
    e.preventDefault();
    var y= $(".case ul").position().left;
    if(y>=0){
        y=-2065;
    }
    console.log(y);
    $(".case ul").animate({"left":(y+413)+"px"});
});
$(".c_right a").on("click",function(e){
    e.preventDefault();
    var y= $(".case ul").position().left;
    if(y<=-1652){
        y=412;
    }
    console.log(y);
    $(".case ul").animate({left:y-413+"px"})
});