


//Initialize Arrays


var colors = ["red", "blue", "green", "yellow"];


var randomColors = [];
var colorsChosen = [];


//boolean start
var start = false;
var level = 0;

$(document).keydown(function() {

	if (start == false) {
		
		randomNumber();
		start = true;
		
		
	}

});




//generate random number


function randomNumber() {
	var num = Math.floor(Math.random()*4);
	var randomColor = colors[num];
	randomColors.push(randomColor);
	level ++;

	if (start != false) {

	setTimeout(function() {
		$("." + randomColor).fadeOut(200).fadeIn(200)},1000);}
	else {
		$("." + randomColor).fadeOut(200).fadeIn(200)};
	$("h1").text("level " + level);
	colorsChosen = [];
}



$(".box").click(function(event){
	
	colorsChosen.push(event.target.id);
	$("#" + event.target.id).fadeOut(200).fadeIn(200);
	checkRound();
	
})

function checkRound(){
	if (randomColors.length === colorsChosen.length){
		if (randomColors[level -1] === colorsChosen[level -1]) {
			randomNumber();

		
	} else {
		$("h1").text("Game Over");
		$("body").addClass("gameOver");
		setTimeout(function() {
			$("body").removeClass("gameOver")}
		,300)
		randomColors = [];
		colorsChosen = [];
		level = 0;
		start = false;	
	}


}}
















	