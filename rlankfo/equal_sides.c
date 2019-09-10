int find_even_index(const int *values, int length) {
  int i = 0, total = 0, left = 0, right = 0;
  const int *ptr = values;

  while (i < length) {
    total += *ptr++;
    i++;
  }

  i = 0, ptr = values;
  while (i < length) {
    right = total - (left + *ptr);
    if (left == right) 
      return i;
    left += *ptr++;
    i++;
  }
  
  return -1;
}
