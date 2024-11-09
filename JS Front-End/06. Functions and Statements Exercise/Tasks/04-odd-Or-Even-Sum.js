function solve(num) {

    const nums = Math.abs(num).toString().split('').map(Number);

    const evenSum = nums.filter(d => d % 2 === 0).reduce((sum,n) => sum + n,0);
    const oddSum = nums.filter(d => d % 2 !== 0).reduce((sum,n) => sum + n,0);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(3495892137259234);