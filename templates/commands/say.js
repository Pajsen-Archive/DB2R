exports.run = async(client, message, args, level) => {

    message.delete()
    let sentence = message.content.split(" ");

    sentence.shift();

    sentence = sentence.join(" ");
    Message.Channel.channel.send(sentence)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "user"
};

exports.help = {
    name: "say",
    category: "misc",
    description: "Says a enterd message",
    usage: "say [message]"
};