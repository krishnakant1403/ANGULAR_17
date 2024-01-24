class Circle1 {
    radius:number;
    pi = 3.14;

    constructor(no:number){
        this.radius = no;
    }
}
class CircleX extends Circle1{

    circumference(){
        return 2*this.pi*this.radius
    }
}

var object1 = new CircleX(6);
var circumference_result=object1.circumference();
console.log("circumference of circle is: " +circumference_result)



