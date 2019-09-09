Feature: Modificar Billetera (Depositar y Sacar)
    Como un cliente de API WEB (no humano)
    Requiero modificar el saldo de una Billetera

    Scenario: Saldo insuficiente
        Given Los siguientes datos billeteraID 1 billeteraSaldo -100
        When Preparo el JSON de los datos
        Then Hago un request POST hacia el url billetera con los datos
        Then Recibo una respuesta con http status 400 "Saldo insuficiente"

    Scenario: Sacar de saldo correcto
        Given Los siguientes datos billeteraID 2 billeteraSaldo -50
        When Preparo el JSON de los datos
        Then Hago un request POST hacia el url billetera con los datos
        Then Recibo una respuesta con http status 200 "{billeteraId: 2, billeteraSaldo: 20}"

    Scenario: Depósito en billetera
        Given Los siguientes datos billeteraID 1 billeteraSaldo 50
        When Preparo el JSON de los datos
        Then Hago un request POST hacia el url billetera con los datos
        Then Recibo una respuesta con http status 200 "{billeteraId: 1, billeteraSaldo: 20}"