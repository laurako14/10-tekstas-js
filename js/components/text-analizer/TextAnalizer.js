class TextAnalizer {
    constructor(text) {
        this.text = text;
        this.abc = {
            en: {
                lowercase: 'qwertyuiopasdfghjklmnbvcxz';
                uppercase: 'QWERTYUIOPASDFGHJKLMNBVCXZ';
            },
            lt: {
                lowercase: 'ąčęėįšųūž';
                uppercase: 'ĄČĘĖĮŠŲŪŽ';
            },
        };
        this.lowercaseEnabled = true;
        this.uppercaseEnabled = true;
        this.languages = [];
        this.finalAbc = '';

        this.addLanguage('en');
    }

    addLanguage(newLang) {
        if (this.abc[newLang])) {
            this.languages.push(newLang);

            let text = '';
            for (let lang of this.languages) {
                if (this.lowercaseEnabled) {
                    text += this.abc[lang].lowercase;
                }
                if (this.uppercaseEnabled) {
                    text += this.abc[lang].uppercase;
                }
            }
            this.finalAbc = text;
        } else {
            console.error(`ERROR: norima (${newLang})kalba nerasta.`);
        }
    }

    letterCount() {
        let count = 0;

        for (let letter of this.text) {
            if (this.finalAbc.includes(letter)) {
                count++;
            }
        }

        return count;
    }
}

export { TextAnalizer }