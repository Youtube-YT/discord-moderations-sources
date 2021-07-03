module.exports = {
  name: "kick",
  code: `$title[Successfully Kicked $username[$mentioned[1]]
  $description[Reason: $messageSlice[1]]]
  $color[RANDOM]
  $footer[Credit By: Shadow Ray#9999]
  $argsCheck[>1;Please mention a user to kick!]
  $onlyPerms[kick;You do not have kick permission to do that!]
  $onlyBotPerms[kick;I do not have kick permission to do that!]`
}