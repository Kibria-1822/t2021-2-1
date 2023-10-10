function generateUnit(num) {
  let result = ""
  for (let i = 1; i <= num; i++) {
    result += (2 * i - 1) + (i < num ? ', ' : ''); 
  }
  console.log(result);
  return result;
}
generateUnit(4);
