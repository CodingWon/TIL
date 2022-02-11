window.addEventListener("load",function(){

    var func = [];

    func[0] = function(){
        console.log(0);
    };

    func[1] = function(){
        console.log(1);
    };

    func[0]();
    func[1]();

    // 반복문

    for(var i = 0; i<2; i++)
        func[i] = function(){
            console.log("클로저:" + i);
        } ;

    func[0]();
    func[1]();

   // 익명 함수 바로 호출
   for (var i = 0; i<2; i++)
         (function(x){
            console.log("익명함수 바로 호출: " + x);
        })(i);


    // 함수 리턴
    for (var i = 0; i<2; i++)
    func[i] = (function(x){
        return function(){
            console.log("함수리턴 : " + x);
        }
   })(i);

   console.log(func[0]);

   func[0]();
   func[1]();

   // 정리
   
   for(var i = 0; i<3; i++){
    func[i] = (function(x){
        return function(){
            console.log(x);
        }  
    })(i);
}

for(var i = 0; i<3; i++){
    func[i]();
}
});



















 