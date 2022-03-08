const axios = require("axios");
require("dotenv").config();

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
};

exports.handler = async function (event, context) {
  const { id } = JSON.parse(event.body);
  let results = { business: "", reviews: [] };
  try {
    let business = axios
      .get(`https://api.yelp.com/v3/businesses/${id}`, {
        headers: {
          Authorization: process.env.REACT_APP_YELP_KEY,
        },
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
    let reviews = axios
      .get(`https://api.yelp.com/v3/businesses/${id}/reviews`, {
        headers: {
          Authorization: process.env.REACT_APP_YELP_KEY,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
    await Promise.all([business, reviews])
      .then((value) => {
        results.business = value[0];
        results.reviews = value[1]["reviews"];
      })
      .catch((err) => console.log(err));
  } catch (error) {
    return error;
  } finally {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(results),
    };
  }
};
