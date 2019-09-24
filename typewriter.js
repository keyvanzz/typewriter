const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(`\n${char}`)
    }, 50);
}
