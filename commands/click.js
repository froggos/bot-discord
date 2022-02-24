const {MessageButton} = require("discord-buttons");

module.exports = {
    name: "hey",
    description: "hey!",
    execute(message, args, client) {
        let button = new MessageButton().setStyle("green").setLabel("Saludar").setID("click_test");
        message.channel.send("Qué sucede realmente", button);
        client.on("clickButton", async (button) => {
            if(button.id === "click_test") {
                button.channel.send(`Muy buenas ${button.clicker.user}`);
            }
        })
    }
}