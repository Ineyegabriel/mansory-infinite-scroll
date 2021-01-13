import React from "react";  
import { Route, Switch } from "react-router-dom";  
import HomePage from "./Pages/HomePage";  
import "./App.css";  
import Layout from "./Components/Layout";
import PreviewPage from "./Pages/PreviewPage";


function App() {  
  return (  
        <Switch data-test="component-layout">
            <Layout>
                <Route path="/" exact component={HomePage}  className="page"/> 
                <Route path="/preview" component={PreviewPage}  className="page"/> 
            </Layout>
        </Switch>
  );  
}

export default App;