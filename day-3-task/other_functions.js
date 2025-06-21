// using map function

let games = ['football', 'cricket', 'rugby'] 

let uppercase = games.map(games => games.toUpperCase());
console.log('To uppercase',uppercase);

// output 
// To uppercase [ 'FOOTBALL', 'CRICKET', 'RUGBY' ]

let filtering = games.filter(games => games !== 'cricket');
console.log('after filtering', filtering);

// output 
// after filtering [ 'football', 'rugby' ]

//Using the join function

let joined  = games.join(" ,")
 console.log( joined)


//  output 
//  football ,cricket ,rugby

//using reduce method
let num =  [1,2,3,4]
 let sum = num.reduce((acc , curr) => acc + curr,0) 
 console.log(sum)

//  output 
//  10


// Using slice method

let sliced = num.slice(1,4)
console.log(sliced)

//output
// [ 2, 3, 4 ]


// Using splice methhod

let spliced = num.splice(0,3)
console.log(spliced)

// output 
// [ 1, 2, 3 ]