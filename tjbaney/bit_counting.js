var countBits = function(n) {
  return (n >>> 0).toString(2).split('').filter(b => b === "1").length;
};
