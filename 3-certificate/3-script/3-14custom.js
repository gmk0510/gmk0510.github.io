//네비게이션
$(".nav>ul>li").mouseover(function(){
    $(".nav>ul>li>ul").stop().slideDown(200);
});
$(".nav>ul>li").mouseout(function(){
    $(".nav>ul>li>ul").stop().slideUp(200);
});

//이미지 스랄이드(상하)
var currentIdex = 0;

setInterval(function(){
    if(currentIdex < 2){
        currentIdex++;
    }else{
        currentIdex = 0;
    }

    var slidePosition = currentIdex * (-360)+"px";

    $(".slideList").animate({top:slidePosition},400);
},3000);
// 44분부터 이미지 슬라이드 좌우 css 도갈아야해서 안함 아직 주소는 옆https://www.youtube.com/watch?v=qYKV9ySKids&list=PL4UVBBIc6giIpzhQ4UWVCs64UzLQpdO5B&index=19


// 탭메뉴
var tabBtn = $(".tab-btn>ul>li");
var tabCont = $(".tab-cont>div");
        
tabCont.hide().eq(0).show();

tabBtn.click(function(event){
    event.preventDefault();
    var target = $(this);
    var index = target.index();
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display","none");
    tabCont.eq(index).css("display","block")
});

//레이어 팝업
$("#content1 .right").click(function(){
    $(".layout-Popup").slideDown(300);
    $(".layout-bg").show();
})
$(".layout-Popup>a").click(function(){
    $(".layout-Popup").slideUp(300);
    $(".layout-bg").hide();
})
