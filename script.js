const gameFunctions = {
    createPlayer: function (name) {
        let score = 0;

        return {
            name: name,
            score: score
        }
    },

    startGame: function () {
        const player_1 = this.createPlayer(prompt("What is your name?"))
        const player_2 = this.createPlayer(prompt("What is player 2's name?"))
        console.log(player_1.name)
        console.log(player_2.name)
    }
}

function gameBoard() {
    const availableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(availableCells)
    let winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];
}
