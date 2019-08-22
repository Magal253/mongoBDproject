var mongoose = require('mongoose');
var algumSchema = require('../models/user');
var faker = require('faker');

var cidadao = mongoose.model('cidadao', algumSchema);
/*
algumSchema.methods.nome = function () {
    var greeting = ("Nome: " + this.name);
    console.log(greeting);
}*/

var Familia = [];

function Famicon(fam) {
  //var fam = [];
  for (var x = 0; x < 3/*Math.ceil(Math.random() * 5)*/; x++) {
    fam.push(faker.name.findName());

  }
  return fam;
}

Familia = Famicon(Familia);

var alguem = new cidadao({ name: makeName(), age: randNumber(), dirige: trueORfalse(), familia: Familia });

console.log('Name: ' + alguem.name + '\tage: ' + alguem.age + '\tDirige: ' + alguem.dirige);
/*
alguem.nome();
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////



function trueORfalse() {
    var numero = Math.floor(Math.random() * 1);
    if (numero == 0) return false;
    else return true;
}

function makeName() {
    var usu = '';
    var gambi = 'BCDFGHJKLMNPQRSTVWXYZ';
    var gambi2 = 'AEIOU'
    var gambiTam = gambi.length;
    var gambiTam2 = gambi2.length;
    //usu += gambi.charAt(Math.floor(Math.random() * gambiTam));
    for (var i = 0; i < Math.ceil(Math.random() * 4); i++) {
        usu += gambi.charAt(Math.floor(Math.random() * gambiTam));
        usu += gambi2.charAt(Math.floor(Math.random() * gambiTam2));
    }



    return usu;
}

function randNumber() {
    // var codigo = Math.floor(Math.random() * 5000);
    var numero = Math.floor(Math.random() * 8);
    //var lista = [codigo,numero];
    return numero;
}

module.exports = alguem;
