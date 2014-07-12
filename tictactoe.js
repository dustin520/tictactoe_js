// TIC TAC TOE

/* Pseudo 
		1. X or O is displayed in order for players depending on turn
		2. Different colors displayed for X and O
		3. Depends on turn, determined by odd or even 
*/

window.onload = function () { 

// Game Board Buttons 
var box = document.getElementsByClassName('square');
var clear = document.getElementById('resetButton');

// State Var

var count = 0;

// Functions
var click = function(event) {
	event.onclick = function() {
		if(this.innerHTML === ""){
			if(count % 2 === 0){
				this.innerHTML = "X";
				this.style.color = "red";
				count++;
				// check winner
			}else {
				this.innerHTML = "O"; 
				this.style.color = "blue";
				count++;
		}
	}else{
			alert("Sorry, box taken buddy :P");	
		}
	} 
}

for (var i = 0; i < 9; i++) { 
	click(box[i]);
}

// reset button 
var reset = function(event) {
	clear.onclick = function(){
		for (var i = 0; i < 9; i++) {
			box[i].innerHTML = "";
			console.dir("reset")
		}
	}
}



