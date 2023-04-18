const pool = require('../db.js');

const getAllJourneys = async (req, res) => {

    try {
        // add param all true / false
        const { month, page, limit} = req.query;
        
        if (month != 'all'){

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

        } else {

            const offset = (page - 1) * +limit;

            const [data] = await pool.query("SELECT * FROM may WHERE Duration > 10 AND CoveredDistance > 10 UNION ALL SELECT * FROM june WHERE Duration > 10 AND CoveredDistance > 10 UNION ALL SELECT * FROM july WHERE duration > 10 AND coveredDistance > 10 LIMIT ? offset ?", [+limit, +offset]);
    
            const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM (SELECT * FROM may UNION ALL SELECT * FROM june UNION ALL SELECT * FROM july) AS count WHERE duration > 10 AND coveredDistance > 10");
    
            const totalPage = Math.ceil(+totalPageData[0]?.count / +limit);

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

const getAllJourneysOrderByDepartureStation = async (req, res) => {

    try {

        const { month, page, limit} = req.query;
        
        if(month != 'all') {
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
        } else {

            const offset = (page - 1) * +limit;

            const [data] = await pool.query("SELECT * FROM may WHERE Duration > 10 AND CoveredDistance > 10 UNION ALL SELECT * FROM june WHERE Duration > 10 AND CoveredDistance > 10 UNION ALL SELECT * FROM july WHERE duration > 10 AND coveredDistance > 10 ORDER BY DepartureStationName LIMIT ? offset ?", [+limit, +offset]);
    
            const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM (SELECT * FROM may UNION ALL SELECT * FROM june UNION ALL SELECT * FROM july) AS count WHERE duration > 10 AND coveredDistance > 10");
    
            const totalPage = Math.ceil(+totalPageData[0]?.count / +limit);

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

const getAllJourneysOrderByArrivalStation = async (req, res) => {

    try {
        const { month, page, limit} = req.query;

        if(month != 'all'){
            
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

        } else {

            const offset = (page - 1) * +limit;

            const [data] = await pool.query("SELECT * FROM may WHERE Duration > 10 AND CoveredDistance > 10 UNION ALL SELECT * FROM june WHERE Duration > 10 AND CoveredDistance > 10 UNION ALL SELECT * FROM july WHERE duration > 10 AND coveredDistance > 10 ORDER BY ArrivalStationName LIMIT ? offset ?", [+limit, +offset]);
    
            const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM (SELECT * FROM may UNION ALL SELECT * FROM june UNION ALL SELECT * FROM july) AS count WHERE duration > 10 AND coveredDistance > 10");
    
            const totalPage = Math.ceil(+totalPageData[0]?.count / +limit);

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

const getAllJourneysOrderByDistance = async (req, res) => {

    try {
        const { month, page, limit } = req.query;

        if(month != 'all'){
            
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
        } else {

            const offset = (page - 1) * +limit;

            const [data] = await pool.query("SELECT * FROM may WHERE Duration > 10 AND CoveredDistance > 10 UNION ALL SELECT * FROM june WHERE Duration > 10 AND CoveredDistance > 10 UNION ALL SELECT * FROM july WHERE duration > 10 AND coveredDistance > 10 ORDER BY CoveredDistance LIMIT ? offset ?", [+limit, +offset]);
    
            const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM (SELECT * FROM may UNION ALL SELECT * FROM june UNION ALL SELECT * FROM july) AS count WHERE duration > 10 AND coveredDistance > 10");
    
            const totalPage = Math.ceil(+totalPageData[0]?.count / +limit);

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

const getAllJourneysOrderByDuration = async (req, res) => {

    try {
        const { month, page, limit, all } = req.query;
        if(month != 'all'){
            
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
        } else {

            const offset = (page - 1) * +limit;

            const [data] = await pool.query("SELECT * FROM may WHERE Duration > 10 AND CoveredDistance > 10 UNION ALL SELECT * FROM june WHERE Duration > 10 AND CoveredDistance > 10 UNION ALL SELECT * FROM july WHERE Duration > 10 AND CoveredDistance > 10 ORDER BY Duration LIMIT ? offset ?", [+limit, +offset]);
    
            const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM (SELECT * FROM may UNION ALL SELECT * FROM june UNION ALL SELECT * FROM july) AS count WHERE duration > 10 AND coveredDistance > 10");
    
            const totalPage = Math.ceil(+totalPageData[0]?.count / +limit);

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

module.exports = {
    getAllJourneys,
    getAllJourneysOrderByDepartureStation,
    getAllJourneysOrderByArrivalStation,
    getAllJourneysOrderByDistance,
    getAllJourneysOrderByDuration
}