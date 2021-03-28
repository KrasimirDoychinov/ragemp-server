
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

mp.events.addCommand('low', (player, message) => {
    chatCommand(player, message, '(Low): /low [message] WORKS', `!{999999}[Low] ${player.name} says: ${message} WORKS`, 10);
    // let pos = player.position;
    // if (message) {
    //     if (message.trim() == '') {
    //         player.outputChatBox('(Low): /low [message]');
    //         return;
    //     }
    //     mp.players.broadcastInRange(pos, 10, `!{999999}[Low] ${player.name} says: ${message}`);
    // } else {
    //     player.outputChatBox('(Low): /low [message]');
    // }
});

mp.events.addCommand('do', (player, message) => {
    let pos = player.position;
    if (message) {
        if (message.trim() == '') {
            player.outputChatBox('(Do): /do [action]');
            return;
        }
        mp.players.broadcastInRange(pos, 20, `!{c2a3da}*  ${message} ((${player.name}))`);
    } else {
        player.outputChatBox('(Do): /do [action]');
    }
});

mp.events.addCommand('me', (player, message) => {
    let pos = player.position;
    if (message) {
        if (message.trim() == '') {
            player.outputChatBox('(Me): /me [action]');
            return;
        }
        mp.players.broadcastInRange(pos, 20, `!{c2a3da}* ${player.name} ${message}`);
    } else {
        player.outputChatBox('(Me): /me [action]');
    }

});

mp.events.addCommand('my', (player, message) => {
    let pos = player.position;
    if (message) {
        if (message.trim() == '') {
            player.outputChatBox('(My): /my [action]');
            return;
        }
        mp.players.broadcastInRange(pos, 20, `!{c2a3da}* ${player.name}'s ${message}`);
    } else {
        player.outputChatBox('(My): /my [action]');
    }

});
mp.events.addCommand('dol', (player, message) => {
    let pos = player.position;
    if (message) {
        if (message.trim() == '') {
            player.outputChatBox('(Do low): /dol [action]');
            return;
        }
        mp.players.broadcastInRange(pos, 10, `!{c2a3da}*  ${message} ((${player.name}))`);
    } else {
        player.outputChatBox('(Do low): /dol [action]');
    }
});

mp.events.addCommand('mel', (player, message) => {
    let pos = player.position;
    if (message) {
        if (message.trim() == '') {
            player.outputChatBox('(Me low): /mel [action]');
            return;
        }
        mp.players.broadcastInRange(pos, 10, `!{c2a3da}* ${player.name} ${message}`);
    } else {
        player.outputChatBox('(Me low): /mel [action]');
    }
});

mp.events.addCommand('myl', (player, message) => {
    let pos = player.position;
    if (message) {
        if (message.trim() == '') {
            player.outputChatBox('(My low): /myl [action]');
            return;
        }
        mp.players.broadcastInRange(pos, 10, `!{c2a3da}* ${player.name}'s ${message}`);
    } else {
        player.outputChatBox('(My low): /myl [action]');
    }
});

mp.events.addCommand('b', (player, message) => {
    let pos = player.position;
    if (message) {
        if (message.trim() == '') {
            player.outputChatBox('(OOC): /b [message]');
            return;
        }
        mp.players.broadcastInRange(pos, 25, `!{424242} ((${player.name}: ${message}))`);
    } else {
        player.outputChatBox('(OOC): /b [message]');
    }
});

mp.events.addCommand('s', (player, message) => {
    let pos = player.position;
    if (message) {
        if (message.trim() == '') {
            player.outputChatBox('(Shout): /s [message]');
            return;
        }
        mp.players.broadcastInRange(pos, 25, `!{FFFFFF} ${player.name} shouts: ${message}`);
    } else {
        player.outputChatBox('(Shout): /s [message]');
    }
});

mp.events.addCommand('w', (player, message) => {
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
            player.outputChatBox(`!{FFFF00}((To ${foundPlayer.name}: ${splitMsg}))`);
            foundPlayer.outputChatBox(`!{FFFF00}((From ${player.name}: ${splitMsg}))`);
        }
    } else {
        player.outputChatBox('(Whisper): /w [player name] [message]');
    }
});