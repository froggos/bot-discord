module.exports = {
    name: 'snake',
    description: 'comando de prueba',
    execute(message, args){
        message.channel.send({files:['../bot/imgs/santi.jpg']});
    }
}