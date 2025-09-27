import java.util.*;

class Course {
    String name;
    List<Student> students = new ArrayList<>();
    Course(String name) {
        this.name = name;
    }
    void addStudent(Student s) {
        students.add(s);
    }
    void showStudents() {
        for(Student s : students) {
            System.out.println(name + " -> " + s.name);
        }
    }
}

class Student {
    String name;
    List<Course> courses = new ArrayList<>();
    Student(String name) {
        this.name = name;
    }
    void enroll(Course c) {
        courses.add(c);
        c.addStudent(this);
    }
    void showCourses() {
        for(Course c : courses) {
            System.out.println(name + " enrolled in " + c.name);
        }
    }
}

class School {
    String name;
    List<Student> students = new ArrayList<>();
    School(String name) {
        this.name = name;
    }
    void addStudent(Student s) {
        students.add(s);
    }
}

public class SchoolDemo {
    public static void main(String[] args) {
        School s = new School("GLA");
        Student st = new Student("Ankit");
        Course c1 = new Course("Math");
        Course c2 = new Course("Science");
        st.enroll(c1);
        st.enroll(c2);
        s.addStudent(st);
        st.showCourses();
        c1.showStudents();
    }
}

