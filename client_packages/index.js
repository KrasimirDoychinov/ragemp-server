mp.gui.execute("window.location = 'package://chat/index.html'");
require('chat');
require('charcreator');
require("nativeui");

mp.events.add("playerQuit", (player) => {
    mp.game.graphics.notify(`<C>${player.name}</C> (ID:${player.remoteId}) left the server`);
});
require('./login.js');

mp.events.add('playerReady', () => {
    mp.events.call('client:showLoginScreen');
});

mp.events.add('playerDeath', (player, reason, killer) => {
    if (killer) {
        mp.gui.chat.push(`${killer.name} killed ${player.name}`);
    } else {
        mp.gui.chat.push(`${player.name} kamikaze.`);
    }
});

