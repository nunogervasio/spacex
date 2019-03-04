import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import NotFound from "./components/NotFound";
import Mission from "./Mission";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    // TODO: make fetch call from another file and import data
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
        <div className="wrapper">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home data={this.state.data} />}
            />
            <Route
              path="/mission/:name"
              // Ref. below
              render={props => <Mission {...props} data={this.state.data} />}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// https://stackoverflow.com/questions/46197178/cannot-read-property-params-of-undefined-react-router-4
/**
 * with render you are not passing the default props passed by the router into component, like match, history etc.
  When you write this:  <Mission key={this.props.location.key} />
  It means no props value in Mission component.
  Write it like this:
  render = {props => <Mission {...props} key={this.props.location.key} /> } />
  Now {...props} will pass all the value into Mission component.
 */
