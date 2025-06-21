//spread operator using array

arr1 = [1,2,3,4]
arr2 = [...arr1]

arr2.push(5)

console.log(arr1);
console.log(arr2);

// [ 1, 2, 3, 4 ]
// [ 1, 2, 3, 4, 5 ]

//without spread
arr3 = arr1;

arr3.push(5);
console.log(arr3);

// output
// [ 1, 2, 3, 4, 5 ]

// spread-operator with objects
const obj1 = {name : 'ram', age: 30}
const obj2 = {...obj1}

obj2.name = 'Hari'

console.log('obj1:',obj1)
console.log('obj2 : ',obj2)

// output
// obj1: { name: 'ram', age: 30 }
// obj2 :  { name: 'Hari', age: 30 }

//without spread

obj3 = obj1
obj3.age = 99

console.log("obj1 :,obj2 :,obj3:",obj1,obj2 ,obj3)

// output 
// obj1 :,obj2 :,obj3: { name: 'ram', age: 99 } { name: 'Hari', age: 30 } { name: 'ram', age: 99 }

// merged

const extra = {location : 'India'}
const merge = {...obj1,...extra}

console.log('merged :' , merge)

// output 
// merged : { name: 'ram', age: 99, location: 'India' }

// structured clone - for deep cloning
const details ={
    name: 'mathew',
    age : 10,
    address:{
        city : 'chennai',
        state:'TamilNadu'
    }
}

const clone = structuredClone(details);

clone.address.city = 'banglore'

console.log('details',details);
console.log('clone',clone);

// output 
// details {
//   name: 'mathew',
//   age: 10,
//   address: { city: 'chennai', state: 'TamilNadu' }
// }
// clone {
//   name: 'mathew',
//   age: 10,
//   address: { city: 'banglore', state: 'TamilNadu' }
// }
console.log(details.address.city); 
console.log(clone.address.city);

// output 
// chennai
// banglore