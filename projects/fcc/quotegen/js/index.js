function quoteGen() {
  var quotes = [
    "I've never thought I wanted to quit in my research. I would always fail in experiments, which I did at least three times a day.",
    "God used beautiful mathematics in creating the world.",
    "There are two possible outcomes: if the result confirms the hypothesis, then you've made a measurement. If the result is contrary to the hypothesis, then you've made a discovery.",
    "Natural science, does not simply describe and explain nature, it is part of the interplay between nature and ourselves.",
    "Reason we call that faculty innate in us of discovering laws and applying them with thought.",
    "It's nice to be right sometimes.",
    "Unforeseen surprises are the rule in science, not the exception. Remember: Stuff happens.",
    "Every great and deep difficulty bears in itself its own solution. It forces us to change our thinking in order to find it.",
    "Technology is a gift of God. After the gift of life it is perhaps the greatest of God's gifts. It is the mother of civilizations, of arts and of sciences.",
    "Peace cannot be kept by force, it can only be achieved by understanding."
  ]
  var authors = [
    "Hiroshi Amano",
    "Paul Dirac",
    "Enrico Fermi",
    "Werner Heisenberg",
    "Hermann von Helmholtz",
    "Peter Higgs",
    "Leonard Susskind",
    "Niels Bohr",
    "Freeman Dyson",
    "Albert Einstein"
  ]
  var quoteNum;
  var min = 0;
  var max = 9;

  quoteNum = Math.floor(Math.random() * (max - min + 1)) + min;

  $(".quote").html(quotes[quoteNum]);
  $(".author").html(authors[quoteNum]);

  var url = "https://twitter.com/intent/tweet?button_hashtag=randquotmchn&text=" + quotes[quoteNum] + " " + authors[quoteNum];
  $(".twitter").attr("href", url);
}

$(document).ready(function() {
  $('.generator').click(function() {
    quoteGen();
  });
});