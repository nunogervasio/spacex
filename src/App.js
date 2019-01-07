import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import utils from "./utils";

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

  // formatDate = date => {
  //   return date.slice(0, 9);
  // };

  // addLeadingZero = number => {
  //   // if (number < 10) {
  //   //   return 0 + number;
  //   // }
  //   return number;
  // };

  render() {
    let filteredData = this.state.data.filter(d => {
      return d.upcoming === false;
    });

    return (
      <div className="wrapper">
        <Header />
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
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
