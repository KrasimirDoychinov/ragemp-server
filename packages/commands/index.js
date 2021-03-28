
// ADMIN
// Admin commands
mp.events.addCommand('resetpos', (player) => {
    player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
});

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('heal', (player) => {
    player.health = 100;
});

mp.events.addCommand('weapons', (player) => {
    player.giveWeapon([3220176749, 2210333304, 1593441988, -1045183535, 2144741730, -1063057011, 100416529, 584646201], 1000); // Assault Rifle, Carbine Rifle
});

mp.events.addCommand('health', (player) => {
    player.health = 50;
});

// CHAT
// Main chat command
function chatCommand(player, message, helper, result, range) {
    let pos = player.position;
    if (message) {
        if (message.trim() == '') {
            player.outputChatBox(helper);
            return;
        }
        mp.players.broadcastInRange(pos, range, result);
    } else {
        player.outputChatBox(helper);
    }
}

// Chat commands
mp.events.addCommand('low', (player, message) => {
    chatCommand(player, message, '(Low): /low [message]', `!{999999}[Low] ${player.name} says: ${message}`, 10);
});

mp.events.addCommand('do', (player, message) => {
    chatCommand(player, message, '(Do): /do [action]', `!{c2a3da}*  ${message} ((${player.name}))`, 20);
});

mp.events.addCommand('me', (player, message) => {
    chatCommand(player, message, '(Me): /me [action]', `!{c2a3da}* ${player.name} ${message}`, 20);

});

mp.events.addCommand('my', (player, message) => {
    chatCommand(player, message, '(My): /my [action]', `!{c2a3da}* ${player.name}'s ${message}`, 20);

});
mp.events.addCommand('dol', (player, message) => {
    chatCommand(player, message, '(Do low): /dol [action]', `!{c2a3da}*  ${message} ((${player.name}))`, 10);
});

mp.events.addCommand('mel', (player, message) => {
    chatCommand(player, message, '(Me low): /mel [action]', `!{c2a3da}* ${player.name} ${message}`, 10);
});

mp.events.addCommand('myl', (player, message) => {
    chatCommand(player, message, '(My low): /myl [action]', `!{c2a3da}* ${player.name}'s ${message}`, 10);
});

mp.events.addCommand('b', (player, message) => {
    chatCommand(player, message, '(OOC): /b [message]', `!{424242} ((${player.name}: ${message}))`, 25)
    
});

mp.events.addCommand('s', (player, message) => {
    chatCommand(player, message, '(Shout): /s [message]', `!{FFFFFF} ${player.name} shouts: ${message}`, 25);
});

// TODO: Make the PM work with ID's
mp.events.addCommand('pm', (player, message) => {
    if (message) {
        if (message.trim() != '' && message.split(' ').length >= 2) {
            let arr = message.split(' ');
            let result = arr.splice(0, 1);
            result.push(arr.join(' '));
    
            let recipientName = result[0];
            let splitMsg = result[1];
    
            let foundPlayer = null;
    
            if (!foundPlayer) {
                mp.players.forEach((_player) => {
                    if (_player.name === recipientName) {
                        foundPlayer = _player;
                    }
                });
            }
    
            if (!foundPlayer) {
                player.outputChatBox('Player not found');
            } else {
                player.outputChatBox(`!{FFFF00}((PM to (${foundPlayer.id}) ${foundPlayer.name}: ${splitMsg}))`);
                foundPlayer.outputChatBox(`!{FFFF00}((PM from (${player.id}) ${player.name}: ${splitMsg}))`);
            }
        } else {
            player.outputChatBox('(PM): /p [player name] [message]');
        }
    } else {
        player.outputChatBox('(PM): /p [player name] [message]');
    }
});