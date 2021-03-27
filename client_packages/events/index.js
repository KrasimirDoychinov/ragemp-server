mp.events.add('playerDeath', (player, reason, killer) => {
    if (killer) {
        mp.gui.chat.push(`${killer.name} killed ${player.name}`);
    } else {
        mp.gui.chat.push(`${player.name} commited sepuku.`);
    }
});

// mp.events.add("playerChat", (text) => {
//     mp.gui.chat.push(text);
// });

function printText(player, message) {
    mp.gui.chat.push(`${player.name}: ${message}`);
}