$(document).ready(function(){

  var categories = {
    movies: [
      {question: "(1) 'I love the smell of napalm in the morning'", answer: "apocalypse now" },
      {question: "(2) 'A boy's best friend is his mother'", answer: "psycho" },
      {question: "(3) 'I ate his liver with some fava beans and a nice Chianti!'", answer: "the silence of the lambs"},
      {question: "(4) 'Here's looking at you, kid'", answer: "casablanca"},
      {question: "(5) 'You had me at hello'", answer: "jerry maguire"},
      {question: "(6) 'The greatest trick the devil ever pulled was convincing the world he didn't exist'", answer: "the usual suspects"},
      {question: "(7) 'As if!'", answer: "clueless"},
      {question: "(8) 'Oh, he was a little guy... Kinda funny lookin'.'", answer: "fargo"},
      {question: "(9) 'I have nipples, Greg. Could you milk me?'", answer: "meet the parents"},
      {question: "(10) 'I'm pretty sure there's a lot more to life than being really, really good looking. And I plan on finding out what that is'", answer: "zoolander"},
    ],
    geography: [
      {question: "(1) In which country is the Blarney Stone?", answer: "ireland"},
      {question: "(2) The city of Cairo in Egypt is generally accepted to have the oldest of what type of institution in the world?", answer: "university"},
      {question: "(3) Which is the least populated state in the USA?", answer: "wyoming" },
      {question: "(4) Which capital city has the highest population?", answer: "tokyo"},
      {question: "(5) What is the largest country in the world?", answer: "russia"},
      {question: "(6) Half of the world's population lives near what body of water?", answer: "pacific ocean"},
      {question: "(7) What is the world's only city located in two continents?", answer: "istanbul" },
      {question: "(8) Which lake, the world's deepest, contains 1/5 of all the world's fresh water?", answer: "lake baikal"},
      {question: "(9) Which city hosts the headquarters of the EU?", answer: "brussels"},
      {question: "(10) From which modern-day country did the religion Zoroastrianism originate from?", answer: "iran"},
    ],
    current: [
      {question: "(1) What does ISIL stand for?", answer: "islamic state of iraq and the levant"},
      {question: "(2) Who is the Green Party candidate for the upcoming U.S. presidential election?", answer:"jill stein"},
      {question: "(3) Which current member of the EU is debating an exit?", answer:"united kingdom"},
      {question: "(4) What is the popular term that refers to the complex web of censorship and surveillance governing the Chinese internet?", answer: "the great firewall"},
      {question: "(5) Who is Obama's Supreme Court nominee?", answer: "merrick garland"},
      {question: "(6) What is the name of the leaked documents that has ensnared some of the world's most prominent leaders, including Iceland's Prime Minister?", answer: "the panama papers"},
      {question: "(7) What is the name of the virus that is rapidly spreading through South and Central America?", answer: "zika virus"},
      {question: "(8) Which celebrity recently died of an overdose?", answer: "prince"},
      {question: "(9) Which country's sovereign wealth fund just invested in Uber?", answer: "saudi arabia"},
      {question: "(10) What is the name of the billionaire who was revealed to be funding lawsuits against gossip site Gawker?", answer: "peter thiel"},
    ]
  }



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

// Sean:  You can use 'this' function to eliminate all the mouseover repeats
  $("button#movies").on("mouseover", function(){
    $("p2#directionMovie").css("visibility", "visible");
  });
  $("button#movies").on("mouseleave", function(){
    $("p2#directionMovie").css("visibility", "hidden");
  })

  $("button#geography").on("mouseover", function(){
    $("p2#directionGeo").css("visibility", "visible");
  });
  $("button#geography").on("mouseleave", function(){
    $("p2#directionGeo").css("visibility", "hidden");
  });

  $("button#current").on("mouseover", function(){
    $("p2#directionCurrent").css("visibility", "visible");
  });
  $("button#current").on("mouseleave", function(){
    $("p2#directionCurrent").css("visibility", "hidden");
  });




  $(".categories button").on("click", categoryClick);


//Sean:  You have functions in side of a function.  Maybe we can break it up so it's easier for the reader to understand.
  function categoryClick (){
    $("div.question").css("visibility", "visible");
    $("#container").css("background-color", "rgb(244,52,64)");
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
          $("#container").css("background-color", "green");
          userScore= 0;
          stopTimer();
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
    //$(".question").append("<h2>Directions: name the movie from the quote provided</h2>");
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
