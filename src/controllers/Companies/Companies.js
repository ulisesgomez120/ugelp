import React, { Component } from "react";
import Result from "../../views/Result/Result";
import YelpSearch from "../Forms/YelpSearch";
import ResultsContext from "../../context/resultsContext";

export default class Companies extends Component {
  static contextType = ResultsContext;

  render() {
    let resultsJsx;
    if (this.context.results.length !== 0) {
      resultsJsx = this.context.results.map(business => {
        return (
          <Result
            click={() => this.context.modalHandler(business.id)}
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
        {this.props.emptySearch ? (
          <p className="empty-search">{this.props.emptySearch}</p>
        ) : null}
        {resultsJsx ? (
          resultsJsx
        ) : (
          <div className="loading-container">
            <img src="../../images/gif/loading-arrow.gif" />
          </div>
        )}
        <div>
          <button onClick={() => this.context.callNext20()}>
            Load 20 More
          </button>
        </div>
      </section>
    );
  }
}
