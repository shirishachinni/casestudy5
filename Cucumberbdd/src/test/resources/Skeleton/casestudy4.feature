Feature: casestudy 4
Scenario: shoping in testmeapp
Given the url of Casestudy is "http://10.232.237.143:443/TestMeApp/login.htm" 
When user enters "shiri" as USERName
And user enters "123456" as PASSWord
And user clicks on LOGIn
And user enters  search PRoduct
And user clicks on find DEtails
And user tries to click on proceed to pay with out adding to cart
Then test me does not rply cart item
