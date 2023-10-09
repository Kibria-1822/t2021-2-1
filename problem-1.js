class Calculation{
    constructor(a,b,str){
        this.a= parseFloat(a);
        this.b = parseFloat(b);
        this.str = str;
    }
    calculate(){
        if(this.str == 'add'){
          return this.a+this.b;
        }
        else if(this.str == 'sub'){
          return this.a-this.b;
        }
        else if(this.str == 'mul'){
          return this.a*this.b;
        }
        else if(this.str == 'div'){
          return this.a/this.b;
        }
    }
}

const add = new Calculation(1,2,'add')
const subtract = new Calculation(5,1,'sub')
const multiply = new Calculation(3,4,'mul')
const division = new Calculation(8,2,'sub')
console.log(add.calculate());
console.log(subtract.calculate());
console.log(multiply.calculate());
console.log(division.calculate());