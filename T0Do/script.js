//as soon as the page loads we want the render task to local storage than store than make it display
//crud operations and using local storage 
document.addEventListener("DOMContentLoaded", () => {
  //first step to grab to elements
  const todoInput = document.getElementById("todo-input"); //the todo input
  const addTaskButton = document.getElementById("add-task-btn"); //the button to add to list
  const todoList = document.getElementById("todo-list"); //the todo list ul

  //to store task
  //.parse convert to original ds
  let tasks = JSON.parse(localStorage.getItem('tasks'))||[];
  tasks.forEach(task=>renderTask(task))

  //when input is submitted
  addTaskButton.addEventListener("click", () => {
    //grab the input value
    const taskText = todoInput.value.trim();
    //trim() removes the extra spaces

    //if nothing return do nothing
    if (taskText === "") return;

    //object 
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask)
    todoInput.value = ""; //clear input
    console.log(tasks);
  });

  //render task display on dom
  function renderTask(task) {
    //createelement to create element
    const li=document.createElement('li')
    li.setAttribute('data-id',task.id)
    if(task.completed) li.classList.add('completed')
    li.innerHTML=`<span>${task.text}</span>
    <button>delete</button>`
    li.addEventListener('click',(e)=>{
        if(e.target.tagName==='BUTTON') return;
        task.completed=!task.completed
        li.classList.toggle('completed')
        saveTasks()
    })
    li.querySelector('button').addEventListener('click',(e)=>{
        e.stopPropagation() //event bubbling or event propagation or prevent toggle from firing
        tasks=tasks.filter(t=>t.id !==task.id)
        li.remove()
        saveTasks()
    })
    //append li to ul as child
    todoList.appendChild(li)
  }

  //pushing array to local storage
  function saveTasks() {
    //value=string key can be anything in setItem
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
