function obtRhtAct(sideLen) {
  if(checkTriangule(sideLen)){
    if(checkRight(sideLen))
      return 1;
    else {
      if(checkAcute(sideLen))
        return 2;
      else
        return 0;
    }
  } else  
    return -1; //return -1 for invalid, 0 for obtuse, 1 for right, and 2 for acute
};

function checkTriangule(sideLen) {
  var check1 = (sideLen[0]+sideLen[1]>sideLen[2]);
  var check2 = (sideLen[0]+sideLen[2]>sideLen[1]);
  var check3 = (sideLen[2]+sideLen[1]>sideLen[0]);
  return (check1 && check2 && check3);
};

function checkRight(sideLen){
  var check1 = (Math.pow(sideLen[0],2)+Math.pow(sideLen[1],2)===Math.pow(sideLen[2],2));
  var check2 = (Math.pow(sideLen[0],2)+Math.pow(sideLen[2],2)===Math.pow(sideLen[1],2));
  var check3 = (Math.pow(sideLen[2],2)+Math.pow(sideLen[1],2)===Math.pow(sideLen[0],2));
  return (check1 || check2 || check3);
};

function checkAcute(sideLen){
  if (sideLen[0] > sideLen[1] && sideLen[0] > sideLen[2])
    return (Math.pow(sideLen[0],2) < (Math.pow(sideLen[1],2) + Math.pow(sideLen[2],2)));
  if (sideLen[1] > sideLen[0] && sideLen[1] > sideLen[2])
    return (Math.pow(sideLen[1],2) < (Math.pow(sideLen[0],2) + Math.pow(sideLen[2],2)));
  if (sideLen[2] > sideLen[1] && sideLen[2] > sideLen[0])
    return (Math.pow(sideLen[2],2) < (Math.pow(sideLen[1],2) + Math.pow(sideLen[0],2)));
}