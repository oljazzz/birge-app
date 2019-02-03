import React, {Component} from 'react';
import AppHeader from '../components/AppHeader'
import KhatymList from "./KhatymList";


class App extends Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <KhatymList/>
            </div>

        );
    }
}

export default App;
