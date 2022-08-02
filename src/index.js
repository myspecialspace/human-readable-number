module.exports = function toReadable (number) {
    const ones = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

    //case 0 < x <= 19
    if (number <= 19) return ones[number];

    let remainder = number % 10;

    //case 20 <= x < 100 ; ~~(-5.5) => -5. not the same as Math.floor() for negative
    if (number < 100) return tens[~~(number/10)-2] + (remainder ? " " + ones[remainder]: "");

    //case 100 <= x <= 1000
    if (number < 1000) return ones[~~(number/100)] +" hundred" + (number%100 === 0 ? "" : " " + toReadable(number%100));
}


