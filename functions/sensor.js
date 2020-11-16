const sensordData = require("../data/dummy.json")

exports.handler = async () => {
    return{
        statusCode: 200,
        body: JSON.stringify(sensordData)
    };
};