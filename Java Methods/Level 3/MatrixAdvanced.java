import java.util.Scanner;

public class MatrixAdvanced {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter number of rows for matrix: ");
        int rows = scanner.nextInt();

        System.out.print("Enter number of columns for matrix: ");
        int cols = scanner.nextInt();

        int[][] matrix = createRandomMatrix(rows, cols);

        System.out.println("\nOriginal Matrix:");
        displayMatrix(matrix);

        System.out.println("\nTranspose of Matrix:");
        int[][] transpose = findTranspose(matrix);
        displayMatrix(transpose);

        if (rows == cols) {
            if (rows == 2) {
                int determinant = findDeterminant2x2(matrix);
                System.out.println("\nDeterminant (2x2): " + determinant);

                if (determinant != 0) {
                    System.out.println("\nInverse (2x2):");
                    double[][] inverse = findInverse2x2(matrix);
                    displayDoubleMatrix(inverse);
                } else {
                    System.out.println("Matrix is not invertible (determinant = 0)");
                }
            } else if (rows == 3) {
                int determinant = findDeterminant3x3(matrix);
                System.out.println("\nDeterminant (3x3): " + determinant);

                if (determinant != 0) {
                    System.out.println("\nInverse (3x3):");
                    double[][] inverse = findInverse3x3(matrix);
                    displayDoubleMatrix(inverse);
                } else {
                    System.out.println("Matrix is not invertible (determinant = 0)");
                }
            } else {
                System.out.println("\nDeterminant calculation only implemented for 2x2 and 3x3 matrices");
            }
        } else {
            System.out.println("\nDeterminant can only be calculated for square matrices");
        }

        scanner.close();
    }

    public static int[][] createRandomMatrix(int rows, int cols) {
        int[][] matrix = new int[rows][cols];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                matrix[i][j] = (int) (Math.random() * 10);
            }
        }

        return matrix;
    }

    public static int[][] findTranspose(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] transpose = new int[cols][rows];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }

        return transpose;
    }

    public static int findDeterminant2x2(int[][] matrix) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    public static int findDeterminant3x3(int[][] matrix) {
        return matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1])
                - matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0])
                + matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);
    }

    public static double[][] findInverse2x2(int[][] matrix) {
        int det = findDeterminant2x2(matrix);
        double[][] inverse = new double[2][2];

        if (det != 0) {
            double detInv = 1.0 / det;
            inverse[0][0] = matrix[1][1] * detInv;
            inverse[0][1] = -matrix[0][1] * detInv;
            inverse[1][0] = -matrix[1][0] * detInv;
            inverse[1][1] = matrix[0][0] * detInv;
        }

        return inverse;
    }

    public static double[][] findInverse3x3(int[][] matrix) {
        int det = findDeterminant3x3(matrix);
        double[][] inverse = new double[3][3];

        if (det != 0) {
            double detInv = 1.0 / det;

            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    int[][] minor = new int[2][2];
                    int minorRow = 0, minorCol = 0;

                    for (int r = 0; r < 3; r++) {
                        if (r != i) {
                            minorCol = 0;
                            for (int c = 0; c < 3; c++) {
                                if (c != j) {
                                    minor[minorRow][minorCol] = matrix[r][c];
                                    minorCol++;
                                }
                            }
                            minorRow++;
                        }
                    }

                    int cofactor = findDeterminant2x2(minor);
                    if ((i + j) % 2 == 1) {
                        cofactor = -cofactor;
                    }

                    inverse[j][i] = cofactor * detInv;
                }
            }
        }

        return inverse;
    }

    public static void displayMatrix(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j] + "\t");
            }
            System.out.println();
        }
    }

    public static void displayDoubleMatrix(double[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.printf("%.2f\t", matrix[i][j]);
            }
            System.out.println();
        }
    }
}
