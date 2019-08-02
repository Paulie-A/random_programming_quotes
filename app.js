$(document).ready(function(done){
      
    var url = 'https://jsonp.afeld.me/?url=https://quotes.stormconsultancy.co.uk/random.json';
     function getQuote(){
      $.getJSON(url, function(data){
        $("#text").html('"'+(data.quote)+'"');
        $("#author").html('-' + " " +(data.author));
      });  
    };
    
    
    //function to generate new quote on click
    $("#new-quote").on("click", function(){
      getQuote();
      done();
    });
    
    
    //function to tweet quote on button click
    $("#tweet-quote").on("click", function(){
      var tweetQuote=$(".text").text() + $(".author").text();
   window.open("https://twitter.com/intent/tweet?text="+tweetQuote); 
    });
  });
    
  
  
  
  