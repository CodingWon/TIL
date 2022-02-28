// window.addEventListener("load", function(){
//     var section = document.querySelector("#s10");    
//     var box = section.querySelector(".box");
//     // var item = box.querySelector(".item");
//     var current = null;
//     var mouseDown = false;
//     var offset =  {x : 0,y:0};

//     section.onmousemove = function(e){
//         //마우스 down 이 아니면 종료
//         if(!mouseDown)
//             return;

//         current.style.top = e.pageY - box.offsetTop - offset.y + "px";
//         current.style.left = e.pageX - box.offsetLeft - offset.x +"px";

//     };

//     section.onmousedown = function(e) {
//         // item 이 없는 곳을 눌렀을 때 드래그 되지 않게 하기
//         if(!e.target.classList.contains("item"))
//             return

//         // mouse 가 down는것을 알려줌
//         mouseDown = true;

//         // 현재 선택된 객체
//         current = e.target;

//         // mouse 가 down 됫을 때 딱한번 좌표 얻기
//         offset.x = e.offsetX;
//         offset.y = e.offsetY;
//     }

//     section.onmouseup = function(e){
//         // item 이 없는 곳을 눌렀을 때 드래그 되지 않게 하기
//         if(!e.target.classList.contains("item"))
//             return
            
//         // mouse 가 up는것을 알려줌
//         mouseDown = false;

//         // 현재 선택된 객체
//         current = null;

//         offset.x = 0;
//         offset.y = 0;
//     }

// });

//22.2.26;
// window.addEventListener("load",function(){
//     var section = document.querySelector("#s10");
//     var box = section.querySelector(".box");
//     var item = box.querySelector(".item");
//     var mouseDown = false;
//     var offset = {x : 0 , y :0};
//     var current = null;

//     box.onmousemove = function(e){
        
//         if(!mouseDown)
//             return;
        
//         current.style.left = e.pageX - box.offsetLeft - offset.x + "px";
//         current.style.top = e.pageY  - box.offsetTop - offset.y + "px";

//         // console.log("offsetLef : " + box.offsetLeft);
//         // console.log("offsetTOP : " + box.offsetTop);
//     };

//     box.onmousedown = function(e){
//         if(!e.target.classList.contains("item"))
//             return;

//         mouseDown = true;
    
//         offset.x = e.offsetX;
//         offset.y = e.offsetY;

//         current = e.target;

//     };

//     box.onmouseup = function(e){
//         if(!e.target.classList.contains("item"))
//         return;

//         mouseDown = false;

//         offset.x = null;
//         offset.y = null;

//         current = null;

//     };
// });

//Q
/*      item.style.left = e.pageX - box.offsetLeft  + "px";
        item.style.top = e.pageY  - box.offsetTop  + "px";
        했을 때는 드래그가 
        
          item.style.left =   offset.x + "px";
        item.style.top = offset.y + "px";
        했을 때는 드래그가 안되고 콕콕찍힌다.*/

// 2.28
window.addEventListener("load",function(){
    var section = document.querySelector("#s10");
    var box = section.querySelector(".box");
    var item = section.querySelector(".item");
    var mousedown = false;
    var offset = {x:null , y:null}
    var current = null;

    document.onmousemove = function(e){

        if(!mousedown)
            return;
        

        current.style.left = e.pageX - box.offsetLeft - offset.x+ "px";
        current.style.top = e.pageY - box.offsetTop - offset.y+ "px";
    };

    document.onmousedown = function(e){
        if(!e.target.classList.contains("item"))
            return;

        mousedown = true;

        offset.x = e.offsetX;
        offset.y = e.offsetY;

        current = e.target;
    };

    document.onmouseup = function(e){
        if(!e.target.classList.contains("item"))
        return;

        mousedown = false;

        offset.x = null;
        offset.y = null;

        current = null;
    };
});