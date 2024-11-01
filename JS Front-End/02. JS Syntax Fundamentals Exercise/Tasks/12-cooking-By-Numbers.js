function solve(number, op1, op2, op3, op4, op5) {

    number = Number(number);

    function operation(op, number) {

        if(op == 'chop') {
            number/= 2;
        }

        else if(op == 'dice') {
            number = Math.sqrt(number);
        }

        else if(op == 'spice') {
            number+= 1;
        }

        else if(op == 'bake') {
            number *= 3;
        }

        else {
            number *= 0.8;
        }

        return number;
    }

    console.log(number = operation(op1, number));
    console.log(number = operation(op2, number));
    console.log(number = operation(op3, number));
    console.log(number = operation(op4, number));
    console.log(number = operation(op5, number));
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');