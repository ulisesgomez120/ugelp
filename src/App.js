import React, { Component } from "react";
import "./App.css";
import Map from "./controllers/Map/Map";
import Companies from "./controllers/Companies/Companies";
import ResultsContext from "./context/resultsContext";
import CompanyModal from "./views/CompanyModal/CompanyModal";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);

class App extends Component {
  state = {
    results: [],
    term: "food",
    location: "Austin,TX",
    offset: 0,
    showModal: false,
    singleBusiness: undefined,
    singleBusinessReviews: undefined,
    mapLat: 30.2672,
    mapLng: -97.7431,
    emptySearch: null,
  };

  componentDidMount() {
    fetch("/.netlify/functions/getBusinesses", {
      method: "POST",
      body: JSON.stringify({
        term: this.state.term,
        location: this.state.location,
        offset: 0,
      }),
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        this.setState({ results: jsonRes["businesses"], offset: 20 });
      })
      .catch((err) => {
        console.log(err);
      });

    window.onclick = (event) => {
      if (event.target.className === "modal") {
        this.setState({ showModal: false });
      }
    };
  }
  modalHandler = async (id) => {
    const singleBusiness = fetch(`https://api.yelp.com/v3/businesses/${id}`, {
      headers: {
        Authorization: process.env.REACT_APP_YELP_KEY,
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    const singleBusinessReviews = fetch(
      `https://api.yelp.com/v3/businesses/${id}/reviews`,
      {
        headers: {
          Authorization: process.env.REACT_APP_YELP_KEY,
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    await Promise.all([singleBusiness, singleBusinessReviews]).then((value) => {
      this.setState({
        showModal: true,
        singleBusiness: value[0],
        singleBusinessReviews: value[1]["reviews"],
      });
    });
  };

  searchHandler = async (event) => {
    event.preventDefault();
    const term = event.target.elements["term-search"].value;
    const location = event.target.elements["location-search"].value;
    if (term === "" || location === "") {
      this.setState({
        emptySearch: "Must enter a location and term to search",
      });
      return;
    }
    const geoCode = Geocode.fromAddress(location)
      .then((res) => res.results[0].geometry.location)
      .catch((err) => {
        console.error(err);
      });
    const searchResults = fetch("/.netlify/functions/getBusinesses", {
      method: "POST",
      body: JSON.stringify({
        term: term,
        location: location,
        offset: 0,
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    await Promise.all([geoCode, searchResults]).then((value) => {
      this.setState({
        results: value[1]["businesses"],
        mapLat: value[0]["lat"],
        mapLng: value[0]["lng"],
        emptySearch: null,
        term: term,
        location: location,
        offset: 20,
      });
    });
  };
  getNextResults = () => {
    fetch("/.netlify/functions/getBusinesses", {
      method: "POST",
      body: JSON.stringify({
        term: this.state.term,
        location: this.state.location,
        offset: this.state.offset,
      }),
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        const copyResultState = [...this.state.results];
        const offset = this.state.offset + 20;
        this.setState({
          results: [...copyResultState, ...jsonRes["businesses"]],
          offset,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className='container'>
        <ResultsContext.Provider
          value={{
            results: this.state.results,
            search: this.searchHandler,
            modalHandler: this.modalHandler,
            getNextResults: this.getNextResults,
          }}>
          {this.state.showModal ? (
            <CompanyModal
              business={this.state.singleBusiness}
              reviews={this.state.singleBusinessReviews}
            />
          ) : null}
          <Companies emptySearch={this.state.emptySearch} />
          <Map id='map' lat={this.state.mapLat} lng={this.state.mapLng} />
        </ResultsContext.Provider>
      </div>
    );
  }
}

export default App;
