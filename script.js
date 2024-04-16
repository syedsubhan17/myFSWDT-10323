const headingObject = document.getElementById('heading')
        const listObject = document.getElementById('list')
        
        const arr = ['element1', 'element2', 'element3', 'element4', 'element5',]
        
        arr.forEach((element) => {
            const li = document.createElement('li')
            li.innerHTML = element
            listObject.appendChild(li)
            console.log(li);
        })