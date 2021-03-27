mp.events.add('playerDeath', (player, reason, killer) => {
    if (killer) {
        mp.gui.chat.push(`${killer.name} killed ${player.name}`);
    } else {
        mp.gui.chat.push(`${player.name} commited sepuku.`);
    }
});


