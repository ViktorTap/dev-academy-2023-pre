const pool = require('../db.js');

const getAllJourneys = async (req, res) => {

    try {
        const { month, page, limit } = req.query;
        
        const offset = (page - 1) * limit;

        const [data] = await pool.query("SELECT * FROM ?? WHERE duration > 10 AND coveredDistance > 10 LIMIT ? offset ?", [month, +limit, +offset]);

        const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM ?? WHERE duration > 10 AND coveredDistance > 10", [month]);

        const totalPage = Math.ceil(+totalPageData[0]?.count / limit);

        res.json({
            data: data,
            pagination: {
                page: +page,
                limit: +limit,
                totalPage
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const getAllJourneysOrderByDepartureStation = async (req, res) => {

    try {
        const { month, page, limit } = req.query;
        
        const offset = (page - 1) * limit;

        const [data] = await pool.query("SELECT * FROM ?? WHERE duration > 10 AND coveredDistance > 10 ORDER BY DepartureStationName LIMIT ? offset ?", [month, +limit, +offset]);

        const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM ?? WHERE duration > 10 AND coveredDistance > 10", [month]);

        const totalPage = Math.ceil(+totalPageData[0]?.count / limit);

        res.json({
            data: data,
            pagination: {
                page: +page,
                limit: +limit,
                totalPage
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const getAllJourneysOrderByArrivalStation = async (req, res) => {

    try {
        const { month, page, limit } = req.query;
        
        const offset = (page - 1) * limit;

        const [data] = await pool.query("SELECT * FROM ?? WHERE duration > 10 AND coveredDistance > 10 ORDER BY ArrivalStationName LIMIT ? offset ?", [month, +limit, +offset]);

        const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM ?? WHERE duration > 10 AND coveredDistance > 10", [month]);

        const totalPage = Math.ceil(+totalPageData[0]?.count / limit);

        res.json({
            data: data,
            pagination: {
                page: +page,
                limit: +limit,
                totalPage
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const getAllJourneysOrderByDistance = async (req, res) => {

    try {
        const { month, page, limit } = req.query;
        
        const offset = (page - 1) * limit;

        const [data] = await pool.query("SELECT * FROM ?? WHERE duration > 10 AND coveredDistance > 10 ORDER BY CoveredDistance LIMIT ? offset ?", [month, +limit, +offset]);

        const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM ?? WHERE duration > 10 AND coveredDistance > 10", [month]);

        const totalPage = Math.ceil(+totalPageData[0]?.count / limit);

        res.json({
            data: data,
            pagination: {
                page: +page,
                limit: +limit,
                totalPage
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const getAllJourneysOrderByDuration = async (req, res) => {

    try {
        const { month, page, limit } = req.query;
        
        const offset = (page - 1) * limit;

        const [data] = await pool.query("SELECT * FROM ?? WHERE duration > 10 AND coveredDistance > 10 ORDER BY Duration LIMIT ? offset ?", [month, +limit, +offset]);

        const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM ?? WHERE duration > 10 AND coveredDistance > 10", [month]);

        const totalPage = Math.ceil(+totalPageData[0]?.count / limit);

        res.json({
            data: data,
            pagination: {
                page: +page,
                limit: +limit,
                totalPage
            }
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllJourneys,
    getAllJourneysOrderByDepartureStation,
    getAllJourneysOrderByArrivalStation,
    getAllJourneysOrderByDistance,
    getAllJourneysOrderByDuration
}