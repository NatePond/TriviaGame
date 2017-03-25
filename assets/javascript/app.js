var correct = 0;

var incorrect = 0;

var intervalId;

window.onload = function() {
  // timer.start();
  game.gameset();


  // $(".btn").on("click", timer.restart);
  // $(".btn").on("click", timer.stop);
  // $(".btn").on("click", timer.start);
  // $(".btn").on("click", content.hideOld);
  // $(".btn").on("click", content.thatsCorrect);


};

var game = {
  gameset: function() {
    time = 30;

    $("#question").html(substance.t1.question);
    $("#a1").html(substance.t1.incorrectAns[0]);
    $("#a2").html(substance.t1.correctAns);
    $("#a3").html(substance.t1.incorrectAns[1]);
    $("#a4").html(substance.t1.incorrectAns[2]);
    $("#a5").html(substance.t1.incorrectAns[3]);

    $(".btn").click(function(event) {
      console.log(this.id[1])


      if (this.id[1] == 2) {
        correct++;
        // timer.restart();
        timer.stop();
        content.hideOld();
        content.thatsCorrect();
        game.game2();
      } else {
        incorrect++;
        // timer.restart();
        timer.stop();
        content.hideOld();
        content.thatsIncorrect();
      }

      console.log("wr" + incorrect)
      console.log("ri" + correct)
    });

  },

  game2: function() {
    $("#question").html(substance.t2.question);
    $("#a1").html(substance.t2.incorrectAns[0]);
    $("#a2").html(substance.t2.correctAns);
    $("#a3").html(substance.t2.incorrectAns[1]);
    $("#a4").html(substance.t2.incorrectAns[2]);
    $("#a5").html(substance.t2.incorrectAns[3]);

    $(".btn").click(function(event) {
      console.log(this.id[1])


      if (this.id[1] == 2) {
        correct++;
        // timer.restart();
        timer.stop();
        content.hideOld();
        content.thatsCorrect();
      } else {
        incorrect++;
        // timer.restart();
        timer.stop();
        content.hideOld();
        content.thatsIncorrect();
      }
      game.game3();
      console.log("wr" + incorrect)
      console.log("ri" + correct)
    });
  },

  game3: function() {
    $("#question").html(substance.t3.question);
    $("#a1").html(substance.t3.incorrectAns[0]);
    $("#a2").html(substance.t3.correctAns);
    $("#a3").html(substance.t3.incorrectAns[1]);
    $("#a4").html(substance.t3.incorrectAns[2]);
    $("#a5").html(substance.t3.incorrectAns[3]);
    $(".btn").click(function(event) {
      console.log(this.id[1])


      if (this.id[1] == 2) {
        correct++;
        // timer.restart();
        timer.stop();
        content.hideOld();
        content.thatsCorrect();
      } else {
        incorrect++;
        // timer.restart();
        timer.stop();
        content.hideOld();
        content.thatsIncorrect();
      }
      game.game4();
      console.log("wr" + incorrect)
      console.log("ri" + correct)
    });
  },

  game4: function() {
    clearInterval(intervalId);
    $("#question").html(substance.t4.question);
    $("#a1").html(substance.t4.incorrectAns[0]);
    $("#a2").html(substance.t4.correctAns);
    $("#a3").html(substance.t4.incorrectAns[1]);
    $("#a4").html(substance.t4.incorrectAns[2]);
    $("#a5").html(substance.t4.incorrectAns[3]);
    $(".btn").click(function(event) {
      console.log(this.id[1])
      console.log(this)

      if (this.id[1] == 2) {
        correct++;
        // timer.restart();
        timer.stop();
        content.hideOld();
        content.thatsCorrect();
      } else {
        incorrect++;
        // timer.restart();
        timer.stop();
        content.hideOld();
        content.thatsIncorrect();
      }
      game.game5();
      console.log("wr" + incorrect)
      console.log("ri" + correct)
    });
  },

  game5: function() {
    $("#question").html(substance.t5.question);
    $("#a1").html(substance.t5.incorrectAns[0]);
    $("#a2").html(substance.t5.correctAns);
    $("#a3").html(substance.t5.incorrectAns[1]);
    $("#a4").html(substance.t5.incorrectAns[2]);
    $("#a5").html(substance.t5.incorrectAns[3]);
    $(".btn").click(function(event) {
      console.log(this.id[1])


      if (this.id[1] == 2) {
        correct++;
        // timer.restart();
        timer.stop();
        content.hideOld();
        content.thatsCorrect();
      } else {
        incorrect++;
        // timer.restart();
        timer.stop();
        content.hideOld();
        content.thatsIncorrect();
      }
      game.gameFinale();
      console.log("wr" + incorrect)
      console.log("ri" + correct)
    });
  },

  gameFinale: function() {

    content.hideOld();


  }

};



var timer = {

  // time: 30,

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
    }

  }


};

var content = {

  hideOld: function() {
    $("#answers").hide(400);
    $("#content").hide(400);

  },


  thatsCorrect: function() {
    $("#content").html("Hey you got it correct. . . Good for you, getting this answer: " + "<br>" + "correct answer");
    $("#content").show(400);
    $("#answers").hide(800);
    timer.restart();
    timer.stop();
    setTimeout(content.newDisplay, 6000)
  },

  newDisplay: function() {

    $("#content").hide(400);
    $("#answers").show(400);
  },

  thatsIncorrect: function() {
    $("#content").html("I'm sorry the correct answer was:" + "<br>" + "correct answer");
    $("#content").show(400);
    $("#answers").hide(800);
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

// setTimeout(content.thatsCorrect, 1000*5)

// setTimeout(content.thatsIncorrect, 1000*5)
