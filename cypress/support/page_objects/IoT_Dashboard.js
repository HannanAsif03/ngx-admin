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
  TempretureTab(){
    return cy.xpath("//span[normalize-space()='Temperature']").click()
  }
  TempreturePowerButton(){
    return cy.get('[data-testid="PowerButton"]').click()
  }
  TempretureCoolButton(){
    return cy.get('.nb-snowy-circled').click()
  }
  TempretureSunnyButton(){
    return cy.get('.nb-sunny-circled').click()
  }
  TempretureflameButton(){
    return cy.get('.nb-flame-circled').click()
  }
  TempretureloopButton(){
    return cy.get('.nb-loop-circled').click()
  }
HumidityTab(){
  return cy.xpath("//span[normalize-space()='Humidity']").click()
}
HumidityPoweroffButton(){
  return cy.xpath("//nb-tab[@class='content-active']//button[@class='power-bg on appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition']").click()
}
HumidityPowerOnButton(){
  return cy.xpath("//button[@class='power-bg appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition']").click()
}
HumidityCoolButton(){
  return cy.xpath("//nb-radio-group[@name='humidity-mode']//i[@class='nb-snowy-circled']").click()
}
HumiditySunnyButton(){
  return cy.xpath("//nb-radio-group[@name='humidity-mode']//i[@class='nb-sunny-circled']").click()
}
HumidityflameButton(){
  return cy.xpath("//nb-radio-group[@name='humidity-mode']//i[@class='nb-flame-circled']").click()
}
HumidityloopButton(){
  return cy.xpath("//nb-radio-group[@name='humidity-mode']//i[@class='nb-loop-circled']").click()
}

}
export const IOTNavigate = new IoTDashboardPage();
