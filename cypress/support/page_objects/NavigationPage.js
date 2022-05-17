export class NavigatonPage {
  EcommercePage() {
    return cy.contains("E-commerce").click();
  }
  NavigatetoProfitCard() {
    return cy.xpath(
      "//nb-card[@class='size-tiny']//ngx-stats-card-front//nb-card-header"
    );
  }
  ProfitCardTransactions() {
    return cy.xpath(
      "//ngx-stats-bar-animation-chart[@ng-reflect-lines-data='[object Object]']//div[@class='echart']//div//canvas"
    );
  }
  ProfitCardFlipIcon() {
    return cy.xpath(
      "//ngx-profit-card[@data-testid='profit-card']//div[@class='front-container']//nb-icon[@class='flip-icon']"
    );
  }
  ProfitCardFlipbackIcon() {
    return cy.xpath(
      "//ngx-profit-card[@data-testid='profit-card']//div[@class='back-container']//nb-icon[@class='flip-icon']"
    );
  }
  IoTDashboardPage() {
    cy.contains("IoT Dashboard").click();
  }
  ProfitCardCanvas() {
    return cy.xpath(
      "//ngx-stats-bar-animation-chart[@ng-reflect-lines-data='[object Object]']//div[@class='echart']//div//canvas"
    );
  }
  DailyIncomeCoinBtc() {
    return cy.xpath("//button[normalize-space()='Bitcoin']");
  }
  DailyIncomeCoinTet() {
    return cy.xpath("//button[normalize-space()='Tether']");
  }
  DailyIncomeFlipIcon() {
    cy.get(
      'ngx-earning-card > nb-flip-card > .flipcard-body > .front-container > nb-card-front > .size-tiny > .flip-icon > .eva > [data-name="Layer 2"] > g > path'
    ).click({ force: true });
  }
  DailyIncomeFlipbackIcon() {
    cy.get(
      '.flipped > .flipcard-body > .back-container > nb-card-back > .size-tiny > .flip-icon > .eva > [data-name="Layer 2"] > g > path'
    ).click();
  }
  MarketplaceProfit() {
    return cy.xpath(
      "//span[@class='tab-text ng-star-inserted'][normalize-space()='Profit']"
    );
  }
  MarketplaceOrder() {
    return cy.xpath("//span[normalize-space()='Orders']");
  }
  MarketplacefromWeek() {
    return cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='week']"
    );
  }
  MarketplacefromMonth() {
    return cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='month']"
    );
  }
  MarketplacefromYear() {
    return cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='year']"
    );
  }
  NavigatetoTraffic() {
    cy.get('[data-testid="Trafficscroller"]').click();
  }
  TrafficfromWeek() {
    return cy.xpath(
      "//nb-card-front//button[@type='button'][normalize-space()='week']"
    );
  }
  TrafficfromMonth() {
    return cy.xpath(
      "//nb-card-front//button[@type='button'][normalize-space()='month']"
    );
  }
  TrafficplacefromYear() {
    return cy.xpath(
      "//nb-card-front//button[@type='button'][normalize-space()='year']"
    );
  }
  NavigatetoVisitorsAnalytics() {
    return cy.xpath(
      "//ngx-ecommerce-visitors-analytics//nb-card[@class='size-medium']"
    );
  }
  UserActivityfromMonth() {
    return cy.xpath("//button[normalize-space()='month']");
  }
  UserActivityfromWeek() {
    return cy.xpath("//button[normalize-space()='week']");
  }

  UserActivityfromYear() {
    return cy.xpath("//button[normalize-space()='year']");
  }
}

export const NavigateTo = new NavigatonPage();
