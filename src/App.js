import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import PointsPage from './pages/PointsPage'
import SchedulePage from './pages/SchedulePage'

function App () {
  return (
    <Router>
      <NavBar />
      <section className="section section-sm bg-gray-100">
        <div className="container">
          <div className="row row-50">
            <Route path="/" component={HomePage} exact />
            <Route path="/tables" component={PointsPage} />
            <Route path="/schedules" component={SchedulePage} />
            <Route path="/results" component={ResultsPage} />
          </div>
        </div>
      </section>

    </Router>

  );
}

export default App;
