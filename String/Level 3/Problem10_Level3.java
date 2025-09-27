import java.util.*;

class Problem10_Level3 {
    static String[] suits = { "Hearts", "Diamonds", "Clubs", "Spades" };
    static String[] ranks = { "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace" };

    public static String[] initDeck() {
        String[] deck = new String[suits.length * ranks.length];
        int index = 0;
        for (String s : suits)
            for (String r : ranks)
                deck[index++] = r + " of " + s;
        return deck;
    }

    public static void shuffleDeck(String[] deck) {
        for (int i = 0; i < deck.length; i++) {
            int r = i + (int) (Math.random() * (deck.length - i));
            String temp = deck[i];
            deck[i] = deck[r];
            deck[r] = temp;
        }
    }

    public static void distribute(String[] deck, int n, int players) {
        if (n % players != 0) {
            System.out.println("Cards cannot be distributed equally.");
            return;
        }
        int perPlayer = n / players;
        for (int i = 0; i < players; i++) {
            System.out.print("Player " + (i + 1) + ": ");
            for (int j = 0; j < perPlayer; j++) {
                System.out.print(deck[i * perPlayer + j] + " | ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of cards to distribute: ");
        int n = sc.nextInt();
        System.out.print("Enter number of players: ");
        int p = sc.nextInt();

        String[] deck = initDeck();
        shuffleDeck(deck);
        distribute(deck, n, p);
    }
}
