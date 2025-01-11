public class Main {
    public static void main(String[] args) {
        int n = 3;

        for (int i = 1; i <= n; i++) {
            // Print leading spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print("  ");
            }

            // Print stars and numbers
            for (int j = 1; j <= i; j++) {
                if (j == i) {
                    System.out.print(i + " ");
                } else {
                    System.out.print("* ");
                }
            }

            // Print trailing stars
            for (int j = 1; j < i; j++) {
                System.out.print("* ");
            }

            // Move to the next line
            System.out.println();
    }
}
}