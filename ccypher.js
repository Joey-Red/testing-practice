function cypher (str){
  let alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    let shifted13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];

    var resultStr = [];

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < alphabet.length; j++){
          if(str[i] === alphabet[j]){
          resultStr.push(shifted13[j]);
        }
      }
    }
    let result = resultStr.join("");
  return result
}

module.exports = cypher;