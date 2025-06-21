let student ={
    name: 'ram',
    age : 20,
    greet : function (){
        console.log('name : ' + this.name);
        
    }
}


console.log(student.name);
student.greet();

//output
//ram
//name : ram



