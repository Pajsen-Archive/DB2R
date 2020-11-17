exports.run = async(client, message, args, level) => {
    //This file cannot be changed!
    message.channel.send("Check out https://who.int/")
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "user"
};

exports.help = {
    name: "corona",
    category: "Info",
    description: "Latest updates on the Corona/Covid19 virus",
    usage: "corona"
};