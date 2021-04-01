
require('charcreator');
require("nativeui");
require('./login.js');
require('./character.js');

mp.events.add("playerQuit", (player) => {
    mp.game.graphics.notify(`<C>${player.name}</C> (ID:${player.remoteId}) left the server`);
});

mp.events.add('playerReady', () => {
    mp.events.call('client:showLoginScreen');
});

