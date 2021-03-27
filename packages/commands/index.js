
mp.events.addCommand('resetpos', (player) => {
    player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
});

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('heal', (player) => {
    player.health = 100;
});

mp.events.addCommand('weapons', (player, command) => {
    player.giveWeapon([3220176749, 2210333304, 1593441988, -1045183535, 2144741730, -1063057011, 100416529, 584646201], 1000); // Assault Rifle, Carbine Rifle
});

mp.events.addCommand('health', (player) => {
    player.health = 50;
    console.log('gosho');
});