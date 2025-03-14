const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
 for(i=0;i<PLAYERS.length;i++)
 {
     detailedPlayers[i]=
     {
    name : PLAYERS[i],
    strength : getRandomStrength(),
    image : "images/super-"+(i+1)+".png",
    type:(i%2 == 0)?"hero":"villan"
     }
 }

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    let randomnum = Math.floor(Math.random()*100)+1;
    return randomnum;
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (let i = 0; i < players.length; i++) {
       player = `<div class="player">
       <img src ="${players[i].image}" alt ="">
       <div class="name">${players[i].name}</div>
       <div calss="strength">${players[i].strength}</div>
       </div>`

       if (players[i].type == type) {
        fragment = fragment + player;
    }
    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
   
  
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}