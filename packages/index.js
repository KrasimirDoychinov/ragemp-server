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
mp.events.add("playerChat", (player,message) =>{
  player.call('Send_ToChat',[player,message]);
});

mp.events.add("playerQuit", playerQuitHandler);