const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//function for creating a html template. when user adds a new todo, a new li tag is added in the html.
const generateTemplate = todo => {
    
    const html = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
                </li>
                `;

    list.innerHTML += html;
    console.log(list);
};
    
//function for adding a new todo.
addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();  //trim method trims out all the white space when user is writing a new todo.
    

    //making sure user has entered characthers when adding a new todo
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
    
});


//delete todos 
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))
    
    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))
};

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term); // Call filterTodos function with the search term
});