function solve(input) {

    const parking = {};

    input.forEach(entry => {

        const [ direction, carNmber ] = entry.split(', ')

        if (direction == 'IN') {
            if( ! parking.hasOwnProperty(carNmber)) parking[carNmber] = 1;
        }

        else {
            if( parking.hasOwnProperty(carNmber)) delete parking[carNmber];
        }
    });

    if (Object.keys(parking).length > 0) {
        Object.entries(parking).sort().forEach(([carNmber]) => console.log(carNmber));
    }
    
    else {
        console.log('Parking Lot is Empty');
    }
}