# [2020 Servlet&JSP 프로그래밍](https://www.youtube.com/watch?v=drCj2k50j_k&list=PLq8wAnVUcTFVOtENMsujSgtv2TOsMy8zd)

- YouTube 에서 뉴렉처 강의를 듣고 정리한 글입니다.

## 1.개요

- 서블릿
- JSP
- JSP MVC
- Spring MVC

![20220212193543](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212193543.png)

## 2.웹 서버 프로그램이란?

- 일반적인 업무 프로그램은 요청 받은 내용을 DB 쿼리로 처리하여 결과를 문서로 보여주는 일을 했다.

### 클라이언트 , 서버 프로그램

- 클라이언트(요청자) , 서버 프로그램(제공자) 로 나뉜다.
- 과거에는 클라이언트와 서버 프로그램을 동기화 하는데  어려움을 겪었다. 서버에서 업데이트가 되면 이전 데이터를 갖고 있는 클라이언트들이 전부 업데이트를 해야했다.![20220212194629](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212194629.png)

### 데이터가 아닌 문서를 전달하는 웹을 사용하면 ?

- 브라우저로 요청 가능한 환경과 요청에 대한 응답을 서버에서 찾아서 웹을 통해서 전송 한다.
- 브라우저를 이용해서 클라이언트 프로그램을 따로 만들고 업데이트할 필요가 없다.

![20220212195116](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212195116.png)

## 3.웹 서버 프로그램과 Servlet

### 요청 및 전송 과정

1) 클라이언트에서 회원리스트 데이터를 요청 
2) 웹서버에서 디렉토리에 있는 내용을 찾아본다.
   - 회원리스트에 대한 내용은 언제든 바뀔 수 있어서 회원리스트에 대한 웹문서를 따로 갖고 있지 않고 회원 리스트를 만들어주는 코드를 갖고 있다.
3) 코드를 찾아서 서버에서 실행해서 요청에대한 결과를 돌려준다.
   - 코드를 찾아서 실행 시켜줄 수 있는 환경을 WAS(웹 어플리케이션 서버) 라고 한다.

![20220212200749](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212200749.png)

### 왜 웹 서버 응용 프로그램을 Servlet이라 명칭할까?

- 서버는 클라이언트의 요청을 받아서 요청에 대한 코드를 읽고 실행 시킨다.
- Server Application Let 에서 let은 조각나다 라는 뜻을 갖고 있는데 요청에 대한 코드가 실행되고 전달이 되면 
  프로그램이 끝나 조각나기 떄문에 let의 의미가 포함됬다고 유추할 수 있다.

## 4.톰캣 9설치하기

### 다운로드

