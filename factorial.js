// using a function to find out factorial 

function findFactorial(number){

    let initValue = 1;
    for( number; number >= 1; number--){
        initValue = initValue * number;
       // console.log(initValue)
    }
    return initValue;
    
}

let givenFactorialNumber = 7;

let result = findFactorial(givenFactorialNumber);

console.log(result);


// basic for loop

// for(var i = 1; i <= 10; i++ ){
//     console.log(i);
// }



//  simple done factorial
// let num = 7;
// let fact = 1;

// for( num; num >= 1; num--){
//     fact = fact * num ;
// }
// console.log(fact);
