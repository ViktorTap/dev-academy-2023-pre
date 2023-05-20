const supertest = require('supertest');
const {app, server} = require('../server');


afterEach((done) => { 
    server.close() 
    done()
})

describe("GET /journeys", () => {

    describe("in journeys tab", () => {
        test("response with all journeys ordered by id", async () => {
            const response = await supertest(app).get("/journeys").set('Content-type', 'application/json').query(
               {
                    month: 'may',
                    page: 1,
                    limit: 50
            })
            expect(response.status).toEqual(200)
            expect(response.type).toEqual(expect.stringContaining('json'))
            expect(response.type).toEqual("application/json")
            
        })

        test("response with all journeys ordered by departure station", async () => {
            const response = await supertest(app).get("/journeys/order-by-departure").set('Content-type', 'application/json').query(
               {
                    month: 'may',
                    page: 1,
                    limit: 50
            })
            expect(response.status).toEqual(200)
            expect(response.type).toEqual(expect.stringContaining('json'))
            expect(response.type).toEqual("application/json")
            
        })

        test("response with all journeys ordered by arrival station", async () => {
            const response = await supertest(app).get("/journeys/order-by-arrival").set('Content-type', 'application/json').query(
               {
                    month: 'may',
                    page: 1,
                    limit: 50
            })
            expect(response.status).toEqual(200)
            expect(response.type).toEqual(expect.stringContaining('json'))
            expect(response.type).toEqual("application/json")
            
        })

        test("response with all journeys ordered by distance", async () => {
            const response = await supertest(app).get("/journeys/order-by-distance").set('Content-type', 'application/json').query(
               {
                    month: 'may',
                    page: 1,
                    limit: 50
            })
            expect(response.status).toEqual(200)
            expect(response.type).toEqual(expect.stringContaining('json'))
            expect(response.type).toEqual("application/json")
            
        })

        test("response with all journeys ordered by journey duration", async () => {
            const response = await supertest(app).get("/journeys/order-by-duration").set('Content-type', 'application/json').query(
               {
                    month: 'may',
                    page: 1,
                    limit: 50
            })
            expect(response.status).toEqual(200)
            expect(response.type).toEqual(expect.stringContaining('json'))
            expect(response.type).toEqual("application/json")
            
        })

    })
})
