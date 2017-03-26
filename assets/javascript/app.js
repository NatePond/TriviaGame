var correct = 0;

var incorrect = 0;

var intervalId;


window.onload = function() {
  timer.start();
  game.game1();

};

var game = {
  count: 1,
  gamemeta: function() {
    game.counter();
    if ($(this).attr("id")[1] == game.correctAns) {
      correct++;
      // timer.restart();
      timer.stop();
      content.hideOld();
      content.thatsCorrect();
      $("#content").append(game.correctAns)
    } else {
      incorrect++;
      // timer.restart();
      timer.stop();
      content.hideOld();
      content.thatsIncorrect();
         $("#content").append(game.correctAns)
    }
    game["game" + game.count]();
    console.log("wr" + incorrect)
    console.log("ri" + correct)

  },

  counter: function() {
    this.count++
  },

  game1: function() {
    time = 30;
    this.correctAns = 2;
    $("#question").html(substance.t1.question);
    $("#a1").html("1 . " + substance.t1.incorrectAns[0]);
    $("#a2").html("2 . " + substance.t1.correctAns);
    $("#a3").html("3 . " + substance.t1.incorrectAns[1]);
    $("#a4").html("4 . " + substance.t1.incorrectAns[2]);
    $("#a5").html("5 . " + substance.t1.incorrectAns[3]);
  },

  game2: function() {
    this.correctAns = 1;
    $("#question").html(substance.t2.question);
    $("#a2").html("2 . " + substance.t2.incorrectAns[0]);
    $("#a1").html("1 . " + substance.t2.correctAns);
    $("#a3").html("3 . " + substance.t2.incorrectAns[1]);
    $("#a4").html("4 . " + substance.t2.incorrectAns[2]);
    $("#a5").html("5 . " + substance.t2.incorrectAns[3]);
  },

  game3: function() {
    this.correctAns = 4;
    $("#question").html(substance.t3.question);
    $("#a1").html("1 . " + substance.t3.incorrectAns[0]);
    $("#a4").html("4 . " + substance.t3.correctAns);
    $("#a3").html("3 . " + substance.t3.incorrectAns[1]);
    $("#a2").html("2 . " + substance.t3.incorrectAns[2]);
    $("#a5").html("5 . " + substance.t3.incorrectAns[3]);
  },

  game4: function() {
    this.correctAns = 3;
    $("#question").html(substance.t4.question);
    $("#a1").html("1 . " + substance.t4.incorrectAns[0]);
    $("#a3").html("3 . " + substance.t4.correctAns);
    $("#a2").html("2 . " + substance.t4.incorrectAns[1]);
    $("#a4").html("4 . " + substance.t4.incorrectAns[2]);
    $("#a5").html("5 . " + substance.t4.incorrectAns[3]);
  },

  game5: function() {
    this.correctAns = 5;
    $("#question").html(substance.t5.question);
    $("#a1").html("1 . " + substance.t5.incorrectAns[0]);
    $("#a5").html("5 . " + substance.t5.correctAns);
    $("#a3").html("3 . " + substance.t5.incorrectAns[1]);
    $("#a4").html("4 . " + substance.t5.incorrectAns[2]);
    $("#a2").html("2 . " + substance.t5.incorrectAns[3]);
  },

  game6: function() {
    timer.stop();

    $("#content").html("Yay it's over!");
    $("#content").append("<div> Correct: " + correct + "</div>");
    $("#content").append("<div> Incorrect: " + incorrect + "</div>" )
    $("#content").append("<div class='btn btn-secondary btn-lg btn-block'> Continue?</div>")
    correct = 0;
    incorrect = 0;
    game.count = 0;
    this.game1();
    console.log(game[("game" + game.count)])

  }

};

$(".btn").click(game.gamemeta);




var timer = {

  time: 30,

  start: function() {

    intervalId = setInterval(timer.count, 1000);

  },

  restart: function() {
    clearInterval(intervalId);
    timer.time = 30;
    $("#timer").html("Remaining Time: " + timer.time + " seconds");

    setTimeout(timer.start, 1000 * 5)
  },

  stop: function() {
    clearInterval(intervalId);
  },

  count: function() {

    timer.time--;



    $("#timer").html("Remaining Time: " + timer.time + " seconds");

    if (timer.time == 0) {
      clearInterval(intervalId);
      timer.stop();
      $("#answers").html("I'm sorry but you're out of time. The correct answer is: " + "correctAnswer")
      timer.restart();
      game.gamemeta();
    }

    this.game[("game" + game.count)]();
  }


};

var content = {

  hideOld: function() {
    $("#answers").hide(400);
    $("#content").hide(400);
    $("#question").hide(400);
  },


  thatsCorrect: function() {
    $("#content").html("Hey you got it correct. . . Good for you, getting this answer: " + "<br>");
    $("#content").show(800);
    $("#answers").hide();
    clearInterval(intervalId);
    timer.restart();
    timer.stop();
    setTimeout(content.newDisplay, 6000);
  },

  newDisplay: function() {

    $("#content").hide(400);
    $("#answers").show(400);
    $("#question").show(400);
  },

  thatsIncorrect: function() {
    $("#content").html("I'm sorry the correct answer was:" + "<br>");
    $("#content").show(800);
    $("#answers").hide();
    clearInterval(intervalId);
    timer.restart();
    timer.stop();
    setTimeout(content.newDisplay, 6000)
  }
};

var substance = {

  t1: {
    question: "ques1",
    correctAns: "corr1",
    incorrectAns: ["incorra", "incorr2", "incorr3", "incorr4"]
  },

  t2: {
    question: "ques2",
    correctAns: "corr2",
    incorrectAns: ["incorr1", "incorr2", "incorr3", "incorr4"]
  },

  t3: {
    question: "ques3",
    correctAns: "corr3",
    incorrectAns: ["incorr1", "incorr2", "incorr3", "incorr4"]
  },

  t4: {
    question: "ques4",
    correctAns: "corr4",
    incorrectAns: ["incorr1", "incorr2", "incorr3", "incorr4"]
  },

  t5: {
    question: "ques5",
    correctAns: "corr5",
    incorrectAns: ["incorr1", "incorr2", "incorr3", "incorr4"]
  }

}
