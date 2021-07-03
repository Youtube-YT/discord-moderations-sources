module.exports = {
  name: "unban",
  code: `$title[Successfully Unban that user!]
  $description[Unban: $username[$mentioned[1]]
  
  Unban by: $username
  
  Reason: $messageSlice[1]]
    $footer[Credit By: Shadow Ray#9999]
    $unban[$findUser[$message[1]]]
    $argsCheck[>1;Please put an vaild user ids to unban!]
    $onlyPerms[ban;You do not have a permission called ban!]
    $onlyBotPerms[ban;I dont have a permission called ban!]`
}