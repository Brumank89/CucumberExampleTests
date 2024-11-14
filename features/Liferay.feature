@LifeRay_Integration 
Feature: LifeRay_Integration 

  Scenario: LifeRay_Integration 
    Given Abro la pagina "https://the-internet.herokuapp.com/login" en el navegador
    
    Then Ingreso el usuario "tomsmith" y la contraseña "SuperSecretPassword!"
    
    Then Presiono el boton Login
    
    Then Espero que el mensaje de error sea "You logged into a secure area!"
    
    Then Cierro la sesion