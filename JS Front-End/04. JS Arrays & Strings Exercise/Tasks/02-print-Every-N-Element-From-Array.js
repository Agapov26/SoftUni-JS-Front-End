function solve(array, step) {

    const newArr = [];


    array.forEach(function( el, index) {

        if (index % step === 0) {

            newArr .push(array[index])
        }
    });

    return newArr;
}

console.log ( solve(['5','20','31','4','20'],) );