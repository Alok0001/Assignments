class BankAccount {
    constructor(accountNumber, accountHolder, initialBalance) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Invalid deposit amount. Please enter a positive amount.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Invalid withdrawal amount or insufficient balance.");
      }
    }
  
    checkBalance() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Account Holder: ${this.accountHolder}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, initialBalance, interestRate) {
      super(accountNumber, accountHolder, initialBalance);
      this.interestRate = interestRate;
    }
  
    calculateInterest() {
      const interestAmount = (this.balance * this.interestRate) / 100;
      console.log(`Interest earned: $${interestAmount}`);
      this.balance += interestAmount;
    }
  }
  
 
  const mySavingsAccount = new SavingsAccount("54321", "Alok Bedwal", 5000, 3);
  
  mySavingsAccount.deposit(1000);
  mySavingsAccount.calculateInterest();
  mySavingsAccount.checkBalance();
  