- 링크(https://tomcat.apache.org/download-90.cgi)

- zip 파일 
  - 공부용
- Window Service Installer
  - 톰캣으로 서버를 돌릴 목적일때 사용
  - 서비스 및 응용프로그램에 등록된다.

![20220212202237](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212202237.png)

### 설치

1. 톰캣 실행환경 확인
   - apache-tomcat-9.0.58\bin 에서 startup.bat 의 배치 파일을 실행시켜 톰캣이 설치 되 있는지 확인한다.
   - 도스창이 켜져있으면 설치 완료 , 그렇지 않으면 설치 해야됨
2. 체크 사항
   - 환경 변수 확인 하기
     - 톰켓은 jdk 가 어느 디렉토리에 있는지 알아야한다.
     - JAVA_HOME 변수 확인
   - 다른 톰캣이 사용하고 있는 경우 충돌 생길 수 있다.
3. 설치 후 startup.bat가 열린 상태에서 http://localhost:8080/ 에 접속해서 톰캣페이지가 열리는지 확인

## 5.웹 문서 추가하기

### 테스트 문서 만들고 서비스하기

1. 메모장 문서를 작성
2. home 디렉토리에다 작성한 문서를 보관
   - 홈 디렉토리(apache-tomcat-9.0.58\webapps\ROOT)
3. 클라이언트에서 요청할때 
   - http://localhost:8080/nana.txt 로 요청 할 수 있다.
   - http://자신의 아이피:8080/nana.txt

- 홈디렉토리

![홈디렉토리](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/%ED%99%88%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC.png)

![20220212210119](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212210119.png)

## 6.Context 사이트 추가하기

- 규모가 커지면서 파일수가 많아 지면서 디렉토리가 늘어 난다.
- 네이버 페이지를 예로 들면 
  많은 탭 페이지가 있는데 분업해서 페이지를 만들고 홈디렉토리에서 만든 페이지를 관리하려면 복잡해진다.
- 해결방법으로 문맥은 유지하면서 만들 페이지만 떼서 완전히 별개 사이트인거 처럼 만든다.
  - 물리적으로 2개의 사이트이지만 사용될 떄는 한 디렉터리에서 사용될 수 있게 한다.

![20220212211626](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212211626.png)

### Context 사이트 추가 과정

1. Root가 아닌 곳에 새로운 폴더를 만든다. 
   - ITWeb 폴더 생성

![IT](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/IT.png)

2. apache-tomcat-9.0.58\conf 경로 에서 server.xml 파일 실행시킨다.

![20220212213344](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212213344.png)

3. HOST NAME을 검색해서 찾는다.

![20220212213249](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212213249.png)

4. Context 문장을 끼워 넣는다.

   - 의미
     - localhost 에서 서비스를 진행하고 있고
     - path = it 를 매개변수로 하여 가상디렉토리 it 와 docBase ="경로" 의 폴더를 연결 시켜 서비스를 한다.

   ```html
   <Context path="it" 
   docBase ="C:\Users\JIwon\Desktop\2021\programing\tools\apache-tomcat-9.0.58\webapps\ITWeb"
   privileged = "true"/>
   ```

   ![20220212213557](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212213557.png)

5. 서버에서 확인한다.

![20220212213838](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212213838.png)

📛주의 

- 문제가 생겼을 경우 스펠링과 대소문자 확인하자! 

## 7. Servlet 프로그램 만들기

-  서버 어플리케이션은 웹을 통해 사용해야 하기 때문에 기능별로 코드가 나눠져 있고 필요에 따라 선택적으로 실행 된다.
- service라는 함수를 통해 프로그램을 만든다.

### 서블릿 코드 작성과 실행, 컴파일

- 서블릿 클래스들은 WAS를 통해 로드가 되고 실행되서 결과를 돌려준다.
- 클래스명은 중요하지 않고 약속된 인터페이스 , 추상클래스로 servlet 을 참조 하고 있다.
- service 함수는 인터페이스, 추상클래스의 약속된 이름으로 service를 통해 프로그램을 만든다.

![20220212215124](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212215124.png)

### 메모장으로 컴파일 하기

1.  추상화, 인터페이스를 구현한 클래스 코드 작성

```java
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class Nana extends HttpServlet
{
	public void service(HttpServletRequest request
			, HttpServletResponse response)
			throws IOException, ServletException
	{
		System.out.println("hello Servlet");
	}
}
```

2. 저장 후 cmd 으로 컴파일 하기

![20220212221105](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212221105.png)

- 오류가 발생한다...

  ![20220212215844](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212215844.png)

  -  jdk 에 서플릿 라이브러리가 없다.

```java
import javax.servlet.*;
import javax.servlet.http.*;
```

3. servlet 라이브러리 컴파일 하기

   - 라이브러리 path 를 통해 컴파일러가 servlet 라이브러리를 찾을 수 있다.

   ![20220212220114](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212220114.png)

   - servlet 라이브러리 경로 apache-tomcat-9.0.58\lib 에서 servlet-api.jar 파일을 찾아서 컴파일 해준다.

     ![20220212222132](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212222132.png)

   - 컴파일이 완료가 되면 .class 파일이 생성된다.

     ![20220212220408](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220212220408.png)

## 8.Servlet 객체 생성과 실행

### 톰캣에 의해서 서블릿 코드가 실행되도록 코드 배치와 요청

- 컴파일된 Nana.class 파일은 예약된 폴더에 보관해야 한다.
- 경로 (apache-tomcat-9.0.58\webapps\ROOT\WEB-INF\classes) 에서 classes 폴더에 보관한다.
- WEB-INF\classes 폴더 안에 내용은 서버 쪽에서만 사용할 수 있다. 클라이언트는 요청, 탐색 권한이 없다.
- 클라이언트에서는 특별한 방법으로 요청해야 한다.

### 서블릿이 실행되는 시점과 방식

- 사용자가 요청할 때 사용하는 이름을 .class 파일과 매핑 해야한다.
- 사용자는 클래스 파일 이름이 아닌 다른 이름으로 요청할 수 있다.

### 서블릿 코드를 URL과 매핑하기

- 사용자에게 Servlet 이름을 제공하고 제공된 이름으로 서버에 요청하게 되면 매핑된 내용이 실행 되도록 톰캣에 설정한다.

![20220214193227](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220214193227.png)

### 실습

- classes 폴더 만들고 .class 파일 옮기기

 ![20220214193722](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220214193722.png)

- WEB-INF 에 있는 web.xml 을 편집한다.

![20220214193955](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220214193955.png)

- web.xml 에 맵핑 내용을 적어준다.

```html
 <servlet>
	<servlet-name>na</servlet-name>  // na 은 Nana 클래스를 의미
	<servlet-class>Nana</servlet-class> // 클래스가 패키지안에 있다면 패키지명도 적어준다.
</servlet>

 <servlet-mapping>
	<servlet-name>na</servlet-name>   // na를 실행시킨다.
	<url-pattern>/hello</url-pattern> // hello 라는 url 경로로 오면 
 </servlet-mapping>
```

![20220214194904](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220214194904.png)

- 톰캣을 다시 실행 시키면 startup.bat  프로그램에 Nana.class 실행되어 내용이 출력된다.

## 9.Annotation을 이용한 URL 매핑

- 어노테이션을 이용하면 컴파일 할때 주석정보를 사용할 수 있다.
- metadata-complete="false"  false로 바꿔야 Annotation 에서 맵핑 정보를 찾는다.
- @Webservlet("/hi") 어노테이션 설정
- 어노테이션을 사용하려면 import javax.servlet.annotation.WebServlet; 을 import 해줘야 한다.

```java
package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hi")
public class Nana extends HttpServlet{
	
	@Override
	protected void service(HttpServletRequest arg0, HttpServletResponse arg1) throws ServletException, IOException {
		PrintWriter out = arg1.getWriter();
		out.println("Hello~ asdf");
	}
}

```

## 10. Servlet 출력 형식의 이해

- 클라이언트에서 웹기반으로 요청 했을 때 결과를 웹문서로 인식한다. 코드에서 println 을하여 띄어쓰기를 했지만 웹문서로 인식 했기 때문에 띄어쓰기가 되면 안된다.
- 웹문서 이므로 띄어쓰기를 하려면 `<br>`로 해야 한다.

```java
package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hi")
public class Nana extends HttpServlet{
	
	@Override
	protected void service(HttpServletRequest arg0, HttpServletResponse arg1) throws ServletException, IOException {
		PrintWriter out = arg1.getWriter();
		
		for(int i =0; i<100; i++) {
			out.println((i+1) + ": Hello Servlet!!");
		}
	}
}

```

- 브라우저는 자의적인 해석을 한다.
- 문서 형식을 알려줘야한다.

![20220214221229](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220214221229.png)

## 11. 한글과 콘텐츠 형식 출력하기

### 서버에서 한글을 지원하지 않는 문자코드로 인코딩한 경우

- 웹 서버에서 클라이언트로 보낼 때  IOS-8859-1 로 인코딩 해서 보내는데 1byte로 나눠져서 한글이 깨져서 출력된다.

![20220215162254](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220215162254.png)

### 서버에서는 UTF-8로 인코딩해서 보냈지만 브라우저가 다른 코드로 잘못 해석한 경우

- UTF-8로 보내면 웹브라우저가 잘못 해석한 경우 깨져서 나온다.

![20220215162330](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220215162330.png)

### UTF로 인코딩해서 보내기

- UTF-8로 인코딩하고 웹브라우저 인코딩 설정도 UTF로 바꿔줘야 한다.
- 웹브라우저에서 설정을 바꿀 수 있지만, 받을 때 어떻게 받을 지 코드로 설정 할 수 있다.

```JAVA
response.setCharacterEncoding("UTF-8");  // 보낼 때 인코딩 방식
response.setContentType("text/html; charset = UTF-8"); // 받을 때 인코딩
```

![20220215162845](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220215162845.png)

## 12. GET 요청과 쿼리 스트링

### 무엇을 달라고 하는 요청에는 옵션이 있을 수 있다.

- 쿼리스트링 : 문서를 요청할 때 옵션을 선택할 수 있다.

![20220215164241](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220215164241.png)

- 쿼리스트링을 주고 받을 때 약속이 있어야 한다.

```java
@WebServlet("/hi")
public class Nana extends HttpServlet{
	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset = UTF-8");
		
		PrintWriter out = response.getWriter();
		
		int cnt = Integer.parseInt(request.getParameter("cnt"));
		
        
		for(int i = 0; i<cnt; i++)
			out.println("안녕 Servlet </br>");
	}
}
```

## 13. 기본 값 사용하기

- 쿼리 스트링의 옵션을 전달 해야 제대로 된 결과를 얻을 수 있다.

### 전달 되는 입력 값의 형태

- 입력에 따른 값 형태

```
http://../hello?cnt = 3 	 => "3"
http://../hello?cnt =		 => ""
http://../hello?			=> null
http://../hello				=> null
```

- 조건 검사해서 입력값이 제대로 전달 되게 한다.
- 웹상에서 주고 받는 값은 문자열이다.

```java
@WebServlet("/hi")
public class Nana extends HttpServlet{
	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset = UTF-8");
		
		PrintWriter out = response.getWriter();
		
		String cnt_ = request.getParameter("cnt"); // 임시 변수 cnt_
		
		int cnt = 100;
		
		if(cnt_ !=null && !cnt_.equals(""))
			cnt = Integer.parseInt(cnt_);
		
		for(int i = 0; i<cnt; i++)
			out.println("안녕 Servlet </br>");
	}
}

```

### index.html 을 이용해서 입력값 전달하기

- 톰캣 webapps\ROOT 에 있는 index.html 에 링크를 걸어서 NaNa.class를 실행 시킬 수 있다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
	<body>
		환영합니다.</br>
		<a href = "hi">인사하기</a><br>
		<a href = "hi?cnt=3">세번 인사하기</a>
	</body>
</html>
```

- 링크에 옵션을 선택해서 원하는 결과를 받을 수 있다.

![INDEX1](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/INDEX1.png)

## 14.사용자 입력을 통한 GET 요청

### 사용자의 입력을 받을 수 있는 입력폼 준비

![20220215172636](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220215172636.png)

- 코드 hello.html
- submit 을하면 hi로 요청이 간다. 브라우저는 `<form action = "hi">` 의 action 명을 보고 URL 을 작성한다.
- 입력된 값이 있으면 name 에 대한 cnt 가 키값이 되고 사용자가 입력된 값이 전달된다.
- `http:// .. / hi?cnt = 3` 

```html
<body>
	<div>
		<form action = "hi">  
			<div>
				<label>"안녕하세요"를 몇 번 듣고 싶으세요?</label>
			</div>
			<div>
				<input type = "text" name = "cnt" />
				<input type = "submit" value = "출력" />
			</div>
		</form>
	</div>
</body>
```

- 입력한 값만큼의 출력 결과를 얻을 수 있다.

![value](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/value.png)

### UTF-8 기본설정하기

- window - Preferences - Web 

![20220215173755](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220215173755.png)

## 15. 입력할 내용이 많은 경우는 POST 요청

### 두단계로 나눠서 일을  처리하려고 할때 두 가지 요청

- 주문할 내용이 많으면 받는 쪽에서 힘들다 ..ㅠ
- 폼에 기록해서 일괄적으로 전달 하는 방법을 사용할 수 있다.
- GET 요청과 POST 요청을 나눠서 할 수 있는데 
  - GET 요청은 입력 폼을 받기 위핸 GET 요청을 하고
  - POST 요청으로 일괄적으로 요청할 수 있다.

![POST](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/POST.png)

### 예제

#### 코드

> HTML

```HTML
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
		<form action="notice-reg">
			<div>
				<label>제목 : </label><input name="title" type ="text">
			</div>
			<div>
				<label>내용 : </label>
				<textarea name = "content"></textarea>
			</div>
			<div>
				<input type = "submit" value = "등록"/>
			</div>
		</form>
	</div>
</body>
</html>
```

> JAVA

```java
package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/notice-reg")
public class NoticeReg extends HttpServlet {
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse respone) 
			throws ServletException, IOException {
		
		respone.setCharacterEncoding("UTF-8");
		respone.setContentType("text.html; charset = UTF-8");
		
		PrintWriter out = respone.getWriter();
		
		String title = request.getParameter("title");
		String content = request.getParameter("content");
			
		out.println(title);
		out.println(content);
		
	}
}

```

#### 예제 결과

- `notice-reg?title=hi&content=Hello` 웹브라우저가 `<form action="notice-reg"> ` 을 보고 notice-reg URL 을 작성한다.
- `name="title"` `name="content"` title, content가 키값으로 입력 받은 값을 서버에 요청한다.
- 서버에서는 요청한 값을 받아 출력했다.

![helllo](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/helllo.png)

#### 문제점 : GET 을 사용 할 때

1. URL 길이에 제한이 있다.
2. 쿼리 스트링은 알맞은 옵션에 대한 값을 전달해야한다. 밑에 사진 처럼 장문의 글을 보내는 것은 적절치 않다.

![20220215190305](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220215190305.png)

#### 해결방법 : POST  방식 사용

- `<form action="notice-reg" method = "post">` post 방법으로 바꾸면 쿼리스트링이 요청 body에 붙어서 전달된다.
- 요청 body는 크기에 제한이 없다.

![20220215191719](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220215191719.png)

## 16. 한글 입력 문제

### 한글이 전달 되는 것을 서버에서 받지 못하는 문제

- 서버에서 출력 할 때 발생한 문제인지 클라이언트에서 요청할 때 깨져서 보냈는지 확인 해봐야한다.

### 멀티 바이트 문자 전송문제

- 문자는 실제로 숫자와 대칭 되 있는데 
  영문자인 경우 알파벳 하나당 1byte 를 사용하는데
  중국어, 한국어, 일본어 는 하나당 2byte를 사용한다.
- 한국어로 전송할 경우 인코딩 되어 가는 문자는 2byte로 전송 된다.
- 서버에서는 문자를 기본적으로 ISO-8859-1 의 인코딩 방식을 이용한다. ISO-8859-1 인코딩 방식은 2byte 로 받은 문자를 1byte로 쪼개서 인식한다. 그래서 결국엔 클라이언트와 서버의 인코딩 방식이 달라서 한글이 깨진다.

![인코딩](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/%EC%9D%B8%EC%BD%94%EB%94%A9.png)

- 서버에서 사용자가 전송한 값을 읽기전에 UTF 로 읽기위한 코드를 작성하고 parameter 을 받아야한다.
- 톰캣에 환경설정에서 인코딩 방식을 UTF-8로 바꿀 수 있다.
  - 💥 톰캣 서버에는 여러개의 서버를 돌릴 수 있어서 톰캣 설정을 바꾸면 다른 서버에 까지 영향을 줄 수 있다. 그래서 일반적으로 
    톰캣의 설정을 건드리지 않는다. 

```JAVA
request.setCharacterEncoding("UTF-8"); 
```

## 17. 서블릿 필터

### 필터 개념

#### 기본 동작 방식

- 사용자로부터 요청이 들어오면 서버에서 적절한 SW 선택해서 돌려준다.
- 서블릿을 실행하게 되면 SW가 메모리상에 존재하게 된다. 그때 메모리 공간으로 Servlet Container 라고 한다.
- 서블릿 컨테이너에서 존재하고 있는 SW가 실행되고 결과를 반환한 후에 컨테이너에서 삭제 된다.

#### 필터 동작 방식

- 요청이 들어 올때 필터를 통해서 실행 할지 안할지를 결정 할 수 있고 Servlet의 기본설정을 지정할 수 있다.
- 요청이 받고 난 후 결과를 반환한 때도 필터를 거친다.

![20220216134858](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220216134858.png)

### 필터 만들기

- 인터페이스에 Servlet의 Filter 을 추가해서 클래스를 생성

![20220216135208](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220216135208.png)

- servlet 설정 하기 방법 1 :  XML 수정방식 

  web.xml에 아래 필터 등록하는 코드를 추가한다.

  ```html
  <filter>
      <filter-name>characterEncodingFilter</filter-name>
      <filter-class>com.newlecture.web.filter.CharacterEncodingFilter</filter-class> 
  </filter>
  
  <filter-mapping>
      <filter-name>characterEncodingFilter</filter-name>
      <url-pattern>/*</url-pattern>   // 모든 URL를 포함
  </filter-mapping>
  ```

  - 필터 코드
    - 클라이언트로부터 요청이 들어올때 before filter 가 출력 되고 
    - chain 에 의해 다음 서블릿, 필터가 실행되고 
    - 그 다음에 after fillter 가 실행된다.

  ```JAVA
  package com.newlecture.web.filter;
  import java.io.IOException;
  import javax.servlet.Filter;
  import javax.servlet.FilterChain;
  import javax.servlet.ServletException;
  import javax.servlet.ServletRequest;
  import javax.servlet.ServletResponse;
  
  public class CharacterEncodingFilter implements Filter {
  
  	@Override
  	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
  			throws IOException, ServletException {
  		
           request.setCharacterEncoding("UTF-8"); // chain 전에 request 를 추가하면 모든 서블릿에 설정을 줄 수 있다.
  		System.out.println("before filter");
  		chain.doFilter(request, response);
  		System.out.println("after fillter");
  	}
  
  }
  ```

- servlet 설정 하기 방법 2 :  어노테이션 설정하기
  - 필터 클래스에 `@WebFilter("/*")`을 추가한다.

```
@WebFilter("/*")
public class CharacterEncodingFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		
		request.setCharacterEncoding("UTF-8");
		chain.doFilter(request, response);
		
	}

}
```

## 18. 여러 개의 Submit 버튼

- 덧셈, 뺼셈 버튼의 기능 식별하기

![20220216150236](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220216150236.png)

> HTML

- 버튼에 name 값을 넣을 수 있다. 버튼은 2개를 한번에 클릭할 일이 없기 때문에 name을 같이 할 수 있다.

```HTML
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		<div>계산할 값을 입력 하세요.</div>
		<form action = "calc" method = "POST">
			<div>
				<label>x : </label>
				<input type ="text" name = "x">
			</div>
			<div>
				<label>y : </label>
				<input type ="text" name = "y">
			</div>
			<div>
				<input type ="submit" name="operator" value ="덧셈">
				<input type ="submit" name="operator" value ="뺄셈">
			</div>
		</form>
	</body>
</html>
```

- operator 키값으로 "덧셈" 이 확인 된다.

![20220216154657](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220216154657.png)

> Java

- 덧셈과 뺄셈을 확인하여 연산한다.

```Java
package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calc")
public class Calc extends HttpServlet{

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse respone) 
			throws ServletException, IOException {
		
		PrintWriter out = respone.getWriter();
		
		respone.setCharacterEncoding("UTF-8");
		respone.setContentType("text.html; charset=UTF-8");
		
		String x_ = request.getParameter("x");
		String y_ = request.getParameter("y");
		String op = request.getParameter("operator");
		
		int x = 0;
		int y = 0;
		
		if(x_ !=null && !x_.equals("") && x_ !=null && !x_.equals("")) {
			x = Integer.parseInt(x_);
			y = Integer.parseInt(y_);
		}

		int result;
		
		if(op.equals("덧셈"))
			result = x + y;
		else
			result = x - y;
		
		
		out.println( result);
	}
	
}

```

## 19. 입력 데이터 배열로 보내기

- 반복적인 데이터를 일일히 name을 부여하면 관리하기 힘들다.

> HTML

- name 의 키값을 같게 설정하면 배열로 요청이 가능하다.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		<div>계산할 값을 입력 하세요.</div>
		<form action = "add" method = "POST">
			<input type ="text" name = "num">
			<input type ="text" name = "num">
			<input type ="text" name = "num">
			<input type ="text" name = "num">
			<input type ="submit" value = "덧셈">
		</form>
	</body>
</html>
```

> Java

```java
package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/add2")
public class Add2 extends HttpServlet{

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse respone) 
			throws ServletException, IOException {
		
		PrintWriter out = respone.getWriter();
		
		respone.setCharacterEncoding("UTF-8");
		respone.setContentType("text.html; charset=UTF-8");
		
		int result = 0;
		
		String[] nums_ = request.getParameterValues("num");
		
		for(int i = 0; i<nums_.length; i++) {
			int num = Integer.parseInt(nums_[i]);
			result += num;
		}
	
		out.print(result);
	}
	
}

