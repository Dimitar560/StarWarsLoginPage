import "cypress-wait-until";
describe("TablePage", () => {
	beforeEach(() => {
		cy.visit("http://localhost:5173/table"); // replace with the path to your TablePage
	});

	it("renders the Navbar", () => {
		cy.get("nav").should("exist");
	});

describe("TablePage", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/table"); // replace with the path to your TablePage
    });

    it("renders the Navbar", () => {
        cy.get("nav").should("exist");
    });

    it("fetches and displays data", () => {
        cy.intercept("GET", "https://swapi.dev/api/people", { fixture: "people.json" }).as("getPeople");

        cy.visit("http://localhost:5173/table"); // replace with the path to your TablePage

        cy.wait("@getPeople").its("response.statusCode").should("eq", 200);

        // Wait for the loader to disappear
        cy.get(".loaderContainer", { timeout: 20000 }).should('not.exist');
        
        // Wait for the .sw-name to appear in the DOM
        cy.get(".sw-name", { timeout: 20000 }).should("exist");
        
        // Check if the .sw-name contains 'Luke Skywalker'
        cy.get(".sw-name").contains("Luke Skywalker").should("exist");
    });
    it("renders correctly on mobile", () => {
        // Set viewport to mobile size
        cy.viewport(375, 667);

        cy.intercept("GET", "https://swapi.dev/api/people", { fixture: "people.json" }).as("getPeople");

        cy.visit("http://localhost:5173/table"); // replace with the path to your TablePage

        cy.wait("@getPeople").its("response.statusCode").should("eq", 200);

        // cy.get("#loaderContainer", { timeout: 20000 }).should('exist');
        // // Wait for the loader to disappear
        // cy.get("#loaderContainer", { timeout: 20000 }).should('not.exist');
        
        // Wait for the .sw-name to appear in the DOM
        cy.get("#mobileTableWrap", { timeout: 20000 }).should("exist");
        
        // Check if the .sw-name contains 'Luke Skywalker'
        cy.get("#mobileTableWrap").contains("Luke Skywalker").should("exist");
        // Your mobile-specific tests go here
    });
});
});
