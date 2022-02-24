const { DiscordAPIError } = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'single',
    description: 'Pone a cola al usuario que usa este comando',
    execute(message, args, Discord){
        var autorId = '<@'+message.author.id.toString()+'>';
        fileName = 'C:/DiscordBot/ranked1s.txt';
        var data = fs.readFileSync(fileName, 'ascii');
        var Player = autorId+"|";
        if(data.includes(Player)){
            message.channel.send('Ya estás registrado en la cola actual 1v1');
        }else{
            fs.appendFileSync(fileName, Player, 'ascii');
            const addedEmbed = new Discord.MessageEmbed().setColor('#057199').setTitle('Cola 1v1').addFields(
                {
                    name:'Jugador añadido',
                    value:'<@'+message.author.id+'>'
                }
            );
            message.channel.send(addedEmbed);
        }

        var data2 = fs.readFileSync(fileName, 'ascii');
        var partOfData = data2.split('|');
        if(partOfData.length == 3){
            message.channel.send('Partida 1v1 lista: ' + partOfData[0] + ' vs ' + partOfData[1]);
            fs.writeFile(fileName, '',function(){
                console.log('Cola 1s vacía');
            });
        }
    }
}