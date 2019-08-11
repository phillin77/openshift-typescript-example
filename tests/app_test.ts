import 'mocha';
// import * as chai from 'chai';
// import chaiHttp = require('chai-http');
let chai = require('chai');
const should = chai.should();
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

import server from '../src/server';

let reqServer = process.env.HTTP_TEST_SERVER || server

describe('Basic routes tests', function() {

    it('GET to / should return 200', function(done){
        chai.request(reqServer)
        .get('/')
        .end(function(_err:any, res:any) {
            res.should.have.status(200);
            done();
        })

    })

    it('GET to /health should return 200', function(done){
        chai.request(reqServer)
        .get('/health')
        .end(function(_err:any, res:any) {
            res.should.have.status(200);
            done();
        })

    })
})
