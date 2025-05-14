"use strict";
const quotes = [
    {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
        mood: " Insightful",
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs",
        mood: " Bold",
    },
    {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        mood: "Calm",
    },
    {
        text: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky",
        mood: " Focused",
    },
    {
        text: "Every day is a fresh start.",
        author: "Unknown",
        mood: " Uplifting",
    }
    
];
function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}
function displayQuote(quote) {
    console.log(`\n Mood: ${quote.mood}`);
    console.log(`"${quote.text}"`);
    console.log(`— ${quote.author}\n`);
}
displayQuote(getRandomQuote());
//# sourceMappingURL=random.js.map