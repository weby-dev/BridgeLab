public class RemoveCharacter {
    public static void main(String[] args) {
        String str = "Hello World";
        char rem = 'l';
        String result = "";
        for (char c : str.toCharArray()) if (c != rem) result += c;
        System.out.println("Modified String: " + result);
    }
}
