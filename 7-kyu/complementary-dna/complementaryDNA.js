function DNAStrand(dna){
  var result = "";
  for (i=0; i < dna.length; i++){
    if(dna[i]==="A")
      result += "T";
    if(dna[i]==="T")
      result += "A";
    if(dna[i]==="C")
      result += "G";
    if(dna[i]==="G")
      result += "C";
  }
  return result;
}