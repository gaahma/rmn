const fs = require('fs');

class FileHandler {
    post(file_name, obj){
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
        fs.readFileSync(`./db/${file_name}`, (file, err) => {
            console.log(file, err);
            if(err)
                throw Error(err);
        })
    }
}

module.exports = FileHandler;