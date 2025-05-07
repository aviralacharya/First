// inspirationGenerator.ts
type Mood = " Bold" | "🌿 Calm" | " Insightful" | " Focused" | " Uplifting";

interface Quote {
  text: string;
  author: string;
  mood: Mood;
}

const quotes: Quote[] = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    mood: "💡 Insightful",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    mood: " Bold",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    mood: " Calm",
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

function getRandomQuote(): Quote {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function displayQuote(quote: Quote): void {
  console.log(`\n Mood: ${quote.mood}`);
  console.log(`"${quote.text}"`);
  console.log(`— ${quote.author}\n`);
}

// Run it
displayQuote(getRandomQuote());
