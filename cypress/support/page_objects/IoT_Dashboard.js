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
  ControlSong() {
    return cy.get('[data-testId="SongControll"]');
  }
  Pausesong() {
    return cy.get(
      '[class="control-button play-button appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition"]'
    );
  }
  Shufflesong() {
    return cy.xpath(
      "//nb-card-body/div[@class='controls']/button//*[name()='svg']//*[name()='g' and contains(@data-name,'Layer 2')]//*[name()='g' and contains(@data-name,'shuffle-2')]//*[name()='path' and contains(@d,'M18.71 14.')]"
    );
  }
  UnShufflesong() {
    return cy.xpath(
      "//button[@class='control-button appearance-ghost size-tiny shape-rectangle icon-start icon-end status-basic nb-transition on']"
    );
  }
  Previoussong() {
    return cy.get(
      '[class="control-button appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition"]'
    );
  }
  Nextsong() {
    return cy.get(
      '[class="control-button skip-forward-button appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition"]'
    );
  }
  Repeatsong() {
    return cy.xpath(
      "//*[name()='g' and contains(@data-name,'repeat')]//*[name()='rect' and contains(@width,'24')]"
    );
  }
  UnRepeatsong() {
    return cy.xpath(
      "//*[name()='g' and contains(@data-name,'repeat')]//*[name()='rect' and contains(@width,'24')]"
    );
  }
  VolumeControll() {
    return cy.get(
      "body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div.scrollable-container > div > div > div > div > nb-layout-column > ngx-dashboard > div:nth-child(3) > div.col-xxxl-9.col-xl-12 > ngx-rooms > nb-card > ngx-player > nb-card > nb-card-footer > div > div"
    );
  }
  VolumeMute() {
    return cy.get('[class="eva eva-volume-down-outline"]');
  }
  VolumeFull() {
    return cy.get('[class="eva eva-volume-up-outline"]');
  }
  ContactsSection() {
    return cy.get('[data-testid="ContactsSection"]');
  }
  Contacts() {
    return cy.xpath(
      "//nb-card[@class='size-giant']//li[@class='tab ng-star-inserted']//a[@class='tab-link']"
    );
  }
  Recent() {
    return cy.xpath(
      "//nb-card[@class='size-giant']//li[@class='tab ng-star-inserted']//a[@class='tab-link']"
    );
  }
  TrafficConsumption() {
    return cy.xpath("//nb-card[@class='size-tiny']");
  }
  TrafficConsumptionButtonPress() {
    return cy.xpath("//button[normalize-space()='month']");
  }
  TrafficConsumptionYearly() {
    return cy.get(".option-list");
  }
  TrafficConsumptionWeekly() {
    return cy
      .xpath("//button[normalize-space()='year']")
      .click()
      .get(".option-list");
  }
  TrafficConsumptionMonthly() {
    return cy
      .xpath(
        "//nb-select[@class='appearance-outline size-medium status-basic shape-rectangle nb-transition']//button[@type='button'][normalize-space()='week']"
      )
      .click()
      .get(".option-list");
  }
  UIKitten() {
    return cy.get('[data-testid="UIkitten"]');
  }
  GlobeUIKitten() {
    return cy.get('[class="eva eva-globe"]');
  }
  AppleUIKitten() {
    return cy.get('[class="link-icon ion-social-apple"]');
  }
  AndroidUIKitten() {
    return cy.get('[class="link-icon ion-social-android"]');
  }
  GithubUIKitten() {
    return cy.get('[class="eva eva-github"]');
  }
  SecurityCameras() {
    return cy.get("ngx-security-cameras");
  }
  SingalView() {
    return cy.get('[class="nb-square"]');
  }
  Grid() {
    return cy.get('[class="eva eva-grid"]');
  }
  Camera1() {
    return cy.xpath("//span[normalize-space()='Camera #1']");
  }
  Camera2() {
    return cy.xpath("//span[normalize-space()='Camera #2']");
  }
  Camera3() {
    return cy.xpath("//span[normalize-space()='Camera #3']");
  }
  Camera4() {
    return cy.xpath("//span[normalize-space()='Camera #4']");
  }
}

export const IOTNavigate = new IoTDashboardPage();
