( () => {
    const btnAdd = document.querySelector('[data-form-btn]');
//listener esto lo necitamos cuando le demos click el boton escuche o sepa que se dio 
// el evento addEventListener es una forma de cvrear esa funcion

const createTasks = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[date-list]');
    const task = document.createElement('li');
    task.classList.add('card')
    input.value = "";
    //backticks
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    const content = ` 
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
}


btnAdd.addEventListener('click', createTasks);

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
}
//Immediantly invoked funtion expression IIFE  son funciones que en cuanto se declaran se ejecutan
const completeTask = () => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
}

//Arrow funtions o funciones flechas va,os a generar esa fucnion en una funcion flecha
// btnAdd.addEventListener("click", (evento) => {
//     evento.preventDefault();
//     const input = document.querySelector('[data-form-input]');  
    
//     console.log(input.value);
//     // console.log("crear tarea");
// });
})();