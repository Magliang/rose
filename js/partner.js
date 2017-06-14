/**
 * Created by Administrator on 2017/5/3.
 */
//查询经销商
$("#dealerBtn").on("click",function(e){
    console.log(1);
    var searchName=searchPar.value;
    if(searchPar.value==""){
        alert("请输入要查询的名称");
        console.log(1);
    }else{
        $.ajax({
            type:"GET",
            url:"",
            data:{searchName:searchName},
            success:function(txt){
                var html="";
                $.each(txt.data,function(i,p){
                    html+=`<td><span>"${p.name}"</span></td>
                            <td><span>"${p.cd}"</span></td>
                            <td><span>"${p.rank}"</span></td>
                    `
                });
                $(".par_change").html(html);
            }

        })
    }
});
$("#searchPar").on("click",function(){
    console.log(1);
});


//合作伙伴主页临时授权的判断与跳转
$("#temporaryBtn").on("click",function(e){
    e.preventDefault();
    console.log(1);
        if($("#loginBtn").html()=="登录"){
            window.location.href="../login.html"
        }
    }
);

//临时授权申请提交
$("#temporaryCheck").on("click",function(e){
    e.preventDefault();
    if($("textarea").val()==""){
        console.log(1);
    }
    var input=$("input[type='text']");
    //表单验证
    for(var i=0;i<input.length;i++){
        console.log(1)
        if(input[i].value==""||input[i].value==null){
            console.log(1);
            alert("请输入完整表格信息")
            return false
        }

        console.log(2);
    }
    alert("提交成功");
    $.ajax({
        type:"POST",
        url:"",
        data:$(""),
        dataType:"json",
        success:function(){

        }
    })
});


//加入合作伙伴
//控制申请单选啊
$("input[type='radio']").on("click", function () {
    $(this).parent().parent().parent().find("input[type='text']").removeAttr("name").attr({disabled: "disabled"});
    $(this).parent().next().find("input[type='text']").attr({name: "aj_content"}).removeAttr("disabled");
});


//临时申请
$("#joinBtn").on("click",function(e){
    e.preventDefault();
    //console.log($("form").serialize());
    var tPForm=$("form").serialize();


    //表单验证
    var input=$(".checkedEmpty");
    //console.log(input1.value);
    for(var i=0;i<input.length;i++){//表单验证
        console.log(1);
        if(input[i].value==""||input[i].value==null){
            console.log(1);
            alert("请输入完整表格信息");
            return false
        }
        //alert("提交成功");
    }
    alert("提交成功");


    $.ajax({
        type:"POST",
        url:"http://172.16.1.49/index/partner/add",
        data:tPForm,
        dataType:"json",
        success:function(e){
            console.log(e);
        }
    })
});