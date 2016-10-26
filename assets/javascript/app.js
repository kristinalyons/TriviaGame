    $(document).ready(function() {

      $("#start").click(function() {
        $("#page1").hide();
        $("#page2").show();
      });

        $("#page2").hide();
        $("#page3").hide();

        //create 'done' button for when the user is done with the quiz
        //on click 'done' buutton:
        //.hide() page2 and .show() page3
        $("#done").click(function() {
          $("#page2").hide();
          $("#page3").show();
        })

      var correctAns = 0;
      var incorrectAns = 0;
      var unansweredQs = 0;
      var rightAnswer = false;
      var wrongAnswer = false;



      var timer = {
        time:0,
        counter: null,

        start: function(){
        // DONE: Use setInterval to start the count here.
        timer.counter = setInterval(function(){
          timer.count();
        }, 1000);
      },

      count: function(){

        stopwatch.time--;

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

})

$('#presGW').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
})

$('#presTR').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
})

$('#presAL').on('click', function() {
  correctAns++;
  $('#correct').html(correctAns);
});


//question #2
$('#monWard').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);

})

$('#macys').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
})

$('#gimbels').on('click', function() {
  correctAns++;
  $('#correct').html(correctAns);
})

$('#jcPenney').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
});

//question #3
$('#1933').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);

})

$('#1928').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
})

$('#1924').on('click', function() {
  correctAns++;
  $('#incorrect').html(correctAns);
})

$('#1941').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
});


//question #4
$('#massasoit').on('click', function() {
  correctAns++;
  $('#correct').html(correctAns);

})

$('#pemaquid').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
})

$('#samoset').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
})

$('#squanto').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
});


//question #5
$('#nina').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);

})

$('#pinta').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
})

$('#mayflower').on('click', function() {
  correctAns++;
  $('#correct').html(correctAns);
})

$('#carnival').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
});


//question #6
$('#eightMil').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);

})

$('#fifteenMil').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
})

$('#thirtyThreeMil').on('click', function() {
  incorrectAns++;
  $('#incorrect').html(incorrectAns);
})

$('#fortySixMil').on('click', function() {
  correctAns++;
  $('#correct').html(correctAns);
})

});