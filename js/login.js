$(function(){
	//关闭弹窗 鼠标划过小手显示
	$('.close_btn').click(function(event){
		  $('#Popup').css('display','none');
	}).mouseover(function(){
		  $(this).css({'cursor':'pointer'});
		  $(this).removeClass('pos_in').addClass('pos_out');
	}).mouseout(function(){
		  $(this).removeClass('pos_out').addClass('pos_in');
	})
	
	
	
	//点击登录按钮发送异步请求
	$(".btn").click(function(){
		var data = {
			  userName: $("#userName").val(),
			  password: $("#password").val(),
		 };
		 yAjax.post('php/login.php',data,function(res){
			 if(res <= 0){
				 $('#password').val('');
				 setTimeout(function(){
					$("#password").focus();
				},50)
				 $('.msg').html('用户名或密码输入不正确,请重新输入');
			 }else{
				 $('#Popup').hide();
				  yCookie.set("userName",data.userName);
				 var userName = data.userName;
				 if (userName != null && userName != '' && userName != undefined) {
				 	var logout = "<span>" + userName + "</span>&nbsp;&nbsp;<span onclick='toLogout();' class='text-center' id='exit'>|&nbsp;&nbsp;退出</span>";
				 	$(".login").empty().html(logout);
				 }
			 }
		 })
	})
	
	chkLogin();
})

// 检查登录,根据是否登录展示不同的内容
function chkLogin () {
	// 获取cookie中存入的登录名
	var userName = yCookie.get("userName");
	console.log("userName:"+userName);
	if (userName != null && userName != '' && userName != undefined) {
		var logout = "<span>" + userName + "</span>&nbsp;&nbsp;<span onclick='toLogout();' id='exit' class='text-center'>|&nbsp;&nbsp;退出</span>";
		$(".login").empty().html(logout).closest('p').css('width','70px');
		$('#info_title').addClass('active');
	} else {
		var login = "<a href='#'><span onclick='toLogin();'>游客模式,请登录</span></a>";
		$(".login").empty().html(login).closest('p').css('width','106px');
	}
}


// 到登录页面
function toLogin () {
	$('#Popup').show();
	$('.msg').html('')
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
		}
	})
}