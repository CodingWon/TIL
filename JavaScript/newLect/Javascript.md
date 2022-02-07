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

## 16.이벤트 기반의  윈도우 프로그래밍

### 또 다른 스크립트 코드 영역

> 이벤트 호출 방법 1 : 태그안에 직접 넣기

- 태그 안에 이벤트를 넣어 이벤트가 발생할 때 실행된다.

```js
<input onXXX = " "/>

<input onclick = " " />
<input onmouseover = " "/>
```

- `button`이 클릭 되면 "안녕하세요" 출력
- `<span>` 가 클릭 되면 'hello' 출력

```js
<input type="button" value="클릭" onclick="console.log('안녕하세요');"/><br/>
<span onclick="console.log('hello')">스팬입니다.</span>
```

- 태그안에 직접넣는 방법은 가독성이 떨어진다.

> 이벤트 호출 방법 2 : 함수를 정의하여 이벤트 호출하기

- 태그가 클릭 됬을 때 `printResult()` 함수가 호출된다.

```js
<script>	
    function printResult(){
        var x,y;
        x = prompt("x 값을 입력하세요.",0);
        y = prompt("y 값을 입력하세요.",0);
        
        x = parseInt(x);
        y = parseInt(y);

       alert(x+y);
    }
</script>
<body>
	<input type ="button" value = "출력" onclick = "printResult();" />
</body>
```

## 17.엘리먼트 객체 이용하기

### NODE

- 브라우저에 HTML 파일들이 로드될때 메모리상에 올라간다.
- 메모리에 올라간것을 node라고 부르고
- 태그는 엘리먼트 노드 객체 라고 하고
- text는 텍스트 노드 객체 라고 한다.

![20220207140506](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207140506.png)

### 문서 객체의 속성 사용하기

- 메모리상에 올라간 노드들 #document 부터 body 아래로 꼬리를 물며 맞물려 있다.
- 노드를 이용할 때 태그에 id를 부여하여 이용할 수 있다.
- `input`태그에는 value 속성 있지만
- `span` 태그에는 value 속성이 없다. 그래서 innerText 를 사용해서 출력해야 한다.

```js
<script>	
    function printResult(){
        var x,y;
        x = prompt("x 값을 입력하세요.",0);
        y = prompt("y 값을 입력하세요.",0);
        
        x = parseInt(x);
        y = parseInt(y);

       btnPrint.value = x + y;
       spanPrint.innerText = x + y;
    }
</script>
<body>
	<input type ="button" value = "출력" onclick = "printResult();" id = "btnPrint" />
     <span id = "spanPrint" onclick = "printResult();">스팬</span>
</body>
```

- 출력 형태

![20220207141837](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207141837.png)

> `<scipt>`에서 이벤트 호출 하기

- HTML 태그 내부에서 onclick 를 지우고 `<script>`내부에서 클릭시 이벤트가 호출 될 수 있게 했다.
- html 과 로직을 분리할 수 있다.
- script 가 html 의 body보다 위에 있어서 html이 로드가 되지 않은 상태에서 이벤트를 호출하여 오류가 발생한다.

```js
<script>	
    function printResult(){
        var x,y;
        x = prompt("x 값을 입력하세요.",0);
        y = prompt("y 값을 입력하세요.",0);
        
        x = parseInt(x);
        y = parseInt(y);

       btnPrint.value = x + y;
       spanPrint.innerText = x + y;
    }
    
    btnPrint.onclick = printResult;

</script>
<body>
	<input type ="button" value = "출력" id = "btnPrint" />
     <span id = "spanPrint">스팬</span>
</body>
```

- html 태그가 먼저 로드 된 후에 script가 실행이 되어야 한다.

```js
<body>
	<input type ="button" value = "출력" id = "btnPrint" />
     <span id = "spanPrint">스팬</span>
     <script>	
    function printResult(){
        var x,y;
        x = prompt("x 값을 입력하세요.",0);
        y = prompt("y 값을 입력하세요.",0);
        
        x = parseInt(x);
        y = parseInt(y);

       btnPrint.value = x + y;
       spanPrint.innerText = x + y;
    }
    btnPrint.onclick = printResult;
</script>
</body>
```

## 18.코드 초기화와 엘리먼트 객체 선택하기

### window.onload();

- window의 노드 객체가 로드가 된 이후에 script가 실행 될 수 있게 해야한다.
  - 문서 외 자원들을 사용하기 위해서는 body가 아닌 window가 load가 됬을 때 script가 실행될 수 있게 해야한다.
  - ![20220207143343](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207143343.png) 

```js
<script>	
    function printResult(){
        var x,y;
        x = prompt("x 값을 입력하세요.",0);
        y = prompt("y 값을 입력하세요.",0);
        
        x = parseInt(x);
        y = parseInt(y);

       btnPrint.value = x + y;
       spanPrint.innerText = x + y;
    }
    function init(){
    	btnPrint.onclick = printResult;
    }
    	
	window.onload = init; // window가 로드 되었을 때
</script>
<body>
	<input type ="button" value = "출력" id = "btnPrint" />
     <span id = "spanPrint">스팬</span>
</body>
```

### 객체  id 명명 방법

- id를 `btnPrint` 카멜 표기법으로 쓰는 것은 옳바른 방법이 아니다.
- `btn-print`로 사용해야하는데 script 영역에서 오류가 발생한다.

### 엘리먼트 객체 선택하기

- `document`객체에서 element를 갖고 와서 사용한다.
- `btnPrint` 엘리먼트로 갖고온 객체를 전역에서 사용하기 위해 전역변수로 둘 수 있지만 좋은 방법이 아니다.
- 전역화의 문제는 19장에서 스크립트의 지역화에서 다룰것이다. 

```js
function init(){
		btnPrint = document.getElementById("btn-print");
    	btnPrint.onclick = printResult;
    }
```

## 19.스크립트 코드의 지역화

- 이벤트 함수들은 함수명으로 호출할 필요가 없다.

![20220207145158](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207145158.png)

- javascript는 자유도가  높아서 아무 곳에서나 함수를 정의할 수 있다.
- 이벤트 함수의 이름 `init` `printResult` 을 제거 하여 코드를 수정했다.
- `btnPrint`변수를 함수 내부에 둬서 지역화 할 수 있다.

```js
window.onload = function() {
        var btnPrint = document.getElementById("btn-print");

        btnPrint.onclick =  function (){
            var x,y;
            x = prompt("x 값을 입력하세요.",0);
            y = prompt("y 값을 입력하세요.",0);
            
            x = parseInt(x);
            y = parseInt(y);

            btnPrint.value = x + y;
            spanPrint.innerText = x + y;
        };
    }

```

## 20.코드 분리와 이벤트 바인딩

### view와 Controller을 나누기

- script 문서를 분리

```js
<script src="Ex_js.js"></script>   
```

> 분리 했을 때 문제점

- 여러 스크립트를 포함 시킬 수 있는데 , 로드 되는 순서에 따라 작동을 안할 수 있다.
- 여기서는 마지막에 있는 `test_js.js` 가  `Ex_js.js`를 덮어쓰기 해서   `test_js.js` 만 실행된다.

```js
<script src="Ex_js.js"></script>  
<script src="test_js.js"></script>   
```

![test1](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/test1.png)

### addEventListener( ) 

- 이벤트를 추가 시켜주는 함수를 사용하여 script가 덮어 씌우기 되는 문제점을 해결 할 수 있다.

  > Ex_js.js

```js
window.addEventListener("load",function(){
    var btnPrint = document.getElementById("btn-print");

    btnPrint.onclick =  function (){
        var x,y;
        x = prompt("x 값을 입력하세요.",0);
        y = prompt("y 값을 입력하세요.",0);
        
        x = parseInt(x);
        y = parseInt(y);

        btnPrint.value = x + y;
        spanPrint.innerText = x + y;
    };
});

```

> test_js

```js
window.addEventListener("load",function(){
    alert("안녕하세요");
});
```

## 21.계산기 프로그램

> HTML

- `dir = rtl` 오른쪽 정렬
- `readonly` 읽기만 가능

```html
<body>
    <section>
        <h1>Ex1 : 계산기 프로그램</h1>
        <div>
            <input id="txt-x" type="text" value="0" dir="rtl">
            +
            <input id="txt-y" type="text" value="0" dir="rtl">
            <input id="btn-add" type="button" value="=">
            <input id="txt-sum" type="text" value="0" readonly dir="rtl">
        </div>
    </section>
    <hr/>
</body>
```

> JS

```js
window.addEventListener("load",function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function (){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});
```

## 22.노드 선택 방법 개선하기

