2020 Servlet&JSP 프로그래밍](https://www.youtube.com/watch?v=drCj2k50j_k&list=PLq8wAnVUcTFVOtENMsujSgtv2TOsMy8zd)

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

```java
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
		
		if( !x_.equals("") &&  !y_.equals("")) {
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

## 22. Session 객체로 상태 값 저장하기 (Application 객체와 차이점)

### Application

- Application의 전역에서 사용할 수 있다.

### Session

- Session 범주 내에서 사용할 수 있다.
- 현재 접속한 사용자 별로 저장 공간이 달라진다.
  - 브라우저 별로 요청을 따로 인식한다.
- 크롬을 2개 열어 놓고 했을 때는 같은 session 으로 인식하는데  하나의 프로세스에 멀티쓰레드 환경에서 동작하기 때문이다. 

> JAVA

- `request.getSession();` 으로 세션 객체를 생성해서 사용한다.
- Application 객체와 사용법은 동일하다.

```java
package com.newlecture.web;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/calc3")
public class Calc3 extends HttpServlet{

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse respone) 
			throws ServletException, IOException {
	
		//ServletContext application = request.getServletContext(); Application 객체
		HttpSession session =  request.getSession(); // session 객체
		
		respone.setCharacterEncoding("UTF-8");
		respone.setContentType("text.html; charset= UTF-8");
		
		String v_ = request.getParameter("v");
		String op_ = request.getParameter("operator");
		
		int v =0;
		if(!v_.equals("")) v = Integer.parseInt(v_);
		
		if(op_.equals("=")) {
			
			int x = (Integer)request.getSession().getAttribute("value");
			int y = v;

			String op = (String)session.getAttribute("op");
			int result =0;
			
			if(op.equals("+"))
				result = x + y;
			else
				result = x - y;
			
			respone.getWriter().print(result);
			
		}else {
			session.setAttribute("value", v);
			session.setAttribute("op", op_);
		}
	}
}

```

> 결과 1 :  서로 다른 브라우저 실행 했을 때

- 크롬에서 보낸 요청을 파이어폭스에서는 갖고 있지 않아서 null 오류가 발생한다.

![session](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/session.png)

> 결과 2 : 같은 브라우저로 실행 했을 때

- 같은 크롬에서 값을 공유하고 있다.

![crome](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/crome.png)

## 23. 웹 서버가 현재 사용자(Session)을 구분하는 방식

### 세션 ID 와 사용자 저장소 구별

1. 처음 요청을 보낼 때는 사용자 ID가 없다.
2. 사용자 ID가 없기 때문에 Application 공간에만 사용할 수 있다.
3. respone 시 ID가 부여된다.
4. 다음 요청때 ID를 사용해서 요청하여 session 을 사용할 수 있다.

![20220217145403](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220217145403.png)

- session ID 확인
  - 서버는 Session ID를 확인해서 사용자를 구분한다.
  - 다른 사용자가 Session을 복사해서 서버측에 요청하면 같은 사용자로 인식한다.

![20220217145537](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220217145537.png)

### 세션 메소드

- 서버에서 세션을 계속 갖고 있는 것이 아니라 세션을 비우고 시간에 따라 정리할 수 있다.

![20220217150055](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220217150055.png)

## 24. Cookie 를 이용해 상태 값 유지하기

### 상태 저장을 위한 값의 저장소의 특징

- 클라이언트가 값을 서버에 저장하지 않고 갖고 다닐 수 있다.
- 클라이언트가 서버에 요청할 때 값을 가져갈 수 있다.
  1. 헤더정보 : 브라우저가 알아서 담아주는 헤더정보
  2. 사용자 데이터 : 사용자가 보낸 데이터
  3. 쿠기 정보 : 브라우저가 알아서 담아주는 쿠키정보
- 서버 측에서 getHeader();  getCookies(); getParameter(); 으로 정보를 얻는다.
- 서버에서 보낼 때는 addCookie(); 함수로 Cookie 를 심을 수 있다.

![20220217150529](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220217150529.png)

### 쿠키 사용하기

#### 쿠기 저장하기

- 서버측에서 값을 저장하려고 하는데 Application 과 session 에 저장하지 않고 클라이언트에 보내고 싶을 때
- 브라우저가 response 을 읽고 쿠키를 갖는다.

```java
Cookie cookie = new Cookie("c", String.valueOf(result));
response.addCookie(cookie);
```

#### 쿠키 읽기

- 브라우저가 다시 서버에 요청하게 되면 서버측은 배열로 쿠키를 받는다.
- 요청시 보냈던 쿠키를 찾기 위해서 반복문을 사용한다.

```java
Cookie[] cookies = request.getCookies();
String _c = "";

if(cookies != null)
	for(Cookie cookie : cookies)
		if("c".equals(cookie.getName()))
			_c = cookie.getValue();
