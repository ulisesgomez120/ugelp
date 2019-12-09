import React from "react";
import Review from "../Review/Review";

const CompanyModal = props => {
  console.log(props);
  const { business, reviews } = props;
  const cats = business.categories.map(cat => cat.title);
  const photos = business.photos.map((imgUrl, index) => {
    return <img key={index} src={imgUrl} alt="business" />;
  });
  const reviewsJsx = reviews.map(rev => {
    return (
      <Review
        key={rev.id}
        text={rev.text}
        created_on={rev.time_created}
        rating={rev.rating}
        name={rev.user.name}
        image={rev.user.image_url}
      />
    );
  });
  return (
    <section className="modal">
      <div className="modal-content">
        <div>
          <h3 className="company-name">{business.name}</h3>
          <div className="rating">
            {business.rating} out of {business.revCount}
          </div>
          <p className="general-desc secondary-color">
            {business.price ? business.price + " - " : null}
            {cats.join(", ")}
          </p>
        </div>
        <div className="company-info">
          <p className="secondary-color">
            {business.display_phone ? business.display_phone : null}
          </p>
          <p className="secondary-color">{business.location.address1},</p>
          <p className="secondary-color">
            {business.location.city} {business.location.zip_code}
          </p>
        </div>
        <div className="reviews">{reviewsJsx}</div>
      </div>
    </section>
  );
};

export default CompanyModal;
