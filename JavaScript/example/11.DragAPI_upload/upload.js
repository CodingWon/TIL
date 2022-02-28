window.addEventListener("load",function(){
    var section = document.querySelector("#s11");
    var box = section.querySelector(".box");
    var errorMessage = box.querySelector(".error-message");
    var uploadBox = section.querySelector(".upload-box");

    console.log(box);
    //enter : 영역 IN
    box.ondragenter = function(e){
       
    };
    //leave : 영역 out
    box.ondragleave = function(e){
        e.target.classList.remove("over");
        box.classList.remove("error");
        errorMessage.classList.add("d-none");
    };
    //over : 영역 위
    box.ondragover = function(e) {
        e.preventDefault();
        e.target.classList.add("over");
        // console.log(e.dataTransfer);
        // console.log(e.dataTransfer.types);
        var valid = e.dataTransfer
                && e.dataTransfer.types
                && e.dataTransfer.types.indexOf("Files") >= 0;
        
        if(!valid){
            box.classList.add("error");
            errorMessage.classList.remove("d-none");
        }
    };
    //drop : 영역에 drop
    box.ondrop = function(e){
        e.preventDefault();
      
        /*
        파일을 하나씩만 
        이미지만?
        파일크기를 10mb
        */

        var files = e.dataTransfer.files;
        if(files.length > 1){
            alert("파일은 하나씩 전송할 수 있습니다.");
            box.classList.remove("over");
            box.classList.remove("error");
            errorMessage.classList.add("d-none");
            return;
        }

        var file = files[0];
         if(file.type.indexOf("image/") != 0){
             alert("이미지 형식이 아닙니다.");
             box.classList.remove("over");
             box.classList.remove("error");
             errorMessage.classList.add("d-none");
             return;
         }
         
         var size = file.size;
         if(size > 10 * 1024* 1024){
             alert("죄송합니다. 10mb를 넘는 파일은 전송할 수 없습니다.");
             alert("이미지 형식이 아닙니다.");
             box.classList.remove("over");
             box.classList.remove("error");
             errorMessage.classList.add("d-none");
             return;
         }

        var reader = new FileReader();
        reader.onload = function(e){
            var img = document.createElement("img");
            img.src = e.target.result;
            img.style.height = "100px";
            uploadBox.appendChild(img);
        };

        reader.readAsDataURL(file);

    };

});