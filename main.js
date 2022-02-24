const Discord = require('discord.js');
const client = new Discord.Client({partial:["MESSAGE","CHANNEL","REACTION"]});
import fetch from "node-fetch";
const prefix = "sao.";
const fs = require('fs');
require('discord-buttons')(client);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Santi se la come");
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'snake'){
        client.commands.get('snake').execute(message, args);
    }else if(command === 'tffa'){
        //client.commands.get('tffa').execute(message, args);
        message.channel.send('Bajo construcción');
    }else if(command === 'actualtffa'){
        //client.commands.get('actual_queue').execute(message, args);
        message.channel.send('Bajo construcción');
    }else if(command === 'canceltffa'){
        //client.commands.get('cancel2s').execute(message, args);
        message.channel.send('Bajo construcción');
    }else if(command === 'single'){
        //client.commands.get('single').execute(message, args, Discord);
        message.channel.send('Bajo construcción');
    }else if(command === 'actual1s'){
        //client.commands.get('actual_single').execute(message, args);
        message.channel.send('Bajo construcción');
    }else if(command === 'tdm'){
        //message.channel.send('Bajo construcción');
        message.channel.send('Bajo construcción');
    }else if(command === 'canceltdm'){
        //message.channel.send('Bajo construcción');
        message.channel.send('Bajo construcción');
    }else if(command === 'status'){
        client.commands.get('status').execute(message, args, Discord, client);
        //client.commands.get('statuscl').execute(message, args, Discord, client);
    }else if(command === 'skeleton'){
        client.commands.get('skeleton').execute(message, args);
    }else if(command === 'info'){
        client.commands.get('info').execute(message, args, Discord);
    }else if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }else if(command === 'sapo'){
        client.commands.get('sapo').execute(message, args);
    }else if(command === 'thunder'){
        client.commands.get('thunder').execute(message, args);
    } 
    // else if(command === "btn") {
    //     client.commands.get('hey').execute(message, args, client);
    // } 
    else if(command === "erwin") {
        client.commands.get('erwin').execute(message, args);
    }
    else if(command === "gif") {
        const getGif = async() => {
            try {
                const _url = "api.giphy.com/v1/gifs/random?tag=macaco&api_key=2YoVwESf4IRJwaY8QkdG0sbe13jxngZn";
                const response = await fetch(_url);
                const {data} = await response.json();
                const {url} = data.images.original;
                console.log(url);
            } catch( error ) {
                console.error(error);
            }
        }
        getGif();
    }
});

client.login('ODcyNjU2Mjk5ODYxNjM5MjA5.YQtCgw.0jWhUc5b5CCcF2W5e6MHvJCIh1g');