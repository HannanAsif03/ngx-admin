export class E_commerce {
  EcommercePage() {
    return cy.contains("E-commerce").click();
  }
  //Profit Card
  NavigatetoProfitCard() {
    return cy.get('[data-testid="ProfitcardFront"]');
  }
  ProfitCardElements() {
    return cy.get('[data-testid="transaction-chart"]');
  }
  ProfitCardFlipIcon() {
    return cy.get('[data-testid="flipicon"]');
  }
  ProfitCardBackside() {
    return cy.get(".info");
  }
  ProfitCardBacksideGraph() {
    return cy.get('[data-testid="ProfitbacksideGraph"]');
  }
  ProfitCardFlipbackIcon() {
    return cy.get('[data-testid="flipiconback"]');
  }
  //Daily Income
  DailyincomeCard() {
    return cy.get('[data-testid="dailyIncome"]');
  }
  DailyIncomeButton() {
    return cy.get('[data-testid="DailyIncomeButton"]');
  }
  DailyIncomeDropdownlist() {
    return cy.get(".option-list");
  }
  DailyIncomeCoinBtc() {
    return cy.xpath("//button[normalize-space()='Bitcoin']");
  }
  DailyIncomeCoinTet() {
    return cy.xpath("//button[normalize-space()='Tether']");
  }
  DailyIncomeFlipIcon() {
    return cy.get('[data-testid="Dailyincomefrontflipicon"]');
  }
  DailyIncomePiechart() {
    return cy.get('[data-testid="DailyincomePiechart"]');
  }
  DailyIncomeCoinNameBackside() {
    return cy.get('[data-testid="CoinName"]');
  }
  DailyIncomeFlipbackIcon() {
    return cy.get('[data-testid="Dailyincomefrontflipicon"]');
  }
  //Market Place
  MarketPlaceGraph() {
    return cy.xpath(
      "//ngx-orders-chart[@ng-reflect-orders-chart-data='[object Object]']//div[@class='echart']//div//canvas"
    );
  }
  MarketplaceOrders() {
    return cy.xpath("//span[normalize-space()='Orders']");
  }

  MarketPlaceOrdersButton() {
    return cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='week']"
    );
  }
  MarketplacefromWeek() {
    return cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='week']"
    );
  }
  MarketplacefromMonthtoyear() {
    return cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='month']"
    );
  }
  MarketplacefromYeartoWeek() {
    return cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='year']"
    );
  }
  //MarketPlace Profit
  MarketplaceProfit() {
    return cy.xpath(
      "//li[@class='tab ng-star-inserted']//a[@class='tab-link']"
    );
  }
  MarketplaceProfitGraph() {
    return cy.xpath(
      "//ngx-profit-chart[@ng-reflect-profit-chart-data='[object Object]']//div[@class='echart']//div//canvas"
    );
  }
  MarketPlaceProfitDropdownButton() {
    return cy.xpath(
      "//nb-tab[@class='content-active']//nb-icon[@icon='chevron-down-outline']//*[name()='svg']//*[name()='g' and contains(@data-name,'Layer 2')]//*[name()='g' and contains(@data-name,'chevron-do')]//*[name()='rect' and contains(@width,'24')]"
    );
  }
  MarketplacetoWeek() {
    return cy.xpath("//nb-option[@id='nb-option-9']");
  }
  //Traffic
  NavigatetoTraffic() {
    cy.get('[data-testid="Trafficscroller"]');
  }
  TrafficFrontDropDownButton() {
    return cy.xpath(
      "//nb-card-front[@data-testid='Traffic-scroll']//nb-icon[@icon='chevron-down-outline']//*[name()='svg']//*[name()='g' and contains(@data-name,'Layer 2')]//*[name()='g' and contains(@data-name,'chevron-do')]//*[name()='path' and contains(@d,'M12 15.5a1')]"
    );
  }
  TrafficFrontScroller() {
    return cy.get('[data-testid="Trafficscroller"]');
  }
  TrafficFrontMonthly() {
    return cy.get("#nb-option-4");
  }
  TrafficFrontYearly() {
    return cy.get("#nb-option-5");
  }
  TrafficFrontWeekly() {
    return cy.get("#nb-option-3");
  }
  TrafficDrop() {
    return cy.get('[data-testid="Trafficdrop"]');
  }
  TrafficBackChart() {
    return cy.get('[data-testid="TrafficBackGraph"]');
  }
  TrafficBackDropDownButton() {
    return cy.xpath(
      "//div[@class='second-card-container']//ngx-traffic-cards-header[@ng-reflect-type='week']//nb-icon[@icon='chevron-down-outline']//*[name()='svg']//*[name()='g' and contains(@data-name,'Layer 2')]//*[name()='g' and contains(@data-name,'chevron-do')]//*[name()='path' and contains(@d,'M12 15.5a1')]"
    );
  }
  TrafficBackDropDownButtonfromyear() {
    return cy.xpath(
      "//div[@class='second-card-container']//ngx-traffic-cards-header[@ng-reflect-type='year']//nb-icon[@icon='chevron-down-outline']//*[name()='svg']//*[name()='g' and contains(@data-name,'Layer 2')]//*[name()='g' and contains(@data-name,'chevron-do')]//*[name()='rect' and contains(@width,'24')]"
    );
  }
  TrafficBackDropDownButtonfromMonth() {
    return cy.xpath(
      "//div[@class='second-card-container']//ngx-traffic-cards-header[@ng-reflect-type='month']//nb-icon[@icon='chevron-down-outline']//*[name()='svg']//*[name()='g' and contains(@data-name,'Layer 2')]//*[name()='g' and contains(@data-name,'chevron-do')]//*[name()='path' and contains(@d,'M12 15.5a1')]"
    );
  }
  TrafficBackMonthly() {
    return cy.get("#nb-option-7");
  }
  TrafficBackYearly() {
    return cy.get("#nb-option-8");
  }
  TrafficBackWeekly() {
    return cy.get("#nb-option-6");
  }
  TrafficPullUp() {
    return cy.get('[data-testid  ="Trafficpullup"]');
  }
  //Country Order Statistics

  CountryOrderStatistics() {
    return cy.xpath(
      "//body/ngx-app/ngx-pages[@class='ng-star-inserted']/ngx-one-column-layout/nb-layout[@class='window-mode with-scroll']/div[@class='scrollable-container']/div[@class='layout']/div[@class='layout-container']/div[@class='content']/div[@class='columns']/nb-layout-column/ngx-ecommerce[@class='ng-star-inserted']/div[2]/div[1]"
    );
  }
  CountryOrderStatisticsGraph() {
    return cy.get(
      '[class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"]'
    );
  }
  CountryOrderStatisticsGraphCountryName() {
    return cy.xpath("//nb-card-body//ngx-country-orders-chart");
  }

  CountryOrderStatisticsGraphZoomInButton() {
    return cy.get('[class="leaflet-control-zoom-in"]');
  }
  CountryOrderStatisticsGraphZoomOutButton() {
    return cy.get('[class="leaflet-control-zoom-out leaflet-disabled"]');
  }
  //Visitor Analytics
  NavigatetoVisitorsAnalytics() {
    return cy.get('[data-testid="VisitorsAnlytics"]');
  }
  VisitorsAnalyticsHideChart() {
    return cy.xpath(
      "//*[name()='g' and contains(@data-name,'arrow-forw')]//*[name()='rect' and contains(@width,'24')]"
    );
  }
  VisitorsAnalyticsGraph() {
    return cy.xpath(
      "//ngx-visitors-analytics-chart[@ng-reflect-chart-data='[object Object]']//div[@class='echart']//div//canvas"
    );
  }
  VisitorsAnalyticsUnHideChart() {
    return cy.xpath("//*[name()='path' and contains(@d,'M19 11H7.1')]");
  }
  //User Activity
  UserActivitySection() {
    return cy.get('[data-testid="user-activity-scroller"]');
  }
  UserActivityDropDown() {
    return cy.get('[data-testid="UserActivityButton"]');
  }
  UserActivityweekly() {
    return cy.get("#nb-option-15");
  }
  UserActivityMonthly() {
    return cy.get("#nb-option-16");
  }
}

export const NavigateTo = new E_commerce();
