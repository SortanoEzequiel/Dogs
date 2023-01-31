import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import landingPage from './componentes/landing_page';
import home from './componentes/home';
import NavBar from './componentes/navBar';
import dogDetail from './componentes/dogDetail';
import DogCreate from './componentes/dogCreate';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path = "/" component = {landingPage}/>
        <React.Fragment>
          <NavBar/>
          <Route path="/home" component = {home}/>
          <Route path="/create" component= {DogCreate}/>
          <Route path="/dogs/:id" component= {dogDetail}/>
        </React.Fragment>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
