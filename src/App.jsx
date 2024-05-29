import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import News from "./components/News/News";

import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";


function App() {
  return (
    <div className="p-6">
      <Navbar />
      <Search />
      {/* <News title="News - Top General Headlines"/> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories/:category" component={Category} />
        <Route exact path="/search" component={SearchPage} />

        <Route component={NotFound} />
        

      </Switch>

   
    </div>
  );
}

export default App;



