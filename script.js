document.addEventListener('DOMContentLoaded', function() {
  getQuote();
  document.getElementById("new-quote").addEventListener('click', function() {
    getQuote();
  });

});


function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

// var getQuote = function() {
function getQuote() {
  $.getJSON("https://big-okra.glitch.me/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(data) {
    var randomNum = randomIntFromInterval(0, data.length - 1);
    var quote = data[randomNum].content;
    var author = data[randomNum].title;
    $('.quote-content').html(quote);
    $('.quote-author').text(author);
  });
}
// };

var tweetQuote = function() {
    window.open("https://twitter.com/intent/tweet?text=" + $(".quote-content").text() + (' ') + $(".quote-author").text());
};
