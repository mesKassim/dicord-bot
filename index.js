const Discord = require("discord.js");
const Client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"]
});

const token = require("./token.json");

Client.on("ready", async () =>{
    console.log("bot opérationnel");
    Client.user.setStatus("online");
    Client.user.setActivity("MEME [FR]", {type: 'WATCHING'});

});

Client.on("messageCreate", message => {
  console.log("auto réaction et auto threads");
  if(message.author.bot) return;

  message.react("943609264117792769");
  if(message.author.bot) return;

  message.channel.threads
  .create({
     name: 'si tu veux réagir au meme de au dessus, parle dans ce fil.',
     autoArchiveDuration: 60,
     reason: 'test',
   })
  .then(threadChannel => console.log(threadChannel))
  .catch(console.error);
});

Client.login(process.env.TOKEN);