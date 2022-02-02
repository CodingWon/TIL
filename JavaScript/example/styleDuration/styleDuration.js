window.addEventListener("load",function(){
    var section = document.querySelector("#container");
    var styleInput = section.querySelector(".style-input");
    var widthInput = section.querySelector(".width-input");
    var radiusInput = section.querySelector(".radius-input");
    var colorInput = section.querySelector(".color-input");
    var borderColorInput = section.querySelector(".bordercolor-input");
    var widthValue = section.querySelector(".width-value");
    var item = section.querySelector(".item");


    styleInput.oninput = function(){
        item.style.borderStyle = styleInput.value;
       
    }

    widthInput.oninput = function(){
        item.style.borderWidth = widthInput.value+"px";
        widthValue.innerHTML = widthInput.value; 
         
    }

    radiusInput.oninput = function(){
        item.style.borderRadius = radiusInput.value+"px";
    }

    colorInput.oninput = function(){
        item.style.backgroundColor = colorInput.value;
    }

    borderColorInput.oninput = function(){
        item.style.borderColor = borderColorInput.value;
    }


});