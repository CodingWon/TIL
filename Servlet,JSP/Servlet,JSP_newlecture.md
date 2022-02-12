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
- service 함수는 인터페이서, 추상클래스의 약속된 이름으로 service를 통해 프로그램을 만든다.

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

     



​		