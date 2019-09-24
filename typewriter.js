const sentence = "hello there from lighthouse labs";
let time = 1000;
const animatedSentence = function (sentence) {
    for (const char of sentence) {
        setTimeout(() => {
            process.stdout.write(`${char}`)
        }, time);
        time += 50;
    }

}


animatedSentence(sentence)