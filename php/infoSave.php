<?php
	//将获取的数据存入到数据库，如果存入数据库成功弹出保存成功按钮
	// header('Content-Type:application/json; charset=utf-8');
	require_once "sqlTool.class.php";
	$mysqli=new SqlTool();
	$name=$_POST['name'];
	$sex=$_POST['sex'];
	$IDNum=$_POST['IDNum'];
	$date=$_POST['date'];
	$age=$_POST['age'];
	$status=$_POST['status'];
	$height=$_POST['height'];
	$weight=$_POST['weight'];
	$p_blood=$_POST['p_blood'];
	$s_blood=$_POST['s_blood'];
	$blood=$_POST['blood'];
	$nation=$_POST['nation'];
	$occupation=$_POST['occupation'];
	$work_unit=$_POST['work_unit'];
	$address=$_POST['address'];
	$phone=$_POST['phone'];
	$email=$_POST['email'];
	// birth、age、bloodhigh格式不匹配
	$sql="insert into p_patient (patname,sex,cardno,married,height,weight,bloodsugar,bloodtype,nation,profession,workunit,address,phone,email) values ('".$name."','".$sex."','".$IDNum."','".$status."','".$height."','".$weight."','".$s_blood."','".$blood."','".$nation."','".$occupation."','".$work_unit."','".$address."','".$phone."','".$email."')";
	$res=$mysqli->execute_dml($sql);
	echo $res;
?>