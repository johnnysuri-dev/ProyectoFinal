const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const httpClient = require('request-promise')

let newBilletera = {};
let httpOptions = {};
let servicioResponse = undefined;


Given('Los siguientes datos billeteraID {int} billeteraSaldo {int}', function (id, saldo) {
  this.billeteraId = id;
  this.billeteraSaldo = saldo;
  });

  When('Preparo el JSON de los datos', function () {
    console.log('DONE');
  httpOptions = {
    method: 'POST',
    uri: 'http://localhost:81/api/user',
    json: true,
    body: newUser,
    resolveWithFullResponse: true
  };
  });

  Then('Hago un request POST hacia el url billetera con los datos', function () {
    await httpClient(httpOptions)
    .then(function(response) {
      servicioResponse = response;
    })
    .catch(function(error) {
      servicioResponse = error;
    });
  });

  Then('Recibo una respuesta con http status {int} {string}', function (int, string) {
    expect(servicioResponse.statusCode).to.eql(httpStatus);
  });
