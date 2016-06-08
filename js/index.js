	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "You're just as sane as I am.",
			name:"Luna Lovegood"
	    },
	    {
	    	quote:"Words are, in my not-so-humble opinion, our most inexhaustible source of magic.",
	    	name:"Dumbledore"
	    },
	    {
	    	quote:"We could all have been killed, or worse, expelled.",
	    	name:"Hermione Granger"
	    },
	    {
	    	quote:"Mischief Managed.",
	    	name:"The Marauders"
	    },
	    {
	    	quote:"Always.",
	    	name:"Severus Snape"
	    },
	    {
	    	quote:"Of course it is happen inside your head, but why on earth should that mean that it is not real?",
	    	name:"Albus Dumbledore"
	    },
	    {
	    	quote:"We've all got both light and dark inside of us. What matters most is the part we chose to act on, that's who we really are.",
	    	name:"Sirius Black"
	    },
	    {
	    	quote:"The mind is not a book, to be opened at will and examined at leisure.",
	    	name:"Severus Snape"
	    },
	    {
	    	quote:"It takes a grat deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
	    	name:"Dumbledore"
	    },
	    {
	    	quote:"It is our choices that show what we truly are, far more than our abilities.",
	    	name:"Dumbledore"
	    },
	    {
	    	quote:"Books! And cleverness! There are more important things - friendship and bravery.",
	    	name:"Hermione Granger"
	    },
	    {
	    	quote:"Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
	    	name:"Dumbledore"
	    },
	    {
	    	quote:"Just because you've got the emotional range of a teaspoon doesn't mean we all have.",
	    	name:"Hermione Granger"
	    },
	    {
	    	quote:"Time is making fools of us again.",
	    	name:"Dumbledore"
	    },
	    {
	    	quote:"There is no good or evil: only power and those too weak to seek it.",
	    	name:"Quirinus Quirrell"
	    },
	    {
	    	quote:"Never trust anything that can think for itself if you can’t see where it keeps its brain.",
	    	name:"Arthur Weasley"
	    },
	    {
	    	quote:"You sort of start thinking anything’s possible if you’ve got enough nerve.",
	    	name:"Ginny Weasley"
	    },
	    {
	    	quote:"We did it, we bashed them, wee Potter’s the one, and Voldy’s gone moldy, so now let’s have fun!",
	    	name:"Peeves"
	    },
	    {
	    	quote:"Curiosity is not a sin… But we should exercise caution with our curiosity… yes, indeed.",
	    	name:"Dumbledore"
	    },
	    {
	    	quote:"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals",
	    	name:"Sirius Black"
	    },
	    {
	    	quote:"Nothing like a nighttime stroll to give you ideas",
	    	name:"Mad-Eye Moody"
	    },
	    {
	    	quote:"Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
	    	name:"Albus Dumbledore"
	    },
	    {
	    	quote:"Where your treasure is, there will your heart be also.",
	    	name:"Albus Dumbledore"
	    },
	    {
	    	quote:"Wit beyond measure is man's greatest treasure.",
	    	name:"Luna Lovegood"
	    },
 {
	    	quote:"We must all face the choice between what is right and what is easy.",
	    	name:"Dumbledore"
	    }

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready