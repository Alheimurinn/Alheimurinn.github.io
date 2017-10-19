var taskInput = document.getElementById("task-input");
var taskTitle = document.getElementsByTagName("label");

taskInput.onfocus = function(){
    if(taskInput.value == "Daily Task ~"){
        taskInput.value = "";
    }
};
taskInput.onblur = function(){
    if(taskInput.value == ""){
        taskInput.value = "Daily Task ~";
    }
};
