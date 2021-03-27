mp.events.add('playerDeath', (player, reason, killer) => {
    const deathName = player.name;
    if (killer) {
        const killerName = killer.name;
        mp.players.broadcast(`${killerName} killed ${deathName}. Reason: ${reason}`);
    }
    
    setTimeout(() => {
        player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
        player.health = 100;
    }, 3000)
});





