export default function Rules(props) {
    function handleGameClick(event) {
        event.preventDefault();
        props.onGameClick();
    }

    return <section className="rules">
        <img className="rules__graph" src="../../public/rules.webp" alt="title" />
        <div className="rules__buttons">
            <button className="menu__buttons--button" onClick={handleGameClick}><span>PLAY</span></button>
        </div>
    </section>
}