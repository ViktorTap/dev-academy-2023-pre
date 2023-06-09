const pool = require('../db.js');

const getAllStationsOrderById = async (req, res) => {

    try {
        const { month, page, limit } = req.query;

        if (!limit && !page){

            const [data] = await pool.query("SELECT DISTINCT DepartureStationID, DepartureStationName FROM ?? ORDER BY DepartureStationID", [month])
    
            res.json({
                data: data,
            })

        } else {
            
            const offset = (page - 1) * limit;

            const [data] = await pool.query("SELECT DISTINCT DepartureStationID, DepartureStationName FROM ?? ORDER BY DepartureStationID LIMIT ? OFFSET ?", [month, +limit, +offset])
    
            const [totalPageData] = await pool.query("SELECT COUNT(DISTINCT DepartureStationID) AS count FROM ??", [month]);
    
            const totalPage = Math.ceil(+totalPageData[0]?.count / limit);
    
            res.json({
                data: data,
                pagination: {
                    page: +page,
                    limit: +limit,
                    totalPage
                }
            })
        }
        
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

const getStationNumbersByID = async (req, res) => {

    try {

        const { stationID } = req.query;

        // may
        const [departureCountMay] = await pool.query("SELECT COUNT(*) as departures FROM may WHERE DepartureStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])
        const [departureAverageMay] = await pool.query("SELECT AVG(CoveredDistance) AS AverageDepartureDistanceMay FROM may WHERE DepartureStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])
        const [arrivalCountMay] = await pool.query("SELECT COUNT(*) as arrivals FROM may WHERE ArrivalStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])
        const [arrivalAverageMay] = await pool.query("SELECT AVG(CoveredDistance) AS AverageArrivalDistanceMay FROM may WHERE ArrivalStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])

        // june
        const [departureCountJune] = await pool.query("SELECT COUNT(*) as departures FROM june WHERE DepartureStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])
        const [departureAverageJune] = await pool.query("SELECT AVG(CoveredDistance) AS AverageDepartureDistanceJune FROM june WHERE DepartureStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])
        const [arrivalCountJune] = await pool.query("SELECT COUNT(*) as arrivals FROM june WHERE ArrivalStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])
        const [arrivalAverageJune] = await pool.query("SELECT AVG(CoveredDistance) AS AverageArrivalDistanceJune FROM june WHERE ArrivalStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])

        // july
        const [departureCountJuly] = await pool.query("SELECT COUNT(*) as departures FROM july WHERE DepartureStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])
        const [departureAverageJuly] = await pool.query("SELECT AVG(CoveredDistance) AS AverageDepartureDistanceJuly FROM july WHERE DepartureStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])
        const [arrivalCountJuly] = await pool.query("SELECT COUNT(*) as arrivals FROM july WHERE ArrivalStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])
        const [arrivalAverageJuly] = await pool.query("SELECT AVG(CoveredDistance) AS AverageArrivalDistanceJuly FROM july WHERE ArrivalStationID=? AND CoveredDistance > 10 AND Duration > 10", [stationID])

        // all
        const departureCountAll = departureCountMay[0].departures + departureCountJune[0].departures + departureCountJuly[0].departures
        const arrivalCountAll = arrivalCountMay[0].arrivals + arrivalCountJune[0].arrivals + arrivalCountJuly[0].arrivals

        res.json({
                departures: {
                    may: departureCountMay[0].departures,
                    june: departureCountJune[0].departures,
                    july: departureCountJuly[0].departures,
                    all: departureCountAll
                },

                arrivals: {
                    may: arrivalCountMay[0].arrivals,
                    june: arrivalCountJune[0].arrivals,
                    july: arrivalCountJuly[0].arrivals,
                    all: arrivalCountAll
                },

                average: {
                    may: {departures: departureAverageMay[0],
                    arrivals: arrivalAverageMay[0]},
                    june: {
                        departures: departureAverageJune[0],
                        arrivals: arrivalAverageJune[0]
                    },
                    july: {
                        departures: departureAverageJuly[0],
                        arrivals: arrivalAverageJuly[0]
                    }

                },

                
        })

    } catch (error) {
        console.log(error)
    }
}

const getStationInformationByID = async (req, res) => {

    const { stationID } = req.query;

    const [data] = await pool.query("SELECT * FROM station_information WHERE ID = ?", [stationID])

    res.json({
        data: data
    })
}

module.exports = { getAllStationsOrderById, getAllStationsOrderByName, getStationNumbersByID, getStationInformationByID };