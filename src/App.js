import React, { Component } from "react";
import Card from "./Card";

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
    this.state.data.map((element, index) =>
      console.log(this.state.data[index].flight_number)
    );
    return (
      <div className="wrapper">
        <div className="container clearfix">
          <h1>SpaceX-API</h1>
          {this.state.data.map((element, index) => (
            <Card
              key={index}
              number={element.flight_number}
              name={element.mission_name}
              year={element.launch_year}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
