describe('randomGeneral', function () {
   beforeEach(() => {
   }) ;
   it('should return four length number',function (){
       expect(randomGeneral().length).toBe(4);
   });
});