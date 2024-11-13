function solve (input) {

    const phoneBook = {};

    input.forEach(entry => {
        const [name, phone] = entry.split(' ');
        console.log(name, phone);
        phoneBook[name] = phone;
    });

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}