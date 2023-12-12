function getQuestionPart(phrases, dictionary) {
    return phrases.map((phrase) => dictionary[phrase.toUpperCase()] || phrase);
}
// Example dictionary
const wordDictionary = {
    "BATHROOM": "ROOM",
    "BATH SALTS": "SALTS",
    "BLOODBATH": "BLOOD",
    "BEFRIEND": "BE",
    "GIRLFRIEND": "GIRL",
    "FRIENDSHIP": "SHIP",
};
// Example usage:
const result1 = getQuestionPart(["bathroom", "BATH SALTS", "BLOODBATH"], wordDictionary);
//console.log(result1); 
const result2 = getQuestionPart(["BEFRIEND", "girlfriend", "FRIENDSHIP"], wordDictionary);
//console.log(result2); 
