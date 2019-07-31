import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'

function App () {
  return (
    <Router>
      <NavBar />
      <section className="section section-sm">
        <div className="container">
          <div className="row row-50">
            <Route path="/" component={HomePage} exact />
            {/* <Route path="/results" component={ResultsPage} />  */}
          </div>
        </div>
      </section>

    </Router>

  );
}

export default App;
