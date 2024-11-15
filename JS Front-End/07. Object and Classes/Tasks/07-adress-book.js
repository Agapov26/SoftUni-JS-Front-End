function solve (input) {

    const adressBook = {}

    input.forEach(entry => {
        const [name, place] = entry.split(':');
        adressBook[name] = place;
    })

    const adressBookSortable = Object.entries(adressBook);

    adressBookSortable.sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB);
    })

    for (const [name,place] of adressBookSortable) {
        console.log(`${name} -> ${place}`)
    }
}