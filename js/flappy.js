// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg", "../assets/jamesBond.gif");
    game.load.audio("score", "../assets/point.ogg");



}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene
    game.stage.setBackgroundColor("66FFFF");
    game.add.text(20, 20, "Welcome to my Game!", {
        font: "30px Arial",
        fill: "#FFFFFF",
        stroke: "000000",
        strokeThickness: 10
    });
    game.add.sprite(395, 200, "playerImg");

    game.input.onDown.add(clickHandler);
    game.input
        .keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        .onDown.add(spaceHandler);
}


function clickHandler(){
    game.add.sprite(event.x, event.y, "playerImg");
}

function spaceHandler() {
    game.sound.play("score");
}
/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
}