module.exports = function toReadable(number) {
    let tens = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let ty = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (number >= 0 && number < 20) return tens[number];
    number = (number + "").split("");
    if (number.length == 2) {
        if (number[1] == 0) return ty[number[0] - 2];
        return `${ty[number[0] - 2]} ${tens[number[1]]}`;
    } else {
        if (number[1] == 0) {
            if (number[2] == 0) return `${tens[number[0]]} hundred`;
            return `${tens[number[0]]} hundred ${tens[number[2]]}`;
        }
        if (number[1] == 1) return `${tens[number[0]]} hundred ${tens[number[1] + number[2]]}`;
        if (number[2] == 0) return `${tens[number[0]]} hundred ${ty[number[1] - 2]}`;
        return `${tens[number[0]]} hundred ${ty[number[1] - 2]} ${tens[number[2]]}`;
    }
};
