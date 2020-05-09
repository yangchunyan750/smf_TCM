<?php
	header('Content-Type:application/json; charset=utf-8');
	//导入工具类
	require_once "sqlTool.class.php";
	//初始化工具类
	$mysqli=new SqlTool();
	// 从数据库中读取所有的问题题目，并返回给前端界面
	$sql="select questionno,question,sextype,controltype from h_inquiry_exam where inquirytypeno=1 and sextype!='男'";
	$res=$mysqli->execute_dql($sql);
	while($row=mysqli_fetch_assoc($res)){
		$user = new Class{}; //定义空对象
		$user->id=$row["questionno"];
		$user->sortId=$row["questionno"];
		$user->content = urlencode($row["question"]);
		$user->type = urlencode($row["controltype"]);
		$user->sex= urlencode($row["sextype"]);
		$data[]=$user;
	}
	$json = json_encode($data);//把数组转换为JSON数据.
	echo urldecode($json);//解析json
?>