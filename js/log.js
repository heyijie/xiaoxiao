/*=========================登录==============================*/
/*=========================登录==============================*/
/*=========================登录==============================*/
var target=false;
var yanuser = false;//用户名验证
var yanpwd =false;//密码验证



/*==============用户名验证================*/
	















$("#username").blur(function(){
 var cookieInfo =document.cookie;
 var arr = cookieInfo.replace(/;\s/g,';').split(";");
 for(var i=0;i<arr.length;i++){
			item = arr[i].split("=");
			if(item[0] =="username" ){
				brr = item[1];
	var valsuer = $("#username").val();
	var  value=brr;
	if(valsuer==value){
		yanuser = true;
		console.log("通过验证(用户名)");
	}else{
		console.log("用户验证失败)");
	}
 }
}
})


$("#password").blur(function(){
	  
 var cookieInfo =document.cookie;
 var arr = cookieInfo.replace(/;\s/g,';').split(";");
 for(var i=0;i<arr.length;i++){
			item = arr[i].split("=");
			if(item[0] =="password" ){
				brr = item[1];
	var valsuer = $("#password").val();
	var  value=brr;
	if(valsuer==value){
		console.log("通过验证(密码)");
		yanpwd =true;
	}else{
		console.log("密码验证失败)");
		
		
	}
 }
}

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
		i++;
		if(i!=10){
		$(this).attr("src","../img/yan"+i+".jpg");
	}else{
		i=0;
	}
})
$("#submit").click(function(){
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
if(target && yanuser&&yanpwd){
	location.href="../index.html";
}else{
	alert("验证失败请核对信息后再提交");
}

})