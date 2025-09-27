public class MostFrequentCharacter {
    public static void main(String[] args) {
        String str = "success";
        int[] freq = new int[256];
        for (char c : str.toCharArray()) freq[c]++;
        int max = -1; char res = ' ';
        for (char c : str.toCharArray()) {
            if (freq[c] > max) {
                max = freq[c];
                res = c;
            }
        }
        System.out.println("Most Frequent Character: " + res);
    }
}
