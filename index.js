function drag(e){
    e.dataTransfer.setData("text", e.target.id);
}
function allowDrop(e){
    e.preventDefault();
}
function drop(e){
    e.preventDefault();
    var data=e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}
function createTask(){
    var x=document.getElementById("inprogress");
    var y=document.getElementById("done");
    var z=document.getElementById("newtaskblock");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";

        
    } else {
        x.style.display = "none"; 
        y.style.display = "none";
        z.style.display = "flex";
    }
}
function saveTask() {
    var todo=document.getElementById("todo");
    var taskName=document.getElementById("task-name").value;
    todo.innerHTML += ` <div class="task" id="${taskName.toLowerCase().split(" ").join(" ")}" 
    draggable="true" ondragstart="drag(event)">
            <span>${taskName}</span>
        </div>`
    }
function editTask() {
        var saveButton= document.getElementById("save-button");
        var editButton= document.getElementById("edit-button");
        if (saveButton.style.display === "none") {
            saveButton.style.display = "block";
            editButton.style.display = "none";
        } else {
            saveButton.style.display = "none";
            editButton.style.display = "block";
        }
        
    }
