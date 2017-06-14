/**
 * Created by Administrator on 2017/5/3.
 */
// 首页的动态交互
// 导航下拉效果


$(function(){
    var lang = "en";
    //语言切换
    var langSwitch = function() {
        $('.en_us,.ch_zn').on('click',function(){
            if(lang =="en"){
                $(".en_us").css("display","inline-block");
                $(".ch_zn").css("display","none");
            }
            if(lang == "ch" ){
                $(".en_us").css("display","none");
                $(".ch_zn").css("display","inline-block");
            }
        })
        if(lang =="en"){
            $(".en_us").css("display","inline-block");
            $(".ch_zn").css("display","none");
        }
        if(lang == "ch" ){
            $(".en_us").css("display","none");
            $(".ch_zn").css("display","inline-block");
        }
    }
    // 搜索框滑出效果
    var searchSlide = function() {
        $(".rose_search_icon").on('click',function(){
            $(this).css('display','none');
            $(this).next(".rose_search_form").css('display','block').addClass('animated slideInRight');
        })
    }
    //二级导航滑出
    var menudropfn = function() {
        $('.nav_ul li a').on('mouseenter',function(event) {
            event.stopPropagation();
            $(this).addClass('menu_active').parent().siblings().children('.menu_active').removeClass('menu_active');
            var menuId = $(this).attr("data-menu");

            if(menuId == -1){
                if($('.dropmenu_box').hasClass('slideOutUp')){

                    $('.dropmenu_box').removeClass('slideOutUp');
                }
                if($('.dropmenu_box').hasClass('slideInDown')){

                    $('.dropmenu_box').removeClass('slideInDown');
                }
                $('.dropmenu_box').removeClass('animated').css('display','none');
                return;
            }
            else {
                if($('.dropmenu_box').hasClass('slideOutUp')){

                    $('.dropmenu_box').removeClass('slideOutUp');
                }

                if($('.dropmenu_box').hasClass('slideInDown')){

                    $('.dropmenu_box').removeClass('slideInDown');

                }
                var roseSection = "rose"+menuId;
                $('.rose_menu_section[data-section="'+roseSection+'"]').css('display','block').siblings().css('display','none');
                $('.dropmenu_box').css('display','block').addClass('animated slideInDown');
                $('.dropmenu_box').attr('data-hide',1);

            }


        });
        var canhide = true;
        $('.dropmenu_box').on('mouseenter',function() {
            $('.dropmenu_box').attr('data-hide',1);
            canhide = false;

        });
        $('#header').on('mouseleave',function(event) {
            $('.dropmenu_box').attr('data-hide',0);
            if(canhide) {
                if($('.dropmenu_box').attr('data-hide')==0){
                    setTimeout(function(){
                        $('.dropmenu_box').css('display','none');
                    },500)
                }
            }

        });
        $('.nav_ul').on('mouseleave',function(event){
            clearTimeout();
            setTimeout(function(){
                if(canhide){
                    $('.dropmenu_box').attr('data-hide',0);
                }
                else{
                    $('.dropmenu_box').attr('data-hide',1);
                    canhide = true;
                }
                if($('.dropmenu_box').attr('data-hide')==0){
                    setTimeout(function(){
                        $('.dropmenu_box').css('display','none');
                    },500)
                }
            },200);


        })

    };
    // 搜索框的下拉菜单
    var searchDropmenu =function () {
        $(".sorts_box").find('span').on('click',function(){
            $(this).next('.sorts_dropmenu').css('display','block');
        })
        $('.sorts_dropmenu li').on('click',function() {
            var val = $(this).text();
            $(this).parent().prev().text(val);
            $(this).parent().css('display','none');

        })
    };

    //手机端的面包按钮
    var submenuBoxOpen =function() {
        $('#submenu_btn').on('click',function(e){
            e.stopPropagation();
            $next = $(this).parent().parent().next();
            console.log($next);
            $next.slideToggle();
        })
    };
    //侧边栏
    var barActive = function() {
        $(".contact_tell").hover(function(){
            $(this).animate().stop();
            $(this).animate({
                width:"212px"
            },1000)
        },function(){
            $(this).animate().stop();
            $(this).animate({
                width:"62px"
            },1000)
        })
    }
    // 微信弹出框
    $(".ewm i").hover(function(){
        $(".ewm img").stop().fadeIn("slow")},function(){
            $(".ewm img").stop().fadeOut("slow")
        }
    );

    //回到顶部按钮
    var backTop =function() {
        $(window).scroll(function(){
            if($(window).scrollTop()>window.screen.height){
                $(".to_top").show();
            }
            else{
                $(".to_top").hide();
            }
        })
        $(".to_top").on('click',function(){
            $("html,body").animate({
                scrollTop:0
            },1000);
        })
    }


    // 手机端的二级菜单
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
    };

    var accordion = new Accordion($('#accordion'), false);
    langSwitch();
    searchSlide();
    menudropfn();

    submenuBoxOpen();
    searchDropmenu();
    barActive();
    backTop();

    // $("#products").particleground({
    //     dotColor: "#f3f3f3",
    //     lineColor: "#f3f3f3",
    //     density:18000,
    // })

});
$("#search_btn").on("click",function(e){
    e.preventDefault();
    console.log($("#search_content").val());
    window.location.href="tpl/login.html";
    $.ajax({
        type:"GET",
        url:"",
        data:{search:$("#search_content").val()},
        dataType:"json",
        success:function(){

        }
    })
});

//登陆按钮的跳转
$("#loginBtn").on("click",function(e){
    e.preventDefault();
    console.log(1);
    if($(this).html()=="登录"){
        window.location.href="tpl/login.html";
    }else{
        // alert("你确定要退出")
        if(confirm("是否退出账号")){
            sessionStorage.removeItem("user");
            $(this).html("登录");
        };
    }
});
(function(){
    if(sessionStorage.getItem("user")){
        $("#loginBtn").html(sessionStorage.getItem("user"))
    }
})();


