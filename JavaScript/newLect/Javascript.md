# [자바스크립트(Javascript) 강의 강좌 Quick Start + DOM 프로그래밍 for VanillaJS](https://www.youtube.com/watch?v=gxzy_CFqV1M&list=PLq8wAnVUcTFWhQrIXNN6kPYXJA6X2IQM4)

- 유튜브에 뉴렉처 javascript + dom 을 수강하고 정리한 글입니다.

# 목차




## 1.자바 스크립트와 입/출력 플랫폼

![20220206140010](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220206140010.png)

- 문서가 load 되면 Document 객체 구조가 만들어진다.
- javascript 를 통해 DOM을 조작하여 UI에 변화를 줄 수 있다.

![20220206144703](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220206144703.png)

## 2.자바 스크립트의 탄생

- NetscapteNaviator 사에서 서버에 불필요한 요청을 제어하기 위해 폼 객체의 유효성 검사를 만들었다.

- 폼 객체의 유효성 검사를 위해 javascript가 탄생 했다.

  ![20220206194312](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220206194312.png)

## 3.스크립트 코드 작성 영역

-  script 태그로 감싸서 실행 영역안에서 코드를 작성한다.
- script 위치는 head , body 어디든 끼어 넣을 수 있다.

![20220206194621](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220206194621.png)

## 4.값의 종류와 변수

- 변수를 선언할 때 정수, 실수, 문자, 문자열 자료형식에 상관없이 var 라는 키워드로 선언한다.

- javascript 에서의 변수는 기본형식이 없고 전부 참조변수다.

  ```javascript
  var x = 3;
  ```

  - 대입되는 3은 스스로 공간을 갖고(오토방식) x 는 참조변수의 역할을 한다.

## 5. Wrapper 클래스와 Wrapping 방식

### Boolean , Number, String

![20220206195826](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220206195826.png)

```javascript
var x = 3; // JSON 방식
var x = new Number(3); // Javascript Object 방식
```

### undefiend 와 null

- undefiend 개발자가 의도하지 않는 빈값
- null : 개발자가 의도한 빈값

```javascript
var x;
console.log(x); // undefiend

var y = null;
console.log(y); // null
```

## 6. Array 객체

### push / pop 메소드를 이용한 데이터 관리 : Stack

- LIFO(후입선출) : 가장 먼저 삽입되어 스택에 들어간 요소가 가장 마지막에 삭제
- pop 을 사용하면 값이 삭제 된다.

```js
var nums = new Array();

nums.push(5);
nums.push(10);
nums.push(21);
console.log(nums.pop()); // 21
console.log(nums.pop()); // 10
console.log(nums.pop()); // 5
console.log(nums) // 빈 배열
```

### 인덱스를 이용한 데이터 관리 : List

- 인덱스 형식으로 값을 저장할 수 있다.

```js
var nums = new Array();

nums[0] = 5;
nums[1] = 10;
nums[2] = 21;
```

- 중간 부터 넣어도 오류가 나지 않는다.
- `nums[0] , nums[1]` 에 undefined 으로 출력된다.

```js
var nums = new Array();
nums[2] = 10;
console.log(nums[0]) // undefiend
console.log(nums[1]) // undefiend
```

### 배열 객체 초기화

- Array를 생성할 때 한개의 인자를 넣어주면 인자의 갯수로 배열의 크기가 정해진다.

```js
var nums = new Array(5); 
```

- 여러개의 인자를 넣으면 넣은 인자대로 배열을 생성한다.

```js
var nums = new Array(5,10,21);
```

- 같은 형식이 아니어도 배열에 담을 수 있다.
- typeof 로 형식을 확인해야 한다.

```js
var nums = new Array(5,10,21,"hello");
console.log(typeof nums[3]); // 타입 확인
```

- 배열에 또 다른 배열을 담을 수 있다.

```js
var nums = new Array(5,10,21"hello",new Array(2,4,5));
console.log(nums[4][0]); // 2 
```

### splice() 메소드를 이용한 데이터 관리

- splice(index , 지우는 갯수, 추가 , 추가 , ...);

``` js
var nums = new Array(5, 10, 21, "hello");
nums.splice(1); // [5] 
nums.splice(2); // [5,10]
nums.splice(1,1); // [5,21,"hello"]
nums.splice(1,2); // [5,"hello"]
nums.splice(3,1,"hoho") // [5,10,21, "hoho"];
nums.splice(3,0,"hoho") // [5,10,21,"hello", "hoho"];
```

## 7.Object

### 정적인 객체 , 동적인 객체 정의

> 정적인 객체 - class

