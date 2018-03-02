function divisors(integer) {
  var result = [];
  for(var i=1;i<=integer;i++)
    if(integer%i===0) result.push(i);
  result.pop();
  result.shift();
  if(result.length !== 0)
    return result;
  else
    return (integer + ' is prime');
};
