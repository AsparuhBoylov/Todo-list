const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchInput = document.querySelector('.search input');

// adding todo

const addNewTodo = newTodo => {

    let li = document.createElement('li');
    li.classList.add('list-group-item','d-flex', 'justify-content-between','align-items-center' );
    li.innerHTML = `<span>${newTodo}</span>
    <i class="far fa-trash-alt delete"></i>`
    list.append(li);

};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const newTodo = addForm.add.value;

    addNewTodo(newTodo);
});

// deleting todo

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// searching todo

searchInput.addEventListener('keyup', e => {
    // e.target.value
    // Array.from(list.children)
    //  .filter(todo => {
    //      return todo.textContent.includes(e.target.value);
    //  });

    for(let i = 0; i < list.children.length; i++){
        if(!list.children[i].textContent.includes(e.target.value)){
            list.children[i].classList.add('filtered');
        }
    }

    for(let i = 0; i < list.children.length; i++){
        if(list.children[i].textContent.includes(e.target.value)){
            list.children[i].classList.remove('filtered');
        }
    }
});