```

> Java - 서버에서 쿠키생성해서 클라이언트에게 보내기

- 쿠키값으로는 문자열만 보낼 수 있다.

```java
Cookie valueCookie = new Cookie("value", String.valueOf(v)); // ValueCookie 를 생성한다.
Cookie opCookie = new Cookie("op", op_);					// opCookie 를 생성한다.
respone.addCookie(valueCookie);								// 클라이언트에게 valueCookie 쿠키를 보낸다.
respone.addCookie(opCookie);								// 클라이언트에게 opCookie 쿠키를 보낸다.
```

- 웹 브라우저에서 쿠키를 확인 할 수 있다.

![20220217153906](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220217153906.png)

> Java - 쿠키 구현

```java
package com.newlecture.web;

@WebServlet("/calc3")
public class Calc3 extends HttpServlet{

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse respone) 
			throws ServletException, IOException {
        // 쿠키 객체를 생성한다. : 쿠키는 배열로 생성된다.
		Cookie[] cookies =  request.getCookies();
	
		respone.setCharacterEncoding("UTF-8");
		respone.setContentType("text.html; charset= UTF-8");
		
		String v_ = request.getParameter("v");
		String op_ = request.getParameter("operator");
		
		int v =0;
		if(!v_.equals("")) v = Integer.parseInt(v_);
		
		if(op_.equals("=")) {
			int x = 0;
			
			for(Cookie c : cookies) 
				if(c.getName().equals("value")) {
					x = Integer.parseInt(c.getValue());
					break;
				}
			int y = v;
			String operator = "";
			for(Cookie c : cookies)
				if(c.getName().equals("op")) {
					operator = c.getValue();
					break;
				}
			int result =0;
            
			if(operator.equals("+"))
				result = x + y;
			else
				result = x - y;
			
			respone.getWriter().print(result);
		}else {
            // 서버에서 쿠키를 생성하여 클라이언트에게 보내준다.
			Cookie valueCookie = new Cookie("value", String.valueOf(v));
			Cookie opCookie = new Cookie("op", op_);
			respone.addCookie(valueCookie);
			respone.addCookie(opCookie);
		}
	}
}

```

## 25. Cookie의 path 옵션

### 쿠키는 모든 페이지마다 동일한가?

- 서블릿 마다 쿠키로 저장한다고 할때 서블릿 마다 다른 쿠키를 갖고 있다.
- 쿠키를 설정할 때 URL 을 설정 할 수 있다. URL 을 설정하여 쿠키 충돌을 막을 수 있다.
- `valueCookie.setPath("경로명");` 
  - 어느 경우에 따라 사용자에게 전달 해야 되는지에 대한 경로
  - `valueCookie.setPath("/");`으로 설정할 경우 모든 페이지를 요청할 떄마다 valueCookie를 갖고 와야한다
  - `valueCookie.setPath("/notice");` notice가 포함된 하위 어떤 URL 을 요청할 때 valueCookie를 갖고 온다.

> 서버에서 쿠키 생성해서 클라이언트에게 전달

- NetWork에 Response Headers 에서 생성된 쿠키를 확인 할 수 있다.
- Response Headers 는 서버가 클라이언트에게 돌려주는 정보

```java
Cookie valueCookie = new Cookie("value", String.valueOf(v));
Cookie opCookie = new Cookie("op", op_);
valueCookie.setPath("/");
opCookie.setPath("/");
respone.addCookie(valueCookie);
respone.addCookie(opCookie);
```

![쿠키정보](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/%EC%BF%A0%ED%82%A4%EC%A0%95%EB%B3%B4.png)

- 웹브라우저에서 쿠키를 확인할 수 있다.

![쿠키](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/%EC%BF%A0%ED%82%A4.png)

> 클라이언트에서 서버로 요청 하고 서버에서 쿠키 정보 읽기

- 클라이언트에게 쿠키를 받는다.

```java
Cookie[] cookies =  request.getCookies();
```

![클라이언트 요청 쿠키 받음](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8%20%EC%9A%94%EC%B2%AD%20%EC%BF%A0%ED%82%A4%20%EB%B0%9B%EC%9D%8C.png)

> 쿠키 경로가 다를 때

- 맵핑된 경로가 @WebServlet("/calc3") 인데 쿠키 경로를 add라고 할 경우

```java
@WebServlet("/calc3")
...

