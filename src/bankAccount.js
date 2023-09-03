function BankAccount(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }
  
  BankAccount.prototype.deposit = function (amount) {
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid positive number for deposit.");
      return;
    }
  
    this.balance += amount;
  };
  
  BankAccount.prototype.withdraw = function (amount) {
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid positive number for withdrawal.");
      return;
    }
  
    if (amount > this.balance) {
      console.log("You don't have enough money in your balance.");
      return;
    }
  
    this.balance -= amount;
  };
  
  BankAccount.prototype.getBalance = function () {
    return `${this.ownerName} you have ${this.balance}$ in your account`;
  };
  
  module.exports = { BankAccount };