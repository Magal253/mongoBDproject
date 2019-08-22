var mongoose = require('mongoose');
var alguem = require('../app/controllers/setUserOnDb');
var algumSchema = require('../app/models/user');

var cid = mongoose.model('cidadao', algumSchema);

alguem.save(function (err, alguem) {
    if (err) return console.error(err);
    alguem.nome();
});

cid.find(function (err, cida) {
    if (err) return console.error(err);
    console.log(cida);
})