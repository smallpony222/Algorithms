def is_palindromic(num):
    return str(num) == str(num)[::-1]

def solution(transactions):
    palindromic_transactions = [t for t in transactions if is_palindromic(t)]
    return sorted(palindromic_transactions, reverse=True)

# Example usage:
transactions1 = [33, 123, 121, 44, 78, 98]
print(solution(transactions1))  # Output: [121, 44, 33]

transactions2 = [123, 456, 789]
print(solution(transactions2))  # Output: []