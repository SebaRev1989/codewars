var countBits = function(n) {
  var count = 0;
  n = n.toString(2);
  for (i=0; i<n.length; i++) {
    if (n[i] === "1")
      count++;
  }
  return count;
};
