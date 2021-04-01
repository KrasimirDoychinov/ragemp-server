

mp.events.add('client:characterData', (firstName, lastName) => {
    console.log('inside client:characterData');
    mp.events.callRemote("server:createCharacter", firstName, lastName);
});
