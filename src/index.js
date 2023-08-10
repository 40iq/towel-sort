
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {return []}
  let result = [];
  matrix.forEach((item, index) => {
    if (index % 2 === 0) {
      result = result.concat(item);      
    } else {
      result = result.concat(item.reverse());
    }
  })
  return result;
}