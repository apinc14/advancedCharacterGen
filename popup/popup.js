
const slider = document.getElementById("slider");
const copyButton = document.getElementById("copy");
const getChars = document.getElementById("getChars");
const languages = document.getElementById("languages");
const countElement = document.getElementById("count");
const refreshButton = document.getElementById("refresh");
const error = document.getElementById("error");
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

        
    // Slovak
    { 'Slovak': { start: 0x0100, end: 0x017F } },

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




function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch((err) => {
            console.error('Failed to copy text: ', err);
        });
}
function getRandomSpecialCharacters(length, characterRanges) {
    let pass = '';
    let language = '';
    let count = 0; // Initialize count to 0
    try {
      
        for (let j = 0; j < length; j++) {
              // Randomly select a range of Unicode characters
        const selectedRange = characterRanges[Math.floor(Math.random() * characterRanges.length)];

        // Extract the language and range from the selected range
        language = Object.keys(selectedRange)[0];
        const { start, end } = selectedRange[language];

        // Define the isValidCharacter function to validate whether a given character code falls within the desired range of valid characters
        function isValidCharacter(charCode, start, end) {
            return charCode >= start && charCode <= end;
        }

            // Generate a random character within the selected range
            let randomCharCode;
            do {
                randomCharCode = Math.floor(Math.random() * (end - start + 1)) + start;
            } while (!isValidCharacter(randomCharCode, start, end)); // Check if the character is valid

            // Convert the character code to a string and append it to the pass variable
            pass += String.fromCharCode(randomCharCode);

            // Increment the count for each character generated
            count++;
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
        // You can add more detailed error handling here if needed
    } finally {
        // Code that will always execute, regardless of whether an error occurred or not
        console.log("This block always runs");
    }

    return { pass, language, count };
}


function isValidCharacter(charCode) {
    // Check if the character code is within the printable ASCII range (32 to 126)
    if ((charCode >= 32 && charCode <= 126) ||
        // Check if the character code is within the Latin-1 Supplement range (160 to 255)
        (charCode >= 160 && charCode <= 255) ||
        // Add additional ranges if needed
        // For example, Greek characters (U+0370 to U+03FF)
        (charCode >= 0x0370 && charCode <= 0x03FF) ||
        // Cyrillic characters (U+0400 to U+04FF)
        (charCode >= 0x0400 && charCode <= 0x04FF)) {
        return true;
    } else {
        return false;
    }
}


// Function to update the generated characters, language, and count
function updateUI(generatedCharacter, language, count) {
    getChars.textContent = generatedCharacter;
    languages.textContent = language;
    countElement.textContent = count;
}

// Event listener for copy button
copyButton.addEventListener('click', () => {
    const generatedCharacter = getChars.textContent;
    copyToClipboard(generatedCharacter);
});

// Event listener for the slider change event
slider.addEventListener('change', () => {
    const { pass: generatedCharacter, language, count } = getRandomSpecialCharacters(parseInt(slider.value), characterRanges);
    updateUI(generatedCharacter, language, count);
}, true);

// Event listener for the refreshButton click event
refreshButton.addEventListener('click', () => {
    refresh();
}, true);

// Update the refresh function to call the getRandomSpecialCharacters function and update the UI
function refresh() {
    const { pass: generatedCharacter, language, count } = getRandomSpecialCharacters(parseInt(slider.value), characterRanges);
    updateUI(generatedCharacter, language, count);
}
// Initial call to populate the generated characters, language, and count
const { pass: initialGeneratedCharacter, language: initialLanguage, count: initialCount } = getRandomSpecialCharacters(parseInt(slider.value), characterRanges);
updateUI(initialGeneratedCharacter, initialLanguage, initialCount);
