# roxbot wrapper for js
> **same thing as my other roxbot wrapper but made in nodejs**



## installation

1. put roxbot.js in ur projects files
2. do `npm install axios`
3. add `const roxbot = require('./roxbot.js');` to ur class
4. use the methods below o_o
5. profit
6. ???


## **methods**

#### getRank (username)
> returns current rank of the user

#### getPoints (username)
> returns amount of points a user has

#### getKills (username)
> returns amount of kills a user has

#### getDeaths (username)
> returns amount of deaths a user has

#### getRatio (username)
> returns the kill / death ratio

#### getDamageTaken (username)
> returns amount of damage taken

#### getDamageDealt (username)
> returns amount of damage dealt

#### getBestStreak (username)
> returns best kill streak

#### getBestMulti (username)
> returns user best multi

#### getBowAccuracy (username)
> returns the user bow accuracy

#### getTimePlayed (username)
> returns the user time played in hours

## example

```js

const roxbot = require('./roxbot.js');

async function rawr(){
    roxbot.getRank("username").then(function(data){console.log(`Rank: ${data}`)});
    roxbot.getPoints("username").then(function(data){console.log(`Points: ${data}`)});
    roxbot.getKills("username").then(function(data){console.log(`Kills: ${data}`)});
    roxbot.getDeaths("username").then(function(data){console.log(`Deaths: ${data}`)});
    roxbot.getRatio("username").then(function(data){console.log(`Ratio: ${data}`)});
    roxbot.getDamageTaken("username").then(function(data){console.log(`Damage Taken: ${data}`)});
    roxbot.getDamageDealt("username").then(function(data){console.log(`Damage Dealt: ${data}`)});
    roxbot.getBestStreak("username").then(function(data){console.log(`Best Streak: ${data}`)});
    roxbot.getBestMulti("username").then(function(data){console.log(`Best Multi: ${data}`)});
    roxbot.getBowAccuracy("username").then(function(data){console.log(`Bow Accuracy: ${data}`)});
    roxbot.getTimePlayed("username").then(function(data){console.log(`Time Played: ${data}`)});
}

rawr();

```
