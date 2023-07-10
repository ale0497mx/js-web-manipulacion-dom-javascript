const btnAdd = document.querySelector('[data-form-btn]');
console.log(btnAdd);
//listener esto lo necitamos cuando le demos click el boton escuche o sepa que se dio 
// el evento addEventListener es una forma de cvrear esa funcion

btnAdd.addEventListener("click", function() {
    console.log("crear tarea");
});