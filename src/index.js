module.exports = function toReadable(number) {
    let argNumber = String(number);
    const numberArr = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const numberTeenArr = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const numberTyArr = [
        ,
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number == 0) {
        return "zero";
    } else if (argNumber.length == 1) {
        return numberArr[number];
    } else if (argNumber.length == 2 && number < 20) {
        return numberArr[number];
    } else if (argNumber.length == 2 && number >= 20 && argNumber[1] == 0) {
        return numberTyArr[argNumber[0]];
    } else if (argNumber.length == 2) {
        return numberTyArr[argNumber[0]] + " " + numberArr[+argNumber[1]];
    } else if (
        argNumber.length == 3 &&
        argNumber[1] == 0 &&
        argNumber[2] == 0
    ) {
        return numberArr[argNumber[0]] + " " + "hundred";
    } else if (argNumber.length == 3 && argNumber[1] == 0) {
        return (
            numberArr[argNumber[0]] +
            " " +
            "hundred" +
            " " +
            numberArr[argNumber[2]]
        );
    } else if (argNumber.length == 3 && +argNumber[1] == 1) {
        return (
            numberArr[+argNumber[0]] +
            " " +
            "hundred" +
            " " +
            numberTeenArr[argNumber[2]]
        );
    } else if (argNumber.length == 3 && argNumber[2] == 0) {
        return (
            numberArr[argNumber[0]] +
            " " +
            "hundred" +
            " " +
            numberTyArr[argNumber[1]]
        );
    } else if (argNumber.length == 3) {
        return (
            numberArr[argNumber[0]] +
            " " +
            "hundred" +
            " " +
            numberTyArr[argNumber[1]] +
            " " +
            numberArr[argNumber[2]]
        );
    }
};
