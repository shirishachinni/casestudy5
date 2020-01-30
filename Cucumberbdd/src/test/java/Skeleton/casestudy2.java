package Skeleton;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class casestudy2 {
	WebDriver driver;
	@Given("the URL of casestudy is {string}")
	public void the_URL_of_casestudy_is(String url) {
		//System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
		   driver=new ChromeDriver();
		   driver.get(url);
		   driver.manage().window().maximize();
	}

	@When("User enters {string} as USername")
	public void user_enters_as_USername(String username) {
	   driver.findElement(By.id("userName")).sendKeys(username);
	}

	@When("User enters {string} as PAssword")
	public void user_enters_as_PAssword(String password) {
	  driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("User clicks on Login BUtton")
	public void user_clicks_on_Login_BUtton() {
	  driver.findElement(By.xpath("//input[@name='Login']")).click();
	}

	@Then("User is in a valid Page")
	public void user_is_in_a_valid_Page() {
		 driver.findElement(By.xpath("//a[contains(text(),'SignOut')]")).click();

	}

}
