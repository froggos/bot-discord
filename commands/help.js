module.exports = {
    name: 'help',
    description: 'Muestra todos los comandos',
    execute(message, args, Discord){
        const infoEmbed = new Discord.MessageEmbed().setColor('#ad9c00').setTitle('Lista de comandos').addFields(
            {
                name:'Lista de jugadores en SAO', 
                value:'sao.status'
            },
            {
                name:'Cola para rankeds',
                value:'sao.single | sao.actual1s\nsao.tffa | sao.actualtffa | sao.cancel2s\nsao.tdm | sao.canceltdm'
            },
            {
                name:'Varios',
                value:'sao.snake | sao.skeleton'
            }
        );
        message.channel.send(infoEmbed);
    }
}