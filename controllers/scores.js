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
                        console.log(`${row.ticker} ${row.indexName} ${row.scoreFull}`);
                    });
                    res.render('scores.ejs', {rows: rows})                            
                });

        }catch(err){
            console.log(err)
        }
    }
}