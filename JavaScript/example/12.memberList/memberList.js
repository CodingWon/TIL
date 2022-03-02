window.addEventListener("load",function(){
    var section = document.querySelector("#s12");
    var formSection = section.querySelector(".form-section");
    var listSection = section.querySelector(".list-section");

    var unameInput =  formSection.querySelector("input[name=uname]"); 
    var regButton = formSection.querySelector("input[name=btn-reg]"); 
    var listUl = listSection.querySelector(".list");


    regButton.onclick = function(e){
        e.preventDefault();
       
        if(listUl.children.length == 0)
            listUl.classList.remove("empty");

    //1.모든 노드 직접 만들기
        // var li = document.createElement("li");
        // var text = document.createTextNode(unameInput.value);
        // li.appendChild(text);
        // li.classList.add("item");
        // listUl.appendChild(li);
    
    //1-2 innerText
        // var li = document.createElement("li");
        // li.innerText = unameInput.value;
        // li.classList.add("item");
        // listUl.appendChild(li);

    //2. append
    //     var li = document.createElement("li");
    //     li.append(unameInput.value);
    //     li.classList.add("item");
    //     listUl.append(li);
    // };

    //3. 간접적으로 만들기
        // listUl.innerHTML += '<li class = "item">' + unameInput.value  +'</li>';

        
    //4. 위에서부터 리스트 생성
        var li = document.createElement("li");
        li.append(unameInput.value);
        li.classList.add("item");

        if(listUl.children.length == 0)
            listUl.append(li);
        else
            // listUl.insertBefore(li, listUl.firstElementChild);
            listUl.firstElementChild.before(li);

        
            
    };
});