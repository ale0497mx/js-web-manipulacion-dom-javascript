const btnAdd = document.querySelector('[data-form-btn]');
console.log(btnAdd);
//listener esto lo necitamos cuando le demos click el boton escuche o sepa que se dio 
// el evento addEventListener es una forma de cvrear esa funcion

const createTasks = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const task = document.querySelector('[data-task]');
    input.value = "";
    const content = ` 
    <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;
    console.log(content);
}

console.log(btnAdd);

btnAdd.addEventListener('click', createTasks);


//Arrow funtions o funciones flechas va,os a generar esa fucnion en una funcion flecha
// btnAdd.addEventListener("click", (evento) => {
//     evento.preventDefault();
//     const input = document.querySelector('[data-form-input]');  
    
//     console.log(input.value);
//     // console.log("crear tarea");
// });