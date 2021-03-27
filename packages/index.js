require('./commands/index.js');
require('./events/index.js');


function playerQuitHandler(player, exitType, reason) {
  let str = player.name;

  if (exitType != "kicked") {
    str += " quit.";
  } else {
    str = ` kicked. Reason: ${reason}.`;
  }
}



