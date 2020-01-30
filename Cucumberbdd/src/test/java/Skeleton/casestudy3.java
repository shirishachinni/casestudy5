package Skeleton;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class casestudy3 {
	WebDriver driver;
	@Given("the url of casestudy is {string}")
	public void the_url_of_casestudy_is(String url) {
		//System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
		   driver=new ChromeDriver();
		   driver.get(url);
		   driver.manage().window().maximize();
	}

	@When("user enters {string} as USERname")
	public void user_enters_as_USERname(String username) {
		driver.findElement(By.id("userName")).sendKeys(username);
	}

	@When("user enters {string} as PASSword")
	public void user_enters_as_PASSword(String password) {
		 driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("user clicks on LOGin")
	public void user_clicks_on_LOGin() {
		driver.findElement(By.xpath("//input[@name='Login']")).click();
	}

	@When("user enters  search product")
	public void user_enters_search_product() {
	   driver.findElement(By.xpath("//input[@id='myInput']")).sendKeys("Head");
	}

	@When("user clicks on find details")
	public void user_clicks_on_find_details() {
	    driver.findElement(By.xpath("//form//input[@name='val']")).click();
	}

	@Then("user clicks on add to cart")
	public void user_clicks_on_add_to_cart() {
		driver.findElement(By.xpath("//a[@class='btn btn-success btn-product']")).click();
	    
	}


}
