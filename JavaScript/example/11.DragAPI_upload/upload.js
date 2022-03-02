// window.addEventListener("load",function(){
//     var section = document.querySelector("#s11");
//     var box = section.querySelector(".box");
//     var errorMessage = box.querySelector(".error-message");
//     var uploadBox = section.querySelector(".upload-box");

//     console.log(box);
//     //enter : 영역 IN
//     box.ondragenter = function(e){
       
//     };
//     //leave : 영역 out
//     box.ondragleave = function(e){
//         e.target.classList.remove("over");
//         box.classList.remove("error");
//         errorMessage.classList.add("d-none");
//     };
//     //over : 영역 위
//     box.ondragover = function(e) {
//         e.preventDefault();
//         e.target.classList.add("over");
//         // console.log(e.dataTransfer);
//         // console.log(e.dataTransfer.types);
//         var valid = e.dataTransfer
//                 && e.dataTransfer.types
//                 && e.dataTransfer.types.indexOf("Files") >= 0;
        
//         if(!valid){
//             box.classList.add("error");
//             errorMessage.classList.remove("d-none");
//         }
//     };
//     //drop : 영역에 drop
//     box.ondrop = function(e){
//         e.preventDefault();
      
//         /*
//         파일을 하나씩만 
//         이미지만?
//         파일크기를 10mb
//         */

//         var files = e.dataTransfer.files;
//         if(files.length > 1){
//             alert("파일은 하나씩 전송할 수 있습니다.");
//             box.classList.remove("over");
//             box.classList.remove("error");
//             errorMessage.classList.add("d-none");
//             return;
//         }

//         var file = files[0];
//          if(file.type.indexOf("image/") != 0){
//              alert("이미지 형식이 아닙니다.");
//              box.classList.remove("over");
//              box.classList.remove("error");
//              errorMessage.classList.add("d-none");
//              return;
//          }
         
//          var size = file.size;
//          if(size > 10 * 1024* 1024){
//              alert("죄송합니다. 10mb를 넘는 파일은 전송할 수 없습니다.");
//              alert("이미지 형식이 아닙니다.");
//              box.classList.remove("over");
//              box.classList.remove("error");
//              errorMessage.classList.add("d-none");
//              return;
//          }

//         var reader = new FileReader();
//         reader.onload = function(e){
//             var img = document.createElement("img");
//             img.src = e.target.result;
//             img.style.height = "100px";
//             uploadBox.appendChild(img);
//         };

//         reader.readAsDataURL(file);

//     };

// });

window.addEventListener("load",function(){
    var section = document.querySelector("#s11");
    var box = section.querySelector(".box");
    var errorMessage = box.querySelector(".error-message");
    var uploadBox = section.querySelector(".upload-box");

    box.ondragenter = function(e){
       
    };

    box.ondragleave = function(e){
        box.classList.remove("over");
        box.classList.remove("error");
        errorMessage.classList.add("d-none");
    };

    box.ondragover = function(e){
        e.preventDefault();
        //유효성 검사
        box.classList.add("over");

        var valid = e.dataTransfer && 
                    e.dataTransfer.types &&
                    e.dataTransfer.types.indexOf("Files") == 0;
        
        // console.log(valid);

        if(!valid){
            box.classList.add("error");
            errorMessage.classList.remove("d-none");
        }
        
    };

    box.ondrop = function(e){
        e.preventDefault();

        var files = e.dataTransfer.files;

        var valid = e.dataTransfer && 
        e.dataTransfer.types &&
        e.dataTransfer.types.indexOf("Files") == 0;

        if(!valid){
            alert("파일 형식만 업로드 가능합니다.")
            box.classList.remove("error");
            box.classList.remove("over");
            errorMessage.classList.add("d-none");
            return;
        }

        if(files.length > 1){
            alert("파일은 하나씩 업로드 할 수 있습니다.")
            box.classList.remove("over");
            return;
        }

        var file = files[0];
        if(file.type.indexOf("image/") !=0){
            alert("이미지 형식만 업로드 할 수 있습니다.");
            box.classList.remove("over");
            return;
        }

        if(file.size >= 10* 1024*1024){
            alert("용량을 10mb 초과할 수 없습니다.")
            box.classList.remove("over");
            return;
        }

        var reader = new FileReader();
        //         reader.onload = function(e){
        //             var img = document.createElement("img");
        //             img.src = e.target.result;
        //             img.style.height = "100px";
        //             uploadBox.appendChild(img);
        //         };
        
        //         reader.readAsDataURL(file);

        var reader = new FileReader();
        
        reader.onload = function(e){
            var img = document.createElement("img");
            img.src = e.target.result;
            img.style.height = "100px";
            uploadBox.append(img);

            box.classList.remove("over");
        }

        reader.readAsDataURL(file);
    };

});

/*
1.파일을 dragover 했을 때
    - 기본 효과
        1.1 box의 배경색이 빨강색으로 바뀐다.
        1.2 box의 화살표 위치가 바뀐다.

    - 이벤트
        1.1 파일 형식이 아니라면 x 이미지와 텍스트를 보여준다.

2.파일이 drop 됬을 때
    -예외
        2.1 파일 형식이 아닐 때 "파일 형식이 아닙니다." 문구를 띄운다.
        2.2 여러 파일을 업로드 할 때 "하나씩 업로드 할 수 있습니다." 문구를 띄운다.
        2.3 파일 형식이 이미지가 아니면 "이미지만 업로드 할 수 있습니다." 문구를 띄운다.
    -성공
        2.1 이미지 파일을 업로드 한다.
    

*/