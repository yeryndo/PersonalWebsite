var happyQuotes = [
  "“Don't cry because it's over, smile because it happened.” ― Dr. Seuss",
  "“Time you enjoy wasting is not wasted time.” ― Marthe Troly-Curtin, Phrynette Married",
  "“Happiness is when what you think, what you say, and what you do are in har",
  "“You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.” ― Albert Camus",
  "“There's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons.” ― Stephen Chbosky, The Perks of Being a Wallflower",
  "“Happiness is not something ready made. It comes from your own actions.” ― Dalai Lama XIV",
  "“Count your age by friends, not years. Count your life by smiles, not tears.” ― John Lennon",
  "“They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.” ― Tom Bodett",
  "“The most important thing is to enjoy your life—to be happy—it's all that matters.” ― Audrey Hepburn",
  "“You cannot protect yourself from sadness without protecting yourself from happiness.” ― Jonathan Safran Foer",
  "“No medicine cures what happiness cannot.” ― Gabriel García Márquez",
  "“Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.” ― Marcel Proust",
  "“You can't be happy unless you're unhappy sometimes.” ― Lauren Oliver, Delirium",
  "“Sanity and happiness are an impossible combination.” ― Mark Twain",
  "“Success is getting what you want, happiness is wanting what you get” ― W. P. Kinsella",
  "“Happiness [is] only real when shared” ― Jon Krakauer, Into the Wild",
  "“Learn to value yourself, which means: fight for your happiness.” ― Ayn Rand",
  "“The happiness of your life depends upon the quality of your thoughts.” ― Marcus Aurelius, Meditations",
  "“Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.” ― Steve Maraboli",
  "“The advantage of a bad memory is that one enjoys several times the same good things for the first time.” ― Friedrich Nietzsche"
]

function newHQuote() {
  var randomNumber = Math.floor(Math.random() * happyQuotes.length));
  return happyQuotes[randomNumber];
}
document.getElementByID('clickMe').onclick = newHQuote();

var el = document.getElementByID("clickMe");
if (el.addEventListener)
el.addEventListener("click", newHQuote(), false);
else if (el.attachEvent)
el.attachEvent('onclick', newHQuote());
