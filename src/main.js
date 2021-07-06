const axios = require("axios");

let rawData = "";
async function getRawData(username){
    await axios.get('https://nigger.team/roxbot/?username=' + username).then((response) => {
        const obj = JSON.parse(JSON.stringify(response.data));
        rawData = obj;
    }); 

    return rawData;
}


async function getRank(username){
    let res = "";
    await getRawData("absolute4").then(function(data) { 
        res = data.rank;
    });
    return res;
};


getRank("absolute4").then(function(data){console.log(data)});
