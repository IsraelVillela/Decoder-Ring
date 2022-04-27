// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const data= {
    " ":" ","a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
    "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
    "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
    "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
    "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
  };
    const reverseData={
    " ":" ","11": "a", "21": "b", "31": "c", "41": "d", "51": "e",
    "12": "f", "22": "g", "32": "h","42": "(i/j)", "52": "k",
    "13": "l", "23": "m", "33": "n", "43": "o", "53": "p",
    "14": "q", "24": "r", "34": "s", "44": "t", "54": "u",
    "15": "v", "25": "w", "35": "x", "45": "y", "55": "z" 
};
  function polybius(input, encode = true) {
    // your solution code here
    //KEEP SPACES IN ORIGINAL SPOT
    //output to encode should be a string 
    //when decoding the number of chars in the string excluding spaces should be even otherwise return false
    //SPACES MAINTAINED THROUGHOUT
    //ignore capitals 
    //the letters i and j share a space
    // when encoding i and j can be converted to 42 but when decoding make the decode (i/j1)

  let lowerCased=input.toLowerCase()
  if(encode){
  let newChars='';
  
  lowerCased.split('').reduce((memo,current)=>{
      if(data[current]){
        newChars+=data[current]
      }},0)
   return newChars;
  } else {
  if (input.replace(" ", "").length % 2 > 0) {
    return false;
  }
  const newArr=[];
  let str="";
  let result='';
  for(let i=0; i<=lowerCased.length;i++){
    let index=lowerCased[i];
    if(index===" "){
      newArr.push(" ")
     } else {
      if(str.length===1){
        str+=index
        newArr.push(str);
        str='';
      } else{
        str=index
      }
    }  
  }
  newArr.forEach((num)=>{
    if(reverseData[num]){
      result+=reverseData[num]
    }})
  return result}
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
