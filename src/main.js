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
    await getRawData(username).then(function(data) { 
        res = data.rank;
    });

    return res;
};

async function getPoints(username){
    let res = "";
    await getRawData(username).then(function(data) { 
        res = data.points;
    });
    
    return res;
};

async function getKills(username){
    let res = "";
    await getRawData(username).then(function(data) { 
        res = data.kills;
    });
    
    return res;
};

async function getDeaths(username){
    let res = "";
    await getRawData(username).then(function(data) { 
        res = data.deaths;
    });
    
    return res;
};

async function getRatio(username){
    let res = "";
    await getRawData(username).then(function(data) { 
        res = data.ratio;
    });
    
    return res;
};

async function getDamageTaken(username){
    let res = "";
    await getRawData(username).then(function(data) { 
        res = data.damage_taken;
    });
    
    return res;
};

async function getDamageDealt(username){
    let res = "";
    await getRawData(username).then(function(data) { 
        res = data.damage_dealt;
    });
    
    return res;
};

async function getBestStreak(username){
    let res = "";
    await getRawData(username).then(function(data) { 
        res = data.best_streak;
    });
    
    return res;
};

async function getBestMulti(username){
    let res = "";
    await getRawData(username).then(function(data) { 
        res = data.best_multi;
    });
    
    return res;
};

async function getBowAccuracy(username){
    let res = "";
    await getRawData(username).then(function(data) { 
        res = data.bow_accuracy;
    });
    
    return res;
};

async function getTimePlayed(username){
    let res = "";
    await getRawData(username).then(function(data) { 
        res = data.time_played;
    });
    
    return res;
};


getRank("absolute4").then(function(data){console.log(`Rank: ${data}`)});
getPoints("absolute4").then(function(data){console.log(`Points: ${data}`)});
getKills("absolute4").then(function(data){console.log(`Kills: ${data}`)});
getDeaths("absolute4").then(function(data){console.log(`Deaths: ${data}`)});
getRatio("absolute4").then(function(data){console.log(`Ratio: ${data}`)});
getDamageTaken("absolute4").then(function(data){console.log(`Damage Taken: ${data}`)});
getDamageDealt("absolute4").then(function(data){console.log(`Damage Dealt: ${data}`)});
getBestStreak("absolute4").then(function(data){console.log(`Best Streak: ${data}`)});
getBestMulti("absolute4").then(function(data){console.log(`Best Multi: ${data}`)});
getBowAccuracy("absolute4").then(function(data){console.log(`Bow Accuracy: ${data}`)});
getTimePlayed("absolute4").then(function(data){console.log(`Time Played: ${data}`)});