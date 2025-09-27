public class BankAccount {
    public String accountNumber;
    protected String accountHolder;
    private double balance;

    BankAccount(String accountNumber, String accountHolder, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public void display() {
        System.out.println("Account: " + accountNumber + ", Holder: " + accountHolder + ", Balance: $" + balance);
    }

    public static void main(String[] args) {
        SavingsAccount sa = new SavingsAccount("ACC123", "Stuti", 1000);
        sa.display();
        sa.deposit(500);
        System.out.println("Updated balance: $" + sa.getBalance());
        sa.showAccountHolder();
    }
}

class SavingsAccount extends BankAccount {

    SavingsAccount(String accNumber, String holder, double balance) {
        super(accNumber, holder, balance);
    }

    void deposit(double amount) {
        setBalance(getBalance() + amount);
    }

    void showAccountHolder() {
        System.out.println("Account Holder: " + accountHolder + ", Account Number: " + accountNumber);
    }
}

