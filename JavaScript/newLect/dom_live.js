// var animals = [
//     {species:'Lion', name:'King'},
//     {species:'Whale', name:'Fail'}
// ];

// var print = function(i){
//     console.log('#' + i + ' ' + this.species + ': ' + this.name);
// };

// var onclick = print.bind(animals[0]);
// onclick(0);

// print(0);
// print.call(animals[0], 0);

Array.prototype.aa = function(){
    console.log("메록");
}

var arr = [];
console.log(arr.aa());

window.addEventListener("load", function(){
    var section = document.querySelector("#s14");
    var delButton = section.querySelector(".btn-del");

    delButton.onclick = function(e){
        e.preventDefault();
        
        var dlg = new Dialog();
        //dlg.show("입력값이 잘못되었습니다.");
        if(dlg.confirm("정말 삭제하시겠습니까?"))
            console.log("삭제되었습니다.");
    };

});

// --- <h1>12. 노드 조작하기 </h1>------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#s13");
    var box = section.querySelector(".box");

    var dragged = null;

    box.ondrag = function(e){
        
    };
    box.ondragstart = function(e){
        dragged = e.target;
        dragged.classList.add("dragging");
    };
    box.ondragend = function(e){
        dragged.classList.remove("dragging");

        var items = box.querySelectorAll(".row");
        for(var i=0; i<items.length; i++)
            items[i].classList.remove("drop-item");

    };
    box.ondragenter = function(e){

        e.preventDefault();

        var top = e.pageY-box.offsetTop;

        var items = box.querySelectorAll(".row:not(.dragging)");
        
        for(var i=0; i<items.length; i++)
            if(items[i].offsetTop < top && top < items[i].offsetTop + items[i].offsetHeight)
                items[i].classList.add("drop-item");   
            else
                items[i].classList.remove("drop-item");

        

    };
    box.ondragleave = function(e){
        
    };
    box.ondragover = function(e){
        e.preventDefault();
    };
    box.ondrop = function(e){};
});
// --- <h1>13. 노드 조작하기 </h1>------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#s13");
    var box = section.querySelector(".box");

    var dragged = null;

    box.ondrag = function(e){
        
    };
    box.ondragstart = function(e){
        dragged = e.target;
        dragged.classList.add("dragging");
    };
    box.ondragend = function(e){
        dragged.classList.remove("dragging");

        var items = box.querySelectorAll(".row");
        for(var i=0; i<items.length; i++)
            items[i].classList.remove("drop-item");

    };
    box.ondragenter = function(e){

        e.preventDefault();

        var top = e.pageY-box.offsetTop;

        var items = box.querySelectorAll(".row:not(.dragging)");
        
        for(var i=0; i<items.length; i++)
            if(items[i].offsetTop < top && top < items[i].offsetTop + items[i].offsetHeight)
                items[i].classList.add("drop-item");   
            else
                items[i].classList.remove("drop-item");

        

    };
    box.ondragleave = function(e){
        
    };
    box.ondragover = function(e){
        e.preventDefault();
    };
    box.ondrop = function(e){};
});

