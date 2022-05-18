import {
  IOTNavigate,
  IOTNavigtae,
} from "../support/page_objects/IoT_Dashboard";

describe("IoT Dashboard Page", () => {
  before("User Navigates to IoT Dashboard", () => {
    cy.visit("/");
      IOTNavigate.IoTPage();
      //cy.url().should("include", "Iot-dashboard");
  });
  
  context("User is on light section", () => {
    it("User turns on the Light", () => {
      IOTNavigate.LightBulb();
    });
    it("User turns on the Light", () => {
      IOTNavigate.LightBulb();
    });
  });
  context("User is on Roller shades section", () => {
    it("User turns off Roller Shade", () => {
      IOTNavigate.RollerShades();
    });
    it("User turns on Roller Shades", () => {
      IOTNavigate.RollerShades();
    });
  });
  context("User is on Wireless Audio section", () => {
    it("User turns off Wireless Audio", () => {
      IOTNavigate.WirelessAudio();
    });
    it("User turns on Wireless Audio", () => {
      IOTNavigate.WirelessAudio();
    });
  });
  context("User is on Coffe Maker section", () => {
    it("User turns off Coffee Maker", () => {
      IOTNavigate.CoffeeMaker();
    });
    it("User turns on Coffe Maker", () => {
      IOTNavigate.CoffeeMaker();
    });
  });
  context("User is on tempreture section", () => {
    it("User turns on Tempreture", () => {
      IOTNavigate.TempreturePowerButton()
    });
    it("User turns off Tempreture", () => {
      IOTNavigate.TempreturePowerButton();                                                  
      cy.wait(1000)
    });
    it("User clicks on Sunny function button",()=>{
      IOTNavigate.TempretureSunnyButton()
      cy.wait(1000)
    })
    it("User clicks on flame function button",()=>{
      IOTNavigate.TempretureflameButton()
      cy.wait(1000)
    })
    it("User clicks on loop function button",()=>{
      IOTNavigate.TempretureloopButton()
      cy.wait(1000)
    })
    it("User clicks on cool function button",()=>{
      IOTNavigate.TempretureCoolButton()
      cy.wait(1000)
    })
  });
  context("User is on Humidty section", () => {
    it("User navigates to Humidity sectiom", () => {
      IOTNavigate.HumidityTab()
    });

   
    it("User turns off Humidity", () => {
      IOTNavigate.HumidityPoweroffButton()
      cy.wait(1000)
    });
    it("User turns on Humidity", () => {
      IOTNavigate.HumidityPowerOnButton();                                                  
      cy.wait(1000)
     });
    it("User clicks on Sunny function button",()=>{
      IOTNavigate.HumiditySunnyButton()
      cy.wait(1000)
    })
    
    it("User clicks on loop function button",()=>{
      IOTNavigate.HumidityloopButton()
      cy.wait(1000)
    })
    it("User clicks on cool function button",()=>{
      IOTNavigate.HumidityCoolButton()
      cy.wait(1000)
    })
    it("User clicks on flame function button",()=>{
      IOTNavigate.HumidityflameButton()
      cy.wait(1000)
    })
    it("User navigates back to tempreture section", () => {
      IOTNavigate.TempretureTab()
 });
});
});