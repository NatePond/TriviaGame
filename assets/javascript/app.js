var correct = 0;

var incorrect = 0;

window.onload = function() {
  // timer.start();

  // $(".btn").on("click", timer.reset);
  // $(".btn").on("click", timer.stop);
  // $(".btn").on("click", timer.start);
  $(".btn").on("click", content.correctAnswer);
};

var intervalId;

var timer = {

  time: 30,

  start: function() {

    intervalId = setInterval(timer.count, 1000);

  },

  reset: function() {

    timer.time = 30;
    $("#timer").html("Remaining Time: " + timer.time + " seconds");

  },

  stop: function() {

    // DONE: Use clearInterval to stop the count here.
    clearInterval(intervalId);
  },

  count: function() {

    timer.time--;

    var converted = timer.timeConverter(timer.time);
    console.log(converted);

    $("#timer").html(converted);

    if (timer.time == 0) {
      timer.reset();
    }
  },

  timeConverter: function(t) {

    
    var seconds = t 

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return "Remaining Time: " + seconds + " seconds";
  }
};

 

var content = {

  correctAnswer: function() {

    $("#answers").hide();

    $("answers")


  },

  
}

