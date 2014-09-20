
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

  	var secretNumber;
  	var count = 0;

  	var newGame = function ()
  	{
  		secretNumber = Math.floor((Math.random() * 100) + 1);
  		clearInput();
  		feedback('Make your Guess!');
  		count = 0;
  		$('#guessList').empty();
  	};

  	var guess = function ( userGuess )
	{
		if ( isNaN( userGuess ) || userGuess < 0 || userGuess > 100 )
		{
			clearInput();
			feedback('Remember: an INTEGER between 0 and 100!');
		}
		else
		{
			clearInput();
			var sweetSpot = Math.abs( userGuess - secretNumber);
			$('#guessList').append('<li>' + userGuess + '</li>');
			count++;
			setCount(count);

			if ( sweetSpot === 0 )
			{				
				feedback('Congratulation, You Won!!!');
				
				var again = confirm("Would you like to try again?");
				
				if ( again === true )
				{
					newGame();
				}
				else
				{
					alert("Bye!");
					window.location.replace("http://www.thinkful.com");
				}
			}
			else if ( sweetSpot <= 10 )
			{
				feedback('Very Hot');
			}
			else if ( sweetSpot <= 20 )
			{
				feedback('Hot');
			}
			else if ( sweetSpot <= 30 )
			{
				feedback('Warm');
			}
			else if ( sweetSpot <= 40 )
			{
				feedback('Cold');
			}
			else if ( sweetSpot <= 50 )
			{
				feedback('Very Cold');
			}	
		}	
	}

	var feedback = function ( comment )
	{
		$('#feedback').text( comment );
	};

	var clearInput = function ()
	{
		$('#userGuess').val('');
	};

	var setCount = function ( number )
	{
		$('#count').text( number );
	};

	$('form').on('submit', function ( event ){
		event.preventDefault();
		guess($('#userGuess').val());
	});

	newGame();

});

