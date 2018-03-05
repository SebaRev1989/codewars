var moveZeros = function (arr) {
  var count=0;
  var result=[];
  for(var i=0;i<arr.length;i++)
    (arr[i]===0 ? count++ : result.push(arr[i]));
  for(var i=0;i<count;i++)
    result.push(0);
  return result;
}