```

## 20. 상태를 유지의 필요성

- 웹 어플리케이션이 조각나 있는 상태에서  공통된 값을 같게 하기 위한 전역변수가 필요할 떄가 있다.
- 개별적으로 값을 입력 할 때 입력된 내용은 서버 프로그램에서 올라왔다가 또 다시 요청이 가면 사라진다.
- 그래서, 값을 담고 서블릿 끼리 값을 공유할 수 있는 기억공간이 필요하다.

![20220216162421](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220216162421.png)

### 상태 유지를 위한 5가지 방법

1. application
2. session
3. cookie
4. hidden input
5. querystring

## 21. Application 객체

### 서블릿 컨텍스트

- 요청이 들어오면 servlet 프로그램이 잠깐 실행 되었다가 메모리에서 제거된다.
- 앞에서 처리 했던 내용을 다음 servlet 이 처리할 수가 없다.
- 서블릿 컨텍스트는 자원을 공유하여 문맥을 유지할 수 있게 해준다.

> HTML

```HTML
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		<div>계산할 값을 입력 하세요.</div>
		<form action = "calc2" method = "POST">
			<div>
				<label>입력 : </label>
				<input type ="text" name = "v" />
			</div>
			<div>
				<input type ="submit" name="operator" value ="+">
				<input type ="submit" name="operator" value ="-">
				<input type ="submit" name="operator" value ="=">
			</div>
			<div>
				결과 : 0
			</div>
		</form>
	</body>
</html>
```

> Java

```java
package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calc2")
public class Calc2 extends HttpServlet{

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse respone) 
			throws ServletException, IOException {
		
        //ServletContext 생성
		ServletContext application = request.getServletContext();
        
		PrintWriter out = respone.getWriter();
		respone.setCharacterEncoding("UTF-8");
		respone.setContentType("text.html; charset=UTF-8");
		
		String v_ = request.getParameter("v");
		String op = request.getParameter("operator");

		int v = 0;
		if(!v_.equals("")) v = Integer.parseInt(v_);
		
		// 계산
		if(op.equals("=")) {
			// 처음 서버로 요청된 값이 x에 담긴다.
			int x = (Integer)application.getAttribute("value");
            
            // 두번째 요청된 값이 y에 담긴다.
			int y = v;
			int result = 0;
            
            // 처음에 서버로 요청된 연산자를 담는다.
			String operator = (String) application.getAttribute("op");
			
			if(operator.equals("+"))
				result = x+y;
			else
				result = x-y;
			out.print(result);
		}
		// 값을 저장
		else {
			application.setAttribute("value", v);
			application.setAttribute("op", op);
		}
		
	}
	
}

```

