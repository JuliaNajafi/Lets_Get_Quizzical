$(document).ready(function(){

  var categories = {
    movies: [
      {question: "(1) 'I love the smell of napalm in the morning'", answer: "apocalypse now" },
      {question: "(2) 'A boy's best friend is his mother'", answer: "psycho" },
    ],
    geography: [
      {question: "(1) In which country is the Blarney Stone?", answer: "ireland"},
      {question: "(2) The city of Cairo in Egypt is generally accepted to have the oldest of what type of institution in the world?", answer: "university"},
    ],
    current: [
      {question: "(1) What does ISIL stand for?", answer: "islamic state of iraq and the levant"},
      {question: "(2) Who is the Green Party candidate for the upcoming U.S. presidential election?", answer:"jill stein"},
    ]
  }

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

  // refers to all category buttons generally
  var categoryButton = $(".categories button");

  //for timing countdown
  var timerId;
  var seconds = 30;
  var timerIsAlreadyRunning = false;


  //for scoring on each question
  var userScore =0;
  var i =0;

  //start the timer
  //categoryButton.on("click", startTimer);


  $(".categories button").on("click", categoryClick);

  function categoryClick (){
    var category = $(this).attr("id");
    $(".question").empty();
    appendQuestion(category);
    stopTimer();
    startTimer();

    function startTimer(){
      if (timerIsAlreadyRunning == false){
        timerId = setInterval(function(){
        if (seconds > 0){
          seconds -=1;
          $("#time").text(" " + seconds + " s");
        }
        else {
          console.log("timer ran out!");
          seconds = 30;
          clearInterval(timerId);
          $(".question").append("<p></p>");
          $(".question").append("<button id='skip'>Skip</button>");
          alert("Sorry, you ran out of time, please press 'Skip' to proceed.");
          $("#skip").on("click" , function(){
            i++;
            $(".question").empty();
            $("#" + category).trigger("click");
            stopTimer();
            startTimer();
          })
        } //end of else statement
      }, 1000) //end of setInterval function
      timerIsAlreadyRunning = true;
      } //end of  if timerisRunning
    } //end of stsrtTime function


    $("#submit").on("click", function(){
      var userAnswer = $(".input").val();
      if (userAnswer === categories[category][i].answer){
        i++;
        $(".question").empty();   //clears all that was appended
        userScore++;

        if (i < categories[category].length){
          $("#" + category).trigger("click");
          stopTimer();
          startTimer();
        }
        else {
          $(".question").empty();
          $(".question").append("<h2>You have reached the end of this quiz!</p>");
          $(".question").append("<p2> Your Score: "+ userScore + "/10</p2>");
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
          $("#" + category).trigger("click");
          stopTimer();
          startTimer();
        })
      } // end of else statement
    }) //end of submit function


  } // end of function CategoryClick



  //function append movie questions
  function appendQuestion(category){
    $(".question").append("<div class='scoreTime' id='scoreBox'>"+userScore+"/10"+"</div>")
    $(".question").append("<div class='scoreTime' id='time'>30 s</div>");
    $(".question").append("<p></p>");
    $(".question").append("<p></p>");
    $(".question").append("<h2>Directions: name the movie from the quote provided</h2>");
    $(".question").append("<p></p>");
    $(".question").append(categories[category][i].question);
    $(".question").append("<p></p>");
    $(".question").append("<input class='input' id='input' type='text' />");
    $(".question").append("<button class='input' id='submit'>Submit</button>");
  }




  // start timing function
  // function startTimer(){
  //   if (timerIsAlreadyRunning == false){
  //     timerId = setInterval(function(){
  //     if (seconds > 0){
  //       seconds -=1;
  //       $("#time").text(" " + seconds + " s");
  //     }
  //     else {
  //       console.log("timer run out!");
  //       clearInterval(timerId);
  //       $(".question").append("<p></p>");
  //       $(".question").append("<button id='skip'>Skip</button>");
  //       alert("Sorry, you ran out of time, please press 'Skip' to proceed.");
  //       $("#skip").on("click" , function(){
  //         i++;
  //         $(".question").empty();
  //         $("#" + category).trigger("click");
  //         stopTimer();
  //         startTimer();
  //       })
  //     } //end of else statement
  //   }, 1000) //end of setInterval function
  //   timerIsAlreadyRunning = true;
  //   } //end of  if timerisRunning
  // } //end of stsrtTime function


  //stop timing function
  function stopTimer(){
    clearInterval(timerId);
    seconds = 30;
    timerIsAlreadyRunning = false;
  }




})//end of ready function
