$(document).ready(function() {
    var quotes = {
        '1': {
            quote: 'I\'ve never thought I wanted to quit in my research. I would always fail in experiments, which I did at least three times a day.',
            author: 'Hiroshi Amano'
        },
        '2': {
            quote: 'God used beautiful mathematics in creating the world.',
            author: 'Paul Dirac'
        },
        '3': {
            quote: 'There are two possible outcomes: if the result confirms the hypothesis, then you\'ve made a measurement. If the result is contrary to the hypothesis, then you\'ve made a discovery.',
            author: 'Enrico Fermi'
        },
        '4': {
            quote: 'Natural science, does not simply describe and explain nature, it is part of the interplay between nature and ourselves.',
            author: 'Werner Heisenberg'
        },
        '5': {
            quote: 'Reason we call that faculty innate in us of discovering laws and applying them with thought.',
            author: 'Hermann von Helmholtz'
        },
        '6': {
            quote: 'It\'s nice to be right sometimes.',
            author: 'Peter Higgs'
        },
        '7': {
            quote: 'Unforeseen surprises are the rule in science, not the exception. Remember: Stuff happens.',
            author: 'Leonard Susskind'
        },
        '8': {
            quote: 'Every great and deep difficulty bears in itself its own solution. It forces us to change our thinking in order to find it.',
            author: 'Niels Bohr'
        },
        '9': {
            quote: 'Technology is a gift of God. After the gift of life it is perhaps the greatest of God\'s gifts. It is the mother of civilizations, of arts and of sciences.',
            author: 'Freeman Dyson'
        },
        '10': {
            quote: 'Peace cannot be kept by force, it can only be achieved by understanding.',
            author: 'Albert Einstein'
        },
    };

    $('.generator').click(function() {
        quoteGen();
    });

    function quoteGen() {
        var min = 1;
        var max = 10;
        var quoteNum = Math.floor(Math.random() * (max - min)) + min + "";
        var quote = quotes[quoteNum].quote;
        var author = quotes[quoteNum].author;

        $(".quote").text(quote);
        $(".author").text(author);

        var url = "https://twitter.com/intent/tweet?button_hashtag=lamsbeg&text=" + encodeURIComponent(quote + author);
        $(".twitter").attr("href", url);
    }
});