- C++ , C#, Java 는 정의를 하고 객체를 만든다.

> 동적인 객체 - prototype 

- 객체를 만들고 정의한다.

### 객체 정의하기

```js
var exam = new Object();
exam.kor = 30;
exam.eng = 70;
exam.math = 80;

console.log(exam.kor + exam.math); // 110
```

### 키를 이용한 데이터 관리 : Map

- key를 통해 값을 꺼내오고 싶을 때 사용 방법

```js
var exam = new Object();

exam["kor"] = 30;
exam["eng"] = 70;
exam["math"] = 80;

console.log(exam["kor"]);

var key = "eng";
cosole.log(exam[key]);

```

## 8.JSON

### Javascript 데이터 객체와 JSON 생성 방법

- JSON 표현 방식이 이해하기 쉽다.

|         | JavaScript Object            | JavaScript Object Notation(JSON)                             |
| ------- | ---------------------------- | ------------------------------------------------------------ |
| Boolean | var n = new Boolean(true);   | var n = true;                                                |
| Number  | var n = new Number(3);       | var n = 3;                                                   |
| String  | var s = new String("hello"); | var s = "hello";    or   var s = 'hello'; <br />HTML 에서 " "(큰따음표)와 충돌이 생길 수 있어 <br />' '(작은따음표)를 많이 사용 |
| Array   | var ar = new Array();        | var ar = [ ];                                                |
| Object  | var ob = new Object();       | var ob = { };                                                |

- 예제

```js
var exam = {'kor':30 , 'eng' : 50, 'math' : 80};
var ar = [3,4,5,6,exam,[7,8,9]]; // 배열안에 객체와 배열을 포함 시킬 수 있다.
console.log(ar[4]['kor']) // 30
```

### JSON  중첩 표현

```js
var notices = [
			{'id':1, 'title':'hello'},
			{'id':2, 'title:'hi json'},
			{'id':3, 'title:'json is..'}
			];
			
console.log(notices[0].id) // 1
console.log(notices[0].title) // hello
console.log(notices[1].id) // 2
console.log(notices[1].title) // hi json
```

### 데이터를 구분하기 위한 표현방법

#### XML, CSV, JSON

- XML
  -  태그 기법으로 데이터를 표현

```
<notices>
	<notice id ="1" title = "hello" />
	<notice id ="2" title = "hi json" />
	<notice id ="3" title = "json is.."/>
</notices>
```

- CSV
  - 콤마로 데이터를 구분

```
1, hello
2, hi json
3, json is..
```

- JSON
  - 가벼우면서도 복잡한 데이터를 표현

```
[
{'id':1, 'title':'hello'},
{'id':2, 'title:'hi json'},
{'id':3, 'title:'json is..'}
];
```

## 9.JSON 파싱하기

