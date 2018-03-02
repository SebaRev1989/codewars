function multiply(a, b){
 return a * b;
}

describe("Testing multiply", function(){
  it("1*1", function(){
    Test.assertEquals(multiply(1,1), 1);
  });
  it("1*2", function(){
    Test.assertEquals(multiply(1,2), 2);
  });
  it("2*2", function(){
    Test.assertEquals(multiply(2,2), 4);
  });
  it("3*5", function(){
    Test.assertEquals(multiply(3,5), 15);
  });
});