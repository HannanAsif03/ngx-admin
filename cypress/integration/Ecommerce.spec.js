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

    it("Transactions should get disabled on clicking by user", () => {
      // NavigateTo.ProfitCardTransactions().trigger("mousemove", {
      //   clientX: 230,
      //   clientY: 174
      //});
      cy.get('[data-testid="transaction-chart"]').then($canvas => {
        const canvasWidth = $canvas.width();
        const canvasHieght = $canvas.height();

        const canvascenterX = canvasWidth * 1.25;
        const canvascenterY = canvasHieght * 1.16;

        cy.wrap($canvas).click(canvascenterX, canvascenterY, {
          scroll: false,
          force: true
        });
      });
    });
    it("Should allow user to click on flip icon", () => {
      NavigateTo.ProfitCardFlipIcon().click();
      cy.get(".info")
        .should("contain", "Jun")
        .trigger("mousemove", { pageX: 84, pageY: 283 })
        .trigger("mousemove", { pageX: 136, pageY: 262 })
        .trigger("mousemove", { pageX: 190, pageY: 268 })
        .trigger("mousemove", { pageX: 247, pageY: 259 })
        .trigger("mousemove", { pageX: 305, pageY: 239 })
        .trigger("mousemove", { pageX: 361, pageY: 247 })
        .trigger("mousemove", { pageX: 415, pageY: 243 })
        .trigger("mousemove", { pageX: 470, pageY: 221 });
      NavigateTo.ProfitCardFlipbackIcon().click();
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
    it("When user navigates to profit tab", () => {
      NavigateTo.MarketplaceProfit().click();
    });
    it("Should allow user to select month from the dropdown", () => {
      NavigateTo.MarketplacefromWeek().click();
      cy.contains(" month").click();
    });
    it("Should allow user to select Year from the dropdown", () => {
      NavigateTo.MarketplacefromMonth().click();
      cy.contains(" year").click();
    });
    it("When user navigates back to order tab", () => {
      NavigateTo.MarketplaceOrder().click();
    });
  });
  context.only("When user is on traffic card", () => {
    it.only("User Navigates to traffic", () => {
      cy.NavigateTo.NavigatetoTraffic().scrollTo("Bottom");
      scrollTo("bottom");
      cy.should("contain", "Traffic");
    });
    it("Should allow user to select month from the dropdown", () => {
      NavigateTo.TrafficfromWeek()
        .click()
        .contains("month")
        .click({ force: true });
    });
    it("Should allow user to select Year from the dropdown", () => {
      NavigateTo.TrafficfromMonth().click();
      cy.contains("year").click();
    });
  });
});
