import { Builder, Browser, By, until } from "selenium-webdriver";

async function run() {
  const isDocker = process.env.IN_DOCKER === "true";
  console.log(isDocker);

  const seleniumUrl = isDocker
    ? "http://selenium:4444"
    : "http://localhost:4444";
  const frontendUrl = isDocker
    ? "http://frontend:3000"
    : "http://localhost:3000";

  console.log(`Testing frontend: ${frontendUrl}`);
  console.log(`Using Selenium: ${seleniumUrl}`);

  const driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .usingServer(seleniumUrl)
    .build();

  try {
    await driver.get(`${frontendUrl}/products`);

    console.log("Current URL:", await driver.getCurrentUrl());
    console.log("Page title:", await driver.getTitle());

    const productCard = await driver.wait(
      until.elementLocated(By.css("[data-testid='container']")),
      10000
    );

    const addButton = await productCard.findElement(
      By.css("[data-testid='button']")
    );
    await addButton.click();

    console.log("✅ Add to cart clicked successfully");
  } catch (error) {
    console.error("Test failed:", error);

    const screenshot = await driver.takeScreenshot();
    console.log("Screenshot (base64):", screenshot.substring(0, 100) + "...");

    const pageSource = await driver.getPageSource();
    console.log("Page source (first 500 chars):", pageSource.substring(0, 500));
  } finally {
    await driver.quit();
  }
}

run().catch(console.error);
