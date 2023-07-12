import checkComplete from "../comoponests/checkComplete.js";
import deleteIcon from "../comoponests/deleteIcon.js";

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
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
}


btnAdd.addEventListener('click', createTasks);

//Arrow funtions o funciones flechas va,os a generar esa fucnion en una funcion flecha
// btnAdd.addEventListener("click", (evento) => {
//     evento.preventDefault();
//     const input = document.querySelector('[data-form-input]');  
    
//     console.log(input.value);
//     // console.log("crear tarea");
// });