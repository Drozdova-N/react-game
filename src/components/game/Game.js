import React from "react";
import Board from "./Board";
import './css/game.css'
import NewGame from "./NewGame";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    };

    handleClick(i){
        const squares = this.state.squares.slice();
        if(squares[i]===null){
            squares[i] = this.state.xIsNext? 'X': 'O';
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext
            });
        }
        else {
            return null;
        }

    };

    onNewGame(){
        const squares = Array(9).fill(null);
        this.setState({
            squares:squares,
            xIsNext: true
        });
    }

    calculateWinner(squares){
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winner.length; i++) {
            const [a, b, c] = winner[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status ;
        if(winner){
            status='Player '+ winner + ' won!';
        }
        else {
            status = 'Next player: '+ (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <div className="status"><h5 className="neon">{status}</h5></div>
                    <Board squares={this.state.squares}
                           onClick = {(i) => this.handleClick(i)} />

                    <NewGame onClick = {()=>this.onNewGame()}/>
                </div>
            </div>
        );
    }
}
export  default Game;