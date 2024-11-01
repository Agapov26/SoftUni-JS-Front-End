function solve(number) {

    let stringNumber = String(number);
    let sum = Number(stringNumber[0]);
    let sameNum = true;

    for (let i = 1; i < stringNumber.length; i++) {

        sum += Number(stringNumber[i]);

        if(!(stringNumber[i] == stringNumber[i-1]))
        {
            sameNum = false;
        }
    }

    console.log(sameNum);
    console.log(sum);
}

solve(1234);