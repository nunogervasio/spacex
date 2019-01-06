import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";

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
    // this.state.data.map((element, index) =>
    //   console.log(this.state.data[index].upcoming)
    // );

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
              number={element.flight_number}
              name={element.mission_name}
              year={element.launch_year}
              date={element.launch_date_local}
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