Cookie valueCookie = new Cookie("value", String.valueOf(v));
Cookie opCookie = new Cookie("op", op_);
valueCookie.setPath("/add");
opCookie.setPath("/add");
respone.addCookie(valueCookie);
respone.addCookie(opCookie);
```

- 서버에서 는 응답 헤더경로로 path = /add 가 심어 졌다.![쿠키생성](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/%EC%BF%A0%ED%82%A4%EC%83%9D%EC%84%B1.png)

- 클라이언트가 요청할 때 경로명 add가 포함된 하위 어떤 URL 을 요청할 때 값을 갖고 올 수 있다.
- 현재 경로명은 calc3 이기 때문에 쿠키 경로가 일치하지 않아 서버에서 값을 제대로 받을 수 없다.

![쿠키 받기](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/%EC%BF%A0%ED%82%A4%20%EB%B0%9B%EA%B8%B0.png)

- 경로명을 임의로 수정하게 되면 쿠키를 받을 수 있다.

## 26. Cookie의 maxAge 옵션

### 브라우저가 닫혀도 유효한가?

- 브라우저가 닫혔을 때 쿠키에 메시지를 설정하지 않으면 브라우저의 생존 주기와 같아진다.
- 쿠키는 브라우저가 닫혀도 원하는 기간을 설정하여 그 기간내 값을 유지할 수 있게 해주는 특징을 갖고 있다.
- 쿠키는 기본적으로 브라우저의 메모리에 있다가 기간 설정이 되면 그 브라우저와 상관없이 설정한 기간내에 존재 해야해서
  영구 저장소인 외부파일에 저장하게 된다.

![20220217171343](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220217171343.png)

- `valueCookie.setMaxAge(24*(60*60));` 으로 만료날짜를 설정할 수 있다.
- 초단위로 설정하기 떄문에 이처럼 설정하면 24뒤에 만료`24 * 60 * 60` 되는것으로 볼 수 있다.  
- 기간을 설정하지 않으면 브라우저를 닫을 때 쿠키가 같이 사라진다
- 기간을 설정하면 만료날짜까지 쿠키가 살아있다.

![무제](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/%EB%AC%B4%EC%A0%9C.png)

## 27. Application / Session  / Cookie 의 차이점 정리

| 종류/특징   | 사용범위                            | 생명주기                                   | 저장위치                       |
| ----------- | ----------------------------------- | ------------------------------------------ | ------------------------------ |
| Application | 전역범위에서 사용하는 저장 공간     | WAS가 시작해서 종료할 때 까지              | WAS 서버의 메모리              |
| Session     | 세션 범위에서 사용하는 저장 공간    | 세션이 시작해서 종료할 때 까지             | WAS 서버의 메모리              |
| Cookie      | Web Browser별 지정한 path 범주 공간 | Browser에 전달한 시간부터 만료시간 전 까지 | Web Browser의 메모리 또는 파일 |

### 오랜기간 데이터를 유지하고 싶을 때 ?

1. 세션을 사용할 경우

   - 세션에서는 오랜 기간동안 데이터를 갖고 있을 수 없다.

   - 세션 ID가 쿠키이며 브라우저가 닫히면 쿠키정보가 사라진다.

   - 사용자가 다시 요청하게 되면 새로운 쿠키를 얻어 session 에 저장하므로 sessoin 에 공간을 낭비할 수 있다.

2. 특정 URL 을 사용할 때 
   - 쿠키를 사용하면 공간을 효율적으로 활용할 수 있다.

## 28. 서버에서 페이지 전환해주기(redirect)

- 이전까지 예제에서 숫자를 입력 하고 나서 뒤로 가기를 눌러 다시 요청 하는 방법으로 했다.
- 페이지 전환은 서버에서 페이지를 다시 요청한 것 처럼 보여준다

![20220220144738](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220144738.png)

- `respone.sendRedirect("calc3.html");` 를 추가하면 redirection 을 사용할 수 있다.

## 29. 동적인 페이지(서버 페이지)

- 사용자의 요청을 받아서 출력한 문서를 만들어서 응답해준다.

> Servlet 으로 동적인 페이지 구현 - CalcPage

- Servelt에 html을 삽입해서 출력한다.
- 계산기 구현 하기
  - CalcPage.java 에서 입력되는 내용을 Calc3.java 로 POST 한다.
  - CalcPage.java 에서 쿠키로 받은 값을 `out.printf("<td class = \"output\" colspan =\"4\">%s</td>",exp);`으로 출력한다.

```java
@WebServlet("/calcpage")
public class CalcPage extends HttpServlet{

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse respone) 
			throws ServletException, IOException {
		
		Cookie[] cookies =  request.getCookies();
		String exp ="0";
		if(cookies != null)
			for(Cookie c : cookies)
				if(c.getName().equals("exp")) {
					exp = c.getValue();
					break;
				}
		
		PrintWriter out = respone.getWriter();
		out.write("<!DOCTYPE html>");
		out.write("<html>");
		out.write("	<head>");
		out.write("		<meta charset=\"UTF-8\">");
		out.write("		<title>Insert title here</title>");
		out.write("	<style>");
		out.write("		input{");
		out.write("			width:50px;");
		out.write("			height:50px;");
		out.write("		}");
		out.write("		.output{");
		out.write("			height : 50px;");
		out.write("		background : #e9e9e9;");
		out.write("		font-size : 24px;");
		out.write("			font-weight: bold;");
		out.write("		text-align: right;");
		out.write("		padding: 0px 5px;");
		out.write("	}");
		out.write("	</style>");
		out.write("	</head>");
		out.write("<body>");
		out.write("	<form action=\"calc3\" method = \"POST\">");
		out.write("		<table>");
		out.write("			<tr>");
		out.printf("				<td class = \"output\" colspan =\"4\">%s</td>",exp);
		out.write("			</tr>");
		out.write("			<tr>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"CE\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"C\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"BS\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"/\"></td>");
		out.write("			</tr>");
		out.write("			<tr>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"7\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"8\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"9\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"*\"></td>");
		out.write("			</tr>");
		out.write("			<tr>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"4\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"5\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"6\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"-\"></td>");
		out.write("			</tr>");
		out.write("			<tr>");
		out.write("			<td><input type = \"submit\" name = \"value\" value =\"1\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"2\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"3\"></td>");
		out.write("			<td><input type = \"submit\" name = \"operator\" value =\"+\"></td>");
		out.write("		</tr>");
		out.write("		<tr>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"0\"></td>");
		out.write("				<td><input type = \"submit\" name = \"dot\" value =\".\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"=\"></td>");
		out.write("			</tr>");
		out.write("		</table>");
		out.write("	</form>");
		out.write("	</body>");
		out.write("</html>");
	}
}

