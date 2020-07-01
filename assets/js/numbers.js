function compute(expression) {
    // TODO - write method definition here
    
     // return parseInt(expression) + parseInt(expression);
        var num1, num2, num3;
        var result; 


    //This code passes the test but not very efficient..........
    //  for (i=0; i < expression.length; i++) {
    //      if(expression.length <=3 &&  expression[1] === "-"){
    //           num1 = parseInt(expression[0]);
    //           num2 = parseInt (expression[2]);
    //         return num1 - num2; 
    //      } else if (expression.length <=5 && expression[1] === "-" && expression[3] === "-"){
    //          num1 = parseInt(expression[0]);
    //          num2 = parseInt(expression[2]);
    //          num3 = parseInt(expression[4]);
    //         return num1 - num2 - num3;
    //      }
    //   }
       
    // This code passes the first arguement in the tests...

    for (i=0; i < expression.length; ){
        num1 = parseInt(expression[i]);
        for (j=1; j < expression.length; ){

            switch(expression[j]){
                case "+":
                   result = parseInt (expression[i]) + parseInt(expression[j+1]);
                    break;
                case "-":
                    result = parseInt (expression[i]) - parseInt(expression[j+1]);
                    break;
                case "*":
                    result = parseInt (expression[i]) * parseInt(expression[j+1]);
                    break;
                case "/":
                    result = parseInt (expression[i]) / parseInt(expression[j+1]);
                    break;
                default:
                    console.log("Inalid operand");
                    break;
                    
            }
           j = j+ 2;
        }
        i= i+ 2;
        
    }
    return result;
}




// The actual functions written out separately but can not pass the test.
// function addition() {
//     var num1, num2;
//     return num1 + num2;
// }

// function subtraction(){
//     var num1, num2;
//     return num1 - num2;
// }

// function multiplication(){
//     var num1, num2;
//     return num1 * num2;
// }

// function division(){
//     var num1, num2;
//     return num1 / num2;
// }

// function additionAndSubtraction(){
//     var num1, num2, num3;
//     return num1 + num2 - num3;
// }

// function additionAndMultiplication(){
//     var num1, num2, num3;
//     return (num1 + num2) * num3;
// }

// function subtractionAndMultiplication(){
//     var num1, num2, num3;
//     return (num1 - num2) * num3;
// }

// function subtractionAndDivision(){
//     var num1, num2, num3;
//     return (num1 - num2) / num3;
// }

// function additionAndDivision(){
//     var num1, num2, num3;
//     return (num1 + num2) / num3;
// }

// function allOperator(){
//     var num1, num2, num3, num4, num5;
//     return (num1 + num2) - num3 * num4 / num5;
// }