/**
 * Created by Administrator on 2017/5/2.
 */
$(".pro_list_content ul li").hover(function(){//ʵ��ͼƬhoverЧ��
    $(this).find("a").stop().animate({marginTop:"20px"},600).fadeIn("slow");
},function(){
    $(this).find("a").stop().animate({marginTop:"120px"},600);
});