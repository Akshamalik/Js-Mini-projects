document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input"); //the todo input
  const addTaskButton = document.getElementById("add-task-btn"); //the button to add to list
  const todoList = document.getElementById("todo-list"); //the todo list ul

  //to store task
  let tasks = JSON.parse(localStorage.getItem('tasks'))||[];
  tasks.forEach(task=>renderTask(task))
  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    //trim() removes the extra spaces
    if (taskText === "") return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    todoInput.value = ""; //clear input
    console.log(tasks);
  });

  function renderTask(task) {
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
        tasks=tasks.filter(t=>t.id !=task.id)
        li.remove()
        saveTasks()
    })
    todoList.appendChild(li)
  }

  //pushing array to local storage
  function saveTasks() {
    //value=string key can be anything in setItem
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
