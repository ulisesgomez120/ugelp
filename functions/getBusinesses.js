// const axios = require("axios");
// require("dotenv").config();

const { default: axios } = require("axios");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
};

exports.handler = async function (event, context) {
  const { term, location, offset } = JSON.parse(event.body);
  let results = [];
  try {
    await axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&offset=${offset}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_YELP_KEY,
          },
        }
      )
      .then((res) => (results = res.data))
      .catch((error) => console.log(error));
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
