// Ex6 - 노드조작 : 메뉴추가(createTextNode,Element)
window.addEventListener("load",function(){
    var section6 = document.querySelector("#section6");
    var titleInput = section6.querySelector(".title-input");
    var menuListUl = section6.querySelector(".menu-list");
    var addButton = section6.querySelector(".add-button");
    var delButton = section6.querySelector(".del-button");

    addButton.onclick =function(){
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        var aNode = document.createElement("a");
        aNode.href = "";
        aNode.appendChild(txtNode);

        var liNode = document.createElement("li");
        liNode.appendChild(aNode);
        
        menuListUl.appendChild(liNode);
        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);
        // menuListDiv.appendChild(txtNode);
    }

    delButton.onclick = function(){
        var txtNode = menuListDiv.childNodes[0];
        menuListDiv.removeChild(txtNode);
    };
});

// Ex5 : 엘리먼트 노드의 속성 변경
window.addEventListener("load",function(){
    var section5 = document.querySelector("#section5");
    var srcInput = section5.querySelector(".src-input");
    var changeBtn = section5.querySelector(".change-btn");
    var img = section5.querySelector(".img")
    var imgSelect = section5.querySelector(".img-select");
    var colorInput = section5.querySelector(".color-input");

    changeBtn.onclick = function(){
        var name = srcInput.value;
        img.src = "imgs/"+name;
        // var name = imgSelect.value;
        // img.src = "imgs/" + name;

        img.style.borderColor = colorInput.value;
        
    };
});

// Ex4 : Selectors API level1
window.addEventListener("load",function(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";
});

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

// EX2 :엘리먼트 선택방법 개선하기
window.addEventListener("load",function(){
    var section2 = document.getElementById("ex2");
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];

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


// EX1 : 계산기 프로그램

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