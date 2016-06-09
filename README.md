Hello!

This game is called "Let's Get Quizzical". It is a trivia game that holds four
categories, with ten questions in each. Currently, that last category "Programming"
is currently under construction (will revisit later).

As a user, when you log on to this website, you are faced with four categories:
"Movies", "Geography", "In The News", and "Programming". You should choose one of
these categories to start the game by pressing on the desired button. When the
button is pressed, four things will appear: (1) a scoreboard - which starts with
"0/10," and increments when you answer a question correctly (2) a timer, which
starts the count off at 30 seconds, (3) the first trivia question, and (4) an
area to submit your answer.

Once the game starts, you will have 30 seconds to respond. Once the 30 seconds
are up, you will be forced to skip to the next question, and this question will be
marked wrong. When the next question appears, the timer will restart to 30 seconds.

To submit an answer, type in the input space. If you submit a wrong answer
and are within your time limit, you may re-submit a different question (within
the time limit) OR skip to the next question. If you skip to the next question,
the previous question will be marked WRONG. Also, if you do choose to skip a question,
you CANNOT go back to it!! If you submit a correct answer, the next question will
appear.

Once you have run through all the questions in the designated category, the
screen will turn green to indicate the end of the section. Here, you will be able
to see how well you faired on the 10 questions. From there, you may click on a different category, and start again.


Technologies Used and the Approach Taken

At first, I programmed each category separately, with each set of questions
and answers in different arrays. However, I was able to refactor my code by using
one object to contain all three categories, and each set of questions and answers.
Then, I was able create a general sequence of code that cycles through the questions
based on which button was clicked (using 'this'). If the user's answer was the same
as the correct answer, then the next question would appear.
    Programming languages used: Html, CSS, and Javascript.


Unsolved Problems

As of yet, the "Programming" category is still under construction. The hope is
that users will be able to submit their own questions and answers regarding
programming.