### 하위 엘리먼트 선택하기

- `section`태그에 id를 부여하여 엘리먼트를 찾을 수 있다.

![20220207155400](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207155400.png)

#### .getElementsByTagName();

#### getElementsClassName();

- 여러 개의 엘리먼트들을 갖고 올때 사용할 수 있다.
- `textContent` 웹 표준 텍스트 속성

```js
var li = sec1.getElementsByTagName("li");
lis[0].textContent = "Hello";
```

> HTML

- id 는 엘리먼트를 독립적으로 식별하기위한 selector 이므로 class로 바꿨다.
- `section id = ex2`으로 선택해서 엘리먼트를 갖고 올 수 있게 수정했다.

```html
<body>
    <section id="ex2">
        <h1>Ex2 : 엘리먼트 선택방법 개선하기</h1>
        <div>
            <input class="txt-x" type="text" value="0" dir="rtl">
            +
            <input class="txt-y" type="text" value="0" dir="rtl">
            <input class="btn-add" type="button" value="=">
            <input class="txt-sum" type="text" value="0" readonly dir="rtl">
        </div>
    </section>
</body>
```

> JS

- `.getElementsByTagName("input");`로 엘리먼트들을 갖고와서 `var txtX = inputs[0];` 순서대로 대입할 수 있지만, 
  태그의 순서는 언제든 바뀔 위험이 있으므로 않좋은 방법이다.
- class명 갖고 왔는데 `.getElementsByClassName("txt-x")[0];`는 여러개의 엘리먼트를 갖고오는 형태여서 
  끝에 인덱스가 있어야 한다.

```js
// EX2 :엘리먼트 선택방법 개선하기
window.addEventListener("load",function(){
    var section2 = document.getElementById("ex2");
    var txtX = document.getElementsByClassName("txt-x")[0];
    var txtY = document.getElementsByClassName("txt-y")[0];
    var btnAdd = document.getElementsByClassName("btn-add")[0];
    var txtSum = document.getElementsByClassName("txt-sum")[0];

    /*
    var inputs = section2.getElementsByTagName("input");
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
    */

    btnAdd.onclick = function (){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});
```

## 23.Selector API

### querySelector (  ) , querySelectorAll( )

- querySelector( ) , querySelectorAll( ) 을 이용하면 css의 selector (class, id , tag)를 활용하여 객체를 갖고 올 수 있다.
- 속성으로 `.querySelector("input[name='x']");` 엘리먼트 객체를 갖고 올 수 있다.
- class로 `.querySelector(".btn-add");`엘리먼트 객체를 갖고 올 수 있다.

> JS

```js
// Ex3 : Selectors API level1
window.addEventListener("load",function(){
    var section3 = document.getElementById("section3");
    var txtX = section3.querySelector("input[name='x']");
    var txtY = section3.querySelector("input[name='y']");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function (){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});

```

> HTML

- form 태그에 안에서 호스트 할때는 반드시 `name`속성이 필요하다. 
- `name`은 값을 전달할 때 key 값으로 사용된다.

```HTML
    <section id="section3">
        <h1>Ex3 : Selectors API level1 </h1>
        <div>
            <input name="x" type="text" value="0" dir="rtl">
            +
            <input name="y" type="text" value="0" dir="rtl">
            <input class="btn-add" type="button" value="=">
            <input class="txt-sum" type="text" value="0" readonly dir="rtl">
        </div>
    </section>
```

## 24.Node와 Element Node , 또 다른 노드 선택방법

### NODE 계보

- 엘리먼트가 객체로 로드 되면 NODE의 계보가 생긴다.

![20220207171735](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207171735.png)

### .childNodes

- `.childNodes`는 모든 자식태그의 노드들을 갖고 온다.

예제 1 - node 객체 이용하기

> HTML 예제 .childNodes

```html
<section id="section4">
    <h1>Ex4 : childNodes를 이용한 노드 선택 </h1>
    <div class="box">
        <input />
        <input />
    </div>
</section>
```

> JS 예제 .childNodes

- `.box`를 갖고와서 box안에 있는 `.childNodes[0];` `.childNodes[1];` 를 객체를 얻은 후에 문자를 대입시켰다.

```JS
// Ex4 : Selectors API level1
window.addEventListener("load",function(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    var input1 = box.childNodes[0];
    var input2 = box.childNodes[1];

    input1.value = "hello";
    input2.value = "okay";
});
```

