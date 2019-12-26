import './App.css';
import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(user => this.setState({ robots:user }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return <h1 className="tc">Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>                       
                    </Scroll>                    
                </div>
            );
        }
    }
}

export default App;