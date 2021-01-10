import React from "react";  
import { Router, Route } from "react-router-dom";  
import HomePage from "./Pages/HomePage";  
import { createBrowserHistory as createHistory } from "history";  
import TopBar from "./Components/TopBar";  
import "./App.css";  
const history = createHistory();

function App() {  
  return (  
    <div className="App">  
      <Router history={history}>  
        <TopBar />  
        <Route path="/" exact component={HomePage} />  
      </Router>  
    </div>  
  );  
}

export default App;