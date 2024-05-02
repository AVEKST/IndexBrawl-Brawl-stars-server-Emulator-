public class BrawlStarsBattleResult {
    public static void main(String[] args) {
        int trophiesWonPerWin = 20; // Кількість кубків за перемогу
        int trophiesLostPerLoss = -10; // Кількість кубків за поразку

        int battlesWon = 3; // Кількість виграних битв
        int battlesLost = 2; // Кількість програних битв

        int totalTrophiesWon = battlesWon * trophiesWonPerWin;
        int totalTrophiesLost = battlesLost * trophiesLostPerLoss;

        System.out.println("Гравець отримає " + totalTrophiesWon + " кубків за перемогу.");
        System.out.println("Гравець втратить " + totalTrophiesLost + " кубків за поразку.");
    }
}