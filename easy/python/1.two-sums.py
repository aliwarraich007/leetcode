class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums) - 1):
            curr_number = nums[i]
            for j in range(i + 1, len(nums)):
                if curr_number + nums[j] == target:
                    return [i, j]
        return None
        