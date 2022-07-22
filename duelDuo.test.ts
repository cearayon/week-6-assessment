
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw brings up list of bots', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    await driver.sleep(2000)

    const drawChoices = await driver.findElement(By.id('choices'))
    const displayedBots = await drawChoices.isDisplayed()
    expect(displayedBots).toBe(true)
})

test('Add to duo button displays your bots', async () => {
    const addDuoButton = await driver.findElement(By.css('bot-btn'))
    
    await addDuoButton.click()
    await driver.sleep(2000)

    const yourBot = await driver.findElement(By.id('player-duo'))
    const yourBotDisplayed = await yourBot.isDisplayed()
    expect(yourBotDisplayed).toBe(true)
    
})

