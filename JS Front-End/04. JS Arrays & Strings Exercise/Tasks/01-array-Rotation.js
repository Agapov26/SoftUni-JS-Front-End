function solve(array, rotationCount) {

    for ( let i = 0; i < rotationCount; i++) {
        array.push(array.shift());
    }

    console.log( array.join(' ') );
}

solve([51, 47, 32, 61, 21], 2)