size_t countBits(unsigned value) {
  size_t c = 0;

  while (value != 0) {
    c++;
    value = value & (value - 1);
  }

  return (c);
}
