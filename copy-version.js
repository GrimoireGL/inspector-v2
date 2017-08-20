const fs = require("fs");

fs.readFile("./package.json","utf8",(err,data)=>{
    if(err){
        console.error(err); 
        process.exit(1);
    }else{
        const package = JSON.parse(data);     
        const versionStr = package.version;
        fs.readFile("./manifest.json","utf8",(err,manifestData)=>{
            if(err){
                console.error(err);
                process.exit(1);
            }
            const manifest = JSON.parse(manifestData);
            manifest.version = versionStr;
            fs.writeFile("./manifest.json",JSON.stringify(manifest,null,2),(err,data)=>{
                if(err){
                    console.error(err);
                    process.exit(1);
                }
            });
        });
    }
});