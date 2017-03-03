$(function() {

  generateNewQuote();

  $("#quotebtn").click(function() {

    generateNewQuote();

  });
});

function generateNewQuote() {

  var randomColor = "#000000".replace(/0/g, function() {
    return (~~(Math.random() * 16)).toString(16);
  });

  $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(data) {
    
    console.log(data.status);
    
    

    $("body").animate({
      "background-color": randomColor
    }, "slow", function() {

      $("body").css("background-color", randomColor);
    });
    
    $(".twitter-share-button").attr("href",'https://twitter.com/intent/tweet?text='+'"'+data.quoteText+'"'+"-"+data.quoteAuthor+"#quote");
    
    
    
    
    //console.log(data);
    $("#quote").fadeOut("slow", function() {
      $("#quote").html(data.quoteText).fadeIn();
      $("p").css("color", randomColor);
      $("#quotebtn,#tweetbtn").css("background-color", randomColor);
      //$("#tweeebtn").css("background-color", randomColor);
    })
    $("#author").fadeOut("slow", function() {
      $("#author").html("-" + data.quoteAuthor).fadeIn();
    })

  });

}