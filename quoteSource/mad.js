var madQuotes = [
  "“For every minute you are angry you lose sixty seconds of happiness.” ― Ralph Waldo Emerson",
  "“The weak can never forgive. Forgiveness is the attribute of the strong.” ― Mahatma Gandhi, All Men are Brothers: Autobiographical Reflections",
  "“To be a Christian means to forgive the inexcusable because God has forgiven the inexcusable in you.” ― C.S. Lewis",
  "“The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward.” ― Steve Maraboli, Unapologetically You: Reflections on Life and the Human Experience",
  "“Dumbledore says people find it far easier to forgive others for being wrong than being right.” ― J.K. Rowling, Harry Potter and the Half-Blood Prince,"
  "“Forgiveness is an act of the will, and the will can function regardless of the temperature of the heart.” ― Corrie Ten Boom",
  "“True forgiveness is when you can say, \"Thank you for that experience.” ― Oprah Winfrey",
  "“Every day you must unlearn the ways that hold you back. You must rid yourself of negativity, so you can learn to fly.” – Leon Brown",
]

function newMQuote() {
  var randomNumber = Math.floor(Math.random() * madQuotes.length));
  document.getElementByID('quoteDisplay').innerHTML = madQuotes[randomNumber];
}
