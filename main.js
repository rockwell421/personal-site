/* Main functions- Vanilla.js */

//window modal
//playVideo
//library skills fill
//back to the top
//sendEmail

/*---------------- Back To The Top Button------------------- */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*---------------- Soft Skills Bar------------------- */

/*
This function generates a circular progress for each element in the DOM using HTML5 canvas
*/

(function() {

	var Progress = function( element ) {
    /* Draws a circular canvas, displays the % value based on DOM element value,
    animates the color of the %, runs a loop through the elements to display the values */

    //draws up the canvas element
		this.context = element.getContext( "2d" );
		this.refElement = element.parentNode;
		this.loaded = 0;
		this.start = 4.72;
		this.width = this.context.canvas.width;
		this.height = this.context.canvas.height;
		this.total = parseInt( this.refElement.dataset.percent, 10 );
		this.timer = null;

		this.diff = 0;

		this.init();
	};

  //sets up the timer and stroke direction
	Progress.prototype = {
		init: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.run();
			}, 25);
		},
		run: function() {
			var self = this;

			self.diff = ( ( self.loaded / 100 ) * Math.PI * 2 * 10 ).toFixed( 2 );
			self.context.clearRect( 0, 0, self.width, self.height );
			self.context.lineWidth = 10;
			self.context.fillStyle = "#000";
			self.context.strokeStyle = "#0fffb7";
			self.context.textAlign = "center";

			self.context.fillText( self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width );
			self.context.beginPath();
			self.context.arc( 35, 35, 30, self.start, self.diff / 10 + self.start, false );
			self.context.stroke();

			if( self.loaded >= self.total ) {
				clearInterval( self.timer );
			}
			self.loaded++;
		}
	};

//sets up the circular skill bar,  maps them to the DOM elements, and checks the value of the array
	var CircularSkillBar = function( elements ) {
		this.bars = document.querySelectorAll( elements );
		if( this.bars.length > 0 ) {
			this.init();
		}
	};

//sets the rate at which the next element is animated
	CircularSkillBar.prototype = {
		init: function() {
			this.tick = 25;
			this.progress();
		},

    //draws up the progress on each element
    progress: function() {
  			var self = this;
  			var index = 0;
  			var firstCanvas = self.bars[0].querySelector( "canvas" );
  			var firstProg = new Progress( firstCanvas );

        //to re-factored
  			var timer = setInterval(function() {
  				if( index > self.bars.length-1 ) {
  						clearInterval( timer );
  				} else {
            var canvas = self.bars[index].querySelector( "canvas" );
  				var prog = new Progress( canvas );
            index++;
          }
          console.log(">>>>>> ", self.bars.length-1, index)
  			}, self.tick); //change self.tick * number to change it to the ordering

  		}
  	};

	document.addEventListener( "DOMContentLoaded", function() {
		var circularBars = new CircularSkillBar( "#bars .bar" );
	});

})();


/*-------------------------Contact Form-------------------------*/

// var contactForm = document.querySelector('.contact-form');
// var nameInput = document.querySelector('.name-input');
// var emailInput = document.querySelector('.email-input');
// var message = document.querySelector('.contact-message');
//
// //Clears the name when clicked
// nameInput.addEventListener('click', function (event) {
//   event.preventDefault();
//   nameInput.value = "";
// })
//
// //Clears the email when clicked
// emailInput.addEventListener('click', function (event) {
//   event.preventDefault();
//   emailInput.value = "";
// })
//
// //Clears the email when clicked
// message.addEventListener('click', function (event) {
//   event.preventDefault();
//   message.value = "";
// })


// /*---------------- Window Modal------------------- */
//
// //get modal element
// var modal = document.getElementById('simpleModal');
//
// //get open modal button
// var modalBtn = document.getElementById('modalBtn');
//
// //get close button
// var closeBtn = document.getElementsByClassName('closeBtn')[0];
//
// //Event listeners
//
// //open modal
// modalBtn.addEventListener('click', openModal);
//
// //close modal
// closeBtn.addEventListener('click', closeModal);
//
// //listen for outside click
// window.addEventListener('click', outsideClick);
//
// //function opens the modal
// function openModal() {
//   modal.style.display = 'block';
// }
//
// //closes modal
// function closeModal() {
//   modal.style.display = 'none';
// }
//
// //closes modal if outside click
// function outsideClick(e) {
//   if(e.target == modal) {
//     modal.style.display = 'none';
//   }
// }
