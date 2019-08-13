const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
    
    if(!message.member.roles.some(r=> ["Role Name", "Moderator ?", "Pleb ?"].includes(r.name)) ) return message.channel.send("*oof*")
    //PT Se você está fazendo um bot público de uma olhada no readme.md para outras opcoes um pouco mais convenientes.
    //EN If you are making a public bot take a look at readme.md for other slightly more convenient options.

    const sayargs = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayargs)

}

module.exports.config = {
    name: "say",
    aliases: ["say", "speak", "s"]
}