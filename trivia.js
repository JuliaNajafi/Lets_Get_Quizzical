$(document).ready(function(){


//arrays for movie questions and answers
// var movieQuestions = ["I love the smell of napalm in the morning",
// "A boy's best friend is his mother",
// "I ate his liver with some fava beans and a nice Chianti!",
// "Here's looking at you, kid",
// "You had me at hello",
// "The greatest trick the devil ever pulled was convincing the world he didn't exist",
// "As if!",
// "Oh, he was a little guy... Kinda funny lookin'.",
// "I have nipples, Greg. Could you milk me",
// "I'm pretty sure there's a lot more to life than being really, really good looking. And I plan on finding out what that is"];

// var movieAnswers = ["Apocalypse Now", "Psycho", "The Silence of the Lambs", "Casablanca",
// "Jerry Maguire", "The Usual Suspects", "Clueless", "Fargo", "Meet the Parents",
// "Zoolander"];

var movieQuestions = ["I love the smell of napalm in the morning",
"A boy's best friend is his mother"];
var movieAnswers = ["Apocalypse Now", "Psycho"]

var userScore =0;
var i =0;

$("#movies").on("click", movieCategory);

  function movieCategory (){
    // $(".question").html(movieQuestions[0] +
    //   "<input class='input' id='input' type='text' placeholer='enter an amount' />" +
    //   "<button class='input' id='submit'>Submit</button>");
    $(".question").append("<h2>Name the movie from the quote provided</h2>");
    $(".question").append("<div id='scoreBox'>0/10</div>")
    $(".question").append("<p></p>");
    $(".question").append(movieQuestions[i]);
    $(".question").append("<p></p>");
    $(".question").append("<input class='input' id='input' type='text' placeholer='enter an amount' />");
    $(".question").append("<button class='input' id='submit'>Submit</button>");

    $("#submit").on("click", function(){
      var userAnswer = $(".input").val();
      if (userAnswer === movieAnswers[i]){
      i++;
      $(".question").empty();
      userScore++;   //SCORING DOES NOT WORK
      $(".question #scoreBox").html(userScore + "/10");

        if (i < movieQuestions.length){  // this also does not work
          movieCategory();
        }
        else {
          alert("end of movie quiz");

        }
      }
      else {
        alert("Sorry, try again");
      } // end of else statement

    }) //end of submit function
  } // end of function movieCategory








})//end of ready function
