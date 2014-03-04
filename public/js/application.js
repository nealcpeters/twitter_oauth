$(document).ready(function() {



  $('#tweet_stuff').on('submit', function(){

    var data = {tweet: $("#tweet").val()}

    $.post('/tweet', data, function(serverResponse){

      $(".container").empty();

      $(".container").append("Successfully tweeted!");

    })

  })


});
