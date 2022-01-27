window.addEventListener("load",function(){
    var section = document.querySelector("#calc");
    var calcdiv = section.querySelector("div");
    var txtInput = section.querySelector(".text-area");
    var plusInput = section.querySelector(".plus");
    var backInput = section.querySelector(".backspace");
  
    var resultInput = section.querySelector(".result");
    var plus = 0;
    var channel = 0;
 
// +div 클릭시
    calcdiv.onclick = function(e){
        e.preventDefault();

        if(e.target.nodeName != "INPUT")
            return;

        if(txtInput.value == "0")
            txtInput.value="";

            var value =  txtInput.value += e.target.value;
        }


// + 클릭시
    plusInput.onclick = function(e){
        e.preventDefault();
        e.stopPropagation();
        
        plus += parseInt(txtInput.value);
        txtInput.value = 0;
        
        console.log(plus);
        channel = 1;
    }

// = 클릭시
    resultInput.onclick = function(e){
        e.stopPropagation();
        e.preventDefault();
        if(channel == 1){

            plus += parseInt(txtInput.value);
            txtInput.value = plus;
            plus = 0;
        }
    }

// backspace
    backInput.onclick = function(e){
        e.stopPropagation();
        e.preventDefault();

        var value = parseInt(txtInput.value);
        value /=10;
        txtInput.value = Math.floor(value); 
    }


});