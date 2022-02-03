window.addEventListener("load",function(){
    var section = document.querySelector("#container");
    var btnPrev = section.querySelector(".btn-prev");
    var btnNext = section.querySelector(".btn-next");
    var lis = section.querySelectorAll("li");

    btnNext.onclick = function(e){
        e.preventDefault();

        lis[0].style.left = "calc(100% - 100px)";
     
        lis[1].style.left = "0px";
        
        lis[2].style.left = "calc(50% - 50px)";
        lis[2].style.backgroundColor = "#ff0000";
    };
    
});