    $(document).ready(function() {

      $("#start").click(function() {
        $("#page1").hide();
        $("#page2").show();
        timer.start()
      });

      $("#page2").hide();
      $("#page3").hide();

        //create 'done' button for when the user is done with the quiz
        //on click 'done' buutton:
        //.hide() page2 and .show() page3
        $("#done").click(function() {
          if (question1 != true){
            alert("Please answer all of the questions!");
          } 
          else if (question2 != true){
            alert("Please answer all of the questions!");
          } 
          else if (question3 != true) {
            alert("Please answer all of the questions!");
          }

          else if (question4 != true) {
            alert("Please answer all of the questions!");
          }
          else if (question5 != true) {
            alert("Please answer all of the questions!");
          }
          else if (question6 != true) {
            alert("Please answer all of the questions!");
          }
          else {
            $("#page2").hide();
            $("#page3").show();
          }
        })

        var correctAns = 0;
        var incorrectAns = 0;
        var unansweredQs = 0;
        var question1 = false;
        var question2 = false;
        var question3 = false;
        var question4 = false;
        var question5 = false;
        var question6 = false;



        var timer = {
          time:60,
          counter: null,

          start: function(){
        // DONE: Use setInterval to start the count here.
        timer.counter = setInterval(function(){
          timer.count();
        }, 1000);
      },

      count: function(){

        timer.time--;

        var converted = timer.timeConverter(timer.time);
        console.log(converted);

        $('#display').html(converted);
      },

      timeConverter: function(t){
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
          seconds = "0" + seconds;
        }
        if (minutes === 0){
          minutes = "00";
        } else if (minutes < 10){
          minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
      }
    };

//question #1
$('#presJFK').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question1 = true
  console.log("test")
})

$('#presGW').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question1 = true
  console.log("test")
})

$('#presTR').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question1 = true
  console.log("test")
})

$('#presAL').on('click', function() {
  correctAns++;
  $('#correct').html(correctAns);
  question1 = true
  console.log("test")
});


//question #2
$('#monWard').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question2 = true
  console.log("test")
})

$('#macys').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question2 = true
  console.log("test")
})

$('#gimbels').on('click', function() {
  correctAns++;
  $('#correct').html(correctAns);
  question2 = true
  console.log("test")
})

$('#jcPenney').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question2 = true
  console.log("test")
});

//question #3
$('#1933').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question3 = true
  console.log("test")
})

$('#1928').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question3 = true
})

$('#1924').on('click', function() {
  correctAns++;
  $('#correct').html(correctAns);
  question3 = true
})

$('#1941').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question3 = true
});


//question #4
$('#massasoit').on('click', function() {
  correctAns++;
  $('#correct').html(correctAns);
  question4 = true
  console.log("test")

})

$('#pemaquid').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question4 = true
})

$('#samoset').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question4 = true
})

$('#squanto').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question4 = true
});


//question #5
$('#nina').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question5 = true
  console.log("test")

})

$('#pinta').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question5 = true
})

$('#mayflower').on('click', function() {
  correctAns++;
  $('#correct').html(correctAns);
  question5 = true
})

$('#carnival').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question5 = true
});


//question #6
$('#eightMil').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question6 = true

})

$('#fifteenMil').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question6 = true
})

$('#thirtyThreeMil').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
  question6 = true
})

$('#fortySixMil').on('click', function() {
  correctAns++;
  $('#correct').html(correctAns);
  question6 = true
})

});