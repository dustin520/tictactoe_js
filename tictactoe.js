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
		if(event.innerHTML === ""){
			if(count % 2 === 0){
				event.innerHTML = "X";
				event.style.color = "red";
				count++;
				// check winner
				if 
			}else {
				event.innerHTML = "O"; 
				event.style.color = "blue";
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

reset(); 

// // Event Handlers 
// topL.onclick = function() { 
// 	topL.innerHTML = "X"; 
// }

// topC.onclick = function() { 
// 	topC.innerHTML = "X"; 
// }

// topR.onclick = function() { 
// 	topR.innerHTML = "X"; 
// }

// midL.onclick = function() { 
// 	midL.innerHTML = "X"; 
// }

// midC.onclick = function() { 
// 	midC.innerHTML = "X"; 
// }

// midR.onclick = function() { 
// 	midR.innerHTML = "X"; 
// }

// botL.onclick = function() { 
// 	botL.innerHTML = "X"; 
// }

// botC.onclick = function() { 
// 	botC.innerHTML = "X"; 
// }

// botR.onclick = function() { 
// 	botR.innerHTML = "X"; 
// }

}
