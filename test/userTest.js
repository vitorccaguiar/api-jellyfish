"use strict";

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
/*
  * Test the /GET route
  */
  describe('GET requests for User', () => {
      it('/user - should return status 200', (done) => {
        chai.request(server)
            .get('/user')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
      it('/user/{id} - valid id - should return status 200', (done) => {
        chai.request(server)
            .get('/user/gustavobl')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
      it('/user/{id} - invalid id - should return status 404', (done) => {
        chai.request(server)
            .get('/user/invalid')
            .end((err, res) => {
                  res.should.have.status(404);
              done();
            });
      });
  });