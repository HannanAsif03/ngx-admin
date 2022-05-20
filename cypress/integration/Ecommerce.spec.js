import { canvas } from "leaflet";
import { ignoreElements } from "rxjs-compat/operator/ignoreElements";
import {
  NavigateTo,
  onNavigationpage
} from "../support/page_objects/NavigationPage";

describe("Ecommerce Page", () => {
  before("Open application", () => {
    cy.visit("/");
  });

  it("User should be on Ecommerce Page", () => {
    NavigateTo.EcommercePage();
    cy.url().should("include", "dashboard");
  });

  context("When user is on profit card", () => {
    it("User Should navigate to profit guide", () => {
      NavigateTo.NavigatetoProfitCard();
      cy.should("contain", "Profit");
    });

    it("User can disable/enable Transactions and orders on clicking", () => {
      cy.get('[data-testid="transaction-chart"]').then($canvas => {
        const canvasWidth = $canvas.width();
        const canvasHieght = $canvas.height();

        const canvascenterXTrans = canvasWidth * 0.35;
        const canvascenterYTrans = canvasHieght * 0.1;
        const canvascenterXOrder = canvasWidth * 0.7;
        const canvascenterYOrder = canvasHieght * 0.1;

        cy.wrap($canvas).click(canvascenterXTrans, canvascenterYTrans);
        cy.wait(1000);
        cy.wrap($canvas).click(canvascenterXOrder, canvascenterYOrder);
        cy.wait(1000);
        cy.wrap($canvas).click(canvascenterXTrans, canvascenterYTrans);
        cy.wait(1000);
        cy.wrap($canvas).click(canvascenterXOrder, canvascenterYOrder);
      });
    });
    it("User hovers mouse over graph", () => {
      cy.get('[data-testid="transaction-chart"]')
        .trigger("mouseover")
        .wait(3000);

      cy.get('[data-testid="transaction-chart"]')
        .invoke("show")
        .click();
      cy.get('[data-testid="transaction-chart"]').click({ force: true });
    });

    it("Should allow user to click on flip icon", () => {
      NavigateTo.ProfitCardFlipIcon().click();
      cy.get(".info").should("contain", "Jun");
      cy.get('[data-testid="Profitbackside"]')
        .trigger("mousedown", { which: 1, pageX: 700, pageY: 200 })
        //.trigger("mousemove", { which: 4, pageX: 300, pageY: 300 })
        .trigger("mousedown", { which: 1, pageX: 500, pageY: 50 })
        //.trigger("mousemove", { which: 2, pageX: 300, pageY: 100 })
        .trigger("mousedown", { which: 1, pageX: 500, pageY: 100 })
        // .trigger("mousemove", { which: 2, pageX: 300, pageY: 100 })
        //.trigger("mouseup")
        .invoke("show");
    });
    // { clientX: 200, clientY: 300 })
    //  .invoke("show");
    //.scrollTo(213, 150, {
    // ensureScrollable: false

    it.skip("Should allow user to flip back", () => {
      cy.wait(1000);
      NavigateTo.ProfitCardFlipbackIcon().click();
    });
  });
});
context("When user is on Daily income card ", () => {
  it("Should allow user to select Tether from the dropdown", () => {
    NavigateTo.DailyIncomeCoinBtc().click();
    cy.get(".option-list")
      .contains("Tether")
      .click();
  });
  it("Should allow user to select Ethereum from the dropdown", () => {
    NavigateTo.DailyIncomeCoinTet().click();
    cy.get(".option-list")
      .contains("Ethereum")
      .click();
  });
  it("Should allow user to filp daily income", () => {
    NavigateTo.DailyIncomeFlipIcon();
    cy.get("ngx-earning-card-back > nb-card-header").should(
      "contain",
      "Earnings"
    );
    NavigateTo.DailyIncomeFlipbackIcon();
  });
});
context("When user is on Marketplace", () => {
  it("Should allow user to select month from the dropdown of Orders", () => {
    //NavigateTo.MarketplacefromWeek().click();
    cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='week']"
    ).click();
    cy.xpath("//nb-option[@id='nb-option-10']").click();
  });
  it("Should allow user to select Year from the dropdown  of Orders", () => {
    //NavigateTo.MarketplacefromMonth().click();
    cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='month']"
    ).click();
    cy.xpath("//nb-option[@id='nb-option-11']").click();
    cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='year']"
    ).click();
    cy.xpath("//nb-option[@id='nb-option-9']").click();
  });
  it("When user navigates to profit tab", () => {
    NavigateTo.MarketplaceProfit().click();
  });
  it("Should allow user to select month from the dropdown of Profits", () => {
    //NavigateTo.MarketplacefromWeek().click();
    cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='week']"
    ).click();
    cy.xpath("//nb-option[@id='nb-option-13']").click();
  });
  it("Should allow user to select Year from the dropdown of Profits", () => {
    //NavigateTo.MarketplacefromMonth().click();
    cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='month']"
    ).click();
    cy.xpath("//nb-option[@id='nb-option-14']").click();
    cy.xpath(
      "//nb-tab[@class='content-active']//button[@type='button'][normalize-space()='year']"
    ).click();
    cy.xpath("//nb-option[@id='nb-option-12']").click();
  });
  it("When user navigates back to order tab", () => {
    NavigateTo.MarketplaceOrder().click();
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

  it("Should allow user to select month from the dropdown", () => {
    NavigateTo.TrafficfromWeek().click();
    //cy.get(".cdk-overlay-container").click();
    cy.get("#nb-option-4").click({ force: true });
    NavigateTo.NavigatetoTraffic();
    cy.should("contain", "Jan");
    cy.get('[data-testid="Trafficscroller"]')
      .scrollTo("bottom")
      .wait(1000)
      .scrollTo("top")
      .wait(1000);
  });
  it("User drops to traffic graph ", () => {
    cy.get('[data-testid="Trafficdrop"]').click();
    cy.wait(1000);
  });
  it("User goes back to traffic stats", () => {
    cy.get('[data-testid  ="Trafficpullup"]').click();
  });
  it("Should allow user to select Year from the dropdown", () => {
    NavigateTo.TrafficfromMonth().click();
    cy.contains("year").click();
    NavigateTo.NavigatetoTraffic();
    //cy.should("contain", "2010");
    cy.get('[data-testid="Trafficscroller"]')
      .scrollTo("bottom")
      .wait(1000)
      .scrollTo("top")
      .wait(1000);
  });
  it("User drops to traffic graph ", () => {
    cy.get('[data-testid="Trafficdrop"]').click();
    cy.wait(1000);
  });
  it("User goes back to traffic stats", () => {
    cy.get('[data-testid  ="Trafficpullup"]').click();
  });
  it("Should allow user to select week from the dropdown", () => {
    NavigateTo.TrafficplacefromYear().click();
    cy.get("#nb-option-3").click({ force: true });
  });
  it("User drops to traffic graph ", () => {
    cy.get('[data-testid="Trafficdrop"]').click();
    cy.wait(1000);
  });
  it("User goes back to traffic stats", () => {
    cy.get('[data-testid  ="Trafficpullup"]').click();
  });
});
// context("When user is on Country Orders Statistics section", () => {
//   it("User Navigates to Vi", () => {
//   })
// });
context("When user is on Visitors Analytics card", () => {
  it("User Navigates to Visitors Analytics", () => {
    cy.get('[data-testid="VisitorsAnlytics"]').scrollIntoView();
  });
  it("User clicks on arrow to hide/unhide visitor statistic section", () => {
    cy.xpath(
      "//*[name()='g' and contains(@data-name,'arrow-forw')]//*[name()='rect' and contains(@width,'24')]"
    ).click({ force: true });
    cy.wait(1000);
    cy.xpath("//*[name()='path' and contains(@d,'M19 11H7.1')]").click({
      force: true
    });
  });
});
context("When user is on User Activity section", () => {
  it("User Navigates to Visitors Analytics", () => {
    cy.get('[data-testid="user-activity-scroller"]')
      .scrollIntoView()
      .wait(2000)
      .scrollTo("bottom")
      .wait(1000)
      .scrollTo("top")
      .wait(1000);
  });
  it("Should allow user to select week from the dropdown", () => {
    cy.xpath("//button[normalize-space()='month']").click({ force: true });
    cy.get("#nb-option-15").click();
    cy.get('[data-testid="user-activity-scroller"]')
      .scrollIntoView()
      .should("contain", "Mon")
      .scrollTo("bottom")
      .wait(1000)
      .scrollTo("top")
      .wait(1000);
  });
  it("Should allow user to select Year from the dropdown", () => {
    cy.xpath(
      "//nb-card-header[@data-testid='user-activity-list']//button[@type='button'][normalize-space()='week']"
    ).click();
    cy.contains("year").click();
    cy.get('[data-testid="user-activity-scroller"]')
      .scrollIntoView()
      .should("contain", "2010")
      .wait(2000)
      .scrollTo("bottom")
      .wait(1000)
      .scrollTo("top")
      .wait(1000);
  });
  it("Should allow user to select month from the dropdown", () => {
    NavigateTo.UserActivityfromYear().click();
    cy.contains("month").click();
  });
});
