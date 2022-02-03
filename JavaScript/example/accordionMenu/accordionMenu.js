window.addEventListener("load",function(){
    var section = document.querySelector("#s6");
    var box = section.querySelector(".accordion-box");

    box.onclick = function(e){

        if(!e.target.classList.contains("accordion-box"))
            return;
    }

});