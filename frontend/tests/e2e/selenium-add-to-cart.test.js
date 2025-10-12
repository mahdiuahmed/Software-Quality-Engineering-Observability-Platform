import { Builder, By, until } from "selenium-webdriver";

async function run() {
  const driver = await new Builder()
    .forBrowser("chrome")
    .usingServer("http://selenium:4444") // ✅ remove `/wd/hub`
    .build();

  try {
    await driver.get("http://frontend:3000/products");

    const productCard = await driver.wait(
      until.elementLocated(By.css("[data-testid='container']")),
      50000
    );

    const addButton = await productCard.findElement(
      By.css("[data-testid='button']")
    );
    await addButton.click();

    console.log("✅ Add to cart clicked successfully");
  } finally {
    await driver.quit();
  }
}

run().catch(console.error);
