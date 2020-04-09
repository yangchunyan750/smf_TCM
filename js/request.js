// ajax请求
var yAjax = {
	/**
	 *	ajax post 请求
	 *	url 		请求路径
	 * 	data 		请求数据
	 * 	callBackFun	请求回调函数
	 */
	post: function (url,data,callBackFun) {
		$.ajax({
			type: 'post', // 请求方式，后台接收数据用 @RequestBody注解
			url: url, // 请求路径
			data: data, // 数据，转换成json格式 
			success: function (sRes) {
				// 成功后调用回调函数，将成功的信息返回，依据业务逻辑展示内容
				callBackFun ? callBackFun(sRes) : function() {}
			},
			error: function (eRes) {
				alert("请求异常");
			}
		})
	},
	/**
	 * get请求
	 * @param {Object} url			请求路径
	 * @param {Object} data			数据
	 * @param {Object} callBackFun	返回值
	 */
	get: function (url, callBackFun) {
		$.ajax({
			type: 'get', // 请求方式，后台接收数据用 @RequestBody注解
			url: url, // 请求路径
			success: function (sRes) {
				// 成功后调用回调函数，将成功的信息返回，依据业务逻辑展示内容
				callBackFun ? callBackFun(eval(sRes)) : function() {}
			},
			error: function (eRes) {
				alert("请求异常");
			}
		})
	}
}

/**
 * 基础路径
 */
var baseUrl = {
	// 获取当前网址
	currPath: function () {
		return window.document.location.href;
	},
	// 获取主机地址之后的目录
	pathName: function () {
		return window.document.location.pathname;
	},
	pos: function () {
		return baseUrl.currPath().indexOf(baseUrl.pathName());
	},
	//获取主机地址 例:"www.sdxxkj.top"
	localhostPath: function () {
		return baseUrl.currPath().substring(0, baseUrl.pos());
	},
	//获取带"/“的项目名 例:"/yzb-h5"
	projectName: function () {
		return baseUrl.pathName().substring(0, baseUrl.pathName().substr(1).indexOf('/') + 1);
	},
	// web项目路径 "www.sdxxkj.top/yzb-h5/"
	webProjUrl: function () {
		return baseUrl.localhostPath() + baseUrl.projectName() + baseUrl.slash;
	},
	// api路径
	slash: "/",
	baseReqUrl: function () { 
		return "http://www.example.com:81/smf_TCM";
	}
}

// cookie操作
var yCookie = {
	/**
	 * 设置超时的cookie
	 * @param {Object} key	key值
	 * @param {Object} val	对应的值
	 * @param {Object} time	超时时间,单位天
	 */
    setExpires: function (key, val, time) {
		var date = new Date(); // 获取当前时间
		var expiresDays = time;  // 将date设置为n天以后的时间
		date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000); // 格式化为cookie识别的时间
		var hasCookie = document.cookie; // 现存的cookie
        document.cookie=hasCookie + key + "=" + val + ";expires=" + date.toGMTString() + ";";  //设置cookie,存入的内容: key=123;expires=xxxxx
    },
	/**
	 * 设置cookie
	 * @param {Object} key
	 * @param {Object} val
	 */
	set: function (key, val) {
		document.cookie=key + "=" + val +";"; // 存入的内容, key=123;
	},
	/**
	 * 获取cookie
	 * @param {Object} key
	 */
    get: function (key) {
        var cookieVal = document.cookie; // 获取cookie中所有的内容
		var cookieValArr = cookieVal.split(";"); 
		for (var i = 0; i < cookieValArr.length; i++) {
			console.log(cookieValArr[i].split("=")[0]);
			if (cookieValArr[i].split("=")[0].trim() == key) { // 比对key值
				return cookieValArr[i].split("=")[1]; // 返回value值
			}
		}
		return "";
	}
};

/**
 * 请求路径，所有的请求路径存放在此
 */
var reqUrl = {
	login:"/php"
}