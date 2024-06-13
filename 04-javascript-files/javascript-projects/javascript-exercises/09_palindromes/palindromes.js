const palindromes = function (string) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleaned = string.toLowerCase().split('').filter((character) => alphanumerical.includes(character)).join('')

    const reverse = cleaned.split('').reverse().join('')
    return reverse == cleaned;
};

// Do not edit below this line
module.exports = palindromes;
