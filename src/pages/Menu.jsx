export default function Menu(props) {
    function handleRulesClick(event) {
        event.preventDefault();
        props.onRulesClick();
    }

    function handleGameClick(event) {
        event.preventDefault();
        props.onGameClick();
    }

    return <section className="menu">
        <img className="menu__title" src="https://raw.githubusercontent.com/rucev/PokemonTypesGame/567e8951099d7ef56029be23c296733fdc9df872/assets/images/title.webp" alt="title" />
        <div className="menu__buttons">
            <button className="menu__buttons--button" onClick={handleGameClick}><span>PLAY</span></button>
            <button className="menu__buttons--button" onClick={handleRulesClick}><span>RULES</span></button>
        </div>
    </section>
}