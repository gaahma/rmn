const fs = require('fs');

class File_Handler {
    save(file_name, obj){
        let json;
        try{
            json = JSON.stringify(obj,null,4);
        } catch(e){
            throw e;
        }
        
        fs.writeFileSync(`./File_Handler/${file_name}`, json, function(err) {
            if(err) {
                throw err;
            }
          }); 
    }

    get(file_name){
        return JSON.parse(fs.readFileSync(`./File_Handler/${file_name}`));
    }
}

module.exports = File_Handler;