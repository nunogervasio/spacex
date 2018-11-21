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
          <table>
            <tbody>
              <tr>
                <th>Mission Patch</th>
                <th>Flight Number</th>
                <th>Flight Name</th>
                {/* <th>Launch Year</th> */}
                <th>Launch Year/Date/Time</th>
                <th>Launch Site</th>
                <th>Details</th>
              </tr>
              {this.state.data.map((element, index) => (
                <Row
                  key={index}
                  patch_url={element.links.mission_patch_small}
                  number={element.flight_number}
                  name={element.mission_name}
                  year={element.launch_year}
                  date={element.launch_date_local}
                  site={element.launch_site.site_name}
                  details={element.details}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
