const sensordData = require("../data/dummy.json")
const { URL } = require("url");
const { fetch } = require("node-fetch");
const { query } = require("./util/hasura");

exports.handler = async ({queryStringParameters}) => {
  const { id } = queryStringParameters;

  let response = {
    statusCode: 400,
    body: JSON.stringify({message:"not found"})
  };

  if (id) {
    // get all the records from the sensors who belong to sample with custom id
    const graphQuery = `
      query {
        sensor(where: {sampleId: {_eq: "${id}"}}) {
          records {
            record
            timestamp
          }
          name
          id
        }
      }
    `
    const result = await query({
        query: graphQuery
    });

    response = {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  }

  return response;
};