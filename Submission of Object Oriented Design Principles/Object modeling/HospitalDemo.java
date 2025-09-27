import java.util.*;

class Patient {
    String name;
    Patient(String name) {
        this.name = name;
    }
}

class Doctor {
    String name;
    Doctor(String name) {
        this.name = name;
    }
    void consult(Patient p) {
        System.out.println(name + " consulting " + p.name);
    }
}

class Hospital {
    String name;
    List<Doctor> doctors = new ArrayList<>();
    List<Patient> patients = new ArrayList<>();
    Hospital(String name) {
        this.name = name;
    }
    void addDoctor(Doctor d) {
        doctors.add(d);
    }
    void addPatient(Patient p) {
        patients.add(p);
    }
}

public class HospitalDemo {
    public static void main(String[] args) {
        Hospital h = new Hospital("Apollo");
        Doctor d = new Doctor("Dr. Mehta");
        Patient p = new Patient("Rahul");
        h.addDoctor(d);
        h.addPatient(p);
        d.consult(p);
    }
}
