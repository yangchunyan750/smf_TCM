$(function(){
	//点击登录按钮发送异步请求
	$(".btn").click(function(){
		var data = {
			  userName: $("#userName").val(),
			  password: $("#password").val(),
		 };
		 // 点击登录按钮判空提示
		 if(data.userName == "" || data.userName == null){
			 $(".msg").html("请输入账号");
			 return;
		 }
		 if(data.password == "" || data.password == null){
			 $(".msg").html("请输入密码");
			 return;
		 }
		$(this).text('登录中...');
		yAjax.post('../php/login.php',data,function(res){
			 if(res <= 0){
				 setTimeout(function(){
					$("#password").focus();
				},1000)
				$(".btn").text('登录');
				$('.msg').html('用户名或密码输入不正确,请重新输入');
			 }else{
				 $('#Popup').hide();
				  yCookie.set("userName",data.userName);
				 var userName = data.userName;
				 if (userName != null && userName != '' && userName != undefined) {
					 $(".leftNav li").removeClass('active');
					 var infoNav ="<li class='active' page='page0' url='pages/info.html'><span class='bg1'></span><p>基本信息</p></li>";
					 $('.leftNav ul').prepend(infoNav);
				 	var logout = "<span>" + userName + "</span>&nbsp;&nbsp;<span onclick='toLogout();' class='text-center' id='exit'>|&nbsp;&nbsp;退出</span>";
				 	$(".login").empty().html(logout);
					$('.wrap').load("../pages/info.html");
					$(".leftNav li").click(function(){
						// if($('#name').val() != '' && $('#name').val() != undefined && $('#name').val() != null){
						// 	localStorage.setItem("name",$('#name').val());
						// }
						// if($('#sec').val() != '' && $('#sex').val() != undefined && $('#sex').val() != null){
						// 	localStorage.setItem("sex",$('#sex').val());
						// }
						//循环所有的input输入框并把该值存到json中
						$(".leftNav li").removeClass("active");
						$(this).addClass("active");
						var loadUrl = $(this).attr("url");
						var index = $(this).index();//获取ul的第几个li
						yCookie.set("currPageIndex", index);
						$('.wrap').load(baseUrl.webProjUrl() + loadUrl);
					})
				 }
			 }
		 })
	})
	//默认游客方式
	chkLogin();
})

// 检查登录,根据是否登录展示不同的内容
function chkLogin () {
	// 获取cookie中存入的登录名
	var userName = yCookie.get("userName");
	if (userName != null && userName != '' && userName != undefined) {
		var logout = "<span>" + userName + "</span>&nbsp;&nbsp;<span onclick='toLogout();' id='exit' class='text-center'>|&nbsp;&nbsp;退出</span>";
		$(".login").empty().html(logout).closest('p').css('width','70px');
	} else {
		var login = "<a href='#'><span onclick='toLogin()'>游客模式,请登录</span></a>";
		$(".login").empty().html(login).closest('p').css('width','106px');
	}
}

function toLogin(){
	$("#Popup").show();
	$("#userName").val("");
	$("#password").val("");
	$(".msg").html('');
}

// 到退出页面
function toLogout () {
	//调用封装的confirm方法
	$.alerts.confirm('退出提示','确定要退出吗?',function(res){
		if(!res){
			return ;
		}else{
			var login = "<a href='#'><span onclick='toLogin();'>游客模式,请登录</span></a>";
			yCookie.set("userName","");
			$(".login").empty().html(login);
			$('#exit').hide();
			$(".leftNav ul li:first").remove();
			$(".leftNav li").removeClass('active');
			$("#inquiry_title").addClass('active');
			$('.wrap').load("../pages/inquiry.html");
			$('.submit').text('登录');
			localStorage.clear();
		}
	})
}