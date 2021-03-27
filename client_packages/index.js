
require('commands');
require('events');
require('charcreator');
require("nativeui");
require('./login.js');


mp.events.add("playerQuit", (player) => {
    mp.game.graphics.notify(`<C>${player.name}</C> (ID:${player.remoteId}) left the server`);
});

mp.events.add('playerReady', () => {
    mp.events.call('client:showLoginScreen');
});

