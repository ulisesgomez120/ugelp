import React, { Component } from "react";
import Result from "../../views/Result/Result";
import YelpSearch from "../Forms/YelpSearch";

export default class Companies extends Component {
  state = {
    results: []
  };
  api_key =
    "Bearer S7elWyjPsvQyJwo5NKCJ0nhpGyY7K7sMOIYaOb8XeudhWIVDYJHvFNJ3V-VbvKQW2vvOgg3Fa7KdmuFrbbmfL1Funp9s8fbhLH7uY2UyuueF4Tpmuh8_bRHjcYjQXXYx";
  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&location=Irvine,CA",
      {
        headers: {
          Authorization: this.api_key
        }
      }
    )
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({ results: jsonRes["businesses"] });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    console.log(this.state.results);
    let resultsJsx;
    if (this.state.results.length !== 0) {
      resultsJsx = this.state.results.map(business => {
        return (
          <Result
            key={business.id}
            name={business.name}
            imgUrl={business.image_url}
            address={business.location.address1}
            phone={business.display_phone}
            rating={business.rating}
            price={business.price}
            revCount={business.review_count}
            categories={business.categories}
          />
        );
      });
    }
    return (
      <section className="companies">
        <YelpSearch />
        {resultsJsx ? resultsJsx : <h1>Loading...</h1>}
      </section>
    );
  }
}
