mp.events.add('playerDeath', (player, reason, killer) => {
    const deathName = player.name;
    if (killer) {
        const killerName = killer.name;
        mp.players.broadcast(`!{#FF0000}${deathName} was killed by ${killerName}!`);
    } else {
        mp.players.broadcast(`!{#FF0000}${deathName} commited sepuku!`);

    }

    setTimeout(() => {
        player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
        player.health = 100;
    }, 3000)
});

mp.events.add('playerChat', (player, message) => {
    let pos = player.position;

    mp.players.broadcastInRange(pos, 15,`!{f1f1f1}${player.name} says: ${message}`);
});





