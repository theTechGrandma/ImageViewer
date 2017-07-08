const sql = require('mssql')

class Database  {

}
    async () => {
    try {
        const pool = await sql.connect('mssql://dynics\tmcclellan:P@ssw0rd1963@localhost\SQLEXPRESS01')
        const result = await sql.query`select * from DynicsImage where id = 1`
        console.dir(result)
    } catch (err) {
        // ... error checks 
    }
}

module.exports = new Database();
