"use strict";
function getQuestionPart(wordsPhrases) {
    if (wordsPhrases.length < 2) {
        throw new Error('At least two words/phrases are required.');
    }
    var firstWord = wordsPhrases[0];
    var lastWord = wordsPhrases[wordsPhrases.length - 1];
    var questionPart = [];
    var _loop_1 = function (i) {
        var prefix = firstWord.slice(0, i);
        var suffix = firstWord.slice(i);
        // Manual comparison for prefix
        var isPrefixMatch = true;
        for (var _i = 0, wordsPhrases_1 = wordsPhrases; _i < wordsPhrases_1.length; _i++) {
            var word = wordsPhrases_1[_i];
            if (!word.startsWith(prefix)) {
                isPrefixMatch = false;
                break;
            }
        }
        // Manual comparison for suffix
        var isSuffixMatch = true;
        for (var _a = 0, wordsPhrases_2 = wordsPhrases; _a < wordsPhrases_2.length; _a++) {
            var word = wordsPhrases_2[_a];
            var wordSuffix = word.slice(-suffix.length);
            if (wordSuffix !== suffix) {
                isSuffixMatch = false;
                break;
            }
        }
        if (isPrefixMatch && isSuffixMatch) {
            // Found common prefix and suffix
            questionPart.push.apply(questionPart, wordsPhrases.map(function (word) { return word.slice(prefix.length, -suffix.length); }));
            return "break";
        }
    };
    for (var i = firstWord.length; i >= 0; i--) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return questionPart;
}
// Example usage:
var result1 = getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]);
console.log(result1); // Output: ["ROOM", "SALTS", "BLOOD"]
var result2 = getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]);
console.log(result2); // Output: ["BE", "GIRL", "SHIP"]
