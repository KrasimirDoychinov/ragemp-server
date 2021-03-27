mp.events.addCommand('resetPos', (player) => {
    player.position.x = -425.517;
    player.position.y = 1123.620;
    player.position.z = 325.8544;
});

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('heal', (player) => {
    player.health = 100;
});
