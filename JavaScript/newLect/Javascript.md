# [자바스크립트(Javascript) 강의 강좌 Quick Start + DOM 프로그래밍 for VanillaJS](https://www.youtube.com/watch?v=gxzy_CFqV1M&list=PLq8wAnVUcTFWhQrIXNN6kPYXJA6X2IQM4)

- 유튜브에 뉴렉처 javascript + dom 을 수강하고 정리한 글입니다.

# 목차




## 자바 스크립트와 입/출력 플랫폼

![20220206140010](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220206140010.png)

- 문서가 load 되면 Document 객체 구조가 만들어진다.
- javascript 를 통해 DOM을 조작하여 UI에 변화를 줄 수 있다.

![20220206144703](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220206144703.png)

## 자바 스크립트의 탄생

- NetscapteNaviator 사에서 서버에 불필요한 요청을 제어하기 위해 폼 객체의 유효성 검사를 만들었다.

- 폼 객체의 유효성 검사를 위해 javascript가 탄생 했다.

  ![20220206194312](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220206194312.png)

## 스크립트 코드 작성 영역

-  script 태그로 감싸서 실행 영역안에서 코드를 작성한다.
- script 위치는 head , body 어디든 끼어 넣을 수 있다.

![20220206194621](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220206194621.png)

## 값의 종류와 변수

- 변수를 선언할 때 정수, 실수, 문자, 문자열 자료형식에 상관없이 var 라는 키워드로 선언한다.

- javascript 에서의 변수는 기본형식이 없고 전부 참조변수다.

  ```javascript
  var x = 3;
  ```

  - 대입되는 3은 스스로 공간을 갖고(오토방식) x 는 참조변수의 역할을 한다.

## Wrapper 클래스와 Wrapping 방식

- Boolean , Number, String

![20220206195826](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220206195826.png)

```javascript
var x = 3;
var x = new Number(3);
```

> undefiend 와 null

- undefiend 개발자가 의도하지 않는 빈값
- null : 개발자가 의도한 빈값

```javascript
var x;
console.log(x); // undefiend

var y = null;
console.log(y); // null
```

- 할당하는 객체에 따라서 사용할 수 있는 메소드가 달라진다.

```javascript
var num;
num = 3.4 // new Number(3.4);
num = 3   // new Number(3);
num = "3" // new String("3");
```

## Array 객체

> push / pop 메소드를 이용한 데이터 관리 : Stack
