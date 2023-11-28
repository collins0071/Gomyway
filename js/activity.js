function analyzeSentence(sentence) {
    // Initialize variables to store information
    const numCharacters = sentence.length;
    const numWords = sentence.split(/\s+/).length; // Split by whitespace to count words
    const numSpaces = sentence.split(' ').length - 1; // Count spaces by splitting on space and subtracting 1
    const punctuationMarks = sentence.match(/[.,;:!?]/g) || [];

    // Print the analysis results
    console.log("Sentence Analysis:");
    console.log("Number of characters: " + numCharacters);
    console.log("Number of words: " + numWords);
    console.log("Number of spaces: " + numSpaces);
    console.log("Punctuation marks: " + punctuationMarks.join(', '));
}

// Example usage
const userInput = prompt("Enter a sentence (ending with a period):");
analyzeSentence(userInput);
