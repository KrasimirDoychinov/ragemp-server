
require('charcreator');
require("nativeui");
require('./commands/index.js');
require('./events/index.js')
require('./login.js');


mp.events.add("playerQuit", (player) => {
    mp.game.graphics.notify(`<C>${player.name}</C> (ID:${player.remoteId}) left the server`);
});

mp.events.add('playerReady', () => {
    mp.events.call('client:showLoginScreen');
});

