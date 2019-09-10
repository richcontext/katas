def find_even_index(arr):
    for index, int in enumerate(arr):
        left = sum_range(arr, 0, index)
        right = sum_range(arr, index, len(arr))
        if left == right:
            return index
    return -1


def sum_range(arr, a, b):
    return sum(arr[a:b + 1])
