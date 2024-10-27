import java.util.ArrayList;
import java.util.Collections;
import java.util.List;;

public class Solutions {
    public static boolean isPalindrome(int num) {
        String str = Integer.toString(num);
        int left = 0, right = str.length() - 1;
        while (left<right) {
            if(str.charAt(right) != str.charAt(left)) {
                return false;
            }
            right --;
            left ++;
        }
        return true;
    }

    public static List<Integer> getPlindromicTractions(int[] transactions){
        List<Integer> palindromicTransactions  = new ArrayList<>();
        for(int transaction : transactions) {
            if(isPalindrome(transaction)) {
                palindromicTransactions.add(transaction);
            }
        }

        Collections.sort(palindromicTransactions, Collections.reverseOrder());
        return palindromicTransactions;
    }

    public static void main(String[] args) {
        int[] transactions = {33, 123, 121, 44, 78, 98};
        List<Integer> plindromicTransactions = getPlindromicTractions(transactions);
        System.out.println(plindromicTransactions);
    }
}