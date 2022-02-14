// 9-1 이벤트 다루기 (수업)
window.addEventListener("load",function(){
    var section = document.querySelector("#s9-1");
    var box = section.querySelector(".page-box");
    var pages = section.querySelectorAll(".page");
    var current = section.querySelector(".active");
    var index = 0;
    var isWoring = false;

    box.onwheel = function(e){
        e.preventDefault();

        if(isWoring)
            return;

        if(e.deltaY > 0){
            index++;
            pages[index].classList.add("active");
            isWoring = true;
        }else{
            pages[index].classList.remove("active");
            index--;
            isWoring = true;
        }

        pages[index].ontransitionend = function(e){
            isWoring = false;
        };

    };
});

// 9-1 이벤트 다루기 (실패)
window.addEventListener("load",function(){
//     var section = document.querySelector("#s9-1");
//     var pageBox = section.querySelector(".page-box");

//     var current = pageBox.lastElementChild;

//     var isWorking = false;
    
//     pageBox.onwheel = function(e){
//         e.preventDefault();
     

//         if(isWorking)
//             return;
        
//         // if(e.deltaY && current.classList.contains("active")){ //
           
//         // }
       
//         if(e.deltaY > 0){
//             var prevNode = current.previousElementSibling;
//             current.classList.add("active");
//             current = prevNode;
//         } 

//         // if(e.deltaY < 0){
//             var nextNode = current.nextElementSibling;
//         //     current.classList.remove("active");
//         //     current = nextNode;
//         // }
        
//         isWorking = true;
//         console.log(nextNode);
//         var target = window.getComputedStyle(nextNode);
//         var top = target.getPropertyValue("top");
//         console.log(top);
//     };
    
});


//9. 이미지 쇼룸
window.addEventListener("load",function(){
    var section = document.querySelector("#s9");
    var imgListBox = section.querySelector(".img-list-box");
    var showRoom = section.querySelector(".show-room");
    var img = showRoom.querySelector("img");

    var current = imgListBox.querySelector(".active");
    var isWorking = false;

    section.onkeydown = function(e){
        if(e.code == "ArrowLeft"){
            var prevNode = current.previousElementSibling;
            current.classList.remove("active");
            prevNode.classList.add("active");
            current = prevNode;
        }else if(e.code == "ArrowRight"){
            var nextNode = current.nextElementSibling;
            current.classList.remove("active");
            nextNode.classList.add("active");
            current = nextNode;
        }
        img.src = current.firstElementChild.src;
    };

    imgListBox.onwheel = function(e){
        e.preventDefault();
        
        if(isWorking)
            return;

        if(e.deltaY < 0){ // 왼쪽
            var prevNode = current.previousElementSibling;
            current.classList.remove("active");
            prevNode.classList.add("active");
            current = prevNode;
         
        }else{ // 오른쪽
            var nextNode = current.nextElementSibling;
            current.classList.remove("active");
            nextNode.classList.add("active");
            current = nextNode;
        }
        isWorking = true;

        img.src = current.firstElementChild.src;
  
        current.ontransitionend = function(e){
            // img.src = current.firstElementChild.src;
            isWorking = false;
        };
        
    };

    var scale = 1;
    img.onwheel = function(e){
        var min =1;
        var max =2;
        var current = 1;
        e.preventDefault();  
    
            scale += e.deltaY*0.001;
       
            if(scale < min){
                scale = min;
                return
            } 

            if(scale > max){
                scale = max;
                return
            }
            
        img.style.transform = "scale("+scale+")";
    };

});

//8-1. 8-1. 이벤트 다루기(focus/blur/tabindex/key) : 탭으로 선택하는 박스
window.addEventListener("load",function(){
    var section = document.querySelector("#s8-1");
    var box = section.querySelector(".box");

    box.onclick = function(e){
        if(e.target.classList.contains("box"))
            return;
    };

    box.onkeydown = function(e){
        if(e.target.classList.contains("box"))
            return;

        if(e.code == "Delete"){
            e.target.classList.add("delete");
            console.log(e.code);
        }
    };

});
//8. 이벤트 다루기(focus/blur/tabindex/key), 스타일(:valid,..) : 입력 값 유효성 검사하기
window.addEventListener("load",function(){
    var section = document.querySelector("#s8");
    var form = section.querySelector("form");
    var unameInput = form.querySelector("input[name=uname]");
    form.onsubmit = function(){
        e.preventDefault();

        if(unameInput.value.length > 3)
            unameInput.setCustomValidity("이름으로 2자 이상");

        console.log("submit");
    };
});
// 7. 스타일 다루기(ComputedStyle/transitionend) : 선택된 아이템 이동
window.addEventListener("load",function(){
    var section = document.querySelector("#s7");
    var box = section.querySelector(".box");
    var srcItme = section.querySelector(".src-item-list");
    var current = section.querySelector(".selected");
    

    box.onclick = function(e){
        var validItem = e.target.classList.contains("src-item")
                    || e.target.classList.contains("dst-item");
        if(!validItem)
            return;

        if(e.target.classList.contains("src-item")){
            if(current != null)
                current.classList.toggle("selected");
            

             e.target.classList.toggle("selected");
             current = e.target;
        }else if(e.target.classList.contains("dst-item")){
            var targetStyle = window.getComputedStyle(e.target);
            var left = targetStyle.getPropertyValue("left");
            var top = targetStyle.getPropertyValue("top");

            current.style.left = left;
            current.style.top = top;
            current.style.transform = "rotate(360deg)";

            current.ontransitionend = function(){
                current.classList.add("finished");

                current.ontransitionend = null;
            }
        }

    }
});

//6. 스타일 다루기 : 아코디언
window.addEventListener("load",function(){
    var section = document.querySelector("#s6");
    var box = section.querySelector(".accordion-box");
    var current = section.querySelector(".active");

    box.onclick = function(e){
        // 유효성 검사 1 : 태그명으로 비교
        // if(e.target.nodeName !== "H2")
        // return;

        // 유효성 검사 2 : 클래스명으로 비교
        // if(!e.target.classList.contains(".accordion-header"))
        // return;

        //유효성 검사 3 : 조건으로 1,2 포함
        var valid = e.target.nodeName == "H2" 
                    || e.target.classList.contains("accordion-header");

        if(!valid)
            return;
        
        if(current != null)
            current.classList.toggle("active");

        e.target.classList.toggle("active");
        current = e.target;
    };
});

// <h1>5. 스타일 다루기 : 아이템 이동하기</h1>
window.addEventListener("load",function(){
    var section = document.querySelector("#s5");
    var btnNext = section.querySelector(".btn-next");
    var btnPrev = section.querySelector(".btn-prev");
    var lis = section.querySelectorAll("li");
    var ul = section.querySelector(".box>ul");
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



















 