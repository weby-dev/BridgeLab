import java.util.Scanner;

class Problem9_Level2 {
    public static String computerChoice() {
        int r = (int) (Math.random() * 3);
        return (r == 0 ? "rock" : (r == 1 ? "paper" : "scissors"));
    }

    public static String findWinner(String user, String comp) {
        if (user.equals(comp))
            return "Draw";
        if (user.equals("rock") && comp.equals("scissors") ||
                user.equals("paper") && comp.equals("rock") ||
                user.equals("scissors") && comp.equals("paper"))
            return "User";
        return "Computer";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int userWins = 0, compWins = 0;
        System.out.print("Enter number of games: ");
        int games = sc.nextInt();

        for (int i = 0; i < games; i++) {
            System.out.print("Enter choice (rock/paper/scissors): ");
            String user = sc.next().toLowerCase();
            String comp = computerChoice();
            String winner = findWinner(user, comp);

            System.out.println("Computer: " + comp + " | Winner: " + winner);
            if (winner.equals("User"))
                userWins++;
            else if (winner.equals("Computer"))
                compWins++;
        }

        System.out.println("\nUser Wins: " + userWins);
        System.out.println("Computer Wins: " + compWins);
        System.out.println("User Win %: " + (userWins * 100.0 / games));
        System.out.println("Computer Win %: " + (compWins * 100.0 / games));
    }
}
