const todoConatainer = document.querySelector('ul')
const input = document.querySelector('input')
const button = document.querySelector('button')

const todos = []

const renderList = ()=>{
    todoConatainer.innerHTML = '' //clear boox and add new item
    todos.forEach((todo)=>{
        const li = document.createElement('li')
        const button = document.createElement('button')
        button.addEventListener('click', (e)=>{
            li.remove()
            const id = todo.id //every element have it id or address location
            const index = todos.findIndex((todo) => todo.id === id)
            todos.splice(index,1)
        }) //this will generate a delet button when add button hit

        button.innerHTML = 'delete'
        li.innerHTML = `${todo.text}`
        li.appendChild(button) //add delet button with every task(li)
        todoConatainer.appendChild(li)
    })

    console.log(todos);
}


const handleAdd = (e)=>{
    // console.log('adding item')
    // console.log(input.innerHTML);
    // console.log(input.innerText);

    const itemToAdd = input.value
    if(itemToAdd !== null && itemToAdd !== ''){//check the placeholder empty or not
        todos.push({ //this will inser the user text
            text: itemToAdd,
            completed: false,
            id: Date.now()
        })
        renderList();
        return
    }
    else{
        return window.alert('adding an empty item is not possible') //placeholder is empty it send message to insert something
    }
    
}

button.addEventListener('click', handleAdd)