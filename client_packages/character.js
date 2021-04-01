

mp.events.add('client:characterData', (firstName, lastName) => {
    mp.events.callRemote("server:createCharacter", firstName, lastName);
});

mp.events.add('client:getAccCharacters', () => {
    return mp.events.callRemote('server:getAccCharacters');
})
