function sendCharacterInfo() {
    $('.alert-danger').hide();
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    console.log(firstname.value + ' ' + lastName.value);
    $('#createBtn').hide();
    mp.trigger('client:characterData', firstName.value, lastName.value);
}

function onLoad() {
    let characters = mp.trigger('client:getAccCharacters');
    document.querySelector('#player-characters').innerHTML = `<div></div>`;
}