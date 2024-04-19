// setInterval(()=>{
//     console.log("Interval");//executing code every sec
// },1000)

let i = 0;

const id = setInterval(() =>{
    console.log('intervel');
    if(++i === 10){
        clearInterval(id)
    }
},1000)