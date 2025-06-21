let fruits = ["apple","banana","mango","plum"]

console.log("original" , fruits);

// output 
// original [ 'apple', 'banana', 'mango', 'plum' ]

fruits.push("cranberry")
console.log("push",fruits);

// output 
// push [ 'apple', 'banana', 'mango', 'plum', 'cranberry' ]

fruits.pop()
console.log("pop" , fruits);

// output 
// pop [ 'apple', 'banana', 'mango', 'plum' ]

fruits.unshift("pineapple")
console.log("unshift", fruits)

// output 
// unshift [ 'pineapple', 'apple', 'banana', 'mango', 'plum' ]

fruits.shift()
console.log("after shifting",fruits)

// output 
// after shifting [ 'apple', 'banana', 'mango', 'plum' ]

console.log('after includes' ,fruits.includes("banana"))


// after includes true

console.log('after index of',fruits.indexOf("banana"))

// after index of 1

console.log('after last index of ',fruits.lastIndexOf("banana"))

// after last index of  1

console.log('after sorted', [...fruits].sort());
console.log('after reversing', [...fruits].reverse());
