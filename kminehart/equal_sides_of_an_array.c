int find_even_index(const int *values, int length) {
  int left = 0;
  int right = 0;
  
  for(int i = 0; i < length; i++) {
    if(i == 0) {
      left = 0;
    } else {
      left += values[i - 1];
    }
    right = 0;
    
    for(int x = i + 1; x < length; x++) {
      right += values[x];
    }
    
    if(left - right == 0) {
      return i;
    }
  }
  
  return -1;
}
