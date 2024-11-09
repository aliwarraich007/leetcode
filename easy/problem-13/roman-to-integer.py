class Solution:
    def romanToInt(self, s: str) -> int:
        roman_to_int = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        previous_number = roman_to_int[s[-1]]
        total = previous_number
 
        for i in range(len(s) - 2, -1, -1):
            current_number = roman_to_int[s[i]]
            if current_number < previous_number:
                total -= current_number
            else:
                total += current_number
            previous_number = current_number
        return total

obj = Solution()
print(obj.romanToInt('IX'))