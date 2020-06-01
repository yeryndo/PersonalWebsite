
var happyQuotes = [
  {"quote": "Don\'t cry because it\'s over, smile because it happened.", "author":"― Dr. Seuss"},
  {"quote": "Time you enjoy wasting is not wasted time.", "author":"― Marthe Troly-Curtin, Phrynette Married"},
  {"quote": "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.", "author":"― Albert Camus"},
  {"quote": "Happiness is not something ready made. It comes from your own actions.", "author":"― Dalai Lama XIV"},
  {"quote": "There\'s nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons.", "author":"― Stephen Chbosky, The Perks of Being a Wallflower"},
  {"quote": "Count your age by friends, not years. Count your life by smiles, not tears.", "author":"― John Lennon"},
  {"quote": "They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.", "author":"― Tom Bodett"},
  {"quote": "The most important thing is to enjoy your life—to be happy—it\'s all that matters.", "author":"― Audrey Hepburn"},
  {"quote": "You cannot protect yourself from sadness without protecting yourself from happiness.", "author":"― Jonathan Safran Foer"},
  {"quote": "No medicine cures what happiness cannot.", "author":"― Gabriel García Márquez"},
  {"quote": "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.", "author":"― Marcel Proust"},
  {"quote": "You can\'t be happy unless you\'re unhappy sometimes.", "author":"― Lauren Oliver, Delirium"},
  {"quote": "Sanity and happiness are an impossible combination.", "author":"― Mark Twain"},
  {"quote": "Success is getting what you want, happiness is wanting what you get.", "author":"― W. P. Kinsella"},
  {"quote": "Happiness is only real when shared.", "author":"― Jon Krakauer, Into the Wild"},
  {"quote": "Learn to value yourself, which means: fight for your happiness.", "author":"― Ayn Rand"},
  {"quote": "The happiness of your life depends upon the quality of your thoughts.", "author":"― Marcus Aurelius, Meditations"},
  {"quote": "Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.", "author":"― Steve Maraboli"},  
  {"quote": "The advantage of a bad memory is that one enjoys several times the same good things for the first time.", "author":"― Friedrich Nietzsche"}
];


function newHQuote() {
  var rand = Math.floor(Math.random() * (happyQuotes.length));
  //document.getElementById('clickMe').innerHTML = happyQuotes[rand];
  document.getElementById('clickMeQuote').innerHTML = happyQuotes[rand].quote;
  document.getElementById('clickMeAuthor').innerHTML = happyQuotes[rand].author;
};
