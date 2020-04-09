$(function() {
	// 加载菜单
	$('.header').load("../pages/header.html");
	$('.content .leftNav').load("../pages/leftNav.html",function(){
		// 加载默认内容页
		var userName = yCookie.get("userName");
		if(userName != null && userName != '' && userName != undefined){
			var infoNav ="<li id='info_title' url='pages/info.html'><span class='bg1'></span><p>基本信息</p></li>";
			$('.leftNav ul').prepend(infoNav);
		}
		defaultLoadPage();
		//点击左侧导航切换不同内容
		$(".leftNav li").click(function(){
			$(".leftNav li").removeClass("active");
			$(this).addClass("active");
			var loadUrl = $(this).attr("url");
			var index = $(this).attr("page");
			yCookie.set("currPageIndex", index);
			$('.wrap').load(baseUrl.webProjUrl() + loadUrl);
		})
	});
})
function defaultLoadPage(){
	var currPageIndex = yCookie.get("currPageIndex");//默认加载第0页
	$(".leftNav li").removeClass("active");
	if (checkStr(currPageIndex)) { // 如果没有,默认加入首页的下标
		yCookie.set("currPageIndex", 0);
		$('.wrap').load("info.html");
	} else {
		var pageUrl = $(".leftNav li").eq(currPageIndex).addClass("active").attr("url");
		$('.wrap').load(baseUrl.webProjUrl() + pageUrl);
	}
} 

function checkStr(str) {
	if (str == null || str == '' || str.trim() == '' || str == undefined) {
		return true;
	}
	return false;
}