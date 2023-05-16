const supertest = require('supertest');
const {app, server} = require('../server');
// const { expect } = require('chai');
// const chai = require('chai')
// const should = chai.should;


afterEach(done => { // afterEach function is provided by Jest and executes once all tests are finished
    server.close() // We close the server connection once all tests have finished
    done()
})

describe("GET /stations", () => {

    describe("in stations tab", () => {
        test("response with all stations ordered by id", async () => {
            const response = await supertest(app).get("/stations").set('Content-type', 'application/json').query(
               {
                    month: 'may',
                    page: 1,
                    limit: 50
            })
            expect(response.status).toEqual(200)
            expect(response.type).toEqual(expect.stringContaining('json'))
            expect(response.type).toEqual("application/json")
            
        })

        test("response with all stations ordered by name", async () => {
            const response = await supertest(app).get("/stations/order-by-name").set('Content-type', 'application/json').query(
               {
                    month: 'may',
                    page: 1,
                    limit: 50
            })
            expect(response.status).toEqual(200)
            expect(response.type).toEqual(expect.stringContaining('json'))
            expect(response.type).toEqual("application/json")
            
        })

        test("response station numbers with valid ID", async () => {
            const response = await supertest(app).get("/stations/numbers").set('Content-type', 'application/json').query(
               {
                    stationID: 25,
                   
            })
            expect(response.status).toEqual(200)
            expect(response.type).toEqual(expect.stringContaining('json'))
            expect(response.type).toEqual("application/json")
            
        })

        test("response station information with valid ID", async () => {
            const response = await supertest(app).get("/stations/information").set('Content-type', 'application/json').query(
               {
                    stationID: 25,
                   
            })
            expect(response.status).toEqual(200)
            expect(response.type).toEqual(expect.stringContaining('json'))
            expect(response.type).toEqual("application/json")
            
        })

    })
})