```

> Servlet 으로 동적인 페이지 구현 - Calc3

- CalcPage.java 에서 요청 받은 값을 저장하고 exp 에 누적하여 쿠키를 생성해서 요청한 페이지로 돌려준다.

```java
@WebServlet("/calc3")
public class Calc3 extends HttpServlet{


	@Override
	protected void service(HttpServletRequest request, HttpServletResponse respone) 
			throws ServletException, IOException {
        
		Cookie[] cookies =  request.getCookies();
		
		String value = request.getParameter("value");
		String operator = request.getParameter("operator");
		String dot = request.getParameter("dot");
		String exp = "";
		
		if(cookies != null)
			for(Cookie c : cookies)
				if(c.getName().equals("exp")) {
					exp = c.getValue();
					break;
				}
		
		if(operator != null && operator.equals("=")) {
			ScriptEngine engine =  new ScriptEngineManager().getEngineByName("graal.js");
			try {
				exp =String.valueOf(engine.eval(exp));
			} catch (ScriptException e) {
				e.printStackTrace();
			}
			
		}else {
			exp += (value == null)? "" : value ;
			exp += (operator == null)? "" : operator ;
			exp += (dot == null)? "" : dot ;
		}
		
 		Cookie expCookie = new Cookie("exp",exp);
		
		respone.addCookie(expCookie);
		respone.sendRedirect("calcpage");
	}
}
```

## 30. 쿠키 삭제하기

- `expCookie.setMaxAge(0);`으로 설정하면 쿠키를 삭제해준다.
- 계산기 예제에서 'C'를 클릭하면 초기화 되야하는데 else if문으로 빈문자열로 초기화 시켜주고
  쿠키 생성하는 곳 아래에 조건식 안에 쿠키를 삭제하는 코드를 작성해준다.

```JAVA
		...(생략)
		if(operator != null && operator.equals("=")) {
			ScriptEngine engine =  new ScriptEngineManager().getEngineByName("graal.js");
			try {
				exp =String.valueOf(engine.eval(exp));
			} catch (ScriptException e) {
			
				e.printStackTrace();
			}
			
		}else if(operator != null && operator.equals("C")) {
			exp = "";
		}
		else {
			exp += (value == null)? "" : value ;
			exp += (operator == null)? "" : operator ;
			exp += (dot == null)? "" : dot ;
		}
		
 		Cookie expCookie = new Cookie("exp",exp);
 		
 		if(operator != null && operator.equals("C")) 
 			expCookie.setMaxAge(0);
 		
		respone.addCookie(expCookie);
		respone.sendRedirect("calcpage");
```

## 31. GET/POST에 특화된 서비스 함수

### GET, POST 선택적으로 받기

#### 방법1 if문 사용

> HTML

```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action ="submit" method = "GET/POST">
		<input type ="submit" value ="요청">
	</form>
</body>
</html>
```

> JAVA

```java
package com.newlecture.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calculator")
public class Calculator extends HttpServlet {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
		
		if(request.getMethod().equals("GET")) {
			System.out.println("GET 요청이 왔습니다.");
			
		}else if(request.getMethod().equals("POST")) {
			System.out.println("POST 요청이 왔습니다.");
		}
	}
}
 
```

#### 방법 2. super.service(request, response) , doGet () 와 doPost()

- 부모의 service 함수는 요청을 받아서 선택적으로 doGet(...) , doPost(...) 를 호출한다.

> JAVA

```JAVA
package com.newlecture.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calculator")
public class Calculator extends HttpServlet {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		if(request.getMethod().equals("GET")) {
			System.out.println("GET 요청이 왔습니다.");
			
		}else if(request.getMethod().equals("POST")) {
			System.out.println("POST 요청이 왔습니다.");
		}
		//POST , GET 에 따라 doGet, doPost 함수를 호출한다.
		super.service(request, response);
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doGET 요청이 왔습니다.");
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doPOST 요청이 왔습니다.");
	}
	
}
 
