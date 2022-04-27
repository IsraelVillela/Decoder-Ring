// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const setAlphabet='abcdefghijklmnopqrstuvwxyz'.split('');
  const cypher={};
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    if(!alphabet || alphabet.length !==26) return false;
    for(let i in alphabet){
      for(let j in alphabet){
        if(i !== j && alphabet[i] === alphabet[j]){
          return false
        }
      }
    }
    let splitAlph= alphabet.split('');
    if(encode){
      for(let i=0; i<25; i++){
        cypher[setAlphabet[i]]= splitAlph[i]
      };
    }
    else {
      for(let i=0; i<25; i++){
        cypher[splitAlph[i]] = setAlphabet[i]
      }
    }
    let result=input.toLowerCase().split("").map((i)=>{
      if(i === " ") return " ";
        return cypher[i]
      
    })
    return result.join('')
    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
