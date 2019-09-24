const sentence = "hello there from lighthouse labs";
let time = 0;
const animatedSentence = function (sentence) {
    for (const char of sentence) {
        setTimeout(() => {
            process.stdout.write(`${char}`)
        }, time);
        time += 50;
    }

}


animatedSentence(sentence)