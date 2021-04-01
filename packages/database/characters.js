
mp.events.add('server:createCharacter', async (player, firstName, lastName) => {
    console.log('inside server:createCharacter');
    let fullName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
    console.log(fullName);
    try {
        createCharcter(fullName);
    } catch(e) { errorHandler(e) };
});

async function createCharcter(player, fullName){
    try {
        const result = await mp.db.query('INSERT INTO `characters` SET `fullName` = ?, `playerId` = ?', [fullName, player.remoteId]);
        return result[0].affectedRows === 1;
    } catch(e) { errorHandler(e) }
}
