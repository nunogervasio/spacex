import React, { Component } from "react";
import Card from "./components/Card";
import utils from "./utils";

class Home extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    // TODO: make fetch call from another file am import data
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
    let filteredData = this.state.data.filter(d => {
      return d.upcoming === false;
    });

    return (
      <div className="container">
        {/* {this.state.data.map((element, index) => ( */}
        {filteredData.map((element, index) => (
          <Card
            key={index}
            patch_url={element.links.mission_patch_small}
            number={utils.addLeadingZero(element.flight_number)}
            name={element.mission_name}
            year={element.launch_year}
            date={utils.formatDate(element.launch_date_local)}
            site={element.launch_site.site_name_long}
            details={element.details}
            core_serial={element.rocket.first_stage.cores[0]}
          />
        ))}
      </div>
    );
  }
}

export default Home;
