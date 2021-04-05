#!/usr/bin/env node
// console.log("Welcome to deploy app")

const prompt = require('prompt');
const fs = require('fs');

prompt.start();

let properties = [{
    name: 'image',
    description: 'Enter the name of docker image url ?',
    type: 'string',
    required: 'true'
},{
    name: 'credentials',
    description: 'Enter the cloud credentials ?',
    type: 'string',
    required: 'true'
},{
    name: 'port',
    description: 'Enter the port to be exposed ?',
    type: 'number',
    required: 'true'
}]
prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    
    console.log(result);
    fs.writeFile('config.json', JSON.stringify(result), (err) => {
        if (err) {
            throw err;
        }
        console.log("config.json generated ");
    });
});

function onErr(err) {
    console.log(err);
    return 1;
}