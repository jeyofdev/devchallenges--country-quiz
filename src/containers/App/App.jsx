import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Quiz from '../../components/Quiz/Quiz';
import Result from '../../components/Result/Result';
import NotFound from '../../components/Error/NotFound';
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
                            <Route exact path="/result" component={Result} />
                            <Route exact path="*" component={NotFound} />
                        </Switch>
                    </Router>
                </div>
            </div>
        </QuizContextProvider>
    );
};

export default App;
