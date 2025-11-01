
const querystring = require('querystring');
function userDtaSubmit(req,res){
    
    

    let databody = [];
    req.on('data',(chunk)=>{
        databody.push(chunk);
    })

    req.on('end',()=>{
        let rawData = Buffer.concat(databody).toString();
        const readableData = querystring.parse(rawData);
        

        console.log(readableData);
        res.write("<h2>submitted</h2>");
        res.end();
    });

    
    


    
    

}

module.exports = userDtaSubmit;