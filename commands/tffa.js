const fs = require('fs');
module.exports = {
    name: 'tffa',
    description: 'Pone a cola al usuario que usa este comando',
    execute(message, args){
        var autorId = '<@'+message.author.id.toString()+'>';
        fileName = 'C:/DiscordBot/ranked2s.txt';
        var data = fs.readFileSync(fileName, 'ascii');
        var Player = autorId+'|';
        if(data.includes(Player)){
            message.channel.send("Ya estás registrado en la cola actual 2v2");
        }else{
            fs.appendFileSync(fileName, Player, 'ascii');
            message.channel.send('Añadido a cola de 2v2 <@'+message.author.id+">");
        }

        var data2 = fs.readFileSync(fileName, 'ascii');
        var partOfData = data2.split('|');
        if(partOfData.length == 5){
            message.channel.send('Partida 2v2 lista: ' + partOfData[0] + ' vs ' + partOfData[1]);
            fs.writeFile(fileName, '',function(){
                console.log('Cola 2s vacía');
            });
        }
    }
}