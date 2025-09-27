import java.util.*;

public class NumberGuessingGame {
    static int generateGuess(int low, int high) {
        return new Random().nextInt(high - low + 1) + low;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int low = 1, high = 100, guess;
        String feedback;
        while (true) {
            guess = generateGuess(low, high);
            System.out.println("Is your number " + guess + "? (high/low/correct)");
            feedback = sc.nextLine();
            if (feedback.equals("high")) high = guess - 1;
            else if (feedback.equals("low")) low = guess + 1;
            else if (feedback.equals("correct")) {
                System.out.println("Guessed correctly!");
                break;
            }
        }
        sc.close();
    }
}
