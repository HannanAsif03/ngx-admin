import { canvas } from "leaflet";
import { ignoreElements } from "rxjs-compat/operator/ignoreElements";
import { NavigateTo, onE_commerce } from "../support/page_objects/E_commerce";

describe("Ecommerce Page", () => {
  before("User should be on Ecommerce Page", () => {
    cy.visit("/");
    NavigateTo.EcommercePage();
    cy.url().should("include", "dashboard");
  });

  context("When user is on profit card", () => {
    it("User navigates to profit card", () => {
      NavigateTo.NavigatetoProfitCard();
      cy.should("contain", "Profit");
    });

    it("User can disable/enable Transactions and orders and moves mouse to check values", () => {
      NavigateTo.ProfitCardElements().then($canvas => {
        let x = cy.wrap($canvas);
        let canvasWidth = $canvas.width();
        let canvasheight = $canvas.height();

        let graphscroll1X = canvasWidth * 0.7;
        let graphscroll1Y = canvasheight * 0.6;
        let graphscroll2X = canvasWidth * 0.73;
        let graphscroll2Y = canvasheight * 0.6;
        let graphscroll3X = canvasWidth * 0.9;
        let graphscroll3Y = canvasheight * 0.6;
        let canvascenterXTrans = canvasWidth * 0.35;
        let canvascenterYTrans = canvasheight * 0.1;
        let canvascenterXOrder = canvasWidth * 0.7;
        let canvascenterYOrder = canvasheight * 0.1;
        x.click(graphscroll1X, graphscroll1Y).wait(200);
        x.click(graphscroll2X, graphscroll2Y).wait(200);
        x.click(graphscroll3X, graphscroll3Y).wait(200);
        x.click(canvascenterXTrans, canvascenterYTrans).wait(1000);
        x.click(graphscroll1X, graphscroll1Y).wait(200);
        x.click(graphscroll2X, graphscroll2Y).wait(200);
        x.click(graphscroll3X, graphscroll3Y).wait(200);
        x.click(canvascenterXOrder, canvascenterYOrder).wait(1000);

        x.click(canvascenterXTrans, canvascenterYTrans).wait(1000);
        x.click(graphscroll1X, graphscroll1Y).wait(200);
        x.click(graphscroll2X, graphscroll2Y).wait(200);
        x.click(graphscroll3X, graphscroll3Y).wait(200);
        x.click(canvascenterXOrder, canvascenterYOrder).wait(200);
      });
    });
    // it("User hovers mouse over graph", () => {
    //   cy.get('[data-testid="transaction-chart"]')
    //     .trigger("mouseover")
    //     .wait(3000);

    //   cy.get('[data-testid="transaction-chart"]')
    //     .invoke("show")
    //     .click();
    //   cy.get('[data-testid="transaction-chart"]').click({ force: true });
    // });

    it("Should allow user to click on flip icon", () => {
      NavigateTo.ProfitCardFlipIcon().click();
    });
    // { clientX: 200, clientY: 300 })
    //  .invoke("show");
    //.scrollTo(213, 150, {
    // ensureScrollable: false
    it("User is on backside of Profit card", () => {
      NavigateTo.ProfitCardBackside().should("contain", "Jun");
    });
    it("User moves mouse on graph", () => {
      NavigateTo.ProfitCardBacksideGraph().then($canvasback => {
        let y = cy.wrap($canvasback);
        y.click(1, 128).wait(200);
        y.click(40, 105).wait(200);
        y.click(84, 115).wait(200);
      });
    });
    it("Should allow user to flip back", () => {
      cy.wait(1000);
      NavigateTo.ProfitCardFlipbackIcon().click();
    });
  });

  context("User navigates to Daily income card ", () => {
    it("User is on Daily income card", () => {
      NavigateTo.DailyincomeCard().then($DailyIncome => {
        let z = cy.wrap($DailyIncome);

        cy.log($DailyIncome.width());
        cy.log($DailyIncome.height());
        z.click(10, 128).wait(200);
        z.click(40, 105).wait(200);
        z.click(84, 115).wait(200);
        z.click(100, 128).wait(200);
        z.click(10, 105).wait(200);
        z.click(184, 115).wait(200);
      });
    });

    it("User selects Tether from the dropdown", () => {
      NavigateTo.DailyIncomeButton().click();
      NavigateTo.DailyIncomeDropdownlist()
        .contains("Tether")
        .click();
      NavigateTo.DailyincomeCard().then($DailyIncome => {
        let z = cy.wrap($DailyIncome);

        cy.log($DailyIncome.width());
        cy.log($DailyIncome.height());
        z.click(10, 128).wait(200);
        z.click(40, 105).wait(200);
        z.click(84, 115).wait(200);
        z.click(100, 128).wait(200);
        z.click(10, 105).wait(200);
        z.click(184, 115).wait(200);
      });
    });
    it("User selects Ethereum from the dropdown", () => {
      NavigateTo.DailyIncomeButton().click();
      NavigateTo.DailyIncomeDropdownlist()
        .contains("Ethereum")
        .click();
      NavigateTo.DailyincomeCard().then($DailyIncome => {
        let z = cy.wrap($DailyIncome);

        cy.log($DailyIncome.width());
        cy.log($DailyIncome.height());
        z.click(10, 128).wait(200);
        z.click(40, 105).wait(200);
        z.click(84, 115).wait(200);
        z.click(100, 128).wait(200);
        z.click(10, 105).wait(200);
        z.click(184, 115).wait(200);
      });
    });
    it("User selects Bitcoin from the dropdown", () => {
      NavigateTo.DailyIncomeButton().click();
      NavigateTo.DailyIncomeDropdownlist()
        .contains("Bitcoin")
        .click();
    });
    it("User clicks on filp icon", () => {
      NavigateTo.DailyIncomeFlipIcon()
        .click()
        .wait(500);
    });
    it("User clicks on Blue color on chart", () => {
      NavigateTo.DailyIncomePiechart()
        .click(40, 105)
        .click(40, 105)
        .wait(500);
      NavigateTo.DailyIncomeCoinNameBackside().should("contain", "Tether");
    });
    it("User clicks on Orange color on chart", () => {
      NavigateTo.DailyIncomePiechart()
        .click(30, 40)
        .wait(500);
      NavigateTo.DailyIncomeCoinNameBackside().should("contain", "Ethereum");
    });
    it("User clicks on Green color on chart", () => {
      NavigateTo.DailyIncomePiechart().click(84, 115);
      NavigateTo.DailyIncomeCoinNameBackside().should("contain", "Bitcoin");
    });
    it("User clicks filp icon", () => {
      NavigateTo.DailyIncomeFlipbackIcon().click({ force: true });
    });
  });
  context("When user is on Marketplace", () => {
    it("User is on Marketplace week orders", () => {
      NavigateTo.MarketPlaceGraph()
        .click(115, 93)
        .wait(200)
        .click(115, 150)
        .wait(200)
        .click(115, 30)
        .wait(200)
        .click(435, 150)
        .wait(200)
        .click(435, 205)
        .wait(200)
        .click(435, 260);
    });
    it("User Clicks on drop down", () => {
      NavigateTo.MarketPlaceOrdersButton().click();
    });
    it("User Selects month from Marketplace orders", () => {
      cy.contains(" month").click();
      NavigateTo.MarketPlaceGraph()
        .click(435, 175)
        .wait(200)
        .click(435, 201)
        .wait(200)
        .click(435, 260)
        .wait(200)
        .click(252, 175)
        .wait(200)
        .click(471, 175)
        .wait(200)
        .click(510, 175)
        .wait(200);
    });
    it("User selects year from drop down", () => {
      NavigateTo.MarketplacefromMonthtoyear().click();
      cy.contains(" year ").click();
      NavigateTo.MarketPlaceGraph()
        .click(435, 175)
        .wait(200)
        .click(115, 30)
        .wait(200);
    });
    it("User selects week from drop down", () => {
      NavigateTo.MarketplacefromYeartoWeek().click();
      NavigateTo.MarketplacetoWeek().click();
    });
    it("User navigates to profit tab", () => {
      NavigateTo.MarketplaceProfit().click();
      NavigateTo.MarketplaceProfitGraph()
        .click(635, 204)
        .wait(200)
        .click(783, 204)
        .wait(200)
        .click(609, 204)
        .click(200);
    });
    it("User clicks on button and drop down appears", () => {
      NavigateTo.MarketPlaceProfitDropdownButton().click();
    });
    it("User Selects year from drop down", () => {
      cy.contains(" year ").click();
      NavigateTo.MarketplaceProfitGraph()
        .click(635, 204)
        .wait(200)
        .click(783, 204)
        .wait(200)
        .click(609, 204)
        .click(200);
    });

    it("User clicks on button and drop down appears", () => {
      NavigateTo.MarketPlaceProfitDropdownButton().click();
    });
    it("User Selects month from drop down", () => {
      cy.contains(" month").click();
      NavigateTo.MarketplaceProfitGraph()
        .click(635, 204)
        .wait(200)
        .click(783, 204)
        .wait(200)
        .click(609, 204)
        .click(200);
    });
    it("User clicks on button and drop down appears", () => {
      NavigateTo.MarketPlaceProfitDropdownButton().click();
    });
    it("User Selects week from drop down", () => {
      cy.contains(" week ").click();
    });
    it("When user navigates back to order tab", () => {
      NavigateTo.MarketplaceOrders().click();
    });
  });
  context("When user is on traffic card", () => {
    it("User Navigates to traffic", () => {
      NavigateTo.NavigatetoTraffic();
      cy.should("contain", "Mon");
      cy.get('[data-testid="Trafficscroller"]')
        .scrollTo("bottom")
        .wait(1000)
        .scrollTo("top")
        .wait(1000);
    });
    it("User clicks on drop down button", () => {
      NavigateTo.TrafficFrontDropDownButton().click({ force: true });
    });
    it("User selects month from the dropdown", () => {
      NavigateTo.TrafficFrontMonthly().click();
      NavigateTo.TrafficFrontScroller()
        .scrollTo("bottom")
        .wait(1000)
        .scrollTo("top")
        .wait(1000);
    });
    it("User clicks on drop down button", () => {
      NavigateTo.TrafficFrontDropDownButton().click({ force: true });
    });
    it("User selects year from the dropdown", () => {
      NavigateTo.TrafficFrontYearly().click();
      NavigateTo.TrafficFrontScroller()
        .scrollTo("bottom")
        .wait(1000)
        .scrollTo("top")
        .wait(1000);
    });
    it("User clicks on drop down button", () => {
      NavigateTo.TrafficFrontDropDownButton().click({ force: true });
    });
    it("User selects week from the dropdown", () => {
      NavigateTo.TrafficFrontWeekly().click();
    });

    it("User drops to traffic graph ", () => {
      NavigateTo.TrafficDrop().click();
      NavigateTo.TrafficBackChart()
        .click(150, 175)
        .wait(200)
        .click(210, 175)
        .wait(200)
        .click(460, 201)
        .wait(200)
        .click(550, 175)
        .wait(200)
        .click(300, 175)
        .wait(200)
        .click(471, 175)
        .wait(200);
    });

    it("User clicks on drop down button", () => {
      NavigateTo.TrafficBackDropDownButton().click({ force: true });
    });
    it("User selects year from the dropdown", () => {
      NavigateTo.TrafficBackYearly().click({ force: true });
      NavigateTo.TrafficBackChart()
        .click(150, 175)
        .wait(200)
        .click(210, 175)
        .wait(200)
        .click(460, 201)
        .wait(200)
        .click(550, 175)
        .wait(200)
        .click(300, 175)
        .wait(200)
        .click(471, 175)
        .wait(200);
    });
    it("User clicks on drop down button", () => {
      NavigateTo.TrafficBackDropDownButtonfromyear().click({ force: true });
    });
    it("User selects  month the dropdown", () => {
      NavigateTo.TrafficBackMonthly().click();
      NavigateTo.TrafficBackChart()
        .click(150, 175)
        .wait(200)
        .click(160, 175)
        .wait(200)
        .click(180, 201)
        .wait(200)
        .click(200, 175)
        .wait(200)
        .click(220, 175)
        .wait(200)
        .click(241, 175)
        .wait(200);
    });
    it("User clicks on drop down button", () => {
      NavigateTo.TrafficBackDropDownButtonfromMonth().click({ force: true });
    });
    it("User selects week from the dropdown", () => {
      NavigateTo.TrafficBackWeekly().click();
    });
    it("User goes back to traffic stats", () => {
      NavigateTo.TrafficPullUp().click();
    });
  });
  context("User is on Country Orders Statistics section", () => {
    it("User Navigates to Country Orders Statistics", () => {
      NavigateTo.CountryOrderStatistics()
        .scrollIntoView()
        .wait(200);
    });
    it("User selects different conutries from graph", () => {
      NavigateTo.CountryOrderStatisticsGraph().click(300, 300);
      NavigateTo.CountryOrderStatisticsGraphCountryName()
        .should("contain", "Colombia")
        .wait(200);
      NavigateTo.CountryOrderStatisticsGraph().click(300, 350);
      NavigateTo.CountryOrderStatisticsGraphCountryName()
        .should("contain", "Peru")
        .wait(200);
      NavigateTo.CountryOrderStatisticsGraph().click(350, 350);
      NavigateTo.CountryOrderStatisticsGraphCountryName()
        .should("contain", "Brazil")
        .wait(200);
      NavigateTo.CountryOrderStatisticsGraph().click(310, 380);
      NavigateTo.CountryOrderStatisticsGraphCountryName()
        .should("contain", "Chile")
        .wait(200);
      NavigateTo.CountryOrderStatisticsGraph().click(320, 380);
      NavigateTo.CountryOrderStatisticsGraphCountryName()
        .should("contain", "Bolivia")
        .wait(200);
    });

    it("User clicks on zoom in button", () => {
      NavigateTo.CountryOrderStatisticsGraphZoomInButton().click();
    });
    it("User clicks on zoom out buttonh", () => {
      NavigateTo.CountryOrderStatisticsGraphZoomOutButton().click();
    });
  });
  context("When user is on Visitors Analytics card", () => {
    it("User Navigates to Visitors Analytics", () => {
      NavigateTo.NavigatetoVisitorsAnalytics().scrollIntoView();
    });
    it("User clicks on arrow to hide visitor statistic section", () => {
      NavigateTo.VisitorsAnalyticsHideChart().click({ force: true });
    });
    it("User check the values of graph", () => {
      NavigateTo.VisitorsAnalyticsGraph()
        .click(160, 175)
        .wait(200)
        .click(130, 201)
        .wait(200)
        .click(100, 175)
        .wait(200)
        .click(120, 175)
        .wait(200)
        .click(565, 175)
        .wait(200);
    });
    it("User clicks on arrow to unhide visitor statistic section", () => {
      NavigateTo.VisitorsAnalyticsUnHideChart().click({
        force: true
      });
    });
  });
  context("When user is on User Activity section", () => {
    it("User Navigates to User Activity Section", () => {
      NavigateTo.UserActivitySection()
        .scrollIntoView()
        .wait(200)
        .scrollTo("bottom")
        .wait(200)
        .scrollTo("top")
        .wait(200);
    });
    it("User clicks on button for dropdown", () => {
      NavigateTo.UserActivityDropDown().click();
    });
    it("User selects year from dropdown", () => {
      cy.contains("year").click();
      NavigateTo.UserActivitySection()
        .scrollIntoView()
        .should("contain", "2010")
        .wait(200)
        .scrollTo("bottom")
        .wait(200)
        .scrollTo("top")
        .wait(200);
    });
    it("User clicks on button for dropdown", () => {
      NavigateTo.UserActivityDropDown().click();
    });
    it("User selects week from dropdown", () => {
      NavigateTo.UserActivityweekly().click();
      NavigateTo.UserActivitySection()
        .scrollIntoView()
        .should("contain", "Mon")
        .scrollTo("bottom")
        .wait(200)
        .scrollTo("top")
        .wait(200);
    });
    it("User clicks on button for dropdown", () => {
      NavigateTo.UserActivityDropDown().click();
    });
    it("User selects month from dropdown", () => {
      NavigateTo.UserActivityMonthly().click();
      NavigateTo.UserActivitySection().should("contain", "1 May");
    });
  });
});
