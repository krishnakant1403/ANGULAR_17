class Arithmatc {
     Number1:number ;    
     Number2 :number;

    constructor(A:number,B:number){
        this.Number1 = A;
        this.Number2 = B;
    }

    Addition(){
        return this.Number1+this.Number2
    }
    Subtraction(){
        return this.Number1-this.Number2
    }
    Multiplication(){
        return this.Number1*this.Number2
    }
    Division(){
        return this.Number1/this.Number2
    }
    
}

var resut = 0;
// First object
var obj1 = new Arithmatc(10,20);
    resut=obj1.Addition();
    console.log("Addition by object1 is:"+resut);

obj1.Subtraction();
    resut=obj1.Subtraction();
    console.log("Subtraction by object1 is:"+resut);

obj1.Multiplication();
    resut=obj1.Multiplication();
    console.log("Multplication by object1 is:"+resut);
obj1.Division();
    resut=obj1.Division();
    console.log("Division by object1 is:"+resut);

console.log("========================================================");


// Second object
var obj2 = new Arithmatc(2,5);
    resut=obj2.Addition();
    console.log("Addition by object2 is:"+resut);

obj1.Subtraction();
    resut=obj2.Subtraction();
    console.log("Subtraction by object2 is:"+resut);

obj1.Multiplication();
    resut=obj2.Multiplication();
    console.log("Multplication by object2 is:"+resut);
obj1.Division();
    resut=obj2.Division();
    console.log("Division by object2 is:"+resut);