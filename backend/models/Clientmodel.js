const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    Clientname:String,
    Clientcode: String,
    Clientmanager:String,
    Currencyselector:String,
    Billing:String,
    Optional: String,
})

module.exports = mongoose.model('Clients', ClientSchema);