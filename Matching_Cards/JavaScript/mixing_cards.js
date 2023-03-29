var Card_Deck_Front = new Array[16];
var Card_Deck_Back = new Array[16];

for(let i = 0; i < Card_Deck_Back.length; i++) {
    Card_Deck_Back[i] = "tile.png";
}

function Random() {
    return Math.floor(Math.random() * 16 + 1);
}

function shuffle() {
    for (var i = 0; i < Card_Deck_Front.length; i++) {
        var tmp = Random();
        console.log(Random());
    }
}