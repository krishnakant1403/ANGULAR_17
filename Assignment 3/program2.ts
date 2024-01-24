class Circle {
    radius:number;
    pi = 3.14;

    constructor(no:number){
        this.radius = no;
    }

    Area(){
        return this.pi*this.radius*this.radius;
    }
   
}

var obje1 = new Circle(5);
var Area_result= obje1.Area();
console.log("Area of circle is:"+Area_result)