import React, { Component } from 'react'
import './App.css'
import Navigation from './partials/navigation/Navigation'
import Contact from './pages/contact/Contact'
import Work from './pages/work/Work'
import Services from './pages/services/Services'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
            <div className='app'>
                <Navigation />
                  <Route exact path="/" component={Contact} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/work" component={Work} />
                  <Route exact path="/blog" component={Blog} />
            </div>
        </Router>
    );
  }
}

export default App;
