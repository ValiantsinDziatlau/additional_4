module.exports = function multiply(first, second) {
  function ReverseStringFunc(str) {
      var StrArr=[];
      for(var i=0; i<str.length; i++){
      StrArr[i]=str.charAt(i);
      }
      var RvrsStrArr=StrArr.reverse()
      return RvrsStrArr.join("");
  }
  function ArrBlnkFunc(str1, str2){
          var Arr=[];
          for(var i=0; i<str2.length; i++) {
              Arr.push([]);
          for(var j=0 ; j<str1.length+str2.length; j++) {
              Arr[i][j]=0;
          }
   }
   return Arr;
      }
    var ArrPrdct=[];
    var FrstStr=ReverseStringFunc(first);
    var SndStr=ReverseStringFunc(second);
    var ArrBlnk=ArrBlnkFunc(first, second);
  function MltplStrElemFunc(ArrB){
      var Arr=ArrB;
      for(var i=0; i<SndStr.length; i++) {
           for(var j=0 ; j<FrstStr.length; j++) {
            Arr[i][i+j]=SndStr.charAt(i)*FrstStr.charAt(j);// if I will have a free time: change data from str to array reverseString(change too)
        }
        }
        return Arr;
    }
    var ArrPrdct = MltplStrElemFunc(ArrBlnk);
 var NxtOrdr=0;
 var FnshArr=[];
for(var j=0; j<FrstStr.length+SndStr.length; j++){
 FnshArr[j]=0;
  }

 for(var j=0; j<FrstStr.length+SndStr.length; j++){
 for(var i=0; i<SndStr.length; i++){
  FnshArr[j]=FnshArr[j]+ArrPrdct[i][j]+NxtOrdr;
  NxtOrdr=0;
   }
   if(FnshArr[j]>=10){
       NxtOrdr=Math.floor(FnshArr[j]/10);
       FnshArr[j]=FnshArr[j]%10;
          }
  }
  FnshArr.reverse();
  while(FnshArr[0]===0){
      FnshArr.shift();

  }
  var FnshStr=FnshArr.join("");


    return FnshStr;
  
}
