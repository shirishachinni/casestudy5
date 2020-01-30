Feature: casestudy2 feature file

  Scenario Outline: login to testmeapp
    Given the URL of casestudy is "http://10.232.237.143:443/TestMeApp/login.htm"
    When User enters "<username>" as USername
    And User enters "<password>" as PAssword
    And User clicks on Login BUtton
    Then User is in a valid Page

    Examples: 
      | username | password |
      | shiri    |   123456 |
