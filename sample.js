
//object
var person = {
    name:'hai',
    age:'20',
    display:function(){
        var name = 'abhi';
        console.log(this.name)
    }
}
person.display();

person.dob="13-04-21"; // insert new property to object


//constructor object

function Persons(name,age){
    this.name=name;
    this.age=age;
    this.display=function(){
        console.log(this.name,this.age);
    }

    
}
let abhi = new Persons("abhi",20);
let raju = new Persons("raju",10);

abhi.display();
raju.display();

let d = new Date("13/04/25") //Date is default constructor


//class in js

class Hello{
    constructor(num1,num2)
    {
        this.num1 = num1;
        this.num2 = num2;
    }
    book(){console.log(this.num1+this.num2);}
}
let raj = new Hello(1,2);
raj.book();

//in heritance


class hai{
    superclass(){
        console.log("aaaddd jthjkt")
    }
}

class Hell extends hai{
    constructor(num1,num2)
    {
        super();
        this.num1 = num1;
        this.num2 = num2;
    }
    books(){console.log(this.num1+this.num2);}
}
let r = new Hell(1,2);
r.books();
r.superclass();


//time difference

let t = new Date();
for ( i=0;i<500;i++){
    console.log("hai")
}
console.log(new Date()-t)


// call back

let call =function(data){
    console.log("data"+data);
}
let hey = function(callb){
    callb("dxf");
}
hey(call);



// using 'new' key word every function act like constructor in js(in es6 it is class)

//__dirname: got full path from hpme to directory

//__filename: get full path from home to file


