const headingObject = document.getElementById('heading')
const listObject = document.getElementById('list')

const listElement = document.getElementsByClassName('list-ele')
console.log(listElement);

listElement.forEach(element => { //dont use forEach for getElementsByClassName
    console.log(element);    
});