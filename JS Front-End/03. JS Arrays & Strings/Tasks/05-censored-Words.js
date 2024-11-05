function solve(text, censor){

    let textToCensor = text.replaceAll(censor, '*'.repeat(censor.length));

    console.log(textToCensor);
}

solve('A small sentence with some words', 'small');