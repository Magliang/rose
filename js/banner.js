/**
 * Created by Administrator on 2017/5/3.
 */
$(function(){
    //banner img 移动效果
    var bannerImgMove = function() {
        var oUl= $('.banner_right_img'),
            l = oUl[0].offsetWidth/2,
            t = oUl[0].offsetHeight/2;

        oUl.on('mousemove',function(ev) {
            var oEv = ev || event,
                iL = oEv.clientX,
                iT = oEv.clientY;
            var topali = (iL - l )/100+'deg';
            var rightali = (iT - t )/70+'deg';
            $(this).css('transform','rotateX('+topali+') rotateY('+rightali+')');
        });
    };
    bannerImgMove();
    //banner效果
    $('#banner').slide({mainCell:".banner_content ul",autoPlay:true,titCell:".hd li",effect:"fold",interTime:5000,trigger:"click"});
    $(window).resize(function(){
        var slw = $(window).width();

        if(slw<1000){

            $(".banner_content ul").css("width",slw).children().css("width",slw);
        }
        else if(slw<1240) {
            console.log(slw);
            $(".banner_content ul").css("width",1000).children().css("width",1000);
        }
        else {
            console.log(slw);
            $(".banner_content ul").css("width",1240).children().css("width",1240);
        }
    });
});