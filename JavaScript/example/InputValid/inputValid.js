// --- <h1>8. 이벤트 다루기(focus/blur/tabindex), 스타일(:valid,..) : 입력 값 유효성 검사하기</h1> ----------------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#s8-1");    
    var box = section.querySelector(".box");

    box.onkeydown = function(e){
        if(e.target.classList.contains("box"))
        return;

        if(e.code=="Delete"){
            e.target.classList.add("delete");

        }
    }

    //var selectedItem = section.querySelector(".selected");
});


// --- <h1>8. 이벤트 다루기(focus/blur/tabindex), 스타일(:valid,..) : 입력 값 유효성 검사하기</h1> ----------------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#s8");    
    var form = section.querySelector("form");
    var uname = section.querySelector("input[name=uname]");
    form.onsubmit = function(e){
        e.preventDefault();

        if(uname.value.length > 3)

        console.log("submit");
    };

    //var selectedItem = section.querySelector(".selected");
});
