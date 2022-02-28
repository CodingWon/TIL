// window.addEventListener("load",function(){
//     var section = document.querySelector("#progress");
//     var box = section.querySelector(".box");
//     var bar = section.querySelector(".bar");

//     document.onscroll = function(e){
//         var y = window.innerHeight - (section.offsetTop - window.scrollY);
//         var progress = y/3 > 100 ? 100 : y/3;
//         console.log(progress);
//         section.style.opacity = progress/100;
//         bar.style.width = progress+"%";
//     };
// });

// window.addEventListener("load",function(){
//     var section = document.querySelector("#progress");
    
//     document.onscroll = function(e){
//         var y = window.innerHeight - (section.offsetTop - window.scrollY);
//         var progress = y/3 > 100 ? 100 : y/3;
//         console.log(progress);
//         section.style.opacity = progress/100;
//     };

// });

// 2022.02.24
// window.addEventListener("load",function(){
//     var section = document.querySelector("#progress");
//     var bar = section.querySelector(".bar");
//     document.onscroll = function(e){
        
//         var y = window.innerHeight - (section.offsetTop - window.scrollY);
//         var progress = y / 3 > 100 ? 100 : y/3;
        
//         section.style.opacity = progress/100;
//         bar.style.width = progress + "%";

//     };
// });
// 2022.02.25
// window.addEventListener("load",function(){
//     var section = document.querySelector("#progress");
//     var bar = section.querySelector(".bar");

//     document.onscroll = function(e){
        
//         var y = window.innerHeight - (section.offsetTop - window.scrollY);
//         var progress = y/3 > 100 ? 100 : y/3; 

//         section.style.opacity = progress/100;
//         bar.style.width = progress + "%";
        
//     };  
// });
//22.02.26(토)

window.addEventListener("load",function(){
    var section = document.querySelector("#progress");
    var bar = section.querySelector(".bar");

    document.onscroll = function(e){
        
        // console.log("innerHeight : " + window.innerHeight);
        // console.log("section.offsetTOP : " + section.offsetTop);
        // console.log("scrollY : " + window.scrollY);
        var y = window.innerHeight - (section.offsetTop - window.scrollY);
        // console.log(y);
        var progress = y/3 > 100 ? 100 : y/3;

        section.style.opacity = progress/100;
        // console.log(progress);
        bar.style.width = progress + "%";
    };
});




