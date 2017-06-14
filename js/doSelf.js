/**
 * Created by Administrator on 2017/5/2.
 */
$(document).ready(function(){
    var length,
        currentIndex = 0;
    var slideItems = $(".slide_warp>li");
    length = slideItems.length;
    //判断显示器的宽度
    if($(window).width()<1000){
        var cid = currentIndex;
        showOnepic(cid);
    }
    else {
        var cid = currentIndex;
        showThreepic(cid);
    }
    $(window).resize(function(){
        if($(window).width()<1000){
            var cid = currentIndex;
            showOnepic(cid);
        }
        else {
            var cid = currentIndex;
            showThreepic(cid);
        }
    })
    //显示3张图
    function showThreepic (cid) {
        var spre = cid-1;
        var snext = cid+1;

        if(snext>slideItems.length-1){
            snext = 0;
        }
        else if(spre< 0) {
            spre = slideItems.length-1;
        }
        showViews();
        function showViews() {
            console.log(spre);
            console.log(snext);
            console.log("当前的下标"+cid);
            $(".slide_warp>li").attr("style","");
            $(".slide_warp>li.active_top").removeClass('active_top').find("b").remove();
            $(slideItems[cid]).addClass("active_top").show().siblings().hide();
            $(slideItems[spre]).css("left",0).show();
            $(slideItems[snext]).css("left","71.6666666%").show();
            addSwitchBtn(slideItems[cid]);
        }

    }
    //显示1张图
    function showOnepic (cid) {
        $(".slide_warp>li.active_top").removeClass('active_top').find("b").remove();
        $(slideItems[cid]).addClass('active_top').css({width:"100%",left:0}).show().siblings().hide();
        addSwitchBtn(slideItems[cid]);
    }
    //添加切换按钮
    function addSwitchBtn(ele)  {
        var str = '<b class="prev_btn"></b><b class="next_btn"></b>';
        $(ele).append(str);
        $('.prev_btn').unbind('click');
        $('.prev_btn').bind('click', function() {
            prev();
        });
        $('.next_btn').unbind('click');
        $('.next_btn').bind('click', function() {
            next();
        })
    }
    function next() {
        currentIndex++;
        if(currentIndex >slideItems.length-1){
            currentIndex=0;
        }
        if($(window).width()<1000){
            var cid = currentIndex;
            showOnepic(cid);
        }
        else {
            var cid = currentIndex;
            showThreepic(cid);
        }
    }
    function prev() {
        currentIndex--;
        if(currentIndex <0){
            currentIndex=slideItems.length-1;
        }
        if($(window).width()<1000){
            var cid = currentIndex;
            showOnepic(cid);
        }
        else {
            var cid = currentIndex;
            showThreepic(cid);
        }
    }
    //绑定监听事件

});