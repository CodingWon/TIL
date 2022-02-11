window.addEventListener("load",function(){
    var section = document.querySelector("#s9-2");    
    var box = section.querySelector(".box");
    var bar = box.querySelector("::before");
// shdow 엘리먼트는 갖고 와서 쓸 수 없다. style 을 얻어서 사용만 가능하다.

    document.onscroll = function(e){
        var y = window.innerHeight - (box.offsetTop - window.innerHeight);

        var progress = y/3>100 ? 100 : y/3;
        console.log(progress);

        box.style.opacity = progress/100;
        bar.style.width = progress + "%";
    };
});