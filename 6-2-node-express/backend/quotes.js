import { getRandomInt } from "./backend/utils/random.js";

const quotes = [
  "Talk is cheap. Show me the code.",
  "Simplicity is the soul of efficiency.",
  "Programs must be written for people to read, and only incidentally for machines to execute."
];

export function getRandomQuote() {
  const index = getRandomInt(quotes.length);
  return quotes[index];
}