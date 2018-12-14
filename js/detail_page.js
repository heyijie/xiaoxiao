$("#new-new .new-new #big .big-left .left-top").hover(function() {
	$("#new-new .new-new #big .big-left .center").css("display","block");
	$("#new-new .new-new  .magnify").css("display","block");
},function(){
$("#new-new .new-new #big .big-left .center").css("display","none");
$("#new-new .new-new  .magnify").css("display","none");
})

$("#new-new .new-new #big .big-left .left-bottom ul li").mouseenter(function(){
 		var index = $(this).index();
 		$("#new-new .new-new #big .big-left .left-top img").eq(index).show().siblings("img").hide();
 		$("#new-new .new-new  .magnify").css("background","url(../img/left_top"+(++index)+".jpg) no-repeat center");
 		// $(".bigImage").eq(index).show().siblings().hide();
 	})

$("#new-new .new-new #big .big-left .left-top").mousemove(function(e){
 		var e = e || event;
 		var x = e.pageX - $("#new-new .new-new #big .big-left .center").outerWidth()/2 - $(this).offset().left;
 		var y = e.pageY - $("#new-new .new-new #big .big-left .center").outerHeight()/2 - $(this).offset().top;
 		var maxL = $(this).outerWidth()-$("#new-new .new-new #big .big-left .center").outerWidth();
 		var maxT = $(this).outerHeight()-$("#new-new .new-new #big .big-left .center").outerHeight();
 		x = Math.min( maxL , Math.max(0,x) ) ;
 		y = Math.min( maxT , Math.max(0,y) ) ;
 		$("#new-new .new-new #big .big-left .center").css({
 			left : x,
 			top : y
 		})
 		//  大图left / mask.left = 大图宽度 / 小图宽度 = 大图可视区宽度 /mask的宽度
 		$("#new-new .new-new  .magnify").css({
 			"background-positionX": - x * 345/1000,
 			"background-positionY":-  y* 345/1000
 		})
 	})
$("#new-new .new-new .xi .xi-right .tou .item1").addClass("new-new xi xi-right  tou item1-style");
	$("#new-new .new-new .xi .xi-right .other2").hide();
// 
$("#new-new .new-new .xi .xi-right .tou .item1").click(function() {
	console.log("已点击 :  商品详情按钮");
	$(this).addClass("new-new xi xi-right  tou item1-style");
	$("#new-new .new-new .xi .xi-right .tou .item2").removeClass("new-new new-new xi xi-right  tou  item1-style");
	$("#new-new .new-new .xi .xi-right .other2").hide();
	$("#new-new .new-new .xi .xi-right .other1").show();

});
$("#new-new .new-new .xi .xi-right .tou .item2").click(function() {
	console.log("已点击 :  常见问题按钮");
	$(this).addClass("new-new new-new xi xi-right  tou  item1-style");
	$("#new-new .new-new .xi .xi-right .tou .item1").removeClass("new-new xi xi-right  tou  item1-style");
	$("#new-new .new-new .xi .xi-right .other1").hide();
	$("#new-new .new-new .xi .xi-right .other2").show();

});
/*购物数量*/
var valu=1;
$("#new-new .new-new #big .big-right .ps .add").click(function() {
	++valu;
	$("#new-new .new-new #big .big-right .ps .span").html(valu);
})
$("#new-new .new-new #big .big-right .ps .jian").click(function() {
	if(valu<1){
		valu=1;
	}else{
		valu--;
	$("#new-new .new-new #big .big-right .ps .span").html(valu);
	}
});
	$("#ida").hide();
$(window).scroll(function(){
		var top= $(document).scrollTop();
		if(top>1000){
$("#ida").show();
		}else{
			$("#ida").hide();
		}
	})
$("#ida").click(function(){
	$("html,body").scrollTop(10);
});
