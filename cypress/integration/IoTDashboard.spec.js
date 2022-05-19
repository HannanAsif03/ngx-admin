import {
  IOTNavigate,
  IOTNavigtae
} from "../support/page_objects/IoT_Dashboard";

describe("IoT Dashboard Page", () => {
  before("User Navigates to IoT Dashboard", () => {
    IOTNavigate.IoTPage();
  });

  context("User is on light section", () => {
    it("User turns on the Light", () => {
      IOTNavigate.LightBulb().click();
    });
    it("User turns on the Light", () => {
      IOTNavigate.LightBulb().click();
    });
  });
  context("User is on Roller shades section", () => {
    it("User turns off Roller Shade", () => {
      IOTNavigate.RollerShades().click();
    });
    it("User turns on Roller Shades", () => {
      IOTNavigate.RollerShades().click();
    });
  });
  context("User is on Wireless Audio section", () => {
    it("User turns off Wireless Audio", () => {
      IOTNavigate.WirelessAudio().click();
    });
    it("User turns on Wireless Audio", () => {
      IOTNavigate.WirelessAudio().click();
    });
  });
  context("User is on Coffee Maker section", () => {
    it("User turns off Coffee Maker", () => {
      IOTNavigate.CoffeeMaker().click();
    });
    it("User turns on Coffe Maker", () => {
      IOTNavigate.CoffeeMaker().click();
    });
  });
  context("User is on tempreture section", () => {
    it("User turns on Tempreture", () => {
      IOTNavigate.TempreturePowerButton().click();
    });
    it("User turns off Tempreture", () => {
      IOTNavigate.TempreturePowerButton().click();
      cy.wait(1000);
    });
    it("User clicks on Sunny function button", () => {
      IOTNavigate.TempretureSunnyButton().click();
      cy.wait(1000);
    });
    it("User clicks on flame function button", () => {
      IOTNavigate.TempretureflameButton().click();
      cy.wait(1000);
    });
    it("User clicks on loop function button", () => {
      IOTNavigate.TempretureloopButton().click();
      cy.wait(1000);
    });
    it("User clicks on cool function button", () => {
      IOTNavigate.TempretureCoolButton().click();
      cy.wait(1000);
    });
  });
  context("User is on Humidty section", () => {
    it("User navigates to Humidity sectiom", () => {
      IOTNavigate.HumidityTab().click();
    });

    it("User turns off Humidity", () => {
      IOTNavigate.HumidityPoweroffButton().click();
      cy.wait(1000);
    });
    it("User turns on Humidity", () => {
      IOTNavigate.HumidityPowerOnButton().click();
      cy.wait(1000);
    });
    it("User clicks on Sunny function button", () => {
      IOTNavigate.HumiditySunnyButton().click();
      cy.wait(1000);
    });

    it("User clicks on loop function button", () => {
      IOTNavigate.HumidityloopButton();
      cy.wait(1000);
    });
    it("User clicks on cool function button", () => {
      IOTNavigate.HumidityCoolButton();
      cy.wait(1000);
    });
    it("User clicks on flame function button", () => {
      IOTNavigate.HumidityflameButton();
      cy.wait(1000);
    });
    it("User navigates back to tempreture section", () => {
      IOTNavigate.TempretureTab();
    });
  });
  context("User is on Electricity Consumption section ", () => {
    it("User navigates to electricity section", () => {
      IOTNavigate.ElectricityConsumption().should(
        "contain",
        "Electricity Consumption"
      );
    });
    it("User clicks on 2015", () => {
      IOTNavigate.ElectricityConsumption()
        .contains("2015")
        .click();
    });
    it("User clicks on 2017", () => {
      IOTNavigate.ElectricityConsumption()
        .contains("2017")
        .click();
    });
    it("User clicks on 2016", () => {
      IOTNavigate.ElectricityConsumption()
        .contains("2016")
        .click();
    });
    it("Drop down appears on clicking button by user", () => {
      IOTNavigate.ElectricityButtonPress().click();
    });
    it("User selects Month from drop down", () => {
      IOTNavigate.ElectricityConsumptionMonthly()
        .contains("month")
        .click();
    });
    it("User selects Year from drop down", () => {
      IOTNavigate.ElectricityConsumptionYearly()
        .contains("year")
        .click();
    });
    it("User selects Week from drop down", () => {
      IOTNavigate.ElectricityConsumptionWeekly()
        .contains("week")
        .click();
    });
  });
  context("User is on RoomManagemet section ", () => {
    it("User Navigates to Room Management section", () => {
      IOTNavigate.RoomManagement().scrollIntoView();
    });
    it("User Selects Bedroom", () => {
      IOTNavigate.RoomManagementBedroom().click();
    });
    it("User Selects Kitchen", () => {
      IOTNavigate.RoomManagementKitchen().click();
    });
    it("User Selects Hallway", () => {
      IOTNavigate.RoomManagementHallway().click();
    });
    it("User Selects Living Room", () => {
      IOTNavigate.RoomManagementLivingRoom().click();
    });
  });
  context("User is on My playlist section ", () => {
    it("User Navigates to Playlist", () => {
      IOTNavigate.Playlist().scrollIntoView();
    });
    it("User Plays the song", () => {
      IOTNavigate.Playsong().click();
      cy.wait(3000);
    });
    it("User select Next song", () => {
      IOTNavigate.Nextsong().click();
      cy.wait(3000);
    });
    it("User select previous song", () => {
      IOTNavigate.Previoussong().click();
      cy.wait(3000);
    });
    it("User Pauses the song", () => {
      IOTNavigate.Pausesong().click();
      cy.wait(3000);
    });
    it("User press button to shuffles the song", () => {
      IOTNavigate.Shufflesong().click();
      cy.wait(3000);
    });
    it("User again press button to unshuffle the song", () => {
      IOTNavigate.UnShufflesong().click();
      cy.wait(3000);
    });
    it("User clicks on repeat button", () => {
      IOTNavigate.Repeatsong().click();
      cy.wait(3000);
    });
    it("User again clicks on repeat button", () => {
      IOTNavigate.UnRepeatsong().click();
      cy.wait(3000);
    });
    it("User clicks on Volume mute button", () => {
      IOTNavigate.VolumeMute().click();
      cy.wait(3000);
    });
    it("User clicks on Volume full button", () => {
      IOTNavigate.VolumeFull().click();
    });
  });
  context("User is on My playlist section ", () => {});
});
