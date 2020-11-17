exports.run = async(client, message, args, level) => {
    //This file cannot be changed!
    message.channel.send("The offical support server for the DB2R package is https://discord.gg/KpkYUSM")
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "user"
};

exports.help = {
    name: "support",
    category: "System",
    description: "the offical support info for the DB2R package and related bots made using the DB2R package",
    usage: "support"
};