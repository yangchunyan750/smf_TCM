$(function() {
	// 加载菜单
	$('.header').load("../pages/header.html",function(){
		// 加载默认内容页
		defaultLoadPage();
		//点击头部切换不同内容
		$('.header li').click(function(){
			$(".header li").removeClass("active");
			$(this).addClass("active");
			var loadUrl = $(this).attr("url");
			var index = $(this).attr("page");
			yCookie.set("currPageIndex", index);
			$('.content').load(baseUrl.webProjUrl() + loadUrl);
		})
	});
})


function defaultLoadPage(){
	var currPageIndex = yCookie.get("currPageIndex");//默认加载第0页
	$(".header li").removeClass("active");
	if (checkStr(currPageIndex)) { // 如果没有,默认加入首页的下标
		yCookie.set("currPageIndex", 0);
		$('.content').load("info.html");
	} else {
		var pageUrl = $(".header li").eq(currPageIndex).addClass("active").attr("url");
		$('.content').load(baseUrl.webProjUrl() + pageUrl);
	}
} 

function checkStr(str) {
	if (str == null || str == '' || str.trim() == '' || str == undefined) {
		return true;
	}
	return false;
}