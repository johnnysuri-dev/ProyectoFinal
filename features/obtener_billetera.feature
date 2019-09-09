Feature: Mostrar informacion de la billetera
    Como Usuario Final (humano)
    Quiero ver los datos de una billetera del sistema

    Scenario: No existe la billetera
        Given Dados datos de billeteraId: 4
        When Navego a la pagina principal
        And Llenar el campo de billeteraId
        And Hacer click en el boton Mostrar
        Then Se debe mostrar la cadena "Billetera no encontrada"

    Scenario: Existe la billetera y se muestra su informacion correctamente
        Given Dados datos de usuario billeteraId: 1
        When Navego a la pagina principal
        And Llenar el campo de billeteraId
        And Hacer click en el boton Mostrar
        Then Se debe mostrar la cadena "1 - 0"