# Financial Reporting System - Palindromic Transaction IDs

This project is a financial reporting system that identifies notable transaction IDs for special analysis. 
The main task is to filter out transaction IDs that are palindromic (i.e., they read the same forward and backward) from a list of transactions, sort them in descending order, and return the sorted array.

## Problem Description

Given an array of integers, `transactions`, representing transaction IDs, your goal is to:
1. Identify all palindromic integers within the `transactions` array.
2. Sort these palindromic integers in descending order.
3. Return the sorted list of palindromic integers.

**palindromic integer** is an integer that reads the same way forwards and backwards (e.g., 121, 33, 44).

### Note
You are not expected to provide the most optimal solution, but a solution with time complexity not worse than Q(n ^ 2) will fit within the execution time limit.

#### Example

```javascript
// Example 1
const transactions = [33, 123, 121, 44, 78, 98];
console.log(solution(transactions)); // Output: [121, 44, 33]

// Example 2
const transactions = [123, 456, 789];
console.log(solution(transactions)); // Output: []



