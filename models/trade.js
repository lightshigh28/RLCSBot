const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradesSchema = new Schema({
    Discord: {
        type: String,
        required: true
    },
    Has: {
        type: String,
        required: true
    },
    Want: {
        type: String,
        required: true
    },
    TimeStamp: {
        type: Number,
        required: true
    },
    HasGame: {
        type: String,
        required: true
    },
    WantGame: {
        type: String,
        required: true
    },
    DiscordURL: {
        type: String,
        required: true
    },
    DiscordServer: {
        type: String,
        required: true
    },
    ServerLogo: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const RLRL = mongoose.model('RLRL', tradesSchema);
const RLCS = mongoose.model('RLCS', tradesSchema);
const RLOG = mongoose.model('RLOG', tradesSchema);
const RLCASH = mongoose.model('RLCASH', tradesSchema);
const CSCS = mongoose.model('CSCS', tradesSchema);
const CSOG = mongoose.model('CSOG', tradesSchema);
const CSCASH = mongoose.model('CSCASH', tradesSchema);
const OGOG = mongoose.model('OGOG', tradesSchema);
const OGCASH = mongoose.model('OGCASH', tradesSchema);

module.exports = {
    RLRL,
    RLCS,
    RLOG,
    RLCASH,
    CSCS,
    CSOG,
    CSCASH,
    OGOG,
    OGCASH
};