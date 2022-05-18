import { Context } from "@angular/compiler-cli/src/ngtsc/translator";
import {
  IOTNavigate,
  IOTNavigtae,
} from "../support/page_objects/IoT_Dashboard";

describe("IoT Dashboard Page", () => {
  before("Open application", () => {
    cy.visit("/");
  });
  it("User should be on IoT Dashboard", () => {
    IOTNavigate.IoTPage();
    cy.url().should("include", "iot-dashboard");
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
});
