module.exports = {
    name: 'sapo',
    description: 'payasapo',
    execute(message, args){
        message.channel.send({files:['../bot/imgs/payasapo.png']});
    }
}