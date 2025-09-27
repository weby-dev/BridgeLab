public class VolumeEarth {
    public static void main(String[] args) {
        double radius = 6378;
        double pi = 3.14159;
        double volumeKm = (4.0 / 3.0) * pi * radius * radius * radius;
        double mileRate = 1.6;
        double radiusMiles = radius / mileRate;
        double volumeMiles = (4.0 / 3.0) * pi * radiusMiles * radiusMiles * radiusMiles;
        System.out.println(
                "The volume of earth in cubic kilometers is " + volumeKm + " and cubic miles is " + volumeMiles);
    }
}