import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';
import React from 'react';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/pet/new">
            <New />
          </Route>
          <Route exact path="/pet/edit/:id">
            <Edit />
          </Route>
          <Route exact path="/pet/:id">
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
