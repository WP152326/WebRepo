<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.text.SimpleDateFormat, java.util.Date" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>숫자 합 계산</title>
</head>
<body>
<form>
<input type="number" name="num" min=1 required>
<button type="submit">계산</button>
</form>
<%!  %>
<%-- 스크립틀릿 tag로 1~입력받은 숫자까지의 합 구하기 --%>
<%
	String num = request.getParameter("num");
	if(num != null){
		int i = Integer.parseInt(num);
		String output = Integer.toString(i*(i+1)/2);
		%>
		<h1>1 ~ <%=num %>까지의 합은 <%=output %>입니다. </h1>
		<%
	}
	
	//현재 일시 구하기
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss a");
	
	%>
	
현재 일시는 <%= sdf.format(new Date()) %>

</body>
</html>
