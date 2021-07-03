module.exports = [
  name: "ban",
  code: `$title[$username have summon the ban hammer!]
  $description[Banned: $username[$findUSer[$message[1]]]
  
  Ban By: $username
  Reason: $messageSlice[1]]
  $color[RANDOM]
  $ban[$findUser[$message[1]]]
    $footer[Credit By: Shadow Ray#9999]
    $argsCheck[>1;Please mention a user or ids to ban! Else what do i ban tho?]
    $onlyPerms[ban;You do not have a permission called ban!]
    $onlyBotPerms[ban;I do not have ban permission to ban that user!]`
]