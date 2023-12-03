const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydb.sqlite', (err) => {
    if(err) {
        console.log(err.message);
    }
    console.log('Connected to the SQLite database.');
})