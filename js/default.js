$(function() {
	// 加载菜单
	$('.header').load("../pages/header.html");
	$('.content .leftNav').load("../pages/leftNav.html",function(){
		// 加载默认内容页
		var userName = yCookie.get("userName");
		if(userName != null && userName != '' && userName != undefined){
			var infoNav ="<li url='pages/info.html'><span class='bg1'></span><p>基本信息</p></li>";
			$('.leftNav ul').prepend(infoNav);
		}
		defaultLoadPage();
		//点击左侧导航切换不同内容
		$(".leftNav li").click(function(){
			$(".leftNav li").removeClass("active");
			$(this).addClass("active");
			var loadUrl = $(this).attr("url");
			var index = $(this).index();//获取ul的第几个li
			yCookie.set("currPageIndex", index);
			$('.wrap').load(baseUrl.webProjUrl() + loadUrl);
		})
	});
})
function defaultLoadPage(){
	var currPageIndex = yCookie.get("currPageIndex");//默认加载第0页
	var userName = yCookie.get("userName");
	$(".leftNav li").removeClass("active");
	console.log("currPageIndex:"+currPageIndex)
	//currPageIndex如果值为空并且userName值不存在,则默认加载第1页;
	if (checkStr(currPageIndex) && checkStr(userName)) { // 如果没有,默认加入首页的下标
		yCookie.set("currPageIndex", 0);
		$(".leftNav li").eq(currPageIndex).addClass("active");
		$('.wrap').load("../pages/inquiry.html");
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