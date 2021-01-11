const sensordData = require("../data/dummy.json")
const { URL } = require("url");
const { fetch } = require("node-fetch");
const { query } = require("./util/hasura");

exports.handler = async () => {
  
    // get all the experiments
    const graphQuery = `
    query {
        experiment {
          id
          description
          location
          name
        }
      }
    `
    const result = await query({
        query: graphQuery
    });

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
};