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
            key={business.id}
            businessId={business.id}
            name={business.name}
            imgUrl={business.image_url}
            address={business.location.address1}
            phone={business.display_phone}
            rating={business.rating}
            price={business.price}
            revCount={business.review_count}
            categories={business.categories}
            openModal={() => this.context.modalHandler(business.id)}
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
            <img src="../../images/gif/loading-arrow.gif" alt="loading" />
          </div>
        )}
        <div className="get-next-container">
          <button
            className="get-next-btn"
            onClick={() => this.context.getNextResults()}
          >
            Load 20 More
          </button>
        </div>
      </section>
    );
  }
}
