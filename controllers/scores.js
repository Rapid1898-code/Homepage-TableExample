const connectDB = require("../config/database");

module.exports = {
    getScores: async (req,res)=>{
        console.log(req.user)
        try{
            connectDB.query(
                'SELECT * FROM scores',
                (err,rows) => {
                    if(err) throw err;  
                    rows.forEach( (row) => {
                        console.log(`${row.ticker} ${row.calcDate} ${row.indexName} ${row.scoreFull}`);
                        console.log(`${typeof row.ticker} ${typeof row.calcDate}`)
                        // console.log(`${row.calcDate.toISOString().split('T')[0]}`)
                    });
                    res.render('scores.ejs', {rows: rows})                            
                });

        }catch(err){
            console.log(err)
        }
    }
}