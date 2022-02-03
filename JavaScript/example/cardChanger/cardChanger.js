window.addEventListener("load",function(){
    var section = document.querySelector("#container");
    var btnPrev = section.querySelector(".btn-prev");
    var btnNext = section.querySelector(".btn-next");
    var lis = section.querySelectorAll("li");

    btnNext.onclick = function(e){
        e.preventDefault();

        lis[0].className = "card-3th";
        lis[1].className = "card-1th";
        lis[2].className = "card-2th";
    };
    
});