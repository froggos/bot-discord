const dgram = require('dgram');
const pref = require('./prefix');

module.exports = class DiscordSocket {
    send(dest, msg, callback){
        this.socket = dgram.createSocket('udp4');
        this.msg = (msg) => {
            callback(null, `${msg}`);
            this.socket.close
            //this.socket = null;
        };

        this.socket.on('message', this.msg);

        console.log(`Enviando mensaje a ${dest.ip}:${dest.port}: ${msg}`);

        this.socket.send([pref.prefix, msg], dest.port, dest.ip, (error, bytes)=>{
            if(error){
                console.log(`Falló en el último send: ${JSON.stringify(error)}`);
            }
        });
    }
}




