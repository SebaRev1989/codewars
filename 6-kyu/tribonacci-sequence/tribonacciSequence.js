function tribonacci(signature,n){
  var result = new Array();
  for (var i=0; i<n; i++){
    if (i >= 0 && i <= 2) {
      result.push(signature[i]);
    } else {
      result.push(result[i-3]+result[i-2]+result[i-1]);
    }
  }
  return result;
}
