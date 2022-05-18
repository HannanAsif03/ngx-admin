export class IoTDashboardPage {
  IoTPage() {
    return cy.contains("IoT Dashboard").click();
  }
  LightBulb() {
    return cy.get(".nb-lightbulb").click();
  }
  RollerShades() {
    return cy.get(".nb-roller-shades").click();
  }
  WirelessAudio() {
    return cy.get(".nb-audio").click();
  }
  CoffeeMaker() {
    return cy.get(".nb-coffee-maker").click();
  }
}
export const IOTNavigate = new IoTDashboardPage();
