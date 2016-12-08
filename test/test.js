
process.env.NODE_ENV = "test";


let chai = require("chai");
let chaiHttp = require("chai-http");
let request = require("request");
let server = require("../server/server.js");
let fuzzy = require("chai-fuzzy");

let should = chai.should();
let expect = require("chai").expect;

chai.use(chaiHttp);
chai.use(fuzzy);


"use strict";

let host = "http://127.0.0.1:8200/API";

describe("Public API", () => {
  it("default API should load successfully.", (done) => {
    request
      .get(`${host}/`, (err, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "application/json; charset=utf-8");
        expect(JSON.parse(body)).to.be.like({message: "This API works, woo-hoooooooooooo!!"});
        done();
      });
  });
  /*
  it("/about.html should load successfully.", (done) => {
    request
      .get(`${host}/about.html`, (err, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "text/html; charset=UTF-8");
        expect(body).include("About ExpressJS");
        done();
      });
  });

  it("/contact.html should load successfully.", (done) => {
    request
      .get(`${host}/contact.html`, (err, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "text/html; charset=UTF-8");
        expect(body).include("Contact ExpressJS");
        done();
      });
  });

  it("/collect.html should load successfully.", (done) => {
    request
      .get(`${host}/collect.html`, (err, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "text/html; charset=UTF-8");
        expect(body).include("Collect Data from ExpressJS");
        done();
      });
  });

  it("/scripts.js should load successfully.", (done) => {
    request
      .get(`${host}/scripts.js`, (err, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "application/javascript");
        expect(body).include("local JS file works");
        done();
      });
  });

  it("/styles.css should load successfully.", (done) => {
    request
      .get(`${host}/styles.css`, (err, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "text/css; charset=UTF-8");
        expect(body).include("#main");
        done();
      });
  });

  it("/invalid.html should return 404.", (done) => {
    request
      .get(`${host}/invalid.html`, (err, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
  });

  it("POST to postCollected should 302 redirect.", (done) => {
    let message = {
      firstname: "shawn",
      lastname: "bullock",
      email: "shawn@example.com"
    };

    request
      .post(`${host}/processCollected`, {form: message}, (err, response, body) => {
        expect(response.statusCode).to.equal(302);
        //expect(body).to.equal(message);
        done();
      });
  });

  it("unsupported method should return 404 (really should be 405).", (done) => {
    request
      .put(`${host}/index.html`, (err, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
  });
  */
});

