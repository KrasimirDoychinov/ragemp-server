mp.events.add('playerDeath', (player, reason, killer) => {
    const deathName = player.name;
    if (killer) {
        const killerName = killer.name;
        player.outputChatBox(`!{#FF0000}${player.name} was killed by ${killer.name}!`);
    } else {
        player.outputChatBox(`!{#FF0000}${player.name} commited sepuku!`);

    }

    setTimeout(() => {
        player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
        player.health = 100;
    }, 3000)
});

mp.events.add('playerChat', (player, message) => {
    player.outputChatBox(`${player.name}: ${message}`);
});





