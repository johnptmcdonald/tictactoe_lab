// IIFE
(function(){
	angular
		.module('TttApp')
		.controller('TttController', MainController);

		function MainController(){
			var self = this; // Capture variable
			var playerX = 'playerX';
			var playerO = 'playerO';
			var currentPlayer = '';
			var numberOfMoves = 0;

//an array of 9 objects (cells), each with 5 properties/keys
			self.Board = [
				{occupied: null},
				{occupied: null},
				{occupied: null},
				{occupied: null},
				{occupied: null},
				{occupied: null},
				{occupied: null},
				{occupied: null},
				{occupied: null},
			]; // End of array; Each cell has a index number e.g. Board[0]

// Declare that turns alternate between playerX and playerO. If numberOfMoves is even, playerO is currentPlayer
// function defineCurrentPlayer {
// 	if (numberOfMoves%2 = 0) { currentPlayer = playerO } else { currentPlayer = playerX }
// };

// if (currentPlayer == 'playerX')

// Create a claimCell function
self.click = function(index) {
	if (self.Board[index].occupied == 'null' && currentPlayer == 'playerX') {
		self.Board[index].occupied = 'X';
		numberOfMoves = numberOfMoves + 1;
	} else if (self.Board[index].occupied == 'null' && currentPlayer == 'playerO') {
		self.Board[index].occupied = 'O';
		numberOfMoves = numberOfMoves + 1;
	} else {
		console.log(Please choose another cell)
	}
}

if (cell.occupied)

		// function claimCell() {
		// 	var cell = self.TttBoard[$index];

		// 	if (cell.occupied = null) {

		// 	cell.occupied = currentPlayer

		// 	}

		// };


		// function clearBoard(self.TttBoard[]) {
		// 	occupied = null
		// }


	} // End of TttController


	})(); // End of IIFE


	// Function : CLAIM CELL a.k.a. claimCell or singleMove
	// Goal :
	// Identify cell
	// Change cell's value to playerX or playerX // If I use currentPlayer, then the cell's value will change unless I stop it - right? - No, because the cell will not be able to be defined again as it will not be able to call the function anymore

	// If cell is or has been occupied, on click activate : "Choose another cell!"
	//
	//
	// function claimCell {
	// if (Board.cell.occupied == null) {
	// Board.cell.occupied = 'currentPlayer'
	// 	}
	//
	// numberOfMoves++}else{
	// alert("Please choose another cell");
	// 	}
	// };
	//
	//


