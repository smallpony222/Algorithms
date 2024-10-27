
function isPalindrome(num){
    const str =  num.toString();
    return str === str
                    .split('')
                    .reverse()
                    .join('');
}

function solution( transactions ){
    const palindromicTransactions = transactions.filter(isPalindrome);

    return palindromicTransactions.sort((a, b) => b - a);
}

const transactions = [33, 123, 121, 44, 78, 98];
console.log(solution(transactions)); 