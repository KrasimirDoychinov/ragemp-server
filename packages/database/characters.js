
mp.events.add('server:createCharacter', async (player, firstName, lastName) => {
    let fullName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
    console.log(fullName);
    try {
        createCharcter(player, fullName);
    } catch(e) { console.log(e.message); };
});

mp.events.add('server:getAccCharacters', async (player) => {
    
});

async function getAccCharacters(player) {
    let [playerId] = await mp.db.query('SELECT `playerId` FROM `accounts` WHERE `username` = ?', [player.username]);
    console.log(playerId);
    let [result] = await mp.db.query('SELECT * FROM `characters` WHERE `playerId` =?', [playerId[0].playerId]);
    console.log(result);
}

async function createCharcter(player, fullName){
    console.log(fullName + ' full name');
    console.log(player.username + ' username');
    const [rows] = await mp.db.query('SELECT `ID` FROM `accounts` WHERE `username` = ?', [player.username]);
    let playerId = rows[0].ID;
    try {
        const result = await mp.db.query('INSERT INTO `characters` SET `fullName` = ?, `playerId` = ?', [fullName, playerId]);
        console.log(result);
        return result[0].affectedRows === 1;
    } catch(e) { console.log(e.message); }
}
