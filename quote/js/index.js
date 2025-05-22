var quoteP = document.getElementById("quote");
var authorP = document.getElementById("author");

let quotesAuthors = [
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein"
    },

    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss"
    },

    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },

    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },

    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    },

    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi"
    },

    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    },

    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        author: "― Elbert Hubbard"
    },

    {
        quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author: "― Mahatma Gandhi"
    },

    {
        quote: "“Without music, life would be a mistake.”",
        author: "― Friedrich Nietzsche, Twilight of the Idols"
    },

    {
        quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
        author: "― Andre Gide, Autumn Leaves"
    },
]

var copyQuotesAuthors = [...quotesAuthors];

function getQuote() {
    if (copyQuotesAuthors.length === 0) {
        copyQuotesAuthors = [...quotesAuthors];
    }

    var arrayLength = copyQuotesAuthors.length;
    var randomNumber = Math.floor(Math.random() * arrayLength);
    
    quoteP.textContent = copyQuotesAuthors[randomNumber].quote;
    authorP.textContent = copyQuotesAuthors[randomNumber].author;
    
    copyQuotesAuthors.splice(randomNumber, 1);
    
};