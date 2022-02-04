# INDEX
- [01.06 정리](#0106---)
  * [1. 전송하는 데이터에 대한 유효성 검사의 필요성](#1-전송하는-데이터에-대한-유효성-검사의-필요성)
  * [2. 윈도우 객체](#2-윈도우-객체)
  * [3. 브라우저 엔진](#3-브라우저-엔진)
  * [4. 코드 작성하기](#4-코드-작성하기)
  * [5.배열](#5배열)
    + [#배열의 초기화](#--------)
    + [#스택 기능 활용하기](#-----------)


# 01.06 정리

변수
- 값형식이 없고 모든 변수가 참조변수다.
- 참조형식으로 Boolean, Number, String이 있다.
- var x =3 ; -> var x =Number(3) // Wapper 클래스로 인해 자동으로 오토박싱된다.
- undefined는 값이 정의되지 않은 상수 값이다
- 변수명의 참조형식을 자유롭게 바꿀 수 있다.

배열

- 가변적으로 배열공간이 생성된다.
- 배열 인덱스 중간부터 할당할 수 있다.
- 배열 초기화var nums = new Array(5) // 인자 1개 초기화 : 공간 5개 확보var nums = new Array(5,3,2)// 인자 1개 이상 할당 : nums[0] = 5 , nums[1] = 3, nums[2] =2
- 스택(LILO) 구조 사용가능 (push 값넣기 / pop 값빼기)
- 큐(FIFO) 구조 사용가능 ( push 값넣기 / shift 값 빼기) , 버퍼링을 위한 데이터 구조



## 1. 전송하는 데이터에 대한 유효성 검사의 필요성

- 자바스크립트를 통해 유효성 검사를 할 수 있게 됬다.
- 폼 객체(유효성 검사) 에서 확장되어 DOM을 통해 문서 객체를 다룰 수 있게 됬다.



- 1way : DOM 으로 UI 바꾸기
- 2way : UI 에서 DOM 바꾸기 (MVC)
- HTML 파일이 로드되어 객체로 사용할 수 있게 된다.
- 자바스크립트는 브라우저를 기반으로 동작된다.



## 2. 윈도우 객체

- DOM / BOM
  - location : href를 제어 하여 사이트를 이동시킴
  - history ; 브라우저 앞,뒤 이동
  - document :



## 2. 브라우저 엔진

- 웹브라우저에서 자바스크립트 환경을 제공한다
- 크롬의 V8엔진
- v8를 갖고 실행환경을 만든 것 nodejs
- 맨위, 맨아래 script를 배치한다.



## 3. 코드 작성하기

- 형식을 갖고 있지 않다.
- 자바스크립트는 모든 변수가 참조 변수다.

```
var x = 3;
var x = Number(3);

```

### # undefined

```
var x;
console.log(x);

x = 3; // 변수명의 참초형식을 자유롭게 바꿀 수 있다.

```

- 문자열을 ‘ ‘ 와 “ “ 어떤걸로 해야할까 ?

```
var s = "hello";
var s1 = 'hello';

```

## 4.배열

- 가변적으로 배열의 공간이 생성된다.

```
var nums = new Array();

nums[0] = 5;
nums[1] = 10;
nums[2] = 21;

console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);

```

- 배열의 중간부터 할당할 수 있다.

```
var nums = new Array();
nums[5] = 5;

alert(nums[0]);

```

### #배열의 초기화

- 한번에 배열을 만들어서 하는것이 자원을 효율적으로 관리할 수  있다.
- 배열안에 타입이 다른 것들도 올 수 있다.
- typeof 연산자로 값이 형식을 알아내서 처리 할 수 있다.

```
var nums = new Array();
var nums = new Array(5);
var nums = new Array(5,10,21);
var nums = new Array(5,19,21,'hello');
console.log(typeof nums[3]);

```

- 배열안에 배열 담기

```
var nums = new Array(5,10,21,"hello",new Array(2,3,4));
console.log(nums[4][1]);

결과
3

```

### #스택 기능 활용하기

> 버퍼링을 위한 데이터 구조

- 스택구조

```
var nums = new Array();
nums.push(4);
var n1 = nums.pop();


```

```
var nums1 = new Array();
for (var i = 0; i<4; i++){
       nums1.push(i+1);
       console.log(nums1[i]);
     }
       
      var nums2 = new Array(4);
      for(var i = 0; i<4; i++){
         nums2[i] = nums1.pop();
         console.log(nums2[i]); 
      }

```

- 큐 구조

```
var nums = new Array();
nums.push(4);
var n1 = nums.shift();

```

```
var nums1 = new Array();
        for (var i = 0; i<4; i++){
            console.log("push : " + nums1.push(i+1));
        }
 
        for(var i = 0; i<4; i++){
            console.log("pop : " + nums1.pop());
        } 

        console.log("---------------");
        
        var nums3 = new Array();
        for(var i = 0; i<4; i++){
            console.log("push : " + nums3.push(i+1));
          
        }
        
        for(var i = 0; i<4; i++){
            console.log("shift : " + nums3.shift());
        }