```

- 공통으로 사용되는 service가 필요 없을 경우에는 service 함수를 삭제하고 doGet 과 doPost 함수를 사용한다.

  (service 함수를 통해 doGet, doPost 가 호출되므로 service 영역을 지워도 된다.)

```java
package com.newlecture.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calculator")
public class Calculator extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doGET 요청이 왔습니다.");
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doPOST 요청이 왔습니다.");
	}
	
}
 
```

## 32. 계산기 프로그램 하나의 서블릿으로 합치기

### 문제점

- GET 요청과 POST 요청이 분리 되있다.
- 분리 되 있을 경우 쿠키 경로를 절대 경로("/") 가 아닌 한정된 경로("calc3")를 설정 하면 calcpage에서 접근 할 수 없게 된다.

![20220220190145](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220190145.png)

### 서블릿 합치기

- Calculator 의 서블릿에 Calcpage와 Calc3를 합친다.
- doGet 함수에 Calcpage 내용을 담는다.
  - 현재 페이지(calculator) 여서 `<form method>`에서 `action`을 지정하지 않아도 된다.
- doPost 함수에 calc3 내용을 담는다.
  - 쿠키 경로를 `expCookie.setPath("/calculator");` 현재 페이지(calculator)으로 한정 할 수 있다.
  - `respone.sendRedirect("calculator");` 로 수정

```java
package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calculator")
public class Calculator extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse respone) 
        throws ServletException, IOException {
        
		Cookie[] cookies = request.getCookies();
		String exp = "0";
		
		if(cookies != null)
			for(Cookie c : cookies)
					if(c.getName().equals("exp")) {
						exp = c.getValue();
						break;
					}
		
		PrintWriter out = respone.getWriter();
		
		out.write("<!DOCTYPE html>");
		out.write("<html>");
		out.write("	<head>");
		out.write("		<meta charset=\"UTF-8\">");
		out.write("		<title>Insert title here</title>");
		out.write("	<style>");
		out.write("		input{");
		out.write("			width:50px;");
		out.write("			height:50px;");
		out.write("		}");
		out.write("		.output{");
		out.write("			height : 50px;");
		out.write("		background : #e9e9e9;");
		out.write("		font-size : 24px;");
		out.write("			font-weight: bold;");
		out.write("		text-align: right;");
		out.write("		padding: 0px 5px;");
		out.write("	}");
		out.write("	</style>");
		out.write("	</head>");
		out.write("<body>");
		out.write("	<form method = \"POST\">");
		out.write("		<table>");
		out.write("			<tr>");
		out.printf("				<td class = \"output\" colspan =\"4\">%s</td>",exp);
		out.write("			</tr>");
		out.write("			<tr>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"CE\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"C\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"BS\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"/\"></td>");
		out.write("			</tr>");
		out.write("			<tr>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"7\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"8\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"9\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"*\"></td>");
		out.write("			</tr>");
		out.write("			<tr>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"4\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"5\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"6\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"-\"></td>");
		out.write("			</tr>");
		out.write("			<tr>");
		out.write("			<td><input type = \"submit\" name = \"value\" value =\"1\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"2\"></td>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"3\"></td>");
		out.write("			<td><input type = \"submit\" name = \"operator\" value =\"+\"></td>");
		out.write("		</tr>");
		out.write("		<tr>");
		out.write("				<td><input type = \"submit\" name = \"value\" value =\"0\"></td>");
		out.write("				<td><input type = \"submit\" name = \"dot\" value =\".\"></td>");
		out.write("				<td><input type = \"submit\" name = \"operator\" value =\"=\"></td>");
		out.write("			</tr>");
		out.write("		</table>");
		out.write("	</form>");
		out.write("	</body>");
		out.write("</html>");
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse respone) 
        throws ServletException, IOException {
        
		Cookie[] cookies = request.getCookies();
		String value = request.getParameter("value");
		String operator = request.getParameter("operator");
		String dot = request.getParameter("dot");
		
		String exp = "";
		
		if(cookies != null)
			for(Cookie c : cookies)
				if(c.getName().equals("exp")) {
					exp = c.getValue();
					break;
				}
				
		if(operator != null && operator.equals("=")) {
			ScriptEngine engine =  new ScriptEngineManager().getEngineByName("graal.js");
			try {
				exp =String.valueOf(engine.eval(exp));
			} catch (ScriptException e) {
				e.printStackTrace();
			}
			
		}else if(operator != null && operator.equals("C")) {
			exp = "";
			
		}else {
			exp += (value == null) ? "" : value;
			exp += (operator == null) ? "" : operator;
			exp +=(dot == null) ? "" : dot;
		}
			
		Cookie expCookie = new Cookie("exp", exp);
		if(operator != null && operator.equals("C"))
			expCookie.setMaxAge(0);
		
		expCookie.setPath("/calculator");
		respone.addCookie(expCookie);
		respone.sendRedirect("calculator");
	}
}
 
