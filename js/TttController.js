// IIFE
(function(){
	angular
		.module('TttApp')
		.controller('TttController', MainController);

		function MainController(){
			var self = this; // Capture variable
			var playerX = 'playerX';
			var playerO = 'playerO';
			var currentPlayer = 'playerX';
			var currentIcon = 'X';
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
	// if (numberOfMoves%2 = 0) { currentPlayer = playerO } else { currentPlayer = playerX };
function changePlayers() {
if (currentPlayer == 'playerX') {currentPlayer = 'playerO'}
else {currentPlayer = 'playerX'}
};

function iconDefine() {
if (currentPlayer == 'playerX') {currentIcon = 'X'}
else {currentIcon = 'O'}
};

// Function to get winner - new and experimental

// Create a claimCell function : This one works
self.click = function(index) {if (self.Board[index].occupied == null){
	self.Board[index].occupied = currentIcon;
	numberOfMoves = numberOfMoves + 1
	changePlayers()
	iconDefine()
	console.log('xxx') }
}

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


