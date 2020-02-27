import React from "react";

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navbar from "./components/layouts/navbar.component";
import MainPage from './components/pages/mainPage.component';
import SecondaryPage from "./components/pages/secondaryPage.component";

const DappComponent = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/secondary' component={SecondaryPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default DappComponent;