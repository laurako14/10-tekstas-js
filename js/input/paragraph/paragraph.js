function paragr(string) {
    let paraSkaicius = 0;
    for (let i = 0; i < string.length; i++) {
        if (i = '\n') {
            paraSkaicius++;
        }
    }
    return paraSkaicius;
}

export { paragr }