describe('validInputAndRandomNumber', function () {
   beforeEach(() => {
       var randomNumber = [];
   }) ;
   it('should return correct judgement when input 1A24',function (){
       randomNumber=[1,'A',2,4];
       expect(validInputAndRandomNumber(randomNumber)).toBe(false);
   });
   it('should return correct judgement when input 1224',function (){
       randomNumber=[1,2,2,4];
       expect(validInputAndRandomNumber(randomNumber)).toBe(false);
   });
   it('should return correct judgement when input 4521',function (){
       randomNumber=[4,5,2,1];
       expect(validInputAndRandomNumber(randomNumber)).toBe(true);
   });
});