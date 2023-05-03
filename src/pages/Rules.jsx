export default function Rules(props) {
    function handleGameClick(event) {
        event.preventDefault();
        props.onGameClick();
    }

    return <section className="rules">
        <img className="rules__graph" src="https://raw.githubusercontent.com/rucev/PokemonTypesGame/567e8951099d7ef56029be23c296733fdc9df872/assets/images/rules.webp" alt="rules" />
        <div className="rules__buttons">
            <button className="menu__buttons--button" onClick={handleGameClick}><span>PLAY</span></button>
        </div>
    </section>
}