const input_box = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

console.log("working");

function addtask(){
    const task = input_box.value.trim(); // trim whitespace
    if(task === ""){
        alert("You must write something!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    listcontainer.appendChild(li);
    input_box.value = "";
}

// Listen for Enter key
input_box.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addtask();
    }
});

// Toggle "checked" or remove item
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