```

## 33. JSP를 이용한 자바 웹 프로그래밍

- 동적인 웹페이지를 만들 때 Servlet 안에 html의 내용을 담는다. 그런데 번거롭게 out.wirter 으로 출력을 해줘야 했다.
- out.writer를 하는 번거로운 일을 없애기 위해 Jsp 등장 했다.
-  파일의 확장자에 .jsp 를 붙여서 사용하고 jsp 가 출력의 형태고 바꿔준다.
- jsp 는 사용자가 페이지를 요청할 때 만들어지고 URL 맵핑은 파일명 그대로 된다.

> JSP

- `${3+4}` 으로 값을 변경할 수 있다.

```JSP
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	<style>
		input{
			width:50px;
			height:50px;
		}
		.output{
			height : 50px;
			background : #e9e9e9;
			font-size : 24px;
			font-weight: bold;
			text-align: right;
			padding: 0px 5px;
		}
	</style>
	</head>
	<body>
		<form action="calc3" method = "POST">
			<table>
				<tr>
					<td class = "output" colspan ="4">${3+4}</td>
				</tr>
				<tr>
					<td><input type = "submit" name = "operator" value ="CE"></td>
					<td><input type = "submit" name = "operator" value ="C"></td>
					<td><input type = "submit" name = "operator" value ="BS"></td>
					<td><input type = "submit" name = "operator" value ="÷"></td>
				</tr>
				<tr>
					<td><input type = "submit" name = "value" value ="7"></td>
					<td><input type = "submit" name = "value" value ="8"></td>
					<td><input type = "submit" name = "value" value ="9"></td>
					<td><input type = "submit" name = "operator" value ="X"></td>
				</tr>
				<tr>
					<td><input type = "submit" name = "value" value ="4"></td>
					<td><input type = "submit" name = "value" value ="5"></td>
					<td><input type = "submit" name = "value" value ="6"></td>
					<td><input type = "submit" name = "operator" value ="-"></td>
				</tr>
				<tr>
					<td><input type = "submit" name = "value" value ="1"></td>
					<td><input type = "submit" name = "value" value ="2"></td>
					<td><input type = "submit" name = "value" value ="3"></td>
					<td><input type = "submit" name = "operator" value ="+"></td>
				</tr>
				<tr>
					<td><input type = "submit" name = "value" value ="0"></td>
					<td><input type = "submit" name = "dot" value ="."></td>
					<td><input type = "submit" name = "operator" value ="="></td>
				</tr>
			</table>
		</form>
	</body>
