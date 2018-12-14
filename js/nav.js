//list-shop-list 背景图
var bj=$(".list-div");
	bj[0].style.backgroundPositionY="-162px";
	bj[1].style.backgroundPositionY="18px";
	bj[2].style.backgroundPositionY="-17px";
	bj[3].style.backgroundPositionY="-54px";
	bj[4].style.backgroundPositionY="-340px";
	bj[5].style.backgroundPositionY="-90px";
	bj[6].style.backgroundPositionY="-303px";
	bj[7].style.backgroundPositionY="-195px";
	bj[8].style.backgroundPositionY="-125px";
	bj[9].style.backgroundPositionY="-267px";
////shop菜单的设置
//鼠标放上显示
    $(".shop-list-left1").mouseover(function(){
    	$("#l-botton").css("display","none");
    	$(this).next(".shop-list-right").css("display","block")
    						.siblings()
    })
//  鼠标离开隐藏
    $(".shop-list-left1").mouseout(function(){
    		$("#l-botton").css("display","block");
    	$(".shop-list-right").css("display","none")
    })
     $(".shop-list-right").mouseover(function(){
     	$("#l-botton").css("display","none");
    	 $(this).css("display","block")
    			.siblings()
    			
    })
     $(".shop-list-right").mouseout(function(){
     	$("#l-botton").css("display","block");
    	$(this).css("display","none")
    })
/*========轮播图=====*/
var timer= setInterval(autoPlay,2000);
	var index = 0;
	var flage = true;
	function autoPlay(){
		if(flage == true){
			index++;
		}else if(flage == false){
			index--;
		}
		if( index == $("#banner ol li").size() ){
			index = 0;
		}
		$("#banner ol li").eq(index)
				  .addClass("current")
				  .siblings()
				  .removeClass("current");
		$("#banner ul li").eq(index)
				  .fadeIn(1000)
				  .siblings()
				  .fadeOut(1000);
	}

	$(" #banner ol li").mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPlay();
	})
	$("#banner ol li").mouseleave(function(){
		timer= setInterval(autoPlay,2000);
	})

	
	
/*====================================*/
	$("#left").click(function(){
		clearInterval(timer);
		if(index<0){
			index=2;
		}else{
			flage =false
			autoPlay();
		}
	})
	/*====================================*/
	$("#right").click(function(){
		clearInterval(timer);
		if(index>2){
			index=0;
		}else{
			autoPlay();
			flage = true;
		}
	})
	$("#banner a").mouseout(function(){
		timer= setInterval(autoPlay,2000);
	})
	
	
	
   //	移入
	$("#banner").mouseover(function(){
		$("#left").css("display","block")
		$("#right").css("display","block")
	})
	$("#banner a").mouseover(function(){
		$("#left").css("opacity","0.6");
		$("#right").css("opacity","0.6");
	})
	//移出
	$("#banner").mouseout(function(){
		$("#left").css("display","none")
		$("#right").css("display","none")
	})
	$("#banner a").mouseout(function(){
		$("#left").css("opacity","0.4");
		$("#right").css("opacity","0.4");
	})
	var flag = true//当为真时可以点击
	$("#new .new .boutique .left").click(function(){
		if( flag ){
			flag = false;
		$("#new .new .boutique .newbox ul li:last")
					   .prependTo( $("#new .new .boutique .newbox ul") );
		$("#new .new .boutique .newbox ul").css("margin-left","-230px")
		$("#new .new .boutique .newbox ul").animate({"marginLeft" : 0},1500,function(){
				flag = true;
			})
	}
})
	$("#new .new .boutique .right").click(function(){
		if( flag ){
			flag = false;
		$("#new .new .boutique .newbox ul").animate({"marginLeft" : -230},1500,function(){
				$("#new .new .boutique .newbox ul").css("margin-left",0)
					   .find("li:first")
					   .appendTo( $("#new .new .boutique .newbox ul") );
					   flag = true;
			});
	}
	})




























	//图片的抖动效果
$("#new ul li").stop().mouseover(function(){
	$(this).animate({"position":"relative","":"-10px"},100)
})
$("#new ul li img").stop().mouseout(function(){
	$(this).animate({"position":"relative","top":"10px"},100)
})
/*f1--a*/
$("#new .new .floor .f1 .f1-left ul li #f1a").hover(function(){
	           	$(this).css("color","#fd686e"); 
},function(){
            	$(this).css("color","#666");   
})

$("#new .new .floor .f1 .f1-right ul li").hover(function(){
	           	$(this).children("img").animate({top:5},1000); 
},function(){
            	 	$(this).children("img").animate({top:-5},1000);
})
