import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Header } from "./componets/Header";
import HomePage from "./pages/HomePage";

import PageItem from "./pages/PageItem";
import { store } from "./store";
import "./main.css"
import PageOrder from "./pages/PageOrder";



function App(){
  return(
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/app/:title" element={<PageItem/> }/>
            <Route exact path="/order" element={<PageOrder/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}




export default App;