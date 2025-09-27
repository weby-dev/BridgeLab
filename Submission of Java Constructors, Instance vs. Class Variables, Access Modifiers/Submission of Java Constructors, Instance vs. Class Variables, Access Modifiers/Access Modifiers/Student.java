public class Student {
    public int rollNumber;
    protected String name;
    private double CGPA;

    Student(int rollNumber, String name, double CGPA) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.CGPA = CGPA;
    }

    public double getCGPA() {
        return CGPA;
    }

    public void setCGPA(double CGPA) {
        this.CGPA = CGPA;
    }

    public void display() {
        System.out.println("Roll: " + rollNumber + ", Name: " + name + ", CGPA: " + CGPA);
    }

    public static void main(String[] args) {
        PostgraduateStudent pg = new PostgraduateStudent(101, "Stuti", 9.2, "Computer Science");
        pg.display();
        pg.setCGPA(9.5);
        System.out.println("Updated CGPA: " + pg.getCGPA());
        pg.showDepartment();
    }
}

class PostgraduateStudent extends Student {
    String department;

    PostgraduateStudent(int roll, String name, double CGPA, String dept) {
        super(roll, name, CGPA);
        this.department = dept;
    }

    void showDepartment() {
        System.out.println("Student " + name + " belongs to " + department + " department");
    }
}
