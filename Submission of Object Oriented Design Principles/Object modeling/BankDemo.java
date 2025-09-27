class Bank {
    String name;
    Bank(String name) {
        this.name = name;
    }
    void openAccount(Customer c) {
        System.out.println(c.name + " opened account in " + name);
    }
}

class Customer {
    String name;
    double balance;
    Customer(String name, double balance) {
        this.name = name;
        this.balance = balance;
    }
    void viewBalance() {
        System.out.println(name + " balance: " + balance);
    }
}

public class BankDemo {
    public static void main(String[] args) {
        Bank b = new Bank("SBI");
        Customer c = new Customer("Amit", 5000);
        b.openAccount(c);
        c.viewBalance();
    }
}

