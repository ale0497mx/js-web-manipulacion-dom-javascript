const deleteIcon = () => {
    // <i class="fas fa-trash-alt trashIcon icon"></i>`;
    const i = document.createElement('i');
    i.classList.add('fas','fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTask);
    return i;
}
const deleteTask = (event) => {
    // console.log(event.target.parentElement);
    const parent = event.target.parentElement;
    alert(`Se elimino el elemento correctamente`, parent.remove());
}

export default deleteIcon;