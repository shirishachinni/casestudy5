package Skeleton;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"pretty","html:cucumber-report"},features= {"src/test/resources/Skeleton/Demowebshoplogin.feature"},
monochrome=true,dryRun=false,snippets=SnippetType.CAMELCASE)
public class CucumberRunner {

}
