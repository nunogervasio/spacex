import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Mission from "./Mission/Mission";
import SiteDesc from "./components/SiteDesc/SiteDesc";
import "./App.css";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches")
      .then(responce => responce.json())
      .then(responceData =>
        this.setState({
          data: responceData
        })
      )
      .catch(error => {
        console.log("Error fetching and parsing data...", error);
      });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="site-wrapper">
          <div className="content-wrapper">
            <Header />
            <SiteDesc />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home data={this.state.data} />}
              />
              <Route
                path="/mission/:name"
                render={props => <Mission {...props} data={this.state.data} />}
              />
              <Route path="*" exact={true} component={NotFound} />
              {/* <Route path="*" exact={true} component={NotFound} /> */}
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
