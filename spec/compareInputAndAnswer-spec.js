describe('compareInputAndAnswer', function () {
   var answer =[];
   var input = [];
   beforeEach(() => {
       answer = [1,2,4,7];
       input = [];
   }) ;

   it('should return 4A0B when input 1247 and answer is 1247',function (){
       input=[1,2,4,7];
       expect(compareInputAndAnswer(input,answer)).toBe('4A0B');
   });
   it('should return 0A0B when input 3589 and answer is 1247',function (){
       input=[3,5,8,9];
       expect(compareInputAndAnswer(input,answer)).toBe('0A0B');
   });
   it('should return 0A4B when input 7421 and answer is 1247',function (){
       input=[7,4,2,1];
       expect(compareInputAndAnswer(input,answer)).toBe('0A4B');
   });
   it('should return 2A0B when input 1258 and answer is 1247',function (){
       input=[1,2,5,8];
       expect(compareInputAndAnswer(input,answer)).toBe('2A0B');
   });
   it('should return 2A2B when input 1274 and answer is 1247',function (){
       input=[1,2,7,4];
       expect(compareInputAndAnswer(input,answer)).toBe('2A2B');
   });
   it('should return 0A2B when input 2158 and answer is 1247',function (){
       input=[2,1,5,8];
       expect(compareInputAndAnswer(input,answer)).toBe('0A2B');
   });
});