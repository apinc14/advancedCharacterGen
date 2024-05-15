export function getRandomSpecialCharacters(length) {
    // Define ranges of Unicode characters for various languages and special character sets
    const characterRanges = [
        // Japanese
        { 'Hiragana': { start: 0x3040, end: 0x309F } },
        { 'Katakana': { start: 0x30A0, end: 0x30FF } },
        { 'Kanji': { start: 0x4E00, end: 0x9FFF } },

        // Russian
        { 'Cyrillic': { start: 0x0400, end: 0x04FF } },

        // Arabic
        { 'Arabic': { start: 0x0600, end: 0x06FF } },
        { 'Arabic Supplement': { start: 0x0750, end: 0x077F } },

        // Chinese
        { 'Chinese': { start: 0x4E00, end: 0x9FFF } },

        // Cherokee
        { 'Cherokee': { start: 0x13A0, end: 0x13FF } },

        // Danish
        { 'Basic Latin': { start: 0x0020, end: 0x007E } },

        // Nepal
        { 'Nepali': { start: 0x0900, end: 0x097F } },

        // India
        { 'Devanagari (Hindi, Marathi, etc.)': { start: 0x0900, end: 0x097F } },
        { 'Tamil': { start: 0x0B80, end: 0x0BFF } },
        { 'Telugu': { start: 0x0C00, end: 0x0C7F } },

        // Mongolian
        { 'Mongolian': { start: 0x1800, end: 0x18AF } },

        // Malayalam
        { 'Malayalam': { start: 0x0D00, end: 0x0D7F } },

        // Greek
        { 'Greek (uppercase)': { start: 0x0391, end: 0x03A9 } },
        { 'Greek (lowercase)': { start: 0x03B1, end: 0x03C9 } },

        // Devanagari: Characters used in many Indian languages
        { 'Devanagari': { start: 0x0900, end: 0x097F } },

        // Odia
        { 'Odia': { start: 0x0B00, end: 0x0B7F } },

        // Pashto
        { 'Pashto': { start: 0x0600, end: 0x06FF } },

        // Persian
        { 'Persian': { start: 0x0600, end: 0x06FF } },

        // Gurmukhi
        { 'Gurmukhi': { start: 0x0A00, end: 0x0A7F } },

        // Quechua
        { 'Quechua': { start: 0x0510, end: 0x052F } },

        // Romanian
        { 'Romanian': { start: 0x0100, end: 0x017F } },

        // Sanskrit
        { 'Sanskrit': { start: 0x0900, end: 0x097F } },

        // Scottish
        { 'Scottish': { start: 0x1E00, end: 0x1EFF } },

        // Serbian
        { 'Serbian': { start: 0x0400, end: 0x04FF } },

        // Sindhi
        { 'Sindhi': { start: 0x0600, end: 0x06FF } },

        // Skolt Sami
        { 'Skolt Sami': { start: 0x1D8D0, end: 0x1DAAF } },

        // Slovak
        { 'Slovak': { start: 0x0100, end: 0x017F } },

        // Southern Sami
        { 'Southern Sami': { start: 0x1D8D0, end: 0x1DAAF } },

        // Spanish
        { 'Spanish': { start: 0x00C0, end: 0x00FF } },

        // Syriac
        { 'Syriac': { start: 0x0700, end: 0x074F } },

        // Tajik
        { 'Tajik': { start: 0x0400, end: 0x04FF } },

        // Tamil
        { 'Tamil': { start: 0x0B80, end: 0x0BFF } },

        // Tigrinya
        { 'Tigrinya': { start: 0x1200, end: 0x137F } },

        // Turkish
        { 'Turkish': { start: 0x00C0, end: 0x00FF } },

        // Ukrainian
        { 'Ukrainian': { start: 0x0400, end: 0x04FF } },

        // Urdu
        { 'Urdu': { start: 0x0600, end: 0x06FF } },

        // Uyghur
        { 'Uyghur': { start: 0x0600, end: 0x06FF } },

        // Uzbek
        { 'Uzbek': { start: 0x0400, end: 0x04FF } },

        // Yi
        { 'Yi': { start: 0xA000, end: 0xA48F } }

    ];

    let pass = '';
    for (let j = 0; j < length; j++) {
        // Randomly select a range of Unicode characters
        const { start, end } = characterRanges[Math.floor(Math.random() * characterRanges.length)];
        // Generate a random character within the selected range
        const randomCharCode = Math.floor(Math.random() * (end - start + 1)) + start;
        // Convert the character code to a string and append it to the pass variable
        pass += String.fromCharCode(randomCharCode);
    }

    return pass;
}
