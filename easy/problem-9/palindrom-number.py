def palindrome(x):
    if x < 0: 
        return False
    reversed = 0
    currentNumber = x
    while currentNumber != 0:
        reversed = reversed * 10 + currentNumber % 10
        currentNumber = currentNumber // 10

    return x == reversed



palindrome(121)