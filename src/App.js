import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import NotFound from "./components/NotFound";
import Mission from "./components/Mission";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mission/:name" component={Mission} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
