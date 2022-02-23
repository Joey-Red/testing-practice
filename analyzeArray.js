function analyzeArray(array){
  let sum = 0;
  let length = array.length;
  let min = 1;
  let max = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
    if (min > array[i]){
      min = array[i]
    }
    if (max < array[i]){
      max = array[i]
    }
  }
  let average = sum/length;
  let object = {
    average: average,
    min: min,
    max: max,
    length: length};
    console.log(object)
  return object
}

module.exports = analyzeArray;