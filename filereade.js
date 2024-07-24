const fs = require('fs');
const path = require('path');

// Function to read file and count word occurrences
function countWordOccurrences(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Could not read file:", err);
            return;
        }

        // Normalize the text by converting it to lowercase and removing non-alphabetic characters
        const words = data.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/);

        // Count occurrences of each word
        const wordCounts = words.reduce((counts, word) => {
            if (word) {
                counts[word] = (counts[word] || 0) + 1;
            }
            return counts;
        }, {});

        // Sort the words by frequency of occurrence
        const sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

        // Get the top 10 most common words
        const top10Words = sortedWords.slice(0, 10);

        // Output the top 10 most common words
        console.log("Top 10 most common words:");
        top10Words.forEach(([word, count]) => {
            console.log(`${word}: ${count}`);
        });
    });
}

// Path to the text file
const filePath = path.join(__dirname, 'sample.txt');

// Call the function with the file path
countWordOccurrences(filePath);