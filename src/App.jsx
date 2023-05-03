import { Component } from 'react'
import Menu from './pages/Menu.jsx'
import Rules from './pages/Rules.jsx'
import Game from './pages/Game.jsx'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { view: 'menu' };
    }

    handleGoToGame = () => {
        this.setState({ view: 'game' });
    }

    handleGoToRules = () => {
        this.setState({ view: 'rules' });
    }

    render() {
        if (this.state.view === 'menu') {
            return <Menu onGameClick={this.handleGoToGame} onRulesClick={this.handleGoToRules} />
        } else if (this.state.view === 'rules') {
            return <Rules onGameClick={this.handleGoToGame} />
        } else {
            return <Game />
        }

    }
}