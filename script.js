

    // console.log('one');

    // console.log('two');

    // setTimeout(()=>{
    //     console.log('three'); //delay operation
    // },4000)


console.log("one");

for(let i = 0; i<10000; i++){
    if(i === 9999){
        console.log("three"); // blocking operation
    }
    else
    console.log('');
}

console.log('two');