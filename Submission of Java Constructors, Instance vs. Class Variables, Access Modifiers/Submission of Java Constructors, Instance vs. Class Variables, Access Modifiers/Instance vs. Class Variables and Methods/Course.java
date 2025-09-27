public class Course {
    String courseName;
    int duration;
    double fee;
    static String instituteName = "Tech Academy";

    Course(String courseName, int duration, double fee) {
        this.courseName = courseName;
        this.duration = duration;
        this.fee = fee;
    }

    void displayCourseDetails() {
        System.out.println(courseName + " | Duration: " + duration + " weeks | Fee: $" + fee
                           + " | Institute: " + instituteName);
    }

    static void updateInstituteName(String newName) {
        instituteName = newName;
        System.out.println("Institute name updated to: " + instituteName);
    }

    public static void main(String[] args) {
        Course c1 = new Course("Java Programming", 8, 300);
        Course c2 = new Course("Python Programming", 10, 350);

        c1.displayCourseDetails();
        c2.displayCourseDetails();

        Course.updateInstituteName("Global Tech Academy");

        c1.displayCourseDetails();
        c2.displayCourseDetails();
    }
}
