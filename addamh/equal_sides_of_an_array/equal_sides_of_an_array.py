def find_even_index(arr):
    for i in range(len(arr)):
        if sum(arr[:i]) == sum(arr[i+1:]):
            return i
    
    return -1
    
if __name__ == "__main__":
  print(find_even_index([1,2,3,4,3,2,1]) == 3)
  print(find_even_index([10,-80,10,10,15,35,20]) == 6)
  print(find_even_index([20,10,-80,10,10,15,35]) == 0)
  print(find_even_index([1,2,3,4,5,6]) == -1)
