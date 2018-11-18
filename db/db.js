const fs = require('fs');

class FileHandler {
    save(file_name, obj){
        let json;
        try{
            json = JSON.stringify(obj,null,4);
        } catch(e){
            throw e;
        }
        
        fs.writeFileSync(`./db/${file_name}`, json, function(err) {
            if(err) {
                throw err;
            }
          }); 
    }

    get(file_name){
        return JSON.parse(fs.readFileSync(`./db/${file_name}`, 'utf8'));
    }
}

module.exports = FileHandler;