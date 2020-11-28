import React, { Component } from "react";
import "./demonymApp.css";

import Demonym from "./demonym";
import CountrySelector from "./countrySelector";

class DemonymApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null,
    };
  }

  componentDidMount() {
    fetch("https://country.register.gov.uk/records.json?page-size=5000")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div className="demonym_app">
        <CountrySelector
          countries={[{ name: "Barbados" }, { name: "Bahrain" }]}
        />
        <Demonym name="Barbadian" country="Barbados" />
      </div>
    );
  }
}

export default DemonymApp;
