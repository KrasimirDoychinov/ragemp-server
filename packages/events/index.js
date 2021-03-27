mp.events.add('playerDeath', (player) => {
    setTimeout(() => {
        player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
        player.health = 100;
    }, 3000)
});

mp.events.add('playerDeath', (player, reason, killer) => {
    if (killer) {
        mp.gui.chat.push(`${killer.name} killed ${player.name}`);
    } else {
        mp.gui.chat.push(`${player.name} kamikaze.`);
    }
});

mp.events.add("playerChat", (text) => {
    mp.gui.chat.push(text);
});



