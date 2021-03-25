import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Quiz from '../../components/Quiz/Quiz';
import QuizContextProvider from '../../contexts/QuizContext';
import './App.css';

const App = () => {
    return (
        <QuizContextProvider>
            <div className="App">
                <div className="container">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/quiz" component={Quiz} />
                        </Switch>
                    </Router>
                </div>
            </div>
        </QuizContextProvider>
    );
};

export default App;
