window.addEventListener("load",function(){
    var section = document.querySelector("#container");
    var btnPrev = section.querySelector(".btn-prev");
    var btnNext = section.querySelector(".btn-next");
    var lis = section.querySelectorAll("li");

    var count =0;
    var offIndex = 0;
    btnNext.onclick = function(e){
        e.preventDefault();

        offIndex++;

        lis[(0+offIndex)%3].className = "card-1th";
        lis[(1+offIndex)%3].className = "card-2th";
        lis[(2+offIndex)%3].className = "card-3th";
    };

    btnPrev.onclick = function(e){
        e.preventDefault();
        
        offIndex--;

        if(offIndex<0)
        offIndex=2;
       
        lis[(0+offIndex)%3].className = "card-1th";
        lis[(1+offIndex)%3].className = "card-2th";
        lis[(2+offIndex)%3].className = "card-3th";
    };
});