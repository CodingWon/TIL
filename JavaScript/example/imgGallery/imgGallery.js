window.addEventListener("load",function(){
    var section = document.querySelector("#s9");
    var showRoom = section.querySelector(".show-room");
    var img = showRoom.querySelector("img");

    var height = 50;
    img.onwheel = function(e){
        e.preventDefault();
      
        var height = e.deltaMode;
        img.style.height += mouseWheel;

    };
});