- 원하는 결과는 `input1`에는 "hello" `input2`에 "okay"를 생각 했지만 결과가 이상하게 나왔다.

![20220207172837](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207172837.png)

#### WHY?

- NODE 계보에서 `text`도 NODE의 자식에 포함되어 `input` 태그의 사이에 공백으로 인해 원치 않은 결과가 나왔다.
- 밑에 코드 처럼 box 빈공백이 모두 제거되어야 원하는 결과를 얻을 수 있다.

```html
<section id="section4">
    <h1>Ex4 : childNodes를 이용한 노드 선택 </h1>
    <div class="box"><input /><input />
    </div>
</section>
```

### children

- 태그 형태 NODE만 갖고 온다.

> HTML 예제 .children

```HTML
<section id="section4">
    <h1>Ex4 : childNodes를 이용한 노드 선택 </h1>
    <div class="box">
        <input />
        <input />
    </div>
</section>
<hr/>
```

> JS  예제 .children

```JS
// Ex4 : Selectors API level1
window.addEventListener("load",function(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";
});
```

## 25.Node의 종류

- NODE 트리 안에서 객체가 존재하기 위해서는 개체(형식)가 존재 해야한다.

### NODE 의  TYPE()

- Element, Attr, Text, Document  를 많이 사용한다.

![NODE](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/NODE.png)

## 26.Node 인터페이스

- https://www.w3.org/TR (W3C 공식 사이트)

### Node Interface

- `ELEMENT_NODE = 1`과 `TEXT_NODE = 3` 을 주로 사용
- `nodeType` nodeType을 알아볼 때 사용
- `nodeName` 은 `ELEMENT_NODE`로 사용할 때 태그명을 알아낼 수 있다.

```
[Exposed=Window]
interface Node : EventTarget {
  const unsigned short ELEMENT_NODE = 1;
  const unsigned short ATTRIBUTE_NODE = 2;
  const unsigned short TEXT_NODE = 3;
  const unsigned short CDATA_SECTION_NODE = 4;
  const unsigned short ENTITY_REFERENCE_NODE = 5; // historical
  const unsigned short ENTITY_NODE = 6; // historical
  const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
  const unsigned short COMMENT_NODE = 8;
  const unsigned short DOCUMENT_NODE = 9;
  const unsigned short DOCUMENT_TYPE_NODE = 10;
  const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
  const unsigned short NOTATION_NODE = 12; // historical
  readonly attribute unsigned short nodeType;
  readonly attribute DOMString nodeName;
```

### Node 순회

```
  readonly attribute Document? ownerDocument;
  readonly attribute Node? parentNode;
  readonly attribute Element? parentElement;
  boolean hasChildNodes();
  [SameObject] readonly attribute NodeList childNodes;
  readonly attribute Node? firstChild;
  readonly attribute Node? lastChild;
  readonly attribute Node? previousSibling;
  readonly attribute Node? nextSibling;
```

### nodeValue

- `TEXT_NODE = 3;` 일 때 값을 알아내기 위해서 사용된다.

### textContent

- `ELEMENT_NODE = 1;` 일때 태그가 감싸고 있는 내용을 얻을 때 사용

### Node 조작

```
[CEReactions] Node insertBefore(Node node, Node? child);
[CEReactions] Node appendChild(Node node);
[CEReactions] Node replaceChild(Node node, Node child);
[CEReactions] Node removeChild(Node child);
```

## 27.Document Interface

- Node 로부터 기능을 물려받아 확장하고 있다.
- Node를 create , select 해주는 기능들을 갖고 있다.

