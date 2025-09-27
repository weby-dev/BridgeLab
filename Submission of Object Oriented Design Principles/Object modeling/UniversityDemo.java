import java.util.*;

class Faculty {
    String name;
    Faculty(String name) {
        this.name = name;
    }
}

class DepartmentU {
    String name;
    DepartmentU(String name) {
        this.name = name;
    }
}

class University {
    String name;
    List<DepartmentU> depts = new ArrayList<>();
    List<Faculty> faculties = new ArrayList<>();
    University(String name) {
        this.name = name;
    }
    void addDept(DepartmentU d) {
        depts.add(d);
    }
    void addFaculty(Faculty f) {
        faculties.add(f);
    }
}

public class UniversityDemo {
    public static void main(String[] args) {
        University u = new University("GLA");
        u.addDept(new DepartmentU("CSE"));
        u.addDept(new DepartmentU("ECE"));
        Faculty f1 = new Faculty("Dr. A");
        u.addFaculty(f1);
        System.out.println(u.name + " has departments and faculties.");
    }
}

