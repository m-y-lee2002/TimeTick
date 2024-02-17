import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import './CSS_Styles/App.css'

const App = () => {
  return (
    <div className="app">
        <div class="header">
            <Header/>   
        </div>
        <div class="body">
            <Body/>
        </div>
        <div class="footer">
            <Footer/>
        </div>
      
    </div>
  );
};

export default App;
