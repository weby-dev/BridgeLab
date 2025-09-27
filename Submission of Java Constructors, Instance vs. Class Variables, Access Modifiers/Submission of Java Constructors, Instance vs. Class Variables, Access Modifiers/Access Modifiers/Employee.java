public class Employee {
    public int employeeID;
    protected String department;
    private double salary;

    Employee(int employeeID, String department, double salary) {
        this.employeeID = employeeID;
        this.department = department;
        this.salary = salary;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public void display() {
        System.out.println("Employee ID: " + employeeID + ", Department: " + department + ", Salary: $" + salary);
    }

    public static void main(String[] args) {
        Manager mgr = new Manager(201, "HR", 8000);
        mgr.display();
        mgr.increaseSalary(1000);
        System.out.println("Updated Salary: $" + mgr.getSalary());
        mgr.showInfo();
    }
}

class Manager extends Employee {

    Manager(int employeeID, String department, double salary) {
        super(employeeID, department, salary);
    }

    void increaseSalary(double amount) {
        setSalary(getSalary() + amount);
    }

    void showInfo() {
        System.out.println("Manager ID: " + employeeID + ", Department: " + department);
    }
}

