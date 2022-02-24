const DiscordSocket = require('./status');
const status = new DiscordSocket();

const msg = Buffer.from(`getstatus`)

module.exports = {
    name: 'status',
    description : 'Obtiene los jugadores que están dentro del servidor',
    execute(message, args, Discord, client){
        getMessage = (callback)=>{
            let allMsg;
            let count1;
            let count2;
            let count3;
            let map1;
            let map2;
            let map3;
            status.send({ip:'34.176.241.88', port:29070}, msg, function(error,result){
                if(result){
                    partOfRest = result.split('\\');
                    splitResult = partOfRest[84];
                    map1 = partOfRest[72];
                    removeNumbers = splitResult.replace(/[0-9]/g, '');
                    count1 = removeNumbers.replace(/['"]+/g, '');
                    allMsg = count1;
                    //callback(map1, count1);
                }
            });
            
            status.send({ip:'35.247.246.144', port:29070}, msg, function(error,result){
                if(result){
                    partOfRest = result.split('\\');
                    splitResult = partOfRest[84];
                    map2 = partOfRest[72];
                    removeNumbers = splitResult.replace(/[0-9]/g, '');
                    count2 = removeNumbers.replace(/['"]+/g, '');
                    allMsg = allMsg+count2;
                    //callback(map1, map2, count1, count2);
                }
            });

            status.send({ip:'34.148.123.125', port:29070}, msg, function(error,result){
                if(result){
                    partOfRest = result.split('\\');
                    splitResult = partOfRest[84];
                    map3 = partOfRest[72];
                    removeNumbers = splitResult.replace(/[0-9]/g, '');
                    count3 = removeNumbers.replace(/['"]+/g, '');
                    allMsg = allMsg+count2;
                    callback(map1, map2, map3, count1, count2, count3);
                }
            });
        }

        getMessage((map1, map2, map3, res1, res2, res3) =>{
            if(res1<1){
                res1 = 'Vacío';
            }

            if(res2<1){
                res2 = 'Vacío';
            }

            if(res3<1){
                res3 = 'Vacío';
            }

            const embed = new Discord.MessageEmbed()
                .setColor('#00b51b')
                .setTitle('SAO Servers')
                .addFields({name:'__SAO Chile__', value:'34.176.241.88:29070'})
                .addFields({name:'Jugadores ', value:res1}, {name:'Mapa', value:map1})
                .addFields({name:'__SAO Brasil__', value:'35.247.246.144:29070'})
                .addFields({name:'Jugadores', value:res2}, {name: 'Mapa', value: map2 })
                .addFields({name:'__SAO NA__', value:'34.148.123.125:29070'})
                .addFields({name:'Jugadores', value:res3}, {name:'Mapa', value:map3});
            message.channel.send(embed);


            // if (res2 < 1) {
            //     const embed = new Discord.MessageEmbed()
            //         .setColor('#00b51b')
            //         .setTitle('SAO Servers')
            //         .addFields({name:'SAO Chile', value:'34.176.122.107:29070'})
            //         .addFields({name:'Jugadores ', value:res1}, {name:'Mapa', value:map1})
            //         .addFields({name:'SAO SA', value:'35.198.1.180:29070'})
            //         .addFields({name:'Jugadores', value:'Vacío'});
            //     message.channel.send(embed); 
            // } else {
            //     const embed = new Discord.MessageEmbed()
            //         .setColor('#00b51b')
            //         .setTitle('SAO Servers')
            //         .addFields({name:'SAO Chile', value:'34.176.122.107:29070'})
            //         .addFields({name:'Jugadores ', value:res1}, {name:'Mapa', value:map1})
            //         .addFields({name:'SAO SA', value:'35.198.1.180:29070'})
            //         .addFields({name:'Jugadores', value:res2}, {name:'Mapa', value:'Test'});
            //     message.channel.send(embed);
            // }
        });
    }
}





