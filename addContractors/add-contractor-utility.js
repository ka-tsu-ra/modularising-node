var dbLayer = require('../dbLayer/dbLayer.js');

var database = new Database(process.argv[2]);

database.addContractor(process.argv[3], 0);








