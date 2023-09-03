const { BankAccount } = require('./bankAccount');

describe('BankAccount function:', () => {
  let abraham;

  beforeEach(() => {
    abraham = new BankAccount('Abraham', 800);
  });

  describe('deposit method', () => {
    test('should increase the balance for a positive deposit', () => {
      abraham.deposit(200);
      expect(abraham.balance).toBe(1000);
    });

    test('should not change the balance for a zero deposit', () => {
      abraham.deposit(0);
      expect(abraham.balance).toBe(800);
    });

    test('should not change the balance for a negative deposit', () => {
      abraham.deposit(-100);
      expect(abraham.balance).toBe(800);
    });

    test('should handle non-numeric inputs', () => {
      abraham.deposit('abc');
      expect(abraham.balance).toBe(800);
    });
  });

  describe('withdraw method', () => {
    test('should decrease the balance for a valid withdrawal', () => {
      abraham.withdraw(200);
      expect(abraham.balance).toBe(600);
    });

    test('should not change the balance for a zero withdrawal', () => {
      abraham.withdraw(0);
      expect(abraham.balance).toBe(800);
    });

    test('should not change the balance for a negative withdrawal', () => {
      abraham.withdraw(-100);
      expect(abraham.balance).toBe(800);
    });

    test('should not change the balance and log an alert for insufficient funds', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      abraham.withdraw(900);
      expect(abraham.balance).toBe(800);
      expect(consoleSpy).toHaveBeenCalledWith("You don't have enough money in your balance.");
      consoleSpy.mockRestore();
    });

    test('should handle non-numeric inputs', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      abraham.withdraw('abc');
      expect(abraham.balance).toBe(800);
      expect(consoleSpy).toHaveBeenCalledWith("Please enter a valid positive number for withdrawal.");
      consoleSpy.mockRestore();
    });
  });

  describe('getBalance method', () => {
    test('should return the balance message', () => {
      const balanceMessage = abraham.getBalance();
      expect(balanceMessage).toBe('Abraham you have 800$ in your account');
    });
  });
});
