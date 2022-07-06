<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js"></script>
<script>
$(function(){
	$("button").click(function(){
		$.ajax({
			url:"/ch08/api/json",
			async: true, // 기본적으로 true라서 선언 안해줘도 됨.
			type: "get",
			dataType: "json",
			success: function(response){
				// console.log(response);
				var htmls = "";
				htmls += ("<h3>"+ response.no + "</h3>");
				htmls += ("<h4>"+ response.name + "</h4>");
				htmls += ("<h5>"+ response.message + "</h5>");
				
				$("#data").html(htmls);
			},
			error: function(xhr, status, error){
				console.error(status, error);
			}
		});
	});
})
</script>
</head>
<body>
	<h1>AJAX test: JSON format Data: $.ajax() 함수 사용하기</h1>
		
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>