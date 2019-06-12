import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="navbar has-shadow">
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            COMEME
                        </div>
                    </div>
                </header>
                <section className="hero is-success is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Masahiro Komeda
                            </h1>
                            <h2 className="subtitle">
                                comeme
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
