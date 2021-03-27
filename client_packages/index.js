mp.events.add("playerQuit", (player) => {
    mp.game.graphics.notify(`<C>${player.name}</C> (ID:${player.remoteId}) left the server`);
});
require('./login.js');

mp.events.add('playerReady', () => {
    mp.events.call('client:showLoginScreen');
});
require('charcreator');
require("nativeui");