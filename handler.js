const Serverless = require("serverless-http");
const { httpServer } = require("./index");
module.exports.app = Serverless(httpServer);
