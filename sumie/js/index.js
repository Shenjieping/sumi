 var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 
});

window.onload=function(){
	$(".tack_1").on("click",function(){
		$(".delite_1").css({"transform":"scale(1)"})
	});
	$(".delitesub_1 h3 img").on("click",function(){
		$(".delite_1").css({"transform":"scale(0)"})
	});
	
	$(".tack_2").on("click",function(){
		$(".delite_2").css({"transform":"scale(1)"})
	});
	$(".delitesub_2 h3 img").on("click",function(){
		$(".delite_2").css({"transform":"scale(0)"})
	});
	
	$(".tack_3").on("click",function(){
		$(".delite_3").css({"transform":"scale(1)"})
	});
	$(".delitesub_3 h3 img").on("click",function(){
		$(".delite_3").css({"transform":"scale(0)"})
	});
	
	$(".tack_4").on("click",function(){
		$(".delite_4").css({"transform":"scale(1)"})
	});
	$(".delitesub_4 h3 img").on("click",function(){
		$(".delite_4").css({"transform":"scale(0)"})
	});
	
	$(".tack_5").on("click",function(){
		$(".delite_5").css({"transform":"scale(1)"})
	});
	$(".delitesub_5 h3 img").on("click",function(){
		$(".delite_5").css({"transform":"scale(0)"})
	});
	
	$(".tack_6").on("click",function(){
		$(".delite_6").css({"transform":"scale(1)"})
	});
	$(".delitesub_6 h3 img").on("click",function(){
		$(".delite_6").css({"transform":"scale(0)"})
	});
	
	var music=document.getElementById("music");
	var play=document.getElementById("play");
	var isPlay=false;
	music.onclick=function(){
		if(isPlay){
			play.play();
			music.children[0].src="images/musicBtn.png"
			isPlay=false;
		}else{
			play.pause();
			music.children[0].src="images/musicBtnOff.png"
			isPlay=true;
		}
	}
}
