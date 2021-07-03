module.exports = {
name: "warn",
code: `
$color[RANDOM]
$title[Someone Has Warned $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has warned **$username[$mentioned[1;yes]]** for \`$noMentionMessage\`
$username[$mentioned[1]] now has \`$getUserVar[warn;$findUser[$message]]\` Warnings
]
$setUserVar[reason;$getUserVar[reason;$mentioned[1]]/**$date+:$hour:$minute:$second**+> $noMentionMessage+;$mentioned[1]]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$onlyIf[$message[2]!=;**⛔ Provide a reason**]
$onlyIf[$mentioned[1]!=;**⛔ Mention the user you want to warn and provide a reason**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You idiot why u trying to warn yourself?**]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't warn a bot**]
$onlyBotPerms[manageroles;⛔ **I do not have** \`MANAGAGE_ROLES\` perms]
$onlyPerms[manageroles;⛔ **You do not have** \`MANAGAGE_ROLES\` perms]
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}