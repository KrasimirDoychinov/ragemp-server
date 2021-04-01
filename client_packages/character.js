

mp.events.add('client:characterData', (firstName, lastName) => {
    mp.events.callRemote("server:createCharacter", firstName, lastName);
});
