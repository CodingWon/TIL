window.addEventListener("load",function(){
    var section = document.querySelector("#s6");
    var box = section.querySelector(".accordion-box");
    var current = section.querySelector(".active");

    box.onclick = function(e){

        var valid = e.target.nodeName =="H2"
                    || e.target.classList.contains("accordion-header");

     

        if(!valid)
            return;


        if(current != null)
            current.classList.toggle("active")
    
        e.target.classList.toggle("active");
        current = e.target;
    };

});