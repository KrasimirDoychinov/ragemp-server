function sendCharacterInfo(state) {
    $('.alert-danger').hide();
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    mp.trigger('client:characterData', firstName.value, lastName.value);
}