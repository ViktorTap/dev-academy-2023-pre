import express from "express";
import { getJourneys } from "./db.js";

const app = express();

app.get("/journeys", async (req, res) => {
    const journeys = await getJourneys()
    res.send(journeys)
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})