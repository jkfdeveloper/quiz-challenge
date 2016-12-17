var questionBank = {
	items: [{ 
		 question : "What is Harry Potter's middle name?",
		 answer1 : "James",
		 answer2 :"Bill",
		 answer3 :"Worcestershire",
		 answer4 :"BBQ sauce",
		 correct : "1"
			},
			{
		 question : "What is Harry Potter's birthday(mm/dd)?",
		 answer1 : "July 20",
		 answer2 :"Feb 29",
		 answer3 :"Feb 30",
		 answer4 :"July 31",
		 correct : "4"

			},
			{
		 question : "What is the name of Voldemort's snake?",
		 answer1 : "Dodo",
		 answer2 :"Jacob",
		 answer3 :"Nagini",
		 answer4 :"Aragog",
		 correct : "3"

			},
			{
		 question : "What is Harry Potter's father's name?",
		 answer1 : "James",
		 answer2 :"Harold",
		 answer3 :"Spectre",
		 answer4 :"Larry",
		 correct : "1"

			},
			{
		 question : "Which spell unlocks most doors?",
		 answer1 : "Avada Kadavra",
		 answer2 :"Expelliarmus",
		 answer3 :"Alohamora",
		 answer4 :"Accio",
		 correct : "3"

			}
		]
	}

var currentQuestion = 0;
var currentAnswer = 0;
var currentScore = 0;
var currentWrong = 0;
var questionTemplate = ('<p><span class="question-base"></span></p>'+
						'<li><span class="answer1"></span></li>'+
						'<li><span class="answer2"></span></li>'+
						'<li><span class="answer3"></span></li>'+
						'<li><span class="answer4"></span></li>'+
						'<p class="show-result"></p>')
var process = function(question, element){
	element.empty();
	$('.start').hide();
	var listItem = $(questionTemplate);
	var thisQuestion = questionBank.items[question];

	listItem.find(".question-base").text((currentQuestion +1)+". "+thisQuestion.question);
	listItem.find(".answer1").text(thisQuestion.answer1);
	listItem.find(".answer2").text(thisQuestion.answer2);
	listItem.find(".answer3").text(thisQuestion.answer3);
	listItem.find(".answer4").text(thisQuestion.answer4);
	element.append(listItem);
	
	currentAnswer = thisQuestion.correct;
	
	
	$('ol').on('click','li', function(){
		var num = $(this).index();
		
		
		if (num == currentAnswer){
			console.log('correct');
			currentScore = currentScore += 1;
			$(this).addClass('chosen-answer-correct');
			$('.show-result').text("You are correct");
			
		}else{
			console.log('incorrect');
			currentWrong = currentWrong += 1;
			$(this).addClass('chosen-answer-wrong');
			$('.show-result').text("You are incorrect, the correct answer is: " + thisQuestion.correct);
		}
		$('ol').off('click');

	element.append('<p class="next-question">Next Question</p>');
	$('.score-counter').text(currentScore + "/" + questionBank.items.length);
	$('.next-question').on('click', function(){
		currentQuestion = currentQuestion += 1;
		console.log(currentQuestion);
		advanceQuestion();
	})
})
}
var advanceQuestion = function(){
	if (currentQuestion < questionBank.items.length){

			process(currentQuestion,$('.current-question') );

	}else{
		$('.next-question').remove();
		$('.current-question').append('<p class="game-over">Game Over. Play Again</p>');
		$('.game-over').on('click', function(){
			playAgain();
		})
	}
	
}
var playAgain = function(){
	currentQuestion = 0;
	currentAnswer = 0;
	currentScore = 0;
	currentWrong = 0;
	$('.score-counter').text(currentScore);
	process(currentQuestion, $('.current-question'));

}
$(function(){
	$(".start").on('click', function(){

		process(currentQuestion, $('.current-question'));
		var tally = questionBank.items.length;
		$('.question-container').append('<p class="score-counter">0</p>');

	})
	

	
	

})