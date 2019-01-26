import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './css/App.css';
import 'bulma/css/bulma.css'

// App components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Give from './components/ways-to-give';
import Resources from './components/Resources';
import Hangout from './components/Hangout';

class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<div>
					<Header />

					<switch>

					{/* LOCAL DEV*/}
					{/* <Route exact path="/" render={ () => <Home title='Future Ada' /> } /> 
					<Route path="/about" render={ () => <About title='About US' /> } />
					<Route path="/resources" render={ () => <Resources title='Resources' /> } />
					<Route path="/ways-to-give" render={ () => <Give title='Ways to Give' /> } />
					<Route path="/hangout" render={ () => <Hangout title="Let's Hangout" /> } />
					*/}
					
					{/* GITHUB PAGES */}
					<Route path="/futureada/" render={ () => <Home title='Future Ada' /> } />
					
					<Route path="/futureada/about" render={ () => <About title='About US' /> } />
					<Route path="/futureada/resources" render={ () => <Resources title='Resources' /> } />
					<Route path="/futureada/ways-to-give" render={ () => <Give title='Ways to Give' /> } />
					<Route path="/futureada/hangout" render={ () => <Hangout title="Let's Hangout" /> } />

					</switch>
					<Footer />
				</div>      
			</BrowserRouter>
    );
  }
}

export default App;
