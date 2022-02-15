// ver2
window.addEventListener("load", function () {
    var section = document.querySelector("#calc2");
    var box = section.querySelector(".box");
    var textInput = section.querySelector(".text-area");
    var multiple = section.querySelector(".multiple");
    var plusInput = section.querySelector(".plus");
    var divideInput = section.querySelector(".divide");
    var resultInput = section.querySelector(".result");
    var values = new Array(3);
    var isWoring = false;
    var isAcuumulate = false;
    var channel = 0;
    
    // 더하기
    plusInput.onclick = function(e){
        e.preventDefault();
        e.stopPropagation();
        
        // 결과와 화면 값 같다면 return
        if(textInput.value == values[0])
            return;

        // 첫번째가 값이 대입이 됬다면
        if(values[0] != null){
          values[1] = parseInt(textInput.value);
          values[0] = values[0] + values[1];
          textInput.value = values[0];
        }else{
            values[0] = parseInt(textInput.value);
        }
        isWoring = true;
        isAcuumulate = true;
        channel =1;
    };
    
    // 곱하기
    multiple.onclick = function(e){
        e.preventDefault();
        e.stopPropagation();

        if(textInput.value == values[0])
            return;

        if(values[0] != null){
          values[1] = textInput.value;
          values[0] = values[0] * values[1];
          textInput.value = values[0];
        }else{
            values[0] = textInput.value;
        }
        isWoring = true;
        isAcuumulate = true;
        channel =3;
    };
    //나누기
    divideInput.onclick = function(e){
        e.preventDefault();
        e.stopPropagation();

        if(textInput.value == values[0])
            return;

        if(values[0] != null){
          values[1] = textInput.value;
          values[0] = values[0] / values[1];
          textInput.value = values[0];
        }else{
            values[0] = textInput.value;
        }
        isWoring = true;
        isAcuumulate = true;
        channel = 4;
    };
    
    // 결과
    resultInput.onclick = function(e){
        e.stopPropagation();
        e.preventDefault();
        var accumulate = parseInt(textInput.value);

        // 누적값 1번만 대입 될 수 있게 제어
        if(isAcuumulate)
            values[1] = parseInt(textInput.value);

        switch (channel) {
            case 1:
                values[0] += values[1];
                textInput.value = values[0];
                break;
            case 2:
                values[0] -= parseInt(textInput.value);
                textInput.value = values[0];
                break;
            case 3:
                values[0] *= parseInt(values[1]);
                textInput.value = values[0];
                break;
            case 4:
                values[0] /= parseInt(values[1]);
                textInput.value = values[0];
                break;
        }
        isAcuumulate = false;
    };

    // 숫자 입력
    box.onclick = function (e) {
        e.preventDefault();
        /*input 만 선택해야한다.
        - input 이 아니면 retrun(함수종료) */
        if (e.target.nodeName != "INPUT") 
            return;
        
        if (textInput.value == "0" || isWoring == true){
            textInput.value = ""
        } 
        
        textInput.value += e.target.value;
        isWoring =false;
    };
});

// ver1------------------------------------------------------------------------------
window.addEventListener("load", function () {
    var section = document.querySelector("#calc1");
    var calcdiv = section.querySelector("div");
    var txtInput = section.querySelector(".text-area");
    var plusInput = section.querySelector(".plus");
    var minusInput = section.querySelector(".minus");
    var backInput = section.querySelector(".backspace");
    var resultInput = section.querySelector(".result");
    var multipleInput = section.querySelector(".multiple");
    var divideInput = section.querySelector(".divide");

    var value = 0;
    var channel = 0;

    // 전체 버튼
    calcdiv.onclick = function (e) {
        e.preventDefault();

        if (e.target.nodeName != "INPUT") 
            return;
        
        if (txtInput.value == "0") 
            txtInput.value = "";
        txtInput.value += e.target.value;
    }

    // 더하기
    plusInput.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        value = parseInt(txtInput.value);
        txtInput.value = 0;

        channel = 1;
    }

    // 빼기
    minusInput.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        value = parseInt(txtInput.value);
        txtInput.value = 0;

        channel = 2;
    }

    // 곱하기
    multipleInput.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        value = parseInt(txtInput.value);
        txtInput.value = 0;

        channel = 3;
    }

    // 나누기
    divideInput.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        value = parseInt(txtInput.value);
        txtInput.value = 0;

        channel = 4;
    }

    // 결과
    resultInput.onclick = function (e) {
        e.stopPropagation();
        e.preventDefault();
        switch (channel) {
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
            case 4:
                value /= parseInt(txtInput.value);
                txtInput.value = value;
                value = 0;
                break;
        }

    }

    // backspace
    backInput.onclick = function (e) {
        e.stopPropagation();
        e.preventDefault();

        var value = parseInt(txtInput.value);
        value /= 10;
        txtInput.value = Math.floor(value);
    }

});