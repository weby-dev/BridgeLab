import java.util.Random;

class Problem10_Level2 {
    public static int[][] generateScores(int n) {
        Random rand = new Random();
        int[][] scores = new int[n][3];
        for (int i = 0; i < n; i++) {
            scores[i][0] = rand.nextInt(100);
            scores[i][1] = rand.nextInt(100);
            scores[i][2] = rand.nextInt(100);
        }
        return scores;
    }

    public static String grade(double percent) {
        if (percent >= 90)
            return "A";
        else if (percent >= 75)
            return "B";
        else if (percent >= 60)
            return "C";
        else if (percent >= 40)
            return "D";
        return "F";
    }

    public static void main(String[] args) {
        int[][] scores = generateScores(5);

        System.out.println("Phy\tChem\tMath\tTotal\t% \tGrade");
        for (int[] s : scores) {
            int total = s[0] + s[1] + s[2];
            double percent = Math.round((total / 3.0) * 100.0) / 100.0;
            System.out
                    .println(s[0] + "\t" + s[1] + "\t" + s[2] + "\t" + total + "\t" + percent + "\t" + grade(percent));
        }
    }
}
