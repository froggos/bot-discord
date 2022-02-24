module.exports = {
    name: 'thunder',
    description: 'thunder',
    execute(message, args){
        message.channel.send({files:['../bot/imgs/thndr.JPG']});
    }
}