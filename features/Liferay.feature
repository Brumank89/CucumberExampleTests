@TheInternetPrueba
Feature: Iniciar sesion en la pagina de prueba

  @loginInternetTest
  Scenario: Iniciar sesion en la pagina
    Given Abro la pagina "https://the-internet.herokuapp.com/login" en el navegador
    Then Ingreso el usuario "tomsmith" y la contraseña "SuperSecretPassword!"
    Then Presiono el boton Login
    Then Espero que el mensaje de error sea "You logged into a secure area!"
    Then Cierro la sesion
