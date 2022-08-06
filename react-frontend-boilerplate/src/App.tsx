import React, { FC } from 'react';
import './App.scss';
import logo from './logo.svg';
import { toast } from 'react-toastify';

const App: FC = () => {
    return (
        <div className="App">
            <header className="App-header" onClick={() => toast.success('Hello World!')}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Template React with Typescript</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
