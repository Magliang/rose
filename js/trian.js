$(function(){
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        var me = this;
        // Evento
        links.on('click', function(){
            var my =$(this);//留住当前点击事件的元素
            var ele ={el: me.el, multiple: me.multiple,my:my}
           
            if(!$(this).hasClass('link_over')){
                console.log(me);
                
                me.dropdown(ele);    
            }
               
        })
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.el;
            $this = e.my;
            console.log($this);
            $next = $this.next();  
        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.multiple) {
            $el.find('.submenu_content').not($next).slideUp().parent().removeClass('open');
        };
    }   

    var accordion = new Accordion($('.accordion'), false);
    //培训及考试计划里的图片放大聚焦效果
    var imgChangeBig = function() {
        $(".test_plan").on('mouseenter',function(){
            console.log(111);
            $(this).find('.plan_img').removeClass('img_bigout').addClass('img_bigin');
        });
        $(".test_plan").on('mouseleave',function(){
            $(this).find('.plan_img').removeClass('img_bigin').addClass('img_bigout');
        });
    }
    //培训及考试计划高度变化处理
    var changeH = function (){
        var slw = $(window).width()
         $(window).resize(function(){
            slw = $(window).width();
            if(slw <1240){
                baseH = (slw/1240)*280;
                vm=0.35*baseH;
                vh=0.107*baseH;
                vf=0.12*baseH;
                vt=0.44*baseH;
                $('.plan_link a').css({
                    width:vt+'px',
                    fontSize:(14/280)*baseH+'px',
                    minHeight:(35/280)*baseH+'px',
                    lineHeight:(35/280)*baseH+'px'
                });
                $('.plan_link h1').css({'padding-top':vm+'px','padding-bottom':vh+'px','font-size':vf+'px'});
            }
         });
        var baseH = 280,vm,vh,vf,vt;
        if(slw <1240){
            baseH = (slw/1240)*280;
            vm=0.35*baseH;
            vh=0.107*baseH;
            vf=0.12*baseH;
            vt=0.44*baseH; 
            $('.plan_link a').css({
                width:vt+'px',
                fontSize:(14/280)*baseH+'px',
                minHeight:(35/280)*baseH+'px',
                lineHeight:(35/280)*baseH+'px'
            }); 
            $('.plan_link h1').css({'padding-top':vm+'px','padding-bottom':vh+'px','font-size':vf+'px'});
        }
    };
    // 点击工程师名片查看大图
    
    imgChangeBig();
    window.onload=function(){
        changeH();
    }
    //选择框效果(只能选一个班号)
    $(".checkbox_btn").on('click',function(){
        $(this).toggleClass('checked');
        $(this).parent().parent().siblings().find('.checked').removeClass('checked');
    })
    //圆形选择框点击事件
    $('.radio_box b').on('click',function(){
        $(this).toggleClass('choice');
        $(this).parent().siblings().find('.choice').removeClass('choice');
        $(this).parent().find('input').click();
    });

    //点击动态加载更多
    $("#getMore").on("click",function(){
        var Num=$(".accordion li").length;

        console.log(Num);
        $.ajax({
            type:"GET",
            url:"",
            data:''
        });
        $(".accordion").append(`<li>
        <div class="link clr">
        <div class="col-xs-6">17TEC018 ROSE认证工程师培训<p><span class="plan_addres">成都</span>2017.05.10-2017.05.12</p></div>
        <div class="col-xs-4 plan_tlt">
        <p><span class="plan_addres">成都</span>2017.05.10-2017.05.12 <span class="rt"></span></p>
        </div>
        <div class="col-xs-2 clr"><i class="glyphicon glyphicon-menu-down"></i></div>
        </div>
        <div class="submenu_content">
        <div class="submenu_body">可编辑内容</div>
        <div class="online_apply">
        <a href="#">在线报名</a>
        </div>
        </div>

        </li>`)
    });

    //考生成绩查询
    $("#score_btn").on("click",function(e){
        e.preventDefault();

//			验证表单不能为空
        var scoreName=$("#scoreName").val();
        var scoreNum=$("#scoreNum").val();
//			console.log(scoreName);
        if(scoreName==""||scoreNum==""){
            alert("请输入内容");
            return
        }
//			console.log(2);
        $.ajax({
            type:"GET",
            url:"http://172.16.1.49/index/Student/search",
            data:{rq_name:scoreName,rq_num:scoreNum},
            dataType:"json",
            success:function(txt){
//					alert("0");
                console.log(txt);
                if(!txt==""){
                    console.log(txt);
                }
            }
        })
    })

    //证书查询
    $("#cred_btn").on("click",function(e){
        e.preventDefault();
        var engineerName=$("#engineerName").val();
        var credNum=$("#credNum").val();
        if(engineerName==""||credNum==""){
            alert("请输入内容");
            return
        }
//			 console.log(2)
        $.ajax({
            type:'GET',
            url:"",
            data:{ce_certificate_number:engineerName,ce_name:credNum},
            success:function(){

            }
        })
    })
});