</html>
```

- 브라우저가 프로젝트의 디렉토리를 홈디렉토리를 사용하는 것이 아니다. 배포할 때 디렉토리가 톰켓의 홈디렉토리로 옮겨진다. 다른 서비스와 충돌이 있을 수 있으므로 work 디렉토리가 아닌 이클립스가 관리하고 서비스를 위한 별도의 공간을 마련한다.

경로(.metadata\.plugins\org.eclipse.wst.server.core)

![20220220194220](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220194220.png)

- jsp 의 작업 디렉토리에서 jsp파일이 어떻게 변환 되는지 알 수 있다.(tmp0\work\Catalina\localhost\ROOT\org\apache\jsp)

### JSP 변환 파일

```java
/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/9.0.58
 * Generated at: 2022-02-20 10:31:59 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class calculator_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    if (!javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSP들은 오직 GET, POST 또는 HEAD 메소드만을 허용합니다. Jasper는 OPTIONS 메소드 또한 허용합니다.");
        return;
      }
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("	<head>\r\n");
      out.write("		<meta charset=\"UTF-8\">\r\n");
      out.write("		<title>Insert title here</title>\r\n");
      out.write("	<style>\r\n");
      out.write("		input{\r\n");
      out.write("			width:50px;\r\n");
      out.write("			height:50px;\r\n");
      out.write("		}\r\n");
      out.write("		.output{\r\n");
      out.write("			height : 50px;\r\n");
      out.write("			background : #e9e9e9;\r\n");
      out.write("			font-size : 24px;\r\n");
      out.write("			font-weight: bold;\r\n");
      out.write("			text-align: right;\r\n");
      out.write("			padding: 0px 5px;\r\n");
      out.write("		}\r\n");
      out.write("	</style>\r\n");
      out.write("	</head>\r\n");
      out.write("	<body>\r\n");
      out.write("		<form action=\"calc3\" method = \"POST\">\r\n");
      out.write("			<table>\r\n");
      out.write("				<tr>\r\n");
      out.write("					<td class = \"output\" colspan =\"4\">");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${3+4}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("</td>\r\n");
      out.write("				</tr>\r\n");
      out.write("				<tr>\r\n");
      out.write("					<td><input type = \"submit\" name = \"operator\" value =\"CE\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"operator\" value =\"C\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"operator\" value =\"BS\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"operator\" value =\"Ã·\"></td>\r\n");
      out.write("				</tr>\r\n");
      out.write("				<tr>\r\n");
      out.write("					<td><input type = \"submit\" name = \"value\" value =\"7\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"value\" value =\"8\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"value\" value =\"9\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"operator\" value =\"X\"></td>\r\n");
      out.write("				</tr>\r\n");
      out.write("				<tr>\r\n");
      out.write("					<td><input type = \"submit\" name = \"value\" value =\"4\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"value\" value =\"5\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"value\" value =\"6\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"operator\" value =\"-\"></td>\r\n");
      out.write("				</tr>\r\n");
      out.write("				<tr>\r\n");
      out.write("					<td><input type = \"submit\" name = \"value\" value =\"1\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"value\" value =\"2\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"value\" value =\"3\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"operator\" value =\"+\"></td>\r\n");
      out.write("				</tr>\r\n");
      out.write("				<tr>\r\n");
      out.write("					<td><input type = \"submit\" name = \"value\" value =\"0\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"dot\" value =\".\"></td>\r\n");
      out.write("					<td><input type = \"submit\" name = \"operator\" value =\"=\"></td>\r\n");
      out.write("				</tr>\r\n");
      out.write("			</table>\r\n");
      out.write("		</form>\r\n");
      out.write("	</body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}

```

### JSP 코드 블록

- <% %> 으로 jsp 에게 코드 블록을 인식 시켜준다.

```jsp
<% 
int x = 3;
int y = 4;
%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	<style>
		input{
			width:50px;
			height:50px;
		}
		.output{
			height : 50px;
			background : #e9e9e9;
			font-size : 24px;
			font-weight: bold;
			text-align: right;
			padding: 0px 5px;
		}
	</style>
	</head>
	<body>
		<form action="calc3" method = "POST">
			<table>
				<tr>
					<td class = "output" colspan ="4"></td>
				</tr>
				<tr>
					<td><input type = "submit" name = "operator" value ="CE"></td>
					<td><input type = "submit" name = "operator" value ="C"></td>
					<td><input type = "submit" name = "operator" value ="BS"></td>
					<td><input type = "submit" name = "operator" value ="÷"></td>
				</tr>
				<tr>
					<td><input type = "submit" name = "value" value ="7"></td>
					<td><input type = "submit" name = "value" value ="8"></td>
					<td><input type = "submit" name = "value" value ="9"></td>
					<td><input type = "submit" name = "operator" value ="X"></td>
				</tr>
				<tr>
					<td><input type = "submit" name = "value" value ="4"></td>
					<td><input type = "submit" name = "value" value ="5"></td>
					<td><input type = "submit" name = "value" value ="6"></td>
					<td><input type = "submit" name = "operator" value ="-"></td>
				</tr>
				<tr>
					<td><input type = "submit" name = "value" value ="1"></td>
					<td><input type = "submit" name = "value" value ="2"></td>
					<td><input type = "submit" name = "value" value ="3"></td>
					<td><input type = "submit" name = "operator" value ="+"></td>
				</tr>
				<tr>
					<td><input type = "submit" name = "value" value ="0"></td>
					<td><input type = "submit" name = "dot" value ="."></td>
					<td><input type = "submit" name = "operator" value ="="></td>
				</tr>
			</table>
		</form>
	</body>
</html>
```

## 34. JSP 코드 블록

### 출력코드

- service 함수에 출력 코드를 입력하여 화면에 출력한다.

![20220220201559](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220201559.png)

### 코드 블록

![20220220201833](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220201833.png)

![20220220201941](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220201941.png)

- <%=y%>  print를 생략할 수 있다.

![20220220202033](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220202033.png)

### 선언부

- ! 를 붙여서 멤버 영역에 함수를 작성할 수 있다.

![20220220202315](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220202315.png)

### 초기 설정을 위한 Page 지시자

![20220220202435](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220202435.png)

## 35. jsp 내장 객체

- jsp 내부에 있는 내장 객체들이 존재한다.

![20220220221940](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220221940.png)

### request

![20220220222036](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220222036.png)

### response

![20220220222127](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220222127.png)

### out

![20220220222211](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220222211.png)

### session

![20220220222226](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220222226.png)

### application

![20220220222426](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220220222426.png)

## 36. JSP MVC model1

- Model : 출력 데이터
- View : 출력 담당
- Controller : 입력과 제어를 담당

![20220222144618](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222144618.png)

> Jsp

- MVC 로 코드를 분리해서 작성

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	int num = 0;
	String num_ = request.getParameter("n");
	if(num_ != null && !num_.equals(""))
			num = Integer.parseInt(num_);
	
	String result ="";
	
	if(num%2 != 0)
		result = "홀수";
	else
		result = "짝수";
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%=result%>입니다.
</body>
</html>
```

## 37. JSP MVC model1 vs model2

### model1 컨트롤러와 뷰가 물리적으로 분리되지 않는 방식

![20220222145601](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222145601.png)

### model2 컨트롤러와 뷰가 물리적으로 분리된 방식

- Controller 와 Model 은 사용자 요청이 있을 때 만들어지는 것이 아니라 View 가 사용자의 요청이 있을 때 만들어진다.
- Controller 와 Model 부분을 미리 컴파일해 놓을 수 있다.

![20220222145645](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222145645.png)

### MVC  model2 : Dispatcher 를 집중화 하기 전의 모델

- Controll 에서 View 와 연결하기 위해서 포워딩 하게 된다.
- 서블릿 에서 서블릿으로 흐름을 연결 받아 진행하는 것을 포워딩이라고 한다.

![20220222150637](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222150637.png)

### MVC  model 2 : Dispatcher 를 집중화 한 후의 모델

- Controller 을 모아놓는 곳과 Dispatcher 를 따로 둔다.
- Dispatcher 하는 서블릿과 업무 로직을 담당하는 Controller 두고 사용자의 요청이 오면 Dispatcher 서블릿이 적절한 컨트롤러를 선택해서 수행하게 한다.
- Controller 는 Dispatcher 에게 관련된 내용을 알려준다.

![20220222150815](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222150815.png)

### MVC model2 예제

> Jsp

- request 에 담긴 result를 사용할 수 있다. 

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%=request.getAttribute("result")%>입니다.
</body>
</html>
```

> Java

- spag.jsp 로 연결 하기 위한 저장소가 필요 하다.
- redirect 와 forword
  - forword : 현재 작업한 내용을 이어갈 수 있게한다.
  - redirect : 현재 작업한 내용과 상관없이 새로운 요청을 한다.
- 서블릿 페이지로 요청이 왔을 때 `request.getRequestDispatcher("spag.jsp");`으로 spag.jsp 에 전달을 한다.
- `forward(request, response);` 포워드 방법으로 서블릿의 requeset 와 response 을 전달받으면  jsp 에서 사용할 수 있다.
- 포워드 방법에서 전달 하기 위해 저장소 request가 사용된다.  `request.setAttribute("result", result);` 으로 result를 담을 수 있다.

```java
package com.newlecture.web;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/spag")
public class Spag extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
		int num = 0;
		String num_ = request.getParameter("n");
		if(num_ != null && !num_.equals(""))
				num = Integer.parseInt(num_);
		
		String result ="";
		
		if(num%2 != 0)
			result = "홀수";
		else
			result = "짝수";
		
		request.setAttribute("result", result);
		
		//redirect : 새로운 요청
		//forward : 문맥을 이어가게 함
		RequestDispatcher dispatcher = request.getRequestDispatcher("spag.jsp");
		dispatcher.forward(request, response);
		
	}
}

