function solve(sentence) { 

    let pattern = /#[A-Za-z]+/g;
    const captures = sentence.match(pattern);

    captures.forEach(function(element){
        
        console.log(element.substring(1));
    });
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');