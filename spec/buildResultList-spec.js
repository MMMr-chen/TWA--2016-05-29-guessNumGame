describe('buildResultList', function () {
   var answer =[];
   var input = [];
   beforeEach(() => {
       answer = [1,2,4,7];
       input = [];
   }) ;

   it('should return Congratulations when input 1247 and answer is 1247',function (){
       input=[[1,2,4,7]];
       expect(buildResultList(input,answer)).toBe('4A0B\nCongratulations!\n');
   });
   it('should play correct when has illegal input',function (){
       input=[[1,2,4,8],[1,2,4,8],[1,2,2,4],[1,2,4,7]];
       expect(buildResultList(input,answer)).toBe('3A0B\n3A0B\nillegal input\n4A0B\nCongratulations!\n');
   });
   it('should fail when exceed the max step',function (){
       input=[[1,2,4,8],[1,2,4,8],[1,2,2,4],[1,2,4,8]];
       expect(buildResultList(input,answer)).toBe('3A0B\n3A0B\nillegal input\n3A0B\nFails!\n');
   });
});