function palindrome (array) {
    
    const isPalindrome = (num) => {
        const stringNum = num.toString();
        const stringNumReversed = stringNum.split('').reverse().join('');

        return stringNum === stringNumReversed;
    }

    array.forEach(num => console.log(isPalindrome(num)));
}

palindrome([32,2,232,1010]);