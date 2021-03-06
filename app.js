const express = require('express');
const mongoose = require('mongoose');
const Discord = require('discord.js');
const client = new Discord.Client();
var crypto = require('crypto');

const Trade = require('./models/trade');

const RLRL = Trade.RLRL;
const RLCS = Trade.RLCS;
const RLOG = Trade.RLOG;
const RLCASH = Trade.RLCASH;
const CSCS = Trade.CSCS;
const CSOG = Trade.CSOG;
const CSCASH = Trade.CSCASH;
const OGOG = Trade.OGOG;
const OGCASH = Trade.OGCASH;


var allHashes = [];
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;

// express app
const app = express();

// connect to db
const URI = "mongodb+srv://rlcs:trade@rlcstrade.qt3xj.mongodb.net/RLCSTrade?retryWrites=true&w=majority";

mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((resulter) => console.log('Connected'))
    .catch((err) => console.log(err));

// app.listen(5000);
const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

client.once('ready', () => {
    console.log('Ready!');
});

// client.login(process.env.token);

client.on('message', async message => {
    const URI = "mongodb+srv://sample:sample@rlcs.bxguj.mongodb.net/trades?retryWrites=true&w=majority";
    
    var tempMessage = message.content.toLowerCase();
    if ((tempMessage.includes("[h]")) && (tempMessage.includes("[w]")) || (tempMessage.includes("(h)")) && (tempMessage.includes("(w)")) || (tempMessage.includes(":BTH:")) && (tempMessage.includes(":BTW:"))) {

        var messages = message.content.toLowerCase().split("\n");
        var messageAuthor = message.author.username + "#" + message.author.discriminator;
        var serverId = message.guild.id;
        var serverName = message.guild.name;
        var channelId = message.channel.id;
        var channelName = message.channel.name;

        var tempMessage = message.content.toLowerCase();
        if ((tempMessage.includes("[h]")) && (tempMessage.includes("[w]")) || (tempMessage.includes("(h)")) && (tempMessage.includes("(w)")) || (tempMessage.includes(":BTH:")) && (tempMessage.includes(":BTW:"))) {

            var messages = message.content.toLowerCase().split("\n");
            var messageAuthor = message.author.username + "#" + message.author.discriminator;
            var steamName = "";
            var serverId = message.guild.id;
            var serverName = message.guild.name;
            var channelId = message.channel.id;
            var channelName = message.channel.name;

            //RLCS.TRADE
            if (serverName == "RLCS.TRADE") {

                if (channelName == "pc_rl_to_rl") {
                    var hasGame = "RL";
                    var wantGame = "RL";
                }
                if (channelName == "pc_rl_to_cs") {
                    var hasGame = "RL";
                    var wantGame = "CS";
                }
                if (channelName == "pc_cs_to_cs") {
                    var hasGame = "CS";
                    var wantGame = "CS";
                }

                var discordURL = "https://discord.gg/vYyJnSrntZ";
                var discordServer = "RLCS.TRADE";
                var serverLogo = "/images/rlcsLogo.png"
            };

            //RocketVerse
            if (String(serverId) == "786446233555566593") {

                if (String(channelId) == "786455732711063552") {
                    var hasGame = "RL";
                    var wantGame = "RL";
                }

                var discordURL = "https://discord.gg/QKxsVtNTWZ";
                var discordServer = "Rocketverse";
                var serverLogo = "/images/rocketverselogo.png"

            };

            //Rocket League Central
            if (String(serverId) == "763816484010328094") {

                if (String(channelId) == "763860575016714250") {
                    var hasGame = "RL";
                    var wantGame = "RL";
                }
                var discordURL = "https://discord.gg/dxKsVHNKdG";
                var discordServer = "RL Central";
                var serverLogo = "/images/rlcentrallogo.png"
            };

            //TradeHub
            if (String(serverId) == "354453659880521739") {
                if (String(channelId) == "355465572554637313") {
                    var hasGame = "RL";
                    var wantGame = "RL";
                }
                if (String(channelId) == "369582811067318282") {
                    var hasGame = "RL";
                    var wantGame = "CASH";
                }
                var discordURL = "https://discord.gg/s3dmv4Kay4";
                var discordServer = "TradeHub";
                var serverLogo = "/images/tradehublogo.png"
            }

            //RLUNITED
            if (String(serverId) == "661781642918232085") {

                if (String(channelId) == "763189582685929502") {
                    var hasGame = "RL";
                    var wantGame = "RL";
                }
                var discordURL = "https://discord.gg/t4F2kWpkcw";
                var discordServer = "RL United";
                var serverLogo = "/images/rlunitedlogo.png"

            };

            //DynamicTrades
            if (String(serverId) == "596396427463360533") {

                if (String(channelId) == "806326215727251516") {
                    var hasGame = "RL";
                    var wantGame = "RL";
                }
                if (String(channelId) == "806326221691813928") {
                    var hasGame = "RL";
                    var wantGame = "CS";
                }
                var discordURL = "https://discord.gg/TDdEKsnyhz";
                var discordServer = "Dynamic Trades";
                var serverLogo = "/images/dynamictradeslogo.png"

            };

            //BoSF
            if (String(serverId) == "593648497530634251") {
                // var rlrltradearray = ["679885099927732326","679885570482110529","679884758838149134","679884803532783678","679884984202297359","679884909267255337","679885070127202413","679885462227517489","679884829805772886","679884782557200438","681982641200955436"]

                if (String(channelId) == "679885099927732326" || String(channelId) == "679885570482110529" || String(channelId) == "679884758838149134" || String(channelId) == "679884803532783678" || String(channelId) == "679884984202297359" || String(channelId) == "679884909267255337" || String(channelId) == "679885070127202413" || String(channelId) == "679885462227517489" || String(channelId) == "679884829805772886" || String(channelId) == "679884782557200438" || String(channelId) == "681982641200955436") {
                    var hasGame = "RL";
                    var wantGame = "RL";
                }
                var discordURL = "https://discord.gg/kr6RbvwfwD";
                var discordServer = "BoSF";
                var serverLogo = "/images/bosflogo.png"

            };

            //Rocket Planet
            if (String(serverId) == "247628906914512896") {

                if (String(channelId) == "249642821047418881") {
                    var hasGame = "RL";
                    var wantGame = "RL";
                }
                if (String(channelId) == "414397169580113920") {
                    var hasGame = "RL";
                    var wantGame = "CS";
                }
                if (String(channelId) == "760313065001713734") {
                    var hasGame = "RL";
                    var wantGame = "CASH";
                }

                var discordURL = "https://discord.gg/trade";
                var discordServer = "Rocket Planet";
                var serverLogo = "/images/rocketplanetlogo.png"
            };

            //Trade Central
            if (String(serverId) == "223259649967652887") {

                // var rlrlarray =["565265723258306580","616324781645758497","565265964799623177","565266607295954994","565266288751017996","565268347185266710","565268529683759115","565266294279110676","385973199294169088","565268325613961226","565266895691972637"]
                // var rlcsarray =["565265786051231751"]
                // var rlcasharray = ["565266849919402016"]
                // var rlogarray =["565266724081893555"]
                // var cscsarray =["565267476452081754","565267952086286336","565266493177331742","565267629892173855"]
                // var cscasharray =["565267819323850752"]
                // var csogarray = ["565266456326176779"]
                // var ogogarray =["565269026331295787","565267106304622642","565268477481320469","565265582283423744"]
                // var ogcasharray =["565265486271479831"]
                // var cashcasharray =["565268973453705241"]

                if (String(channelId) == "565265723258306580" || String(channelId) == "616324781645758497" || String(channelId) == "565265964799623177" || String(channelId) == "565266607295954994" || String(channelId) == "565266288751017996" || String(channelId) == "565268347185266710" || String(channelId) == "565268529683759115" || String(channelId) == "565266294279110676" || String(channelId) == "385973199294169088" || String(channelId) == "565268325613961226" || String(channelId) == "565266895691972637") {
                    var hasGame = "RL";
                    var wantGame = "RL";
                }
                if (String(channelId) == "565265786051231751") {
                    var hasGame = "RL";
                    var wantGame = "CS";
                }
                if (String(channelId) == "565266849919402016") {
                    var hasGame = "RL";
                    var wantGame = "CASH";
                }
                if (String(channelId) == "565266724081893555") {
                    var hasGame = "RL";
                    var wantGame = "OG";
                }
                if (String(channelId) == "565267476452081754" || String(channelId) == "565267952086286336" || String(channelId) == "565266493177331742" || String(channelId) == "565267629892173855") {
                    var hasGame = "CS";
                    var wantGame = "CS";
                }
                if (String(channelId) == "565267819323850752") {
                    var hasGame = "CS";
                    var wantGame = "CASH";
                }
                if (String(channelId) == "565266456326176779") {
                    var hasGame = "CS";
                    var wantGame = "OG";
                }
                if (String(channelId) == "565269026331295787" || String(channelId) == "565267106304622642" || String(channelId) == "565268477481320469" || String(channelId) == "565265582283423744") {
                    var hasGame = "OG";
                    var wantGame = "OG";
                }
                if (String(channelId) == "565265486271479831") {
                    var hasGame = "OG";
                    var wantGame = "CASH";
                }
                if (String(channelId) == "565268973453705241") {
                    var hasGame = "CASH";
                    var wantGame = "CASH";
                }

                var discordURL = "https://discord.gg/tradecentral";
                var discordServer = "Trade Central";
                var serverLogo = "/images/tclogo.png"
            };

            var gamesOptions = ["RL", "CS", "OG", "CASH"];
            if (gamesOptions.includes(hasGame) && gamesOptions.includes(wantGame)) {
                var timeStamp = new Date().getTime() - 1.5 * 1000;
                var i;
                for (i = 0; i < messages.length; i++) {


                    if (messages[i].includes("[h]")) {
                        try {
                            var currentMessage = messages[i].trim();
                            currentMessage = currentMessage.replace(/`/g, "").replace(/[*_\-<>]/g, "").replace(/:credits:651952971894095872/g, "credits").replace(/:credit:757345342646911114/g, "credits").replace(/:.*:/, '');
                            currentMessage = currentMessage.replace("[h]", "").split("[w]");
                            var haveItem = currentMessage[0].trim();
                            var wantItem = currentMessage[1].trim();
                        } catch {
                            continue;
                        }
                    } else if (messages[i].includes("(h)")) {
                        try {
                            var currentMessage = messages[i].trim();
                            currentMessage = currentMessage.replace(/`/g, "").replace(/[*_\-<>]/g, "").replace(/:credits:651952971894095872/g, "credits").replace(/:credit:757345342646911114/g, "credits").replace(/:.*:/, '');
                            currentMessage = currentMessage.replace("(h)", "").split("(w)");
                            var haveItem = currentMessage[0].trim();
                            var wantItem = currentMessage[1].trim();
                        } catch {
                            continue;
                        }
                    } else if (messages[i].includes("{h}")) {
                        try {
                            var currentMessage = messages[i].trim();
                            currentMessage = currentMessage.replace(/`/g, "").replace(/[*_\-<>]/g, "").replace(/:credits:651952971894095872/g, "credits").replace(/:credit:757345342646911114/g, "credits").replace(/:.*:/, '');
                            currentMessage = currentMessage.replace("{h}", "").split("{w}");
                            var haveItem = currentMessage[0].trim();
                            var wantItem = currentMessage[1].trim();
                        } catch {
                            continue;
                        }
                    } else if (messages[i].includes(":BTH:")) {
                        try {
                            var currentMessage = messages[i].trim();
                            currentMessage = currentMessage.replace(/`/g, "").replace(/[*_\-<>]/g, "").replace(/:credits:651952971894095872/g, "credits").replace(/:credit:757345342646911114/g, "credits").replace(/:.*:/, '');
                            currentMessage = currentMessage.replace(":BTH:", "").split(":BTW:");
                            var haveItem = currentMessage[0].trim();
                            var wantItem = currentMessage[1].trim();
                        } catch {
                            continue;
                        }
                    } else {
                        continue;
                    }
                    counter1 = counter1 + 1;

                    var timeStamp = new Date().getTime();

                    // data = messageAuthor + "?????????????????????" + haveItem + "?????????????????????" + wantItem + "?????????????????????" + timeStamp + "?????????????????????" + steamName + "?????????????????????" + hasGame + "?????????????????????" + wantGame + "?????????????????????" + discordURL + "?????????????????????" + discordServer + "?????????????????????" + serverLogo;

                    var checkHash = haveItem + ' ' + wantItem + ' ' + messageAuthor;
                    var hash = crypto.createHash('md5').update(checkHash).digest('hex');
                    // if (allHashes.indexOf(hash) !== -1) {
                    if (allHashes.some((data) => data.hash === hash)) {
                        // console.log("Exists ");
                        counter2 = counter2 + 1;
                        continue;
                    } else {
                        // allHashes.push(hash);
                        allHashes.push({hash, expiry: new Date(timeStamp + 24 * 60 * 60 * 1000).getTime()})
                    }

                    data = {
                        Discord: messageAuthor,
                        Has: haveItem,
                        Want: wantItem,
                        TimeStamp: timeStamp,
                        HasGame: hasGame,
                        WantGame: wantGame,
                        DiscordURL: discordURL,
                        DiscordServer: discordServer,
                        ServerLogo: serverLogo
                    }

                    if (hasGame == "RL" && wantGame == "RL") {
                        const trade = new RLRL(data);
                        trade.save().catch((error) => {console.log(error)})
                    }
                    if (hasGame == "RL" && wantGame == "CS") {
                        const trade = new RLCS(data);
                        trade.save().catch((error) => {console.log(error)})
                    }
                    if (hasGame == "RL" && wantGame == "OG") {
                        const trade = new RLOG(data);
                        trade.save().catch((error) => {console.log(error)})
                    }
                    if (hasGame == "RL" && wantGame == "CASH") {
                        const trade = new RLCASH(data);
                        trade.save().catch((error) => {console.log(error)})
                    }
                    if (hasGame == "CS" && wantGame == "CS") {
                        const trade = new CSCS(data);
                        trade.save().catch((error) => {console.log(error)})
                    }
                    if (hasGame == "CS" && wantGame == "OG") {
                        const trade = new CSOG(data);
                        trade.save().catch((error) => {console.log(error)})
                    }
                    if (hasGame == "CS" && wantGame == "CASH") {
                        const trade = new CSCASH(data);
                        trade.save().catch((error) => {console.log(error)})
                    }
                    if (hasGame == "OG" && wantGame == "OG") {
                        const trade = new OGOG(data);
                        trade.save().catch((error) => {console.log(error)})
                    }
                    if (hasGame == "OG" && wantGame == "CASH") {
                        const trade = new OGCASH(data);
                        trade.save().catch((error) => {console.log(error)})
                    }

                    console.log(counter3 + ' Added. ' + counter1 + ' Total. Source: ' + messageAuthor + ' | ' + hasGame + wantGame + ' - ' + channelName + ' | ' + discordServer);
                }
            }
        }
    }

});