```
[Constructor,
Exposed=Window]
interface Document : Node {
[SameObject] readonly attribute DOMImplementation implementation;
readonly attribute USVString URL;
readonly attribute USVString documentURI;
readonly attribute USVString origin;
readonly attribute DOMString compatMode;
readonly attribute DOMString characterSet;
readonly attribute DOMString charset; // for legacy use, alias of .characterSet
readonly attribute DOMString inputEncoding; // for legacy use, alias of .characterSet
readonly attribute DOMString contentType;

readonly attribute DocumentType? doctype;
readonly attribute Element? documentElement;
HTMLCollection getElementsByTagName(DOMString localName);
HTMLCollection getElementsByTagNameNS(DOMString? namespace, DOMString localName);
HTMLCollection getElementsByClassName(DOMString classNames);

[CEReactions, NewObject] Element createElement(DOMString localName, optional ElementCreationOptions options);
[CEReactions, NewObject] Element createElementNS(DOMString? namespace, DOMString qualifiedName, optional ElementCreationOptions options);
[NewObject] DocumentFragment createDocumentFragment();
[NewObject] Text createTextNode(DOMString data);
[NewObject] CDATASection createCDATASection(DOMString data);
[NewObject] Comment createComment(DOMString data);
[NewObject] ProcessingInstruction createProcessingInstruction(DOMString target, DOMString data);

[CEReactions, NewObject] Node importNode(Node node, optional boolean deep = false);
[CEReactions] Node adoptNode(Node node);

[NewObject] Attr createAttribute(DOMString localName);
[NewObject] Attr createAttributeNS(DOMString? namespace, DOMString qualifiedName);

[NewObject] Event createEvent(DOMString interface);

[NewObject] Range createRange();

// NodeFilter.SHOW_ALL = 0xFFFFFFFF
[NewObject] NodeIterator createNodeIterator(Node root, optional unsigned long whatToShow = 0xFFFFFFFF, optional NodeFilter? filter = null);
[NewObject] TreeWalker createTreeWalker(Node root, optional unsigned long whatToShow = 0xFFFFFFFF, optional NodeFilter? filter = null);
};

[Exposed=Window]
interface XMLDocument : Document {};

dictionary ElementCreationOptions {
DOMString is;
};
```

## 28.엘리먼트 노드의 속성 다루기

![20220207194346](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207194346.png)

### Image 변경 예제 - 1 : textbox

- input에 입력 된 내용으로 img 변경

> HTML

```HTML
<section id="section5">
    <h1>Ex5 : 엘리먼트 노드의 속성 변경 </h1>
    <div>
        <input class="src-input">
        <input class="change-btn" type="button" value="변경하기">
    </div>
    <div>
        <img class="img" >
    </div>
</section>
```

> JS

- `img.src`로 Node 속성에 경로값을 입력받아 img를 변경 시켜준다.

```JS
// Ex5 : 엘리먼트 노드의 속성 변경
window.addEventListener("load",function(){
    var section5 = document.querySelector("#section5");
    var srcInput = section5.querySelector(".src-input");
    var changeBtn = section5.querySelector(".change-btn");
    var img = section5.querySelector(".img")
    
    changeBtn.onclick = function(){
        var name = srcInput.value;
        img.src = "imgs/"+name;
        
    };
});
```

![Ex5_js](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/Ex5_js.gif)

### Image 변경 예제 - 2 : select

- `select` 태그를 활용하여 img 변경하기

> HTML

```html
<section id="section5">
    <h1>Ex5 : 엘리먼트 노드의 속성 변경 </h1>
    <div>
        <input class="src-input">
        <select class="img-select">
            <option value="img1.jfif">img1</option>
            <option value="img2.jfif">img2</option>
            <option value="img3.jfif">img3</option>
        </select>
        <input class="change-btn" type="button" value="변경하기">
    </div>
    <div>
        <img class="img"  >
    </div>
</section>
```

> JS

```JS
// Ex5 : 엘리먼트 노드의 속성 변경
window.addEventListener("load",function(){
    var section5 = document.querySelector("#section5");
    var srcInput = section5.querySelector(".src-input");
    var changeBtn = section5.querySelector(".change-btn");
    var img = section5.querySelector(".img")
    var imgSelect = section5.querySelector(".img-select");
    
    changeBtn.onclick = function(){
        // var name = srcInput.value;
        // img.src = "imgs/"+name;
        var name = imgSelect.value;
        img.src = "imgs/" + name;
    };
});
```

![Ex5_js2](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/Ex5_js2.gif)

> 

## 29.스타일  변경하기

### style  속성을 이용해서 스타일  변경하기

- css style 속성은 `element.style.속성` 으로 style 이 갖고 있다.
- 속성에 입력되는 값은 모두 문자열 이어서 width와 height 등에 값을 줄때도 문자열 입력해야 한다.
- `txt1.style.border-width` 속성명에 '-'(대시)가 있으면 안된다. 
- 그래서 `txt1.style.borderWidth` 으로 사용하거나  `txt1.style['border-width']`

![20220207214813](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220207214813.png)
