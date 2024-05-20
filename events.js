const todoConatainer = document.querySelector('ul');
const input = document.querySelector('input');
const addButton = document.querySelector('#add');
const editButton = document.querySelector('#edit');

// editButton.style = "display: none"

let idOfElementToEdit = 'null';

const todos = [];

const showEdit = (id) => {
    const element = todos.find((todo) => todo.id === id);
    input.value = element.text
    addButton.style = "display: none"
    editButton.style = "display: inline"
    idOfElementToEdit = id;
}

const renderList = () => {
    todoConatainer.innerHTML = '' //clear boox and add new item
    todos.forEach((todo) => {
        const li = document.createElement('li')
        const deleteButton = document.createElement('button') //created delete button
        const editButton = document.createElement('buttoon') //created  edit button

        deleteButton.addEventListener('click', (e) => {
            li.remove()
            const id = todo.id //every element have it id or address location
            const index = todos.findIndex((todo) => todo.id === id)
            todos.splice(index, 1)
        }) //this will generate a delet button when add button hit

        editButton.addEventListener('click', (e) => {
            showEdit(todo.id) //for edit button function
        })

        editButton.style = "background: purple"

        deleteButton.innerHTML = 'delete'
        editButton.innerHTML = 'Edit'
        li.innerHTML = `${todo.text}`
        li.appendChild(deleteButton) //add delete1 button with every task(li)
        li.appendChild(editButton) //add edit option button
        todoConatainer.appendChild(li)
    })
}

const handleAdd = (e) => {
        const itemToAdd = input.value;
        if (itemToAdd !== null && itemToAdd !== "") {//check the placeholder empty or not
            todos.push({ //this will inser the user text
                text: itemToAdd,
                completed: false,
                id: Date.now(),
            });
            input.value = "" //seprate one task from another and empty the placeholder for next task
            renderList();
            return
        }
        else {
            return window.alert('adding an empty item is not possible') //placeholder is empty it send message to insert something
        }
};

const handleEdit = (e) => {
    const newvalue = input.value
    const element = todos.find((todo) => todo.id === idOfElementToEdit)
    element.text = newvalue
    console.log(todos);
    renderList() //update after edit
    addButton.style = "display: inline";
    editButton.style = "display: none";
    input.value = "";
}

addButton.addEventListener('click', handleAdd)
editButton.addEventListener('click', handleEdit)