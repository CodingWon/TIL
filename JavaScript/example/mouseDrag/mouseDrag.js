window.addEventListener("load", function(){
    var section = document.querySelector("#s10");    
    var box = section.querySelector(".box");
    var item = box.querySelector(".item");
    var mouseDown = false;

    box.onmousemove = function(e){
        if(!mouseDown)
            return;

        item.style.left = e.x+"px";
        item.style.top = e.y+"px";
    };

    box.onmousedown = function(e) {
        mouseDown = true;
    }

    box.onmouseup = function(e){
    
    }

});