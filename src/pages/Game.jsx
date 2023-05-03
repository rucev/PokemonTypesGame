import { useState } from 'react';
import { SELECTIONS } from '../rules.js';
import Footer from './components/footer.jsx';

export default function Game() {
    const [computerScore, setComputerScore] = useState(0);
    const [playerScore, setPlayerScore] = useState(0);
    const [selectionResultsPlayer, setSelectionResultsPlayer] = useState([]);
    const [selectionResultsComputer, setSelectionResultsComputer] = useState([]);

    const isWinner = (selection, opponentSelection) => {
        return ( selection.beats[0] === opponentSelection.name || selection.beats[1] === opponentSelection.name );
    };

    const randomSelection = () => {
        const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
        return SELECTIONS[randomIndex];
    };

    const addSelectionResultPlayer = (selection, winner) => {
        setSelectionResultsPlayer((prevResults) => [
            ...prevResults,
            { selection, winner },
        ]);
    };

    const addSelectionResultsComputer = (selection, winner) => {
        setSelectionResultsComputer((prevResults) => [
            ...prevResults,
            { selection, winner },
        ]);
    };

    const makeSelection = (selection) => {
        const computerSelection = randomSelection();
        const yourWinner = isWinner(selection, computerSelection);
        const computerWinner = isWinner(computerSelection, selection);

        addSelectionResultsComputer(computerSelection, computerWinner);
        addSelectionResultPlayer(selection, yourWinner);

        if (yourWinner) {
            setPlayerScore((prevScore) => prevScore + 1);
        }

        if (computerWinner) {
            setComputerScore((prevScore) => prevScore + 1);
        }
    };

    return (
        <main>
            <section className="game__selections">
                <button className="game__selection" data-selection="fire">
                    <img className="game__selection--image" src="https://raw.githubusercontent.com/rucev/PokemonTypesGame/567e8951099d7ef56029be23c296733fdc9df872/assets/images/fire.webp" alt="fire" onClick={() => makeSelection(SELECTIONS[0])}/>
                </button>
                <button className="game__selection" data-selection="water">
                    <img className="game__selection--image" src="https://raw.githubusercontent.com/rucev/PokemonTypesGame/567e8951099d7ef56029be23c296733fdc9df872/assets/images/water.webp" alt="water" onClick={() => makeSelection(SELECTIONS[1])}/>
                </button>
                <button className="game__selection" data-selection="plant">
                    <img className="game__selection--image" src="https://raw.githubusercontent.com/rucev/PokemonTypesGame/567e8951099d7ef56029be23c296733fdc9df872/assets/images/plant.webp" alt="plant" onClick={() => makeSelection(SELECTIONS[2])}/>
                </button>
                <button className="game__selection" data-selection="ice">
                    <img className="game__selection--image" src="https://raw.githubusercontent.com/rucev/PokemonTypesGame/567e8951099d7ef56029be23c296733fdc9df872/assets/images/ice.webp" alt="ice" onClick={() => makeSelection(SELECTIONS[3])}/>
                </button>
                <button className="game__selection" data-selection="rock">
                    <img className="game__selection--image" src="https://raw.githubusercontent.com/rucev/PokemonTypesGame/567e8951099d7ef56029be23c296733fdc9df872/assets/images/rock.webp" alt="rock" onClick={() => makeSelection(SELECTIONS[4])}/>
                </button>
            </section>
            <section className="game__result">
                <article>
                    You
                    <span className="game__result--score" data-your-score>{playerScore}</span>
                    <div className="game__result--selections">
                        {selectionResultsPlayer.map((result, index) => (
                            <div key={index} className={`game__result--selection ${result.winner ? "winner" : ""}`}>
                                <img src={result.selection.src} alt={result.selection.name} className="game__result--image"/>
                            </div>
                        ))}
                    </div>
                </article>
                <article data-final-column>
                    Computer
                    <span className="game__result--score" data-computer-score>
                        {computerScore}
                    </span>
                    <div className="game__result--selections">
                        {selectionResultsComputer.map((result, index) => (
                            <div key={index} className={`game__result--selection ${result.winner ? "winner" : ""}`}>
                                <img src={result.selection.src} alt={result.selection.name} className="game__result--image"/>
                            </div>
                        ))}
                    </div>
                </article>
            </section>
            <Footer/>
        </main>
        
    );
}
