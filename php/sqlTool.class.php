<?php
	class SqlTool{
		private $conn;
		private $host="localhost";
		private $user="root";
		private $password="root";
		private $db='smf_cloud';
		public function __construct(){
			$this->conn=new mysqli($this->host,$this->user,$this->password,$this->db);
			if($this->conn->connect_error){
				die('数据库失败'.$this->conn->connect_error);
			}
			mysqli_select_db($this->conn,$this->db);
		}
		public function showInfo(){
			if(!$this->conn->connect_error){
				return $this->conn;
			}
		}
		public function execute_dql($sql){
			$res=$this->conn->query($sql) or die('失败'.$this->conn->connect_error);
			return $res;
		}
		public function execute_dml($sql){
			$b=$this->conn->query($sql);
			if(!$b){
				return 0;
			}else{
				if(mysqli_affected_rows($this->conn)>0){
					return 1;
				}else{
					return 2;
				}
			}
		}
	}
?>