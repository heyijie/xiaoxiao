/*================注册实现==================*/

/*========鼠标失去焦点时(用户名存入cookie)========*/
	var t=false;
	var tar=false;
	var targe=false;
 	var target=false;
$("#username").blur(function() {
 user=$("#username").val();
  reg = /[0-9a-zA-Z_]{6,18}/;
  if(reg.test(user)){
    setCookie("username",user);
    $(this).val("已通过").removeClass("#contient .contient .fom form div .tex");
    t=true;
  }else{
    $(this).val("输入不合法请重新输入")
    		.addClass("#contient .contient .fom form div .tex");
  }
});
$("#username").focus(function() {
	 $(this).val("").removeClass("#contient .contient .fom form div .tex");
})
//$("#username").removeClass("#pasd");
//========鼠标失去焦点时(密码存入cookie)========
$("#password").blur(function() {
 pwd=$(this).val();
 var reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
  if(reg.test(pwd)){
    setCookie("password",pwd);
    tar=true;
  }else{
   alert("最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符");
  }
});
//========鼠标失去焦点时(密码确认密码是否相等)========
$("#password2").blur(function() {
   pwd2=$("#password2").val();
if(pwd2!=pwd){
	alert("两次密码不相同请重新输入");
}else{
	targe=true;
}
})
$("#password2").focus(function() {
   pwd2=$("#password2").val("");
})
/*==========================验证码========================*/
var i=1;
$("#ma").click(function(){
	
		if(i==1){
		$(this).attr("num","rotaw");
		}
		if(i==2){
		$(this).attr("num","azisi");
		}
		if(i==3){
		$(this).attr("num","puwev");
		}
		if(i==4){
		$(this).attr("num","daoos");
		}
		if(i==5){
		$(this).attr("num","fepog");
		}
		if(i==6){
		$(this).attr("num","yeoea");
		}
		if(i==7){
		$(this).attr("num","ilite");
		}
		if(i==8){
		$(this).attr("num","ojusi");
		}
		if(i==9){
		$(this).attr("num","eguqu");
		}
		if(i==10){
		$(this).attr("num","oiifu");
		}
		var yan = $("#yanzhen").val();
			var num = $(this).attr("num");
			if(yan==num){
				target=true;
			}else{
			}
		i++;
		if(i!=10){
		$(this).attr("src","../img/yan"+i+".jpg");
	}else{
		i=0;
	}
})
$("#submit").click(function(){
//	
		if(i==1){
		$(this).attr("num","rotaw");
		}
		if(i==2){
		$(this).attr("num","azisi");
		}
		if(i==3){
		$(this).attr("num","puwev");
		}
		if(i==4){
		$(this).attr("num","daoos");
		}
		if(i==5){
		$(this).attr("num","fepog");
		}
		if(i==6){
		$(this).attr("num","yeoea");
		}
		if(i==7){
		$(this).attr("num","ilite");
		}
		if(i==8){
		$(this).attr("num","ojusi");
		}
		if(i==9){
		$(this).attr("num","eguqu");
		}
		if(i==10){
		$(this).attr("num","oiifu");
		}
		var yan = $("#yanzhen").val();
			var num = $(this).attr("num");
			if(yan==num){
				target=true;
			}else{
				alert("验证码错误");
			}
		i++;
		if(i!=10){
		$("#ma").attr("src","../img/yan"+i+".jpg");
	}else{
		i=0;
	}
if(target&&t&&tar&&targe&&target){
	location.href="../html/log.html";
}else{
	alert("验证失败请核对信息后再提交");
}
})
