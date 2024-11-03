function solve (n, numbers) {
    
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(numbers[i])
    }

    console.log(array.reverse().join(' '))
}

solve(3, [10, 20, 30, 40, 50])