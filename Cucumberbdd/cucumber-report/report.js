$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Skeleton/Demowebshoplogin.feature");
formatter.feature({
  "name": "Demo Web Shop Login feature file",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Valid Login For Demo Web Shop",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "The URL of the Demo Weh Shop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User is in a valid page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "askmail@email.com",
        "abc123"
      ]
    },
    {
      "cells": [
        "askmail@ymail.com",
        "abc123"
      ]
    },
    {
      "cells": [
        "askmail@gmail.com",
        "abc123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Valid Login For Demo Web Shop",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "The URL of the Demo Weh Shop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.the_URL_of_the_Demo_Weh_Shop(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"askmail@email.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_enters_as_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in a valid page",
  "keyword": "Then "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_is_in_a_valid_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid Login For Demo Web Shop",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "The URL of the Demo Weh Shop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.the_URL_of_the_Demo_Weh_Shop(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"askmail@ymail.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_enters_as_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in a valid page",
  "keyword": "Then "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_is_in_a_valid_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid Login For Demo Web Shop",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "The URL of the Demo Weh Shop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.the_URL_of_the_Demo_Weh_Shop(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"askmail@gmail.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_enters_as_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in a valid page",
  "keyword": "Then "
});
formatter.match({
  "location": "Skeleton.DemoWebShopLoginStepDefs.user_is_in_a_valid_page()"
});
formatter.result({
  "status": "passed"
});
});