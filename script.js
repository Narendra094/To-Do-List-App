let taskList = document.querySelector("#taskList");
let input = document.querySelector("#input");
let btn = document.querySelector("#btn");

btn.addEventListener("click" , () => {
    if(input.value === ""){
        alert("Enter Something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskList.appendChild(li);
        li.classList.add("list-item-class");
        li.addEventListener("click" , (elm) => {
            elm.target.classList.add("chacked");
        });
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);       
        span.classList.add("span-class");
        span.addEventListener("click" , (e) => {
            li.remove();
        })
    }
    input.value = ""; 
});
