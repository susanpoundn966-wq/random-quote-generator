












const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Everything you’ve ever wanted is sitting on the other side of fear.",
    author: "George Addair"
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln"
  }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const copyBtn = document.getElementById('copy');
const tweetBtn = document.getElementById('tweet');

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  const { quote, author } = getRandomQuote();
  
  // Animation effect
  quoteElement.style.opacity = 0;
  authorElement.style.opacity = 0;

  setTimeout(() => {
    quoteElement.textContent = `"${quote}"`;
    authorElement.textContent = `- ${author}`;
    
    quoteElement.style.opacity = 1;
    authorElement.style.opacity = 1;
  }, 300);
}

newQuoteBtn.addEventListener('click', displayQuote);

copyBtn.addEventListener('click', () => {
  const text = `${quoteElement.textContent} ${authorElement.textContent}`;
  navigator.clipboard.writeText(text).then(() => {
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 2000);
  });
});

tweetBtn.addEventListener('click', () => {
  const text = encodeURIComponent(
    `${quoteElement.textContent} ${authorElement.textContent} #QuoteVault`
  );
  window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
});

// Initialize with a random quote
displayQuote();
