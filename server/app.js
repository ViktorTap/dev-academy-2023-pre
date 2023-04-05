import express from "express";
import { pool } from "./db.js";

const app = express();

app.get("/journeys", async (req, res) => {

    try {
        const { month, page, limit } = req.query;
        
        const offset = (page - 1) * limit;

        const [data] = await pool.query("SELECT * FROM ?? WHERE duration > 10 OR coveredDistance > 10 LIMIT ? offset ?", [month, +limit, +offset]);

        const [totalPageData] = await pool.query("SELECT COUNT(*) AS count FROM ??", [month]);

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
})

app.get("/stations", async (req, res) => {
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
})



app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})