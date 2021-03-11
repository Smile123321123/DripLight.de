const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "d!";

var version = "1.0.1";

bot.on("ready", () => {
    console.log("Der Bot ist nun Einsatzbereit!")

    bot.user.setActivity("DripLight.de", {type: "PLAYING"}).catch(console.error)
})

bot.on("message", message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){

        case "help":
            message.channel.send("Du brauchst Hilfe bei einem Befehl?\n\n-Mit **d!ping** kannst du schauen ob ich Online bin oder nicht\n\n-Mit **d!purge** oder **d!clear** Kannst du Nachhrichten von 2-100 **löschen**\n")
        break; 

        case "Ping":
            message.channel.send("Aktuell bin ich Online!")
        break;    

        case "ping":
            message.channel.send("Aktuell bin ich Online!")
        break;    

        case "clear":
            if(!args[1]) return message.channel.send("Fehler, bitte eine Zahl angeben")
            message.channel.bulkDelete(args[1])
        break;
        
        case "Clear":
            if(!args[1]) return message.channel.send("Fehler, bitte eine Zahl angeben")
            message.channel.bulkDelete(args[1])
        break;    

        case "purge":
        break;
            if(!args[1]) return message.channel.send("Fehler, bitte eine Zahl angeben")
            message.channel.bulkDelete(args[1])
        case "Purge":
            if(!args[1]) return message.channel.send("Fehler, bitte eine Zahl angeben")
            message.channel.bulkDelete(args[1])
        break;    
    }
})



bot.login(process.env.token)



