
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

mp.events.addCommand('low', (player, message) => {
    let pos = player.position;

    mp.players.broadcastInRange(pos, 10,`!{999999}[Low] ${player.name} says: ${message}`);
});

mp.events.addCommand('do', (player, message) => {
    let pos = player.position;

    mp.players.broadcastInRange(pos, 20,`!{c2a3da}*  ${message} ((${player.name}))`);
});

mp.events.addCommand('me', (player, message) => {
    let pos = player.position;

    mp.players.broadcastInRange(pos, 20,`!{c2a3da}* ${player.name} ${message}`);
});

mp.events.addCommand('my', (player, message) => {
    let pos = player.position;

    mp.players.broadcastInRange(pos, 20,`!{c2a3da}* ${player.name}'s ${message}`);
});
mp.events.addCommand('dol', (player, message) => {
    let pos = player.position;

    mp.players.broadcastInRange(pos, 10,`!{c2a3da}*  ${message} ((${player.name}))`);
});

mp.events.addCommand('mel', (player, message) => {
    let pos = player.position;

    mp.players.broadcastInRange(pos, 10,`!{c2a3da}* ${player.name} ${message}`);
});

mp.events.addCommand('myl', (player, message) => {
    let pos = player.position;

    mp.players.broadcastInRange(pos, 10,`!{c2a3da}* ${player.name}'s ${message}`);
});

mp.events.addCommand('b', (player, message) => {
    let pos = player.position;

    mp.players.broadcastInRange(pos, 25,`!{424242} OOC:((${player.name}: ${message}))`);
});

mp.events.addCommand('s', (player, message) => {
    let pos = player.position;

    mp.players.broadcastInRange(pos, 25,`!{FFFFFF} ${player.name} shouts: ${message}`);
});