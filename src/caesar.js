// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// Spaces should be maintained throughout, as should other nonalphabetic symbols.
// Capital letters can be ignored.
// If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c

const caesarModule = (function () {
  const alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  function caesar(input, shift, encode = true) {
    if(!shift || shift === 0 || shift < -25 || shift>25){
      return false
    }
    let indivChars= input.split('');
    let shiftedChar;
    let finishedChar=""
    let findCharIndex= indivChars.forEach((characters)=>{
      characters=characters.toLowerCase()
      if(alphabet.indexOf(characters)===-1){
        finishedChar+=characters 
      }else {
       if (encode){
       shiftedChar=(alphabet.indexOf(characters)+shift)
        }else{
      shiftedChar=(alphabet.indexOf(characters)-shift)
      }
      if(shiftedChar >= 24) {
        shiftedChar = shiftedChar - 26;
      }
      if(shiftedChar < 0){
        shiftedChar+=26
      }
      finishedChar+=alphabet[shiftedChar]
    }
  })
    return finishedChar
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
