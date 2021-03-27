mp.events.add('playerDeath', (player) => {
    player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
    setTimeout(() => {
        player.health = 100;
    }, 3000)
});



