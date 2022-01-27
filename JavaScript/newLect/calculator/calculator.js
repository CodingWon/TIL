window.addEventListener("load",function(){
    var section = document.querySelector("#calc");
    var calcdiv = section.querySelector("div");
    var txtInput = section.querySelector(".text-area");
    var plusInput = section.querySelector(".plus");
    

    calcdiv.onclick = function(e){
        e.preventDefault();
        if(e.target.nodeName != "INPUT")
            return;
       txtInput.value += e.target.value;
    }

    plusInput.onclick = function(e){
        e.preventDefault();
        
    }


});