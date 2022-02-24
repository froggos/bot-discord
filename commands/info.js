module.exports = {
    name: 'info',
    description: 'Redes sociales',
    execute(message, args, Discord){
        const infoEmbed = new Discord.MessageEmbed().setColor('#003cb5').setTitle('SAO Clan Latino').addFields({name:'YouTube', value:'https://www.youtube.com/channel/UCYkQmFf_0YnIE0azZ1guHOw'},{name:'Instagram', value:'https://www.instagram.com/saoclanjk3/'},{name:'Web', value:'https://saoclanoficial.wixsite.com/saoclanjk3'}, {name: 'Facebook', value:'https://www.facebook.com/saoclanjka'});
        message.channel.send(infoEmbed);
    }
}