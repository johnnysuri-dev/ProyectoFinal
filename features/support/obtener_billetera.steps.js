const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const { Builder, By, Key, until } = require('selenium-webdriver');

let userName = "";
let userCi = 0;
let chromeDriver = undefined;



Given('Dados datos de  billeteraId: {int}', function (billeteraId) {
    this.billeteraId = billeteraId;
  });

  When('Navego a la pagina principal', function () {
    chromeDriver = await new Builder().forBrowser('chrome').build();
    await chromeDriver.get('http://localhost:8080/ui');
  });

  When('Llenar el campo de billeteraId', function () {
    await chromeDriver.findElement(By.name('idInput')).sendKeys(billeteraId);
  });

  When('Hacer click en el boton Mostrar', function () {
    // Write code here that turns the phrase above into concrete actions
    await chromeDriver.findElement(By.name('showButton')).click();
  });

  Then('Se debe mostrar la cadena {string}', function (string) {
    await chromeDriver.findElement(By.name('showArea'))
    .getText().then(function (text) {
      showText = text;
    });

  expect(showText).to.eql(expected);
  await chromeDriver.quit();
  });
