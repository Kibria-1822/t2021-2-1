
function oneOutput(number){
    let finalResult = '';
    if(number%2 == 0){
        number = number-1
    }
    for (let i = 1; i <= number; i++) {
      finalResult += (2 * i - 1) + (i < number ? ', ' : ''); 
    }
    console.log(finalResult);
    return finalResult;
}
oneOutput(4)