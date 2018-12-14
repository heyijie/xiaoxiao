function getMsg(){

      $.ajax("https://www.ymatou.com/guess/api/getGuessLikeProducts",
      {
            dataType:"jsonp"
      })
      .then(function(res){
            // console.log(res);
            renderPage(res.result.Products);
      })
      return 1;
}

var goodsJson = [];

function renderPage(json){
      goodsJson = json;
      var html = "";
      // 根据比例计算图片高度;
      json.forEach(function(ele){
            // console.log(ele);
            html += `   <div class="goods-box">
                              <div class="good-image">
                                    <img src="${ele.MainPic}"  alt="">
                              </div>
                              <div class="good-title">
                                    <p>${ele.Title}</p>
                              </div>
                              <div class="line"></div>
                              <div class="good-detail">
                                    <span class="detail-price">
                                    ￥ ${ele.MinPrice}
                                    </span>      
                              </div>
                              <button class="btn-car" data-iid="${ele.ProductId}">加入购物车</button>
                        </div> `
      });
      
      // console.log(html);
      $(".container-goodslist").html(html);
}
getMsg();



// 购物车;

// 1. 所有的按钮绑定事件; 

$(".container-goodslist").on("click",".btn-car",handleCarClick);


function handleCarClick(event){
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var iid = $(target).attr("data-iid");
      
      var nowMsg = findJson(iid)[0];
      // console.log(nowMsg)
      addCar(nowMsg,iid);
      
}

function findJson(iid){
      return goodsJson.filter(function(item){
            return item.ProductId===iid          
      })
      console.log(hh);
}
function addCar(nowMsg , iid){
      $.extend(nowMsg , {count : 1});
      var sNowMsg = JSON.stringify(nowMsg);
      // console.log(sNowMsg);
      
      if(!localStorage.cart){
            localStorage.setItem("cart",`[${sNowMsg}]`);
            return false;
      }
      
      var aMsg = JSON.parse(localStorage.cart);

      if(!hasIid(aMsg,iid)){
            aMsg.push(nowMsg);
      }

      
      localStorage.setItem("cart",JSON.stringify(aMsg));

      console.log(JSON.parse(localStorage.cart));
}

function hasIid(aMsg,iid){
      for(var i = 0 ; i < aMsg.length ; i ++){
            if(aMsg[i].ProductId === iid){
                  aMsg[i].count ++;
                  return true;
            }
      }
      return false;
}


// // 购物车获取;;

$(".car-item").on("mouseenter",function(){
      $(".car-list").show();

      console.log(getCart())
     $(".car-list ul").html(renderCart());
     

})
$(".car-item").on("mouseleave",function(){
      $(".car-list").hide();
})

function getCart(){
      if(!localStorage.cart) return 0;
      var aMsg = JSON.parse(localStorage.cart);
      return aMsg;
}

function renderCart(){
      var html = "";
      var cart_json = getCart();
      if(!cart_json) return 0;
      for(var i = 0 ; i < cart_json.length ; i ++){
            html += `<li><img src="${cart_json[i].MainPic}"> <span>￥${cart_json[i].MinPrice}</span> <span>${cart_json[i].count}</span></li>`
      }

      return html;
}

$("#clear").on("click",function(){
      localStorage.clear("cart");
})