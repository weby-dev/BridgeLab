import java.time.*;
import java.time.format.*;

public class DateFormatting {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        DateTimeFormatter f1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        DateTimeFormatter f2 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter f3 = DateTimeFormatter.ofPattern("EEE, MMM dd, yyyy");

        System.out.println(today.format(f1));
        System.out.println(today.format(f2));
        System.out.println(today.format(f3));
    }
}

