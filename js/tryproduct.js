/**
 * Created by Administrator on 2017/5/9.
 */
$(document).ready(function(){


    //提交表单
    $("input[type='submit']").on("click",function(e){
        e.preventDefault();
        console.log($("input[type='checkbox']").val());
        var form=$("form").serialize();
        $.ajax({
            type:"POST",
            url:"",
            data:form,
            dataType:"json",
            success:function(){

            }
        })
    })
    //使用数据库加载到其中一个去
    var num=[1,2,3,4,5];
    var name=["cb_orc","cb_eml","cb_web","cb_file","cb_app"];
    var values=function(value,name){
        var checkbox={};
        checkbox.cb_orc1=[];
        checkbox.str;
        $("input[value='"+value+"']").on('click',function(){
            checkbox.cb_orc1.push($(this).attr("data-value"));
            checkbox.str=checkbox.cb_orc1.join(",");
            $("input[name='"+name+"']").val(checkbox.str);

        })
    };
    (function(){
        console.log("自调");
        for(var i=0;i<num.length;i++){
            values(num[i],name[i]);
        }
    })()
    //values(1,"cb_orc");
    //values(2,"cb_eml");

});