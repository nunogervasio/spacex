import React, { Component } from "react";

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
      <div className="App">
        <h1>Nuno Gervasio</h1>
        {this.state.data.map((element, index) => (
          <div> {this.state.data[index].flight_number} </div>
        ))}
      </div>
    );
  }
}

export default App;
