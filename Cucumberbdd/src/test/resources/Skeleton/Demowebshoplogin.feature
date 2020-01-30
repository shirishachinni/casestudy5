Feature: Demo Web Shop Login feature file
@invalid
  Scenario Outline: Valid Login For Demo Web Shop
    Given The URL of the Demo Weh Shop "http://demowebshop.tricentis.com/login"
    When User enters "<username>" as username
    And User enters "<password>" as password
    And User clicks on Login button
    Then User is in a valid page
    

    Examples: 
      | username          | password |
      | askmail@email.com | abc123   |
      | askmail@ymail.com | abc123   |
      | askmail@gmail.com | abc123   |
