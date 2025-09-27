class Professor {
    String name;
    Professor(String name) {
        this.name = name;
    }
    void assignCourse(CourseU c) {
        System.out.println(name + " assigned to " + c.name);
    }
}

class StudentU {
    String name;
    StudentU(String name) {
        this.name = name;
    }
    void enrollCourse(CourseU c) {
        System.out.println(name + " enrolled in " + c.name);
    }
}

class CourseU {
    String name;
    CourseU(String name) {
        this.name = name;
    }
}

public class UniversityManagement {
    public static void main(String[] args) {
        StudentU s = new StudentU("Aman");
        Professor p = new Professor("Dr. Singh");
        CourseU c = new CourseU("AI");
        s.enrollCourse(c);
        p.assignCourse(c);
    }
}
