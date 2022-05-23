export class IoTDashboardPage {
  IoTPage() {
    cy.visit("/");
    cy.contains("IoT Dashboard").click();
    cy.url().should("include", "iot-dashboard");
  }
  //Light Bulb
  LightBulb() {
    return cy.get(".nb-lightbulb");
  }
  //Roller Shades
  RollerShades() {
    return cy.get(".nb-roller-shades");
  }
  //Wireless Audio
  WirelessAudio() {
    return cy.get(".nb-audio");
  }
  //Coffee Maker
  CoffeeMaker() {
    return cy.get(".nb-coffee-maker");
  }
  //Tempreture Section
  TempretureTab() {
    return cy.xpath("//span[normalize-space()='Temperature']");
  }
  TempreturePowerButton() {
    return cy.get('[data-testid="PowerButton"]');
  }
  TempretureDragger() {
    return cy.get('[data-testid="TempretureDragger"]');
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
  //Humidity Section
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
  HumidityDragger() {
    return cy.get('[data-testid="HumidityDragger"]');
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
  //Electricity Consumption section
  ElectricityConsumption() {
    return cy.get('[data-testId="ElectricityConsumption"]');
  }
  ElectricityConsumptionGraph() {
    return cy
      .get('[data-testId="ElectricityConsumption"]')
      .then($ElectrcityConsump => {
        let ElectrcityConsumpWidth = $ElectrcityConsump.width();
        let ElectrcityConsumpHieght = $ElectrcityConsump.height();
        let a = cy.wrap($ElectrcityConsump);
        let ElectrcityConsump1X = ElectrcityConsumpWidth * 0.35;
        let ElectrcityConsump1Y = ElectrcityConsumpHieght * 0.1;
        let ElectrcityConsump2X = ElectrcityConsumpWidth * 1;
        let ElectrcityConsump2Y = ElectrcityConsumpHieght * 0.5;
        let ElectrcityConsump3X = ElectrcityConsumpWidth * 0.7;
        let ElectrcityConsump3Y = ElectrcityConsumpHieght * 0.1;
        let ElectrcityConsump4X = ElectrcityConsumpWidth * 0.4;
        let ElectrcityConsump4Y = ElectrcityConsumpHieght * 0.1;

        a.click(ElectrcityConsump1X, ElectrcityConsump1Y).wait(200);
        a.click(ElectrcityConsump2X, ElectrcityConsump2Y).wait(200);
        a.click(ElectrcityConsump3X, ElectrcityConsump3Y).wait(200);
        a.click(ElectrcityConsump4X, ElectrcityConsump4Y).wait(200);
      });
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
  //RoomManagement Section
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
  //Playlis Section
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
  //Contacts Sections
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
  //Traffic Consumption Section
  TrafficConsumption() {
    return cy.xpath("//nb-card[@class='size-tiny']");
  }
  TrafficConsumptionGraph() {
    return cy.xpath("//nb-card[@class='size-tiny']").then($TrafficConsump => {
      let TrafficConsumpWidth = $TrafficConsump.width();
      let TrafficConsumpHieght = $TrafficConsump.height();
      let b = cy.wrap($TrafficConsump);
      let TrafficConsump1X = TrafficConsumpWidth * 0.43;
      let TrafficConsump1Y = TrafficConsumpHieght * 0.6;
      let TrafficConsump2X = TrafficConsumpWidth * 0.28;
      let TrafficConsump2Y = TrafficConsumpHieght * 0.7;
      let TrafficConsump3X = TrafficConsumpWidth * 0.15;
      let TrafficConsump3Y = TrafficConsumpHieght * 0.6;

      b.click(TrafficConsump1X, TrafficConsump1Y).wait(500);
      b.click(TrafficConsump2X, TrafficConsump2Y).wait(500);
      b.click(TrafficConsump3X, TrafficConsump3Y).wait(500);
    });
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
  //UI Kitten section
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
  //Security Cameras Section
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