- 서울 열린 데이터광장(https://data.seoul.go.kr/) 에서 JSON 형식의 파일을 받을 수 있다.
- javascript 으로 원격에 있는 데이터를 읽어 올때 문자열 형식으로 읽어온다.
- \ (역슬래쉬) 를 이용하여 문자열로 만든다 (ECMS5 방식)

```json
var data ='[ \
{"author":"가미오카 마사아키 지음","loca":"서울도서관","title":"(부자들의) 초격차 독서법 :부자들의 지식은 복리로 쌓인다","indt":"20220204","publisher_year":"2021","type":"단행본","publisher":"쌤앤파커스"}, \
{"author":"김장섭 지음","loca":"서울도서관","title":"내일의 부 :세상에서 가장 빨리 99.9% 부자 되는 법 : 통합본 =Riches of tomorrow","indt":"20220204","publisher_year":"2021","type":"단행본","publisher":"트러스트북스"}, \
{"author":"최민지 지음","loca":"서울도서관","title":"이럴 거면 혼자 살라고 말하는 당신에게 :관계를 고민하는 이들을 위한 새로운 개인주의 사용설명서","indt":"20220204","publisher_year":"2022","type":"단행본","publisher":"남해의봄날"} \
			]';
```

### eval() : JSON 형식의 문자열 변환

- 문자열 형식을 eval를 통해 변환하여 30이 출력된다.

```js
eval('var x = 30;');
console.log(x); // 30
```

- JSON 예제

```JS
var data ='[ \
{"author":"가미오카 마사아키 지음","loca":"서울도서관","title":"(부자들의) 초격차 독서법 :부자들의 지식은 복리로 쌓인다","indt":"20220204","publisher_year":"2021","type":"단행본","publisher":"쌤앤파커스"}, \
{"author":"김장섭 지음","loca":"서울도서관","title":"내일의 부 :세상에서 가장 빨리 99.9% 부자 되는 법 : 통합본 =Riches of tomorrow","indt":"20220204","publisher_year":"2021","type":"단행본","publisher":"트러스트북스"}, \
{"author":"최민지 지음","loca":"서울도서관","title":"이럴 거면 혼자 살라고 말하는 당신에게 :관계를 고민하는 이들을 위한 새로운 개인주의 사용설명서","indt":"20220204","publisher_year":"2022","type":"단행본","publisher":"남해의봄날"} \
			]';

eval("var ar = " + data + ";"); // var ar = data;
console.log(ar[0].author); // 가미오카 마사아키 지음
```

### JSON.parse()

- Object의 Key는 javascript에서 묵시적으로 문자열로 인식해서 " ",' ' 생략가능하다.

```js
var data = {id:1, title:"aaa"};
console.log(data.title);
```

- JSON.parse();
  - JSON.parse를 쓸때는 엄격히 형식을 지켜줘야 한다.
  - Key에 반드시 " " 으로 묶어줘야 한다.

```js
var data = JSON.parse('{"id":1 , "title":"aaa"}');
console.log(data.title);
```

### JSON.stringify

- 객체를 문자열로 바꿔준다.

```js
var data = {id:1, title:"aaa"};
var json = JSON.stringify(data);
console.log(json); // '{"id":1, "title":"aaa"};'
```

## 10.연산자

![20220207095039](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207095039.png)

![20220207102219](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207102219.png)

### 동등 연산자(== , ===)

- == 은 값을 비교
- === 값과 데이터 형식, 참조를 비교

> 예제

- 자바스크립트의 변수는 값이 아닌 참조 변수로 주소를 갖고 있다.
- `x === y`로 동등비교 하면 x와 y의 참조가 달라 false라고 생각할 수 있다.
- 그러나 , 자바 스크립트에서는 값이 같으면  참조가 같다.

```js
var x = 3;
var y = 3;
console.log(x == y); // true
console.log(x === y); // true;
```

- `var y = new Number(3)` 으로 y변수를 정의하면 다른 `var x`와 다른 참조 값을 같는다.

```js
var x = 3;
var y = new Number(3);
console.log(x == y); // true
console.log(x === y); // fasle
```

### 애매한 연산

`console.log(3+ "4")` 컴파일러가 3을 문자열로 변환시켜 "34" 가 출력된다.

`console.log(3.5 - "2")` 컴파일러가 2를 숫자로 변환 시켜 1.5가 출력된다.

`console.log("32" > "4")` 사전식 비교를 한다.

`console.log("32" > 4)` 32를 숫자로 변환시켜 비교한다.

```js
console.log(3 + "4") // 34
console.log(3.5 - "2") // 1.5
console.log("32" > "4") // false
console.log("32" > 4) // true
```

## 11.제어구조

![20220207102340](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207102340.png)

### for-in 문

- 인덱스, key를 순회한다.

```js
var ar = ["hello", "hi", "greeting"];
for(var i in ar)
	cosole.log(ar[i]);
	
var ob = {id:1, title:"hello", writedId:"newlec"};
for (var i in ob)
	console.log(ob[i]);
```

## 12.함수

### 함수와  표현식

> 표현 방법 1

- 자바스크립트에서는 함수를 정의하지 않고 만들어 사용한다.
- 함수는 **객체**이므로 대입이 가능하다.

```js
var add = new Function("x,y","return x+y;");
console.log(add(3,4)); // 7
```

> 표현 방법 2

`var add = function(x,y){...};` 은 add의 변수에 대입 되는 것이어서 끝에 `;(세미콜론)` 를 꼭 붙여야 한다.

```js
var add = function (x,y){
			return x+y;
		};
console.log(add(3,4)); // 7
```

> 표현 방법 3

```js
function add (x,y) {
	return x + y;
}
console.log(add(3,4)); // 7
```

### 함수 인자(arguments)

- 매개변수는 `(x,y)`로 정해져 있는데 `add(2,3, "hello",3, 4, 5, 6);` 여러 인자를 넘겨주고 있다.

```js
function add (x,y){
	return x + y;
}
var sum1 = add(2,3);
var sum2 = add(2,3, "hello",3, 4, 5, 6);
```

- 매개변수는 참조 이름의 역할만 하고, 내부에서 가변으로 받을 수 있는 컬렉션을 갖고 있다.

```js
function add(x,y){
	console.log(arguments.length); // 7
	console.log(arguments[2]); // hello 
	return x + y;
}

var sum2 = add(2,3, "hello",3, 4, 5, 6);
```

## 13.변수의 가시영역과 전역 변수

### 변수 선언과 정의

- 선언은 코드가 실행되기전에 미리 준비된다. 
- `console.log(a);` 코드는 값이 아직 할당되지 않아 `undefined`가 출력된다.

```js
<script>
	console.log(a); // undefiend
	var a = 1;
</script>
```

- 선언하지 않고 a에 대입하면 브라우저상에 있는 `window`객체에 속성으로 대입된다.

```js
<script>
	a = 1;
	console.log(a);
<script>
```

- 아래 코드에서 변수 `a`는 선언 되어 있지 않고, 전역객체 속성도 아니기 때문에 `console.log(a);`오류가 뜬다. 
- 전역 객체 속성은 대입될 때 생성된다.

```js
<script>
    console.log(a);
    a = 1;
</script>
```

### 전역 변수

- 선언하지 않고 사용하는 변수는 전역변수 이다.
- 함수내부에서 변수명이 같더라도 선언하지 않은 `a = 1` 은 전역변수이고,  선언한 `var a = 3` 은 지역변수 이다.
- `a++` 지역변수가 우선순위가 더 높아 지역변수의 값이 증감된다. 

```js
<script>
    var f1 = function(){
        a = 1;		// 전역변수 window.a
        var a = 3;	// 지역변수 
        a++;		// 4 (지역변수가 우선순가 높다.)
        console.log(a);
    }
    f1();
</script>
```

### 변수 생명주기

- 중괄호 내부의 `var a = 1;` 가 중괄호 밖에서 출력이 잘된다. 그래서 { } 민 사용할 경우에는 의미가 없다.

```js
<script>
	{
		var a = 1;
	}
	console.log(a); // 1
</script>
```

#### 함수 내부 지역화

- 함수 내부에서만 변수를 지역화 해서 사용할 수 있다.

```js
<script>
	function f1(){
    	var a = 1;
	}
	f1();
	console.log(a); // 오류
</script>
```

#### 외부 함수와 내부 함수

- 함수 안에 함수를 사용할 수 있다. 
- `f3()`함수의  a변수가 `f2()`의  a변수를 사용하고 있어서 `f2()`함수는 종료할 수가 없다. 이것을 클로저라고 한다.

```js
function f1 (){
	var a = 1;
	f2();
	function f2(){
		var a =2;
		function f3(){
			 a = 3;
		}
	}
}
f1();
console.log(a);
```

## 14.클로저

- `f1()`함수는 return 하고 스택에서 제거 되야된다.
- 그런데 , `f1()`의 `var a = 1`를 내부 함수 `f2()`가 사용하고 있어서 제거되지 않는다.
- `f2()`함수에 의해 `f1()`의 생명주기가 정해진다. 이럴 때 `f2()`함수를 클로저라고 한다.

```js
function f1(){
	var a = 1;
	return function f2(){
		return a;
	}
}

var f = f1();
console.log(f()); // 1
```

- 클로저가 대입된 `f`변수를 출력해보면 `f2()`함수가 출력된다.

```js
function f1(){
	var a = 1;
	return function f2(){
		return a;
	}
}
var f = f1();
console.log(f); 

/* 출력결과
ƒ f2(){
		return a;
	}
*/

```

## 15.브라우저 플랫폼

### HTML5에서 확장된 플랫폼의 기능

- 동적 문서를 활용해여 window상에 있는 element 들을 사용할수 있다.

![HTML5에서 확장된 플랫폼의 기능](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/HTML5%EC%97%90%EC%84%9C%20%ED%99%95%EC%9E%A5%EB%90%9C%20%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%9D%98%20%EA%B8%B0%EB%8A%A5.png)

### window 객체 

- window.location : 페이지 링크의 위치를 조작할 수 있다.
- window.history : 사용자가 검색했던 기록 (뒤로가기)
- window.documnet : html 를 이용하여 브라우저를 조작할 수 있다.

![20220207123617](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207123617.png)

### parseInt( )  : 정수로 변환

- Javascript 에서 입력된 값은 전부 문자열이다.

```js
var a ;
a = prompt("a의 값을 입력해주세요",a); // 1 입력
console.log(typeof a); // string
```

- parseInt() 를 통해서 변환해서 값을 사용해야 한다.

```js
var a ;
a = prompt("a의 값을 입력해주세요",a); // 1 입력
a = parseInt(a);
console.log(typeof a); // number
```

- 변환하려는 변수에 문자가 있을 경우 자동으로 삭제 해준다.

```js
var a = parseInt("123abc");
console.log(a);
```

## 

