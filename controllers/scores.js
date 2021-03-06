const connectDB = require("../config/database");
require('dotenv').config({path: './config/.env'})

module.exports = {
    getScores: async (req,res)=>{
        // console.log(req.user)
        try {
            const conn = await connectDB();
            const result = await conn.execute
                (`SELECT * FROM ${process.env.SCORE_TABLE}`)
            console.log("Reading data from ")
            result[0].forEach((row,idx) => {                
                if (row.lastEarnings instanceof Date && !isNaN(row.lastEarnings)) {                    
                    result[0][idx].lastEarnings = row.lastEarnings.toISOString().split('T')[0]
                } else {
                    result[0][idx].lastEarnings = "N/A"
                }
                row.calcDate = row.calcDate.toISOString().split('T')[0]
                console.log(`${row.ticker} ${row.calcDate} ${row.indexName} ${row.scoreFull}`);
                // console.log(`${typeof row.ticker} ${typeof row.calcDate}`)
                // console.log(`${row.calcDate.toISOString().split('T')[0]}`)
            });
            res.render('scores.ejs', {rows: result[0]})                            
        } catch(err){
            console.log(err)
        }
    }
}