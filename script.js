const input_box = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');
console.log("working")

function addtask(){
    if(input_box.value === ""){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    input_box.value = "";
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);