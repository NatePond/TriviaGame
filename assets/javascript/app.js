var correct = 0;

var incorrect = 0;

var intervalId;



window.onload = function() {
  timer.start();
  game.game1();
  var audio = new Audio("assets/PendulumOtherSide.mp3");
  audio.play();
  audio.loop = true;
};



var game = {
  count: 1,
  gamemeta: function() {
    game.counter();
    count2 = game.count - 1;
    var gar = "t" + count2;
    if ($(this).attr("id")[1] == game.correctAns) {
      correct++;
      timer.stop();
      content.hideOld();
      content.thatsCorrect();
      $("#content").append(substance[gar].correctAns + "<br><br>");
      $("#content").append("<img id='bgame" + count2 + "' src='assets/images/bgame" + count2 + ".gif'>" +"<br><br>");
      $("#content").append("<img id='game" + count2 + "' src='assets/images/game" + count2 + ".gif'>" +"<br><br>");
    } else {
      incorrect++;
      timer.stop();
      content.hideOld();
      content.thatsIncorrect();
      $("#content").append(substance[gar].correctAns + "<br><br>");
      $("#content").append("<img id='bgame" + count2 + "' src='assets/images/bgame" + count2 + ".gif'>" +"<br><br>");
      $("#content").append("<img id='game" + count2 + "' src='assets/images/game" + count2 + ".gif'>" +"<br><br>");
    }
    game["game" + game.count]();
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
    $(".btn").on("click", function() {
      timer.count = false;
      if ($(this).attr("id")[1] == game.correctAns) {
        game.game6();
        $("#content").append("Hey you got it correct. . . Good for you, getting this answer: " + "<br>");
        $("#content").append(substance.t5.correctAns + "<br><br>");
        $("#content").append("<img id='bgame" + 5 + "' src='assets/images/bgame" + 5 + ".gif'>");
        $("#content").append("<img id='game" + 5 + "' src='assets/images/game" + 5 + ".gif'>")
      } else {
        game.game6();
        $("#content").append("I'm sorry the correct answer was: " + "<br>");
        $("#content").append(substance.t5.correctAns + "<br><br>");
        $("#content").append("<img id='bgame" + 5 + "' src='assets/images/bgame" + 5 + ".gif'>");
        $("#content").append("<img id='game" + 5 + "' src='assets/images/game" + 5 + ".gif'>");
      }
    })
    content.newDisplay = false;
  },

  game6: function() {
    $("#content").html("Yay it's over!");
    $("#content").append("<div> Correct: " + correct + "</div>");
    $("#content").append("<div> Incorrect: " + incorrect + "</div>")
    $("#content").append("<div id='newGame' class='btn btn-secondary btn-lg btn-block'> Continue?</div>")
    $("#newGame").on("click", function() {
      correct = 0;
      incorrect = 0;
      game.count = 1;
      timer.count = function() {
        timer.time--;
        $("#timer").html("Remaining Time: " + timer.time + " seconds");
        if (timer.time == 0) {
          count3 = game.count + 1;
          count2 = game.count - 1;
          var gar = "t" + game.count;
          clearInterval(intervalId);
          timer.stop();
          content.hideOld();
          game["game" + count3]();
          $("#content").html("I'm sorry but you're out of time. The correct answer is: " + "<br>")
          $("#content").append(substance[gar].correctAns + "<br><br>")
          $("#content").append("<img id='bgame" + count2 + "' src='assets/images/bgame" + count2 + ".gif'>" +"<br><br>");
          $("#content").append("<img id='game" + count2 + "' src='assets/images/game" + count2 + ".gif'>" +"<br><br>");
          $("#content").show(800);
          $("#answers").hide();
          clearInterval(intervalId);
          timer.restart();
          timer.stop();
          game.counter();
          setTimeout(content.newDisplay, 6000)
        }
      };
      game.game1();
      content.newDisplay = function() {
        $("#content").hide(400);
        $("#answers").show(400);
        $("#question").show(400);
      };
      timer.count();
      content.newDisplay();
    })
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
      count2 = game.count;
      count3 = game.count + 1;
      var gar = "t" + game.count;
      clearInterval(intervalId);
      timer.stop();
      content.hideOld();
      game["game" + count3]();
      $("#content").html("I'm sorry but you're out of time. The correct answer is: " + "<br>")
      $("#content").append(substance[gar].correctAns + "<br><br>")
      $("#content").append("<img id='bgame" + count2 + "' src='assets/images/bgame" + count2 + ".gif'>" +"<br><br>");
      $("#content").append("<img id='game" + count2 + "' src='assets/images/game" + count2 + ".gif'>" +"<br><br>");
      $("#content").show(800);
      $("#answers").hide();
      clearInterval(intervalId);
      timer.restart();
      timer.stop();
      game.counter();
      setTimeout(content.newDisplay, 6000)
    }
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
    question: "Which of the following is not evidence of the influence of french philosopher Jean Baudrillard's influence on the Matrix triology?",
    correctAns: "Themes of Western Buddhism",
    incorrectAns: ["Morpheus' quote 'Welcome to the Desert of the Real'", "Mr. Anderson hiding data software in a copy of Simulations and<br> Simulacrum", "Apocryphyal predictions of an  future resulting from AI", "An inditment of consumer existence under capitalist society"]
  },
  t2: {
    question: "Blade Runner is based off of which Philip K Dick book?",
    correctAns: "Do Androids Dream of Electric Sheep?",
    incorrectAns: ["A Scanner Darkly", "Ubik", "Time Out of Joint", "The Simulacra"]
  },
  t3: {
    question: "Which themeatic element does not occur in any of the Ghost In the Shell cannon?",
    correctAns: "Questioning the authenticity of one's soul, or ghost in the husk<br> of a artifical body because of the amenisa resulting<br> from transference",
    incorrectAns: ["Conflicts between main land Japanese identity and outsiders<br> from within and refgufes without", "Questions of the integrity of individuality in a time where<br> consciousnesses are merged or left in limbo on the web", "The inevitable and unintentional emergence of copycat like that<br> results of a highly technologized society, also known as Stand Alone<br> Complex", "The often hidden or suppressed medical and political horrors<br> hidden beneath the surface of a cybernetic utopia"]
  },
  t4: {
    question: "Which of the follow is a lie about William Gibson's Neuromancer?",
    correctAns: "'Neuromancer' is the primary benefactor helping the protagonist<br> Hard Case crack the code to get access to the artifical<br> intelligence known as 'Wintermute'",
    incorrectAns: ["It is implied that there is Artifical Intelligence in other parts<br> of the Galaxy and that these entities have taken on the persona<br> of Voodoo gods", "Case's employers removed his ability to get high off of cocaine<br> and amphetamine in order to keep him focused on his mission.<br> Eventually he is provided betaphenethylamine which seems to be a<br> narcotic which his liver can process", "The book takes place in Japan, a growing California Sprawl,<br> Constnobul, and a Spindel in Outer Space", "3Jane is a late generation clone of the daughter of the<br> Tassier-Ashpool dynasty"]
  },
  t5: {
    question: "In Terry Gilliam's Zero Theorem what is the main purpose of Qohen Leth's use of the Neural Net Mancive?",
    correctAns: "To prove the Zero Theorem, rendering all life meaningless and<br> making 0 = 100%",
    incorrectAns: ["To connect the timelines of this film with those in<br> 12 Monkeys and Brazil", "To find the meaning of life", "To cure Qohen of his social anxiety, and restore his sense of<br> belonging in an alienated society", "To break through problems created around<br> the Big Crunch theory"]
  }
}

