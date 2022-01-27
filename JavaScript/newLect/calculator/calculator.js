window.addEventListener("load",function(){
    var section = document.querySelector("#calc");
    var calcdiv = section.querySelector("div");
    var txtInput = section.querySelector(".text-area");
    var plusInput = section.querySelector(".plus");
    var minusInput = section.querySelector(".minus");
    var backInput = section.querySelector(".backspace");
    var resultInput = section.querySelector(".result");
    var multipleInput = section.querySelector(".multiple");

    
    var value = 0;
    var channel = 0;
 
// 전체 버튼
    calcdiv.onclick = function(e){
        e.preventDefault();
 
        if(e.target.nodeName != "INPUT")
            return;

        if(txtInput.value == "0")
            txtInput.value="";
            txtInput.value += e.target.value;
        }


// 더하기
    plusInput.onclick = function(e){
        e.preventDefault();
        e.stopPropagation();
        
        value = parseInt(txtInput.value);
        txtInput.value = 0;
        
        console.log(value);
        channel = 1;
    }

// 빼기
    minusInput.onclick = function(e){
        e.preventDefault();
        e.stopPropagation();

        value = parseInt(txtInput.value);
        txtInput.value = 0;

        channel =2;
    }

    // 곱하기
    multipleInput.onclick = function(e){
        e.preventDefault();
        e.stopPropagation();

        value = parseInt(txtInput.value);
        txtInput.value = 0;

        channel =3;
    }

// 결과
    resultInput.onclick = function(e){
        e.stopPropagation();
        e.preventDefault();
        switch (channel){
            case 1:
                value += parseInt(txtInput.value);
                txtInput.value = value;
                value = 0;
                break;
            case 2:
                value -= parseInt(txtInput.value);
                txtInput.value = value;
                value = 0;
             
                break;
            case 3:
                value *= parseInt(txtInput.value);
                txtInput.value = value;
                value = 0;
              
                break;
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