setInterval(async function () {
	const newData = allHashes.filter((hash) => (hash.expiry)  >  new Date().getTime()) 
    allHashes = newData;

    console.log("DELETED")


    await RLRL.deleteMany({"createdAt":{$lt:new Date(Date.now() - 24*60*60 * 1000)}}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    await RLCS.deleteMany({"createdAt":{$lt:new Date(Date.now() - 24*60*60 * 1000)}}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    await RLOG.deleteMany({"createdAt":{$lt:new Date(Date.now() - 24*60*60 * 1000)}}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    await RLCASH.deleteMany({"createdAt":{$lt:new Date(Date.now() - 24*60*60 * 1000)}}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    await CSCS.deleteMany({"createdAt":{$lt:new Date(Date.now() - 24*60*60 * 1000)}}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    await CSOG.deleteMany({"createdAt":{$lt:new Date(Date.now() - 24*60*60 * 1000)}}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    await CSCASH.deleteMany({"createdAt":{$lt:new Date(Date.now() - 24*60*60 * 1000)}}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    await OGOG.deleteMany({"createdAt":{$lt:new Date(Date.now() - 24*60*60 * 1000)}}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    await OGCASH.deleteMany({"createdAt":{$lt:new Date(Date.now() - 24*60*60 * 1000)}}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });



}, 30 * 60 * 1000); 
