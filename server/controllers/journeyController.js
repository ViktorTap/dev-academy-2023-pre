const pool = require('../db.js');

const getAllJourneys = async (req, res) => {

    try {
        const { month, page, limit } = req.query;
        
        const offset = (page - 1) * limit;

        const [data] = await pool.query("SELECT * FROM ?? WHERE duration > 10 OR coveredDistance > 10 LIMIT ? offset ?", [month, +limit, +offset]);

        const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM ?? WHERE duration > 10 OR coveredDistance > 10", [month]);

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
    getAllJourneys
}