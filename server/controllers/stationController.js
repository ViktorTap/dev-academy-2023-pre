const pool = require('../db.js');

const getAllStationsOrderById = async (req, res) => {

    try {
        const { month, page, limit } = req.query;
        
        const offset = (page - 1) * limit;

        const [data] = await pool.query("SELECT DISTINCT DepartureStationID, DepartureStationName FROM ?? ORDER BY DepartureStationID LIMIT ? OFFSET ?", [month, +limit, +offset])

        const [totalPageData] = await pool.query("SELECT COUNT(DISTINCT DepartureStationID) AS count FROM ??", [month]);

        const totalPage = Math.ceil(+totalPageData[0]?.count / limit);

        console.log("Total pages", totalPage, "of", month);

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

const getAllStationsOrderByName = async (req, res) => {

    try {
        const { month, page, limit } = req.query;
        
        const offset = (page - 1) * limit;

        const [data] = await pool.query("SELECT DISTINCT DepartureStationID, DepartureStationName FROM ?? ORDER BY DepartureStationName LIMIT ? OFFSET ?", [month, +limit, +offset])

        const [totalPageData] = await pool.query("SELECT COUNT(DISTINCT DepartureStationID) AS count FROM ??", [month]);

        const totalPage = Math.ceil(+totalPageData[0]?.count / limit);

        console.log("Total pages", totalPage, "of", month);

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

module.exports = { getAllStationsOrderById, getAllStationsOrderByName };