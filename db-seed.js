// Reset database
let url = process.env.MONGOLAB_URI || 'mongodb://vandemberg:1234@localhost/lista-produtos';
require('./initDatabase')(url);
