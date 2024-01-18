function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let reversed: number = 0;
  let current: number = x;
  while (current !== 0) {
    reversed = reversed * 10 + (current % 10);
    current = Math.trunc(current / 10);
  }

  if (x === reversed) return true;
  return false;
}

isPalindrome(7777);
