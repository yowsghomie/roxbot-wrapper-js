const axios = require("axios");

let rawData = "";
async function getRawData(username){
    await axios.get('https://nigger.team/roxbot/?username=' + username).then((response) => {
        const obj = JSON.parse(JSON.stringify(response.data));
        rawData = obj;
    }); 

    return rawData;
}


async function getData(username){
    let res = [];
    await getRawData(username).then(function(data) { 
        for(let value in data) {
            res.push([value, data[value]])
        }
    });

    return res;
};


getData('absolute4').then(function(res) {
    for(let i = 0; i < res.length; i++) {
        console.log(`${res[i][0]}: ${res[i][1]}`)
    }
})