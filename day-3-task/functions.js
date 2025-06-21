//function declaration

function greet(name) {
    console.log(`Hi , ${name}`)
}

greet('ram')

// output 
// Hi , ram

//anonymous function 

const sub = function(a,b){
    return a-b;
}
console.log(sub(3,2))

// output 
// 1

// function with default declaration

const location = function(city = 'chennai'){
       console.log(`The location is :${city}`);
}

location()

// output 
// The location is :chennai