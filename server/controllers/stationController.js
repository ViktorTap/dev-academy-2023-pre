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

const getStationNumbersByName = async (req, res) => {

    try {

        const { stationName } = req.query;

        const departureCountMay = await pool.query("SELECT COUNT(*) as count FROM may WHERE DepartureStationName=? AND CoveredDistance > 10 AND Duration > 10", [stationName])

        const arrivalCountMay = await pool.query("SELECT COUNT(*) as count FROM may WHERE ArrivalStationName=? AND CoveredDistance > 10 AND Duration > 10", [stationName])

        const departureCountJune = await pool.query("SELECT COUNT(*) as count FROM june WHERE DepartureStationName=? AND CoveredDistance > 10 AND Duration > 10", [stationName])

        const arrivalCountJune = await pool.query("SELECT COUNT(*) as count FROM june WHERE ArrivalStationName=? AND CoveredDistance > 10 AND Duration > 10", [stationName])

        const departureCountJuly = await pool.query("SELECT COUNT(*) as count FROM july WHERE DepartureStationName=? AND CoveredDistance > 10 AND Duration > 10", [stationName])

        const arrivalCountJuly = await pool.query("SELECT COUNT(*) as count FROM july WHERE ArrivalStationName=? AND CoveredDistance > 10 AND Duration > 10", [stationName])

        res.json({
            numbers: {
                departure: {
                    may: departureCountMay[0].count,
                    // june: departureCountJune,
                    // july: departureCountJuly,
                    // all: departureCountMay + departureCountJune + departureCountJuly
                },

                arrival: {
                    may: arrivalCountMay[0].count,
                    // june: arrivalCountJune,
                    // july: arrivalCountJuly,
                    // all: arrivalCountMay + arrivalCountJune + arrivalCountJuly
                }
            }
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllStationsOrderById, getAllStationsOrderByName, getStationNumbersByName };