// --- <h1>12. 노드 조작하기 </h1>------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#s12");
    var formSection = section.querySelector(".form-section");
    var listSection = section.querySelector(".list-section");

    var unameInput = formSection.querySelector("input[name=uname]");
    var regButton = formSection.querySelector("input[name='btn-reg']");
    var listUl = listSection.querySelector(".list");
    var disabledUl = listSection.querySelector(".disabled-list");
    var delFirstButton = listSection.querySelector(".btn-del-first");
    var delAllButton = listSection.querySelector(".btn-del-all");
    var changeButton = listSection.querySelector(".btn-change");
    var disableButton = listSection.querySelector(".btn-disable");

    disableButton.onclick = function(e){
        e.preventDefault();

        var selectedLis = Array.from(listUl.querySelectorAll("input:checked")).map(function(input){
            return input.parentElement;
        });

        var existingLis = disabledUl.children;

        disabledUl.replaceChildren(...selectedLis, ...existingLis);
        // spread 연산자가 없던 시절에는..
        for(var i=0; i<selectedLis.length; i++)
            disabledUl.append(selectedLis[i]);
        // for(var i=0; i<existingLis.length; i++)
        //     disabledUl.append(existingLis[i]);
    };

    changeButton.onclick = function(e){
        e.preventDefault();

        var inputs = Array.from(listUl.querySelectorAll("input:checked"));
        if(inputs.length != 2){
            alert("아이템은 두 개를 선택하셔야 합니다.");
            return;
        }

        var lis = inputs.map(function(input){
            return input.parentElement;
        });
        var first = lis[0];
        var second = lis[1];


        var next = first.nextElementSibling;        
        second.replaceWith(first);
        if(next === second) // 인접한 경우
            first.before(second);
        else    // 떨어져 있는 경우
            next.before(second);


    };

    delAllButton.onclick = function(e){
        e.preventDefault();

        // 방법 2 : 삭제할 항목만 미리 선택한 후에 일괄삭제한다.
        var inputs = listUl.querySelectorAll("input:not(:checked)");
        for(var i=0; i<inputs.length; i++)
            inputs[i].parentElement.remove();


        // 방법 1 : 전체 노드를 돌면서 삭제할 항목을 비교하면서 삭제한다.
        // var lis = listUl.children;
        // var size = lis.length;
        // //var arr = Array.from(lis);

        // for(var i=0; i<size; i++){ //  0,1,2,3,4 : 5개 -> size
        //     var checkbox = lis[size-1-i].querySelector("input[type=checkbox]");

        //     if(checkbox.checked)
        //         lis[size-1-i].remove();
        // }

        // -------------------------------------------
        
        // var lis = listUl.children;

        // for(var i=0; i<lis.length; i++){
        //     var checkbox = lis[i].querySelector("input[type=checkbox]");

        //     if(checkbox.checked)
        //         lis[i].remove();
        // }
    };

    // 2. 이벤트 처리와 대상이 목록일 때
    listUl.onclick = function(e){
        if(!e.target.classList.contains("btn-close"))
            return;
        
        e.preventDefault();

        // target마다 삭제해야 할 대상이 다르다.
        if(confirm("정말 삭제하시겠습니까?"))
            e.target.parentElement.remove();

        if(listUl.children.length == 0)
            listUl.classList.add("empty");

    }

    // 1. 이벤트 처리와 대상이 하나 일 때
    delFirstButton.onclick = function(e){
        e.preventDefault();
        
        //section.removeChild(formSection);
        //var li =listUl.firstElementChild;
        //listUl.removeChild(li);

        listUl.firstElementChild.remove();
    };

    regButton.onclick = function(e){

        if(!unameInput.checkValidity()) {
            // alert("이름 입력오류 : " + unameInput.validationMessage);
            return;
        }
        e.preventDefault();        

        var html = '<li class="item"><input class="mr-2" type="checkbox">'+unameInput.value+'<a class="btn-close icon icon-close ml-auto" href="">삭제</a></li>';
        listUl.insertAdjacentHTML("afterbegin", html);        


        // var li = document.createElement("li");
        // li.append(unameInput.value);
        // li.classList.add("item");
        
        //listUl.insertAdjacentElement("afterbegin", li);
        //listUl.append(li);

        // if(listUl.children.length == 0)
        //     listUl.append(li);
        // else
        //     //listUl.insertBefore(li, listUl.firstElementChild);
        //     listUl.firstElementChild.before(li);
        
        if(listUl.children.length > 0)
            listUl.classList.remove("empty");
    };


});



// //12-1
// window.addEventListener("load",function(){
//     var section = document.querySelector("#s12");
//     var formSection = section.querySelector(".form-section");
//     var listSection = section.querySelector(".list-section");

//     var unameInput = formSection.querySelector("input[name=uname]");
//     var regButton = formSection.querySelector("input[name='btn-reg']");
//     var listUl = listSection.querySelector(".list");

//     regButton.onclick = function(e){
//         e.preventDefault();

//         //초기 비어 있는 empty 삭제
//         listUl.classList.remove("empty");

//     //1. 모든 노드를 직접 만들기 : text 노드 만들어서 추가
//         // var li = document.createElement("li");
//         // var text = document.createTextNode(unameInput.value);
//         // li.appendChild(text);
//         // li.classList.add("item");
//         // listUl.appendChild(li);

//     //2. innerText , textContent 활용하기 : 렌더링 과정이 조금 다르다.
//         // var li = document.createElement("li");
//         // // li.innerText = unameInput.value;
//         // li.textContent = unameInput.value;
//         // li.classList.add("item");
//         // listUl.appendChild(li);
        
//     /*3. append 로 textNode 바로 추가하기 
//       append는 node text를 자동으로 생성해서 추가한다.
//     */
//         // var li = document.createElement("li");
//         // li.append(unameInput.value);
//         // li.classList.add("item");
//         // listUl.append(li);

//     /*4. 노드를 간접적으로 만들기 innerHtml 활용하기
//         : 태그를 직접 추가할 수 있다.
//         listUl 에 있는 객체 들이 += 으로 인해 문자열로 바뀌었다가 다시 객체화 된다.
//         도시 뽀개고 다시 집 짓기
//     */
//         // var li = document.createElement("li");
//         // listUl.innerHTML += '<li class= "item">'+ unameInput.value+ '</li>';

//     /*5.li 엘리먼트를 제일 앞에 추가하기  - .insertBefore 
//         추가 되는 내용이 맨밑에서 부터 추가했던 문제점 해결
//         mdn node interface link : (https://developer.mozilla.org/en-US/docs/Web/API/Node) 
//     */
//         // var li = document.createElement("li");
//         // li.append(unameInput.value);
//         // li.classList.add("item");
//         // // 비어 있다면 li 추가 else  li 앞에 추가
//         // if(listUl.children.length == 0)
//         //     listUl.append(li);
//         // else{
//         //     // 부모 입장 - 형 앞에 들어가라
//         //     // listUl.insertBefore(li, listUl.firstElementChild);
//         //     // 형제들 관계 
//         //     listUl.firstElementChild.before(li);
//         // }
//     /*6.엘리먼트를 추가하는 새로운 API - 
//         .insertAdjacentElement( , );  / beforebegin , afterbegin, beforeend, afterend
//         인접한 엘리먼트를 추가하기 : 조건 검사를 할 필요가 없다.
//     */
//         var li = document.createElement("li");
//         li.append(unameInput.value);
//         li.classList.add("item");

//         listUl.insertAdjacentElement("afterbegin",li);
    
//     /*7.문자열로 엘리먼트를 생성하고 추가하는 새로운 API
//         대입을 통해 추가하는 것이라서 += 와 생성되는 과정이 다르다.
//     */
//     //    var html = '<li class="item">' + unameInput.value+ '</li>';
//     //    listUl.insertAdjacentHTML("afterbegin",html);
//     };
// });

// //12-1.
// window.addEventListener("load",function(){
//     var section = document.querySelector("#s12-1");
//     var formSection = section.querySelector(".form-section");
//     var listSection = section.querySelector(".list-section");

//     var unameInput = formSection.querySelector("input[name=uname");
//     var regButton = formSection.querySelector("input[name=reg-name]");
//     var listUi = listSection.querySelector(".list");

//     regButton.onclick = function(e){
//         e.preventDefault();

//         // if(listUi.children.length == 0)
//             li.classList.remove("empty");

//         var html = '<li class = "item">'+ unameInput.value+ '</li>';
//         listUi.insertAdjacentHTML("afterbegin",html);
//         // listUi.innerHTML += '<li class = "item">' +unameInput.value+ '</li>';
//         // var text = document.createElement(unameInput.value);
//         // li.appendChild(text);
//         // li.textContent = unameInput.value;
//         // var li = document.createElement("li");
//         // li.append(unameInput.value);
//         // li.classList.add("item");
//         // listUi.insertAdjacentElement("afterbegin",li);
//         // listUi.append(li);
//         // if(listUi.children.length == 0)
//         //     listUi.append(li);
//         // else{
//         //     // listUi.insertBefore(li, listUi.firstElementChild );   
//         //     listUi.firstElementChild.before(li);  
//         // }

//     };
// });

// 12. 노드 조작하기(my)
// window.addEventListener("load",function(){
//     var section = document.querySelector("#s12");
//     var memberForm = section.querySelector(".member-form");
//     var txtInput = memberForm.querySelector("input[type=text]");
//     var registerBtn = memberForm.querySelector(".register-btn");
//     var list = section.querySelector(".list");
//     var cancel = section.querySelector(".cancel");
  
//     registerBtn.onclick = function(e){
//         e.preventDefault();
        
     

//         if(txtInput.value =="")
//             return;

//         list.innerHTML += '<li class = "item">' +unameInput.value+ '</li>';
//         // var li = document.createElement("li");
//         // li.classList.add("item");
//         // li.innerHTML = txtInput.value;

//         // list.appendChild(li);

//         txtInput.value = ""
//     };
//     cancel.onclick = function(e){
//         e.preventDefault();
        
//         var lastChild = list.lastElementChild;

//         if(lastChild == null)
//             return;

//         list.removeChild(lastChild);
//     };

// });

// --- <h1>11. 이벤트 다루기(drag and drop) : 데이터 드래그</h1> ----------------------------------
window.addEventListener("load",function(){
    var section = document.querySelector("#s11");
    var box = section.querySelector(".box");
    var errorMessage = box.querySelector(".error-message")
    var uploadBox = section.querySelector(".upload-box");
    

    box.ondragenter = function(e){
        console.log("enter")
    };
    box.ondragleave = function(e){
        box.classList.remove("over");
        box.classList.remove("error");       
        errorMessage.classList.add("d-none");
        console.log("leave")
    };
    box.ondragover = function(e){
        box.classList.add("over");
        e.preventDefault();
        console.log("over");

        var valid = e.dataTransfer
                && e.dataTransfer.types
                && e.dataTransfer.types.indexOf("Files") >= 0;

        if(!valid){
            box.classList.add("error");       
            errorMessage.classList.remove("d-none");
        }
    };
    box.ondrop = function(e){
        e.preventDefault();
        /*
        파일을 하나씩만
        이미지만 ?
        파일크기를 10메가 */
        
        var files = e.dataTransfer.files;
        if(files.length > 1){
            alert("파일을 하나씩 전송할 수 있습니다.");
            box.classList.remove("over"); 
            box.classList.remove("error");       
            errorMessage.classList.add("d-none");
            return;
        }

        var file = files[0];
        if(file.type.indexOf("image/") != 0){
            alert("이미지 형식이 아닙니다.");
            box.classList.remove("over"); 
            box.classList.remove("error");       
            errorMessage.classList.add("d-none");
            return;
        }

        var size = file.size;
        if(size > 10*1024*1024){
            alert("죄송합니다. 10MB를 넘는 파일은 전송할 수 없습니다.");
            box.classList.remove("over"); 
            box.classList.remove("error");       
            errorMessage.classList.add("d-none");
        }

        var reader = new FileReader();
        reader.onload = function(e){
            var img = document.createElement("img");
            img.src = e.target.result;
            img.style.height = "100px";
            uploadBox.appendChild(img);
        }

        reader.readAsDataURL(file);
    };

});

// --- <h1>10. 이벤트 다루기(mouse over/move/up/down) : 박스 드래그</h1> ----------------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#s10");    
    var box = section.querySelector(".box");
    var item = box.querySelector(".item");
    var mouseDown = false;
    var offset = {x:0, y:0};
    var current = null
    //mousemove/mousedown/mouseup/mouseover

    section.onmousemove = function(e){
        if(!mouseDown)
            return;

        current.style.left = e.pageX - box.offsetLeft -offset.x +"px";
        current.style.top = e.pageY - box.offsetTop - offset.y +"px";

    };
    section.onmousedown = function(e){
        if(!e.target.classList.contains("item"))
            return;

        mouseDown = true;
        current = e.target;

        offset.x = e.offsetX;
        offset.y = e.offsetY;
    };
    section.onmouseup = function(e){
        if(!e.target.classList.contains("item"))
        return;

        mouseDown = false;
        current = null;

        offset.x = e.offsetX;
        offset.y = e.offsetY;
    };
});

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



















 