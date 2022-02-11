# 1.이벤트 객체(1.20)

- event.target.src



# 1.25

## 버블링

## 노드 객체

```js
window.addEventListener("load",function(){
    var section = document.querySelector("#s3-1");
    var inputTxt = section.querySelector("input[type=text]");
    var box = section.querySelector(".box");

    box.onclick = function(e){
        console.log(e.target.nodeType); // 1 : Element
        console.log(e.target.nodeName); // 3 : 
        console.log(e.target.nodeValue);
    }
});
```

- readonly : text 박스에서 수정할 수 없게한다.
- dir 정렬

```html
 <input type="text" value="0" dir="rtl" readonly>
```

- e.preventDefault(); 
  - 기본행위를 가진 태그의 기능을 막는다.

## 캡쳐링

- e.stopPropagation();

- 버블링을 무시하고 특정 태그에만 이벤트를 주고 싶을 때

```js
window.addEventListener("load",function(){
    var section = document.querySelector("#s3-1");
    var inputTxt = section.querySelector("input[type=text]");
    var box = section.querySelector(".box");
    var divInput = section.querySelector(".divide");

    divInput.onclick = function(e){
        e.preventDefault();
        e.stopPropagation();
        console.log("나누기");
    }
    box.onclick = function(e){
        e.preventDefault();
        if(e.target.nodeName != "INPUT")
            return;

        var value = inputTxt.value;
        
        if(value =='0')
            inputTxt.value ='';
        
        inputTxt.value += e.target.value;
    };
});
```

- 부모의 기능 우선한다.

![20220211202108](https://raw.githubusercontent.com/CodingWon/TIL/master/imgs/20220211202108.png)

