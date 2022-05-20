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
  context.only("User is on tempreture section", () => {
    it("User turns on Tempreture", () => {
      IOTNavigate.TempreturePowerButton().click();
    });
    it("User turns off Tempreture", () => {
      IOTNavigate.TempreturePowerButton().click();
      cy.wait(1000);
    });
    it.only("User moves the tempreture", () => {
      cy.get('[ data-testid=" TempretureDragger"]')
        .invoke("val", "12")
        .wait(200);
      // .invoke("ng-reflect-set-value", "12")
      // .wait(200);
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
    it("User Controls the song", () => {
      IOTNavigate.ControlSong()
        .invoke("val", "80")

        .invoke("val", "40")
        .wait(200)
        .invoke("val", "70")
        .wait(200)
        .invoke("val", "60");
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
    it("User moves the volume bar", () => {
      IOTNavigate.VolumeControll()
        .invoke("val", "80")
        .wait(200)
        .invoke("val", "70")
        .wait(200)
        .invoke("val", "60")
        .wait(200)
        .invoke("val", "50")
        .wait(200)
        .invoke("val", "40")
        .wait(200)
        .invoke("val", "30")
        .wait(200)
        .invoke("val", "20")
        .wait(200)
        .invoke("val", "10")
        .wait(200)
        .invoke("val", "0")
        .wait(200)
        .invoke("val", "10")
        .wait(200)
        .invoke("val", "20")
        .wait(200)
        .invoke("val", "30")
        .wait(200)
        .invoke("val", "40")
        .wait(200)
        .invoke("val", "50")
        .wait(200)
        .invoke("val", "60")
        .wait(200)
        .invoke("val", "70")
        .wait(200)
        .invoke("val", "80")
        .wait(200)
        .invoke("val", "90")
        .wait(200)
        .invoke("val", "100");
    });

    it("User clicks on Volume full button", () => {
      IOTNavigate.VolumeFull().click();
    });
  });
  context("User is on Contacts section ", () => {
    it("User Navigates to Contacts section ", () => {
      IOTNavigate.ContactsSection();
    });
    it("User Navigates to Recent tab", () => {
      IOTNavigate.Contacts()
        .scrollIntoView()
        .click();
      cy.wait(1000);
    });
    it("User Navigates to Contacts tab", () => {
      IOTNavigate.Recent().click();
    });
  });
  context("User navigates to traffic consumption tab", () => {
    it("User Navigates to Traffic Consumption section ", () => {
      IOTNavigate.TrafficConsumption().scrollIntoView();
    });
    it("User clicks on button ", () => {
      IOTNavigate.TrafficConsumptionButtonPress().click();
    });
    it("User selects Year from drop down", () => {
      IOTNavigate.TrafficConsumptionYearly()
        .contains("year")
        .click();
    });
    it("User selects Week from drop down", () => {
      IOTNavigate.TrafficConsumptionWeekly()
        .contains("week")
        .click();
    });
    it("User selects Month from drop down", () => {
      IOTNavigate.TrafficConsumptionMonthly()
        .contains("month")
        .click();
    });
  });
  context("User navigates to UI kitten page", () => {
    it("User Navigates to UI kitten section ", () => {
      IOTNavigate.UIKitten().scrollIntoView();
    });
    it("User clicks on globe icon  ", () => {
      IOTNavigate.GlobeUIKitten()
        .invoke("removeAttr", "target")
        .click();
    });
    it("User clicks on apple icon  ", () => {
      cy.go("back");
      IOTNavigate.UIKitten().scrollIntoView();
      IOTNavigate.AppleUIKitten()
        .invoke("removeAttr", "target")
        .click();
    });
    it("User clicks on android icon  ", () => {
      cy.go("back");
      IOTNavigate.UIKitten().scrollIntoView();
      IOTNavigate.AndroidUIKitten()
        .invoke("removeAttr", "target")
        .click();
    });
    it("User clicks on Github icon  ", () => {
      cy.go("back");
      IOTNavigate.UIKitten().scrollIntoView();
      IOTNavigate.GithubUIKitten()
        .invoke("removeAttr", "target")
        .click();
      cy.go("back");
    });
  });
  context("User is on Security camera section", () => {
    it("User Navigates to camera section", () => {
      IOTNavigate.SecurityCameras()
        .should("contain", "Security Cameras")
        .scrollIntoView();
    });
    it("User clicks on single view button", () => {
      IOTNavigate.SingalView().click();
    });
    it("User clicks on grid view button", () => {
      IOTNavigate.Grid().click();
    });
    it("User clicks on Camera 1", () => {
      IOTNavigate.Camera1().click();
      IOTNavigate.Grid().click();
    });
    it("User clicks on Camera 2", () => {
      IOTNavigate.Camera2().click();
      IOTNavigate.Grid().click();
    });
    it("User clicks on Camera 3", () => {
      IOTNavigate.Camera3().click();
      IOTNavigate.Grid().click();
    });
    it("User clicks on Camera 4", () => {
      IOTNavigate.Camera4().click();
      IOTNavigate.Grid().click();
    });
  });
});