```

## 38. View를 위한 데이터 추출 표현식 EL(Expression Language)

### 저장 객체에서 값을 추출해서 출력하는 표현식

- `<%=request.getAttribute("result")%>`을 `${cnt}`로 표현할 수 있다.

![20220222153825](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222153825.png)

### 컬렉션, 배열 값 출력하는 표현식

![20220222154222](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222154222.png)

- Controller

```java
String [] names = {"newlec" , "dragon"};
request.setAttribute("names", names);
```

- View

```jsp
${names[0]}<br>
${names[1]}
```

### Map  

![20220222154734](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222154734.png)

- Controller

```jsp
Map <String, Object> notice = new HashMap<String, Object>();
notice.put("id",1);
notice.put("title","EL좋아요");

request.setAttribute("notice", notice);
```

- View

```jsp
${notice.title}
```

## 39. EL 의 데이터 저장소

### 저장 객체에서 값을 추출하는 순서

#### 서버 저장소

- page 
  - jsp 가 만들어낸 객체 중에서 pageContext 가 있는데 page 내에서 사용할 수 있는 서블릿 객체들을 모아 놓은 것
  - request 처럼 저장소 역할도 한다.
- request
- session
- application

### 저장소 순서

- 묵시적 순서는 page - > request -> session -> application 이다
- ...Scope로 특정 저장소에 있는 내용을 꺼내서 쓸 수 있다.

![20220222160234](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222160234.png)

### 클라이언트의 입력 값 출력

![20220222160659](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222160659.png)

- EL 표기법

![20220222160748](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222160748.png)

![20220222161301](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222161301.png)

## 40.EL의 연산자

### EL 연산

- 엄격한 Html 구문으로 파악하게 될 때 < 에 연산으로 인해 오류가 생길 수 있다.

![20220222161736](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222161736.png)

![20220222161554](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220222161554.png)

#### empty

- null, 과 빈 문자열일 때 true를 반환한다.

```
{empty param.cnt? "빈문자열 입니다." : param.cnt};
```

