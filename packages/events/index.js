mp.events.add('playerDeath', (player) => {
    mp.gui.chat.push(`${player.name} sho si jina e `);
    player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
    player.health = 100;
});

