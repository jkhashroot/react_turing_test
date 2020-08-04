export const toCapitalCase = text =>
    text
        .split(' ')
        .map(word => formatWord(word))
        .join(' ');
export const formatWord = word =>
    UpperCase(word[0]) + LowerCase(word.substring(1, word.length));

const UpperCase = word => word.toUpperCase();
const LowerCase = word => word.toLowerCase();
