require('./commands/index.js');
require('./events/index.js');

let textEvents = require('../client_packages/events/index.js');

function playerQuitHandler(player, exitType, reason) {
  let str = player.name;

  if (exitType != "kicked") {
    str += " quit.";
  } else {
    str = ` kicked. Reason: ${reason}.`;
  }
}

mp.events.add("playerChat", (player, message) => {
  textEvents.printText(player, message);
});


