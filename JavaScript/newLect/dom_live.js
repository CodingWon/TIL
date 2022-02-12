// <h1>5. 스타일 다루기 : 아이템 이동하기</h1>
window.addEventListener("load",function(){
    var section = document.querySelector("#s5");
    var btnNext = section.querySelector(".btn-next");
    var btnPrev = section.querySelector(".btn-prev");
    var lis = section.querySelectorAll("li");
    var ul = section.querySelector(".box>ul");
    var card1th = section.querySelector(".card-1th");
    var card2th = section.querySelector(".card-2th");
    var card3th = section.querySelector(".card-3th");
    
    var i =3;
    ul.onclick = function(e){

        if(e.target.nodeName != "LI")
        return;
       
        
        if (e.target.className == "card-1th") {
            //전체 오른쪽으로 이동
            console.log("1번 스타일");
            lis[i % 3].className = "card-2th";
            lis[(i + 1) % 3].className = "card-3th";
            lis[(i + 2) % 3].className = "card-1th";

            i--;

            if (i < 0) 
                i = 3;
            }
 
        if(e.target.className == "card-3th"){
            //전체 왼쪽으로 이동
            console.log("3번 스타일");
            lis[i%3].className = "card-3th";
            lis[(i+1)%3].className = "card-1th";
            lis[(i+2)%3].className = "card-2th";
    
            i++;
        }
    }

    btnNext.onclick = function(e){
        e.preventDefault();
        
        lis[i%3].className = "card-3th";
        lis[(i+1)%3].className = "card-1th";
        lis[(i+2)%3].className = "card-2th";

        i++;
    }

    btnPrev.onclick = function(e){
        e.preventDefault();

        lis[i%3].className = "card-2th";
        lis[(i+1)%3].className = "card-3th";
        lis[(i+2)%3].className = "card-1th";

        i--;

        if(i<0)
            i=3;
    }

});


/* 4. 스타일 다루기 : 값 입력과 동적으로 박스 스타일 변경하기 */
window.addEventListener("load",function(){
    var section = document.querySelector("#s4");
    var box = section.querySelector(".box");
    var styleBox =  box.querySelector(".style-box");
    var widthInput = box.querySelector(".width-input");
    var item = box.querySelector(".item");
    var radiusInput = box.querySelector(".radius-input");
    var colorInput = box.querySelector(".color-input");
    var styleFigure = box.querySelector(".style-figure");
    var widthFigure = box.querySelector(".width-figure");
    var radiusFigure = box.querySelector(".radius-figure");
    var colorFigure = box.querySelector(".color-figure");
    var cssStyle = box.querySelector(".cssStyle");

  
    styleBox.oninput = function(e){
        item.style.borderStyle = styleBox.value;
        styleFigure.textContent = styleBox.value;       
    };
    widthInput.oninput =function(e){
        item.style.borderWidth = widthInput.value+"px";
        widthFigure.textContent = widthInput.value+"px";
    };

    radiusInput.oninput = function(e){
        item.style.borderRadius = radiusInput.value+"px";
        radiusFigure.textContent = radiusInput.value+"px";
        cssStyle.value = item.style.cssText;
        
    };

    colorInput.oninput = function(e){
        item.style.backgroundColor = colorInput.value;
        colorFigure.textContent = colorInput.value;
        cssStyle.value = item.style.cssText;
        
        item.addEventListener('change',function(){
            console.log(item.style.cssText);
        });
    };

});

// 3. 이벤트 객체 : 개선된 계산기 (캡쳐링, 버블링, preventDefault(), stopPropagation())
window.addEventListener("load",function(){
    var section = document.querySelector("#s3-1");
    var inputTxt = section.querySelector("input[type=text]");
    var box = section.querySelector(".box");
    var divInput = box.querySelector(".divide");
  
    

    divInput.onclick = function(e){
        e.preventDefault();
      
        console.log("자식box");
    }

    box.addEventListener("click",function(e){
        e.preventDefault();
        e.stopPropagation();
        console.log("부모box");
        if(e.target.nodeName != "INPUT" || e.target.type == "text")
            return;

        var value = inputTxt.value;
        
        if(value =='0')
            inputTxt.value ='';
        
        inputTxt.value += e.target.value;
    },true);

    // box.onclick = function(e){
    //     e.preventDefault();
      
    //     if(e.target.nodeName != "INPUT" || e.target.type == "text")
    //         return;

    //     var value = inputTxt.value;
        
    //     if(value =='0')
    //         inputTxt.value ='';
        
    //     inputTxt.value += e.target.value;
    // };
});


//1.클로저 예제---------------------------------------------------------
// window.addEventListener("load",function(){

//     var func = [];

//     func[0] = function(){
//         console.log(0);
//     };

//     func[1] = function(){
//         console.log(1);
//     };

//     func[0]();
//     func[1]();

//     // 반복문

//     for(var i = 0; i<2; i++)
//         func[i] = function(){
//             console.log("클로저:" + i);
//         } ;

//     func[0]();
//     func[1]();

//    // 익명 함수 바로 호출
//    for (var i = 0; i<2; i++)
//          (function(x){
//             console.log("익명함수 바로 호출: " + x);
//         })(i);


//     // 함수 리턴
//     for (var i = 0; i<2; i++)
//     func[i] = (function(x){
//         return function(){
//             console.log("함수리턴 : " + x);
//         }
//    })(i);

//    console.log(func[0]);

//    func[0]();
//    func[1]();

//    // 정리
   
//    for(var i = 0; i<3; i++){
//     func[i] = (function(x){
//         return function(){
//             console.log(x);
//         }  
//     })(i);
// }

// for(var i = 0; i<3; i++){
//     func[i]();
// }
// });



















 