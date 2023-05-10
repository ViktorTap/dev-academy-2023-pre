const request = require('supertest');
const app = require('../server')
const chai = require('chai')
const expect = chai.expect;

describe("GET /stations", () => {

    describe("when station button clicked", () => {
        it("should respond with all stations ordered by id", async () => {
            const response = await request(app).get("/stations").query(
               {
                    month: 'may',
                    page: 1,
                    limit: 50
            })
            
            expect(response.status).to.equal(200);
            // expect(response.header).to.equal('promise resolved')
            
        }).timeout(10000);
    })
})
