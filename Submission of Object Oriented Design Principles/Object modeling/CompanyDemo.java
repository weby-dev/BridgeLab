import java.util.*;

class Employee {
    String name;
    Employee(String name) {
        this.name = name;
    }
}

class Department {
    String name;
    List<Employee> employees = new ArrayList<>();
    Department(String name) {
        this.name = name;
    }
    void addEmployee(Employee e) {
        employees.add(e);
    }
    void showEmployees() {
        for(Employee e : employees) {
            System.out.println(name + " Dept: " + e.name);
        }
    }
}

class Company {
    String name;
    List<Department> depts = new ArrayList<>();
    Company(String name) {
        this.name = name;
    }
    void addDept(Department d) {
        depts.add(d);
    }
    void showCompany() {
        for(Department d : depts) {
            d.showEmployees();
        }
    }
}

public class CompanyDemo {
    public static void main(String[] args) {
        Company c = new Company("TCS");
        Department d1 = new Department("IT");
        Department d2 = new Department("HR");
        d1.addEmployee(new Employee("Raj"));
        d2.addEmployee(new Employee("Simran"));
        c.addDept(d1);
        c.addDept(d2);
        c.showCompany();
    }
}
