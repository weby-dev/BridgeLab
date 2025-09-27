public class Person {
    String name;
    int age;

    // Parameterized constructor
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Copy constructor
    Person(Person p) {
        this.name = p.name;
        this.age = p.age;
    }

    void display() {
        System.out.println(name + " is " + age + " years old.");
    }

    public static void main(String[] args) {
        Person p1 = new Person("Stuti", 20);
        Person p2 = new Person(p1); // Copy constructor

        p1.display(); 
        p2.display(); 
    }
}

