$(".nav>ul>li").mouseover(function(){
    $(".nav>ul>li>ul").stop().slideDown(200);
});
$(".nav>ul>li").mouseout(function(){
    $(".nav>ul>li>ul").stop().slideUp(200);
})