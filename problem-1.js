class Calculation{
    constructor(a,b,str){
        this.a= parseFloat(a);
        this.b = parseFloat(b);
        this.str = str;
    }
    calculate(){
        if(this.str == 'addition'){
          return this.a +this.b;
        }
        else if(this.str == 'subtraction'){
          return this.a - this.b;
        }
        else if(this.str == 'multiply'){
          return this.a*this.b;
        }
        else if(this.str == 'division'){
          return this.a/this.b;
        }
    }
}

const add = new Calculation(1,2,'addition')
const subtract = new Calculation(7,2,'subtraction')
const multiply = new Calculation(3,4,'multiply')
const division = new Calculation(8,2,'division')
console.log(add.calculate());
console.log(subtract.calculate());
console.log(multiply.calculate());
console.log(division.calculate());