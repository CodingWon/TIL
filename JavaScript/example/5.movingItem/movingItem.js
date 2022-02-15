window.addEventListener("load", function(){
    var section = document.querySelector("#s7");    
    var box = section.querySelector(".box");
    var selectedItem = section.querySelector(".selected");

    box.onclick = function(e){
        var validItem = e.target.classList.contains("src-item") 
            || e.target.classList.contains("dst-item");
        
        if(!validItem)
            return;
        
        if(e.target.classList.contains("src-item")){

            if(selectedItem != null)
                selectedItem.classList.remove("selected");

            e.target.classList.toggle("selected");
            selectedItem = e.target;
        }
        else if(e.target.classList.contains("dst-item")){
            var targetStyle = window.getComputedStyle(e.target);
            var left = targetStyle.getPropertyValue("left");
            var top = targetStyle.getPropertyValue("top");

           selectedItem.style.left = left;
           selectedItem.style.top = top;
           selectedItem.style.transform = "rotate(360deg)";

            selectedItem.ontransitionend = function(){
                console.log("끝!!");
                selectedItem.classList.add("finished");

                selectedItem.ontransitionend = null;
            }

        }
        
        
        
    };

});
