
const seeder = require("mongoose-seed");
var fs = require('fs');

module.exports = function(url) {

    seeder.connect(url, () => {
 
        // Load Mongoose models
        seeder.loadModels([
          './models/produtos.js',
        ]);
       
        // Clear specified collections
        seeder.clearModels(['produtos'], function() {
            
            const data = JSON.parse(fs.readFileSync('seed.json', 'utf8'));
            
            // Callback to populate DB once collections have been cleared
            seeder.populateModels(data, function() {
                seeder.disconnect();
            });
       
        });
    });

}