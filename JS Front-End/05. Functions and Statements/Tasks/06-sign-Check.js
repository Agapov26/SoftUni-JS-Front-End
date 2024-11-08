function solve (numOne, numTwo, numThree) {

    if(numOne >0 & numTwo >0 & numThree <0) {

        console.log('Negative');
    }

    else if (numOne > 0 & numTwo < 0 & numThree > 0 ) {

        console.log('Negative');
    }

    else if (numOne < 0 & numTwo > 0 & numThree > 0 ) {

        console.log('Negative');
    }

    else if (numOne < 0 & numTwo < 0 & numThree < 0 ) {

        console.log('Negative');
    }

    else {
        
        console.log('Positive');
    }
}

solve(-5,1,1);