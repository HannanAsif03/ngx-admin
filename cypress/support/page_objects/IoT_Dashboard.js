export class IoTDashboardPage {
  IoTPage() {
    cy.visit("/");
    cy.contains("IoT Dashboard").click();
    cy.url().should("include", "iot-dashboard");
  }
  LightBulb() {
    return cy.get(".nb-lightbulb");
  }
  RollerShades() {
    return cy.get(".nb-roller-shades");
  }
  WirelessAudio() {
    return cy.get(".nb-audio");
  }
  CoffeeMaker() {
    return cy.get(".nb-coffee-maker");
  }
  TempretureTab() {
    return cy.xpath("//span[normalize-space()='Temperature']");
  }
  TempreturePowerButton() {
    return cy.get('[data-testid="PowerButton"]');
  }
  TempretureCoolButton() {
    return cy.get(".nb-snowy-circled");
  }
  TempretureSunnyButton() {
    return cy.get(".nb-sunny-circled");
  }
  TempretureflameButton() {
    return cy.get(".nb-flame-circled");
  }
  TempretureloopButton() {
    return cy.get(".nb-loop-circled");
  }
  HumidityTab() {
    return cy.xpath("//span[normalize-space()='Humidity']");
  }
  HumidityPoweroffButton() {
    return cy.xpath(
      "//nb-tab[@class='content-active']//button[@class='power-bg on appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition']"
    );
  }
  HumidityPowerOnButton() {
    return cy.xpath(
      "//button[@class='power-bg appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition']"
    );
  }
  HumidityCoolButton() {
    return cy.xpath(
      "//nb-radio-group[@name='humidity-mode']//i[@class='nb-snowy-circled']"
    );
  }
  HumiditySunnyButton() {
    return cy.xpath(
      "//nb-radio-group[@name='humidity-mode']//i[@class='nb-sunny-circled']"
    );
  }
  HumidityflameButton() {
    return cy.xpath(
      "//nb-radio-group[@name='humidity-mode']//i[@class='nb-flame-circled']"
    );
  }
  HumidityloopButton() {
    return cy.xpath(
      "//nb-radio-group[@name='humidity-mode']//i[@class='nb-loop-circled']"
    );
  }
  ElectricityConsumption() {
    return cy.get('[data-testId="ElectricityConsumption"]');
  }
  // ElectricityConsumptionScroller() {
  //   cy.get('[data-testId="ElectricityConsumptionScroller"]').scrollTo("bottom");
  // }
  ElectricityButtonPress() {
    return cy.xpath("//button[normalize-space()='week']");
  }
  ElectricityConsumptionMonthly() {
    return cy.get(".option-list");
  }
  ElectricityConsumptionYearly() {
    return cy
      .xpath(
        "//nb-select[@class='type-select appearance-outline size-medium status-basic shape-rectangle nb-transition']//button[@type='button'][normalize-space()='month']"
      )
      .click()
      .get(".option-list");
  }
  ElectricityConsumptionWeekly() {
    return cy
      .xpath("//button[normalize-space()='year']")
      .click()
      .get(".option-list");
  }
  RoomManagement() {
    return cy.get('[data-testId="RoomManagement"]');
  }
  RoomManagementBedroom() {
    return cy.xpath(
      "//*[name()='g' and @id='1']//*[name()='path' and contains(@class,'room-bg')]"
    );
  }
  RoomManagementKitchen() {
    return cy.xpath(
      "//*[name()='g' and @id='0']//*[name()='path' and contains(@class,'room-bg')]"
    );
  }
  RoomManagementHallway() {
    return cy.xpath(
      "//*[name()='g' and @id='3']//*[name()='path' and contains(@class,'room-bg')]"
    );
  }
  RoomManagementLivingRoom() {
    return cy.xpath(
      "//*[name()='g' and @id='2']//*[name()='path' and contains(@class,'room-bg')]"
    );
  }
  Playlist() {
    return cy.get('[data-testId="Playlist"]');
  }
  Playsong() {
    return cy.get(
      '[class="control-button play-button appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition"]'
    );
  }
  Pausesong() {
    return cy.get(
      '[class="control-button play-button appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition"]'
    );
  }
}
export const IOTNavigate = new IoTDashboardPage();
