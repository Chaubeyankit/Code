const lib = require('./lib');

let amount = 2000;
let toCut = 200;

function chargeDebitCard(params) {
   amount = amount - toCut;
   console.log(`Remaining amount is ${amount}`)
}

// lib.updateAccount('TV', chargeDebitCard)
let promiseObject = lib.promiseUpdateAccount('Tv').then(chargeDebitCard)