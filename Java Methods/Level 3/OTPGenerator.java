import java.util.Scanner;

public class OTPGenerator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] otpArray = new int[10];

        System.out.println("Generating 10 unique 6-digit OTP numbers...");
        System.out.println("-------------------------------------------");

        for (int i = 0; i < 10; i++) {
            otpArray[i] = generateOTP();
            System.out.println("OTP " + (i + 1) + ": " + otpArray[i]);
        }

        boolean areUnique = checkUniqueness(otpArray);

        System.out.println("\nValidation Result:");
        System.out.println("------------------");
        if (areUnique) {
            System.out.println("All OTP numbers are unique!");
        } else {
            System.out.println("Duplicate OTP numbers found!");
        }

        scanner.close();
    }

    public static int generateOTP() {
        return (int) (Math.random() * 900000) + 100000;
    }

    public static boolean checkUniqueness(int[] otpArray) {
        for (int i = 0; i < otpArray.length; i++) {
            for (int j = i + 1; j < otpArray.length; j++) {
                if (otpArray[i] == otpArray[j]) {
                    return false;
                }
            }
        }
        return true;
    }
}
