class Calculator {
    constructor(value1, value2) {
      this.value1 = value1;
      this.value2 = value2;
    }
  
    add() {
      return this.value1 + this.value2;
    }
  
    subtract() {
      return this.value1 - this.value2;
    }
  
    multiply() {
      return this.value1 * this.value2;
    }
  
    divide() {
      if (this.value2 === 0) {
        return "Cannot divide by zero";
      }
      return this.value1 / this.value2;
    }
  }
  
  const calculator = new Calculator(10, 5);
  console.log(calculator.add());
  console.log(calculator.subtract());
  console.log(calculator.multiply());
  console.log(calculator.divide());
  