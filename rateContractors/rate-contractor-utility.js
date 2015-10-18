var Database = require('dbLayer');
var database = new Database(process.argv[2]);

database.rateContractor(process.argv[3], process.argv[4]);

