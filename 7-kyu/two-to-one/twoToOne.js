function longest(s1, s2) {
  var result = '';
  result = s1.concat(s2);
  result = result.split('').sort('').join('');
  result = result.replace(/(.)(?=.*\1)/g, "");
  return result;
}