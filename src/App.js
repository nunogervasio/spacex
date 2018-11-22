import React, { Component } from "react";
import Row from "./Card";

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
        <h1>SpaceX-API</h1>
        <div className="container">
          {this.state.data.map((element, index) => (
            <Row
              key={index}
              patch_url={element.links.mission_patch_small}
              number={element.flight_number}
              name={element.mission_name}
              year={element.launch_year}
              date={element.launch_date_local}
              site={element.launch_site.site_name_long}
              details={element.details}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
