const sentence = "hello there from lighthouse labs";

const animatedSentence = function (sentence) {
    for (const char of sentence) {
        setTimeout(() => {
            process.stdout.write(`\n${char}`)
        }, 50);
    }

}


animatedSentence(sentence)