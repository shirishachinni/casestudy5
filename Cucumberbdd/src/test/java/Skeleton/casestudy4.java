package Skeleton;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class casestudy4 {
	WebDriver driver;
	@Given("the url of Casestudy is {string}")
	public void the_url_of_Casestudy_is(String url) {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
		   driver=new ChromeDriver();
		   driver.get(url);
		   driver.manage().window().maximize();
	}

	@When("user enters {string} as USERName")
	public void user_enters_as_USERName(String username) {
		driver.findElement(By.id("userName")).sendKeys(username);
		}

	@When("user enters {string} as PASSWord")
	public void user_enters_as_PASSWord(String password) {
		 driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("user clicks on LOGIn")
	public void user_clicks_on_LOGIn() {
		driver.findElement(By.xpath("//input[@name='Login']")).click();
		
	}

	@When("user enters  search PRoduct")
	public void user_enters_search_PRoduct() {
		  driver.findElement(By.xpath("//input[@id='myInput']")).sendKeys("Head");
	}

	@When("user clicks on find DEtails")
	public void user_clicks_on_find_DEtails() {
		  driver.findElement(By.xpath("//form//input[@name='val']")).click();
	}

	@When("user tries to click on proceed to pay with out adding to cart")
	public void user_tries_to_click_on_proceed_to_pay_with_out_adding_to_cart() {
	  driver.findElement(By.xpath("//form[2]//input[1]")).click();
	}

	@Then("test me does not rply cart item")
	public void test_me_does_not_rply_cart_item() {
	driver.findElement(By.xpath("//i[@class='fa fa-shopping-cart']"));
	}



}
