import React from "react";

const CompanyModal = props => {
  console.log(props);
  const { business, reviews } = props;
  const cats = business.categories.map(cat => cat.title);
  const photos = business.photos.map((imgUrl, index) => {
    return <img key={index} src={imgUrl} alt="business" />;
  });
  return (
    <div className="modal">
      {/* <div className="modal-con">
        <h2>{business.name}</h2>
        <p>
          {business.rating} {business.review_count}
        </p>
        <p>
          {business.price ? business.price + " - " : null}
          {cats.join(", ")}
        </p>
        <div className="photo-container">{photos}</div>
      </div> */}
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
        <div className="photo-container">{photos}</div>
      </div>
    </div>
  );
};

export default CompanyModal;
