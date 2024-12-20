function solve(input) {

    const heroesCount = input.shift();

    const heroesInput = input.splice(0, heroesCount);

    const heroes = heroesInput.reduce((heroes, hero) => {

        let [name, power, energy] = hero.split('-');

        power = power.split(',');

        heroes[name] = { power, energy: Number(energy) }

        return heroes;
    }, {});

    input.forEach(entry => {

        const line = entry.split(' * ');
        const command = line.shift();
        let name = '';

        switch(command) {
            case 'Use Power':

                name = line.shift();

                let [ usedPower, usedEnergy] = line;
                usedEnergy = Number(usedEnergy);

                if ( (heroes[name].energy - usedEnergy) > 0 && heroes[name].power.includes(usedPower)) {

                    heroes[name].energy = heroes[name].energy - usedEnergy;
                    console.log(`${name} has used ${usedPower} and now has ${heroes[name].energy} energy!`);
                }
                else {
                    console.log(`${name} is unable to use ${usedPower} or lacks energy!`);
                }

                break;
            
            case 'Train':

                name = line.shift();
                let [gainedEnergy ] = line;
                gainedEnergy = Number(gainedEnergy)

                if(heroes[name].energy < 100) {

                    heroes[name].energy += gainedEnergy;

                    if (heroes[name].energy > 100) {
                        const remainder = heroes[name].energy - 100;
                        gainedEnergy = gainedEnergy - remainder;
                        heroes[name].energy = 100;
                    }

                    console.log(`${name} has trained and gained ${gainedEnergy} energy!`);
                }

                else {
                    console.log(`${name} is already at full energy!`)
                }

                break;

            case 'Learn':
                
                name = line.shift();
                let [gainedPower ] = line;

                if (heroes[name].power.includes(gainedPower) ) {

                    console.log(`${name} already knows ${gainedPower}.`);
                }

                else {
                    heroes[name].power.push(gainedPower);
                    console.log(`${name} has learned ${gainedPower}!`);
                }
                
                break;
        }
    });

    Object.keys(heroes).forEach(name => {

        let output = '';

        output += `Superhero: ${name}\n`;
        output += `- Superpowers: ${heroes[name].power.join(', ')}\n`;
        output += `- Energy: ${heroes[name].energy}`;

        console.log(output);
    });
}

solve ([

    "3", 
    "Iron Man-Repulsor Beams,Flight-80", 
    "Thor-Lightning Strike,Hammer Throw-10",  
    "Hulk-Super Strength-60",
    "Use Power * Iron Man * Flight * 30",
    "Train * Thor * 20",
    "Train * Hulk * 50",
    "Learn * Hulk * Thunderclap",
    "Use Power * Hulk * Thunderclap * 70",
    "Evil Defeated!"
    
]);