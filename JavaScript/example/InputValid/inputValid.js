// --- <h1>9. 이벤트 다루기(wheel) : 이미지 쇼룸</h1> ----------------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#s9");    
    var imgListBox = section.querySelector(".img-list-box");
    var showRoom = section.querySelector(".show-room");
    var img = showRoom.querySelector("img");
    
    var current = imgListBox.querySelector(".active");
    var isWorking = false;

    imgListBox.onwheel = function(e){
        e.preventDefault();

        // img.parentElement;
        // img.previousElementSibling;
        // img.nextElementSibling;
        // img.children[0];
        // img.firstElementChild;
        // img.lastElementChild;
        if(isWorking)
            return;

        if(e.deltaY < 0){ // 왼쪽
            var prevNode = current.previousElementSibling;

            current.classList.remove("active");
            prevNode.classList.add("active");
            current = prevNode;
        }
        else{ // 오른쪽
            var nextNode = current.nextElementSibling;

            current.classList.remove("active");
            nextNode.classList.add("active");
            current = nextNode;
        }

        isWorking = true;
        img.src = current.firstElementChild.src;
        current.ontransitionend = function(){
            isWorking = false;
        }
    };

    //var height = parseInt(img.style.height);
    var scale = 1;
    img.onwheel = function(e){
        e.preventDefault();
        
        // console.log(e.deltaY);
        // console.log(e.deltaMode);

        //height += e.deltaY/10;
        scale += e.deltaY*0.001;
        
        console.log(scale);
        //console.log(height);
        //img.style.height = height+"%";
        img.style.transform = "scale("+scale+")";
    };
});


// // --- <h1>9. 이미지 쇼룸 ----------------------------------
// window.addEventListener("load", function(){
//     var section = document.querySelector("#s9"); 
//     var imgListBox = section.querySelector(".img-list-box");   
//     var showRoom = section.querySelector(".show-room");
//     var img = showRoom.querySelector("img");

//     var current = imgListBox.querySelector("li");

//     imgListBox.onwheel = function(e){
//         e.preventDefault();

//         if(e.deltaY < 0) { //왼쪽
//             var prevNode = current.previousElementSibling;
            
//             current.classList.remove("active");
//             nextNode.classList.add("active");
//             current = prevNode;
//         }else{            //오른쪽
//             var nextNode = current.nextElementSibling;
            
//             current.classList.remove("active");
//             nextNode.classList.add("active");
//             current = nextNode;
//         }
//     }


//    var scale = 1;
//     img.onwheel = function(e){
//         e.preventDefault();
        
//         // height += e.deltaY/10;   
//         scale += e.deltaY*0.001;

//         // if(scale >= 1.5 || scale <= 1.8)
//         // return;

//         console.log(scale);    
//         // console.log(height);
//         // img.style.height = height+"%";
//         img.style.transform = "scale(" + scale +")";
//     };
   

//     //var selectedItem = section.querySelector(".selected");
// });



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
