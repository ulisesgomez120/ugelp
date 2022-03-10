import React from "react";
import Review from "../Review/Review";
import Star from "../Star/Star";
const CompanyModal = (props) => {
  const { business, reviews } = props;
  const categories = business.categories.map((cat) => cat.title);
  const photos = business.photos.map((imgUrl, index) => {
    return <img key={index} src={imgUrl} alt='user uploaded image' />;
  });
  const reviewsJsx = reviews.map((rev) => {
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
    <section className='modal'>
      <div className='modal-content'>
        <div className='company-detail-container'>
          <div className='company-details-flex-item'>
            <h3 className='company-name'>{business.name}</h3>
            <div className='rating'>
              <Star rating={business.rating} />{" "}
              <span className='after-rating'>{business.review_count}</span>
            </div>
            <p className='general-desc secondary-color'>
              {business.price ? business.price + " - " : null}
              {categories.join(", ")}
            </p>
          </div>
          <div className='company-info company-details-flex-item'>
            <p className='secondary-color'>
              {business.display_phone ? business.display_phone : null}
            </p>
            <p className='secondary-color'>{business.location.address1},</p>
            <p className='secondary-color'>
              {business.location.city} {business.location.zip_code}
            </p>
          </div>
        </div>
        <div className='company-photos'>{photos}</div>
        <div className='reviews'>{reviewsJsx}</div>
      </div>
    </section>
  );
};

export default CompanyModal;
