
mp.events.addCommand('resetpos', (player) => {
    player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
});

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('heal', (player) => {
    player.health = 100;
});
