#!/usr/bin/env node

import crypto from 'crypto'
import fs from 'fs'

export default function getMD5(path){
    let rs = fs.createReadStream(`${path}`);
    let hash = crypto.createHash('md5');
    rs.on('data', hash.update.bind(hash));
    rs.on('end', function () {
        let result = hash.digest('hex')
        console.log(result);
    });   
}

getMD5(process.argv[2])