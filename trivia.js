$(document).ready(function(){


//arrays for movie questions and answers
  var movieQuestions = ["(1) 'I love the smell of napalm in the morning'",
  "(2) 'A boy's best friend is his mother'",
  "(3) 'I ate his liver with some fava beans and a nice Chianti!'",
  "(4) 'Here's looking at you, kid'",
  "(5) 'You had me at hello'",
  "(6) 'The greatest trick the devil ever pulled was convincing the world he didn't exist'",
  "(7) 'As if!'",
  "(8) 'Oh, he was a little guy... Kinda funny lookin'.'",
  "(9) 'I have nipples, Greg. Could you milk me?'",
  "(10) 'I'm pretty sure there's a lot more to life than being really, really good looking. And I plan on finding out what that is'"];
  var movieAnswers = ["Apocalypse Now", "Psycho", "The Silence of the Lambs", "Casablanca",
  "Jerry Maguire", "The Usual Suspects", "Clueless", "Fargo", "Meet the Parents",
  "Zoolander"];

  var geoQuestions = ["(1) In which country is the Blarney Stone?",
  "(2) The city of Cairo in Egypt is generally accepted to have the oldest of what type of institution in the world?",
  "(3) Which is the least populated state in the USA?",
  "(4) Which capital city has the highest population?",
  "(5) What is the largest country in the world?",
  "(6) Half of the world's population lives near what body of water?",
  "(7) What is the world's only city located in two continents?",
  "(8) Which lake, the world's deepest, contains 1/5 of all the world's fresh water?",
  "(9) Which city hosts the headquarters of the EU?",
  "(10) From which country did the religion Zoroastrianism originate from?"];
  var geoAnswers = ["Ireland", "University", "Wyoming", "Tokyo", "Russia", "Pacific Ocean",
  "Istanbul", "Lake Baikal", "Brussels", "Iran"];

  var newsQuestions = ["(1) What does ISIL stand for?",
  "(2) Who is the Green Party candidate for the upcoming presidential election?",
  "(3) Which current member of the EU is debating an exit?",
  "(4) What is the popular term that refers to the complex web of censorship and surveillance governing the Chinese internet?",
  "(5) Who is Obama's Supreme Court nominee?",
  "(6) What is the name of the leaked documents that has ensnared some of the world's most prominent leaders, including Iceland's Prime Minister?",
  "(7) What is the name of the virus that is rapidly spreading through South and Central America?",
  "(8) Which celebrity recently died of an overdose?",
  "(9) Which country's sovereign wealth fund just invested in Uber?",
  "(10) What is the name of the billionaire who was revealed to be funding lawsuits against gossip site Gawker?"]
  var newsAnswers = ["Islamic State of Iraq and the Levant", "Jill Stein", "UK",
  "The Great Firewall", "Merrick Garland", "The Panama Papers", "Zika", "Prince",
  "Saudi Arabia", "Peter Thiel"]


  var userScore =0;
  var i =0;

  $("#movies").on("click", movieCategory);
  function movieCategory (){
    $(".question").empty();
    appendMovieQuestion();

    $("#submit").on("click", function(){
      var userAnswer = $(".input").val();
      if (userAnswer === movieAnswers[i]){
        i++;
        $(".question").empty();   //clears all that was appended
        userScore++;

        if (i < movieQuestions.length){
          movieCategory();
        }
        else {
          alert("end of movie quiz");
          i= 0;
          userScore= 0;
        }
      }
      else {
        alert("Sorry, try again");
        $(".question").append("<p></p>");
        $(".question").append("<button id='skip'>Skip</button>");
        $("#skip").on("click" , function(){
          i++;
          $(".question").empty();
          movieCategory();
        })
      } // end of else statement
    }) //end of submit function
  } // end of function movieCategory

  //if geo was clicked
  $("#geography").on("click", geoCategory);
  function geoCategory (){
    $(".question").empty();
    appendGeoQuestions();

    $("#submit").on("click", function(){
      var userAnswer = $(".input").val();
      if (userAnswer === geoAnswers[i]){
        i++;
        $(".question").empty();   //clears all that was appended
        userScore++;

        if (i < geoQuestions.length){
          geoCategory();
        }
        else {
          alert("end of geography quiz");
          i=0;
          userScore= 0;
        }
      }
      else {
        alert("Sorry, try again");
        $(".question").append("<p></p>");
        $(".question").append("<button id='skip'>Skip</button>");
        $("#skip").on("click" , function(){
          i++;
          $(".question").empty();
          geoCategory();
        })
      } // end of else statement
    }) //end of submit function
  } // end of function geoCategory


  //if News was clicked
  $("#current").on("click", newsCategory);
  function newsCategory (){
    $(".question").empty();
    appendNewsQuestions();

    $("#submit").on("click", function(){
      var userAnswer = $(".input").val();
      if (userAnswer === newsAnswers[i]){
        i++;
        $(".question").empty();   //clears all that was appended
        userScore++;

        if (i < newsQuestions.length){
          newsCategory();
        }
        else {
          alert("end of quiz");
          i=0;
          userScore= 0;
        }
      }
      else {
        alert("Sorry, try again");
        $(".question").append("<p></p>");
        $(".question").append("<button id='skip'>Skip</button>");
        $("#skip").on("click" , function(){
          i++;
          $(".question").empty();
          newsCategory();
        })
      } // end of else statement
    }) //end of submit function
  } // end of function newsCategory

  //function append geo questions
  function appendGeoQuestions(){
    $(".question").append("<div class='scoreTime' id='scoreBox'>"+userScore+"/10"+"</div>")
    $(".question").append("<div class='scoreTime' id='time'>1:00</div>");
    $(".question").append("<p></p>");
    $(".question").append("<h2>Directions: Write your answer in the space provided:</h2>");
    $(".question").append("<p></p>");
    $(".question").append(geoQuestions[i]);
    $(".question").append("<p></p>");
    $(".question").append("<input class='input' id='input' type='text' />");
    $(".question").append("<button class='input' id='submit'>Submit</button>");
  } //end of append function


  //function append movie questions
  function appendMovieQuestion(){
    $(".question").append("<div class='scoreTime' id='scoreBox'>"+userScore+"/10"+"</div>")
    $(".question").append("<div class='scoreTime' id='time'>1:00</div>");
    $(".question").append("<p></p>");
    $(".question").append("<h2>Directions: name the movie from the quote provided</h2>");
    $(".question").append("<p></p>");
    $(".question").append(movieQuestions[i]);
    $(".question").append("<p></p>");
    $(".question").append("<input class='input' id='input' type='text' />");
    $(".question").append("<button class='input' id='submit'>Submit</button>");
  }

  function appendNewsQuestions(){
    $(".question").append("<div class='scoreTime' id='scoreBox'>"+userScore+"/10"+"</div>")
    $(".question").append("<div class='scoreTime' id='time'>1:00</div>");
    $(".question").append("<p></p>");
    $(".question").append("<h2>Directions: Write your answer in the space provided:</h2>");
    $(".question").append("<p></p>");
    $(".question").append(newsQuestions[i]);
    $(".question").append("<p></p>");
    $(".question").append("<input class='input' id='input' type='text' />");
    $(".question").append("<button class='input' id='submit'>Submit</button>");
  }





})//end of ready function
