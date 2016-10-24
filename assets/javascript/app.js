var timer = 60;
var correctAns = 0;
var incorrectAns = 0;
var unansweredQs = 0;
var rightAnswer = false;
var wrongAnswer = false;

//this is where i want to create my code for my Time 
//Remaining countdown from 60 seconds...

setTimeout(sixtySeconds, 1000 * 5);

$('#start').on('click', function() {
	timer--;
	$('#secondsRemaining').html(timer);
})


$('#presJFK').on('click', function() {
	$('#incorrect').html(incorrectAns);
})


