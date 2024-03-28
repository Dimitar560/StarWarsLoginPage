describe("Navbar", () => {
	beforeEach(() => {
		cy.visit("http://localhost:5173/table"); // replace with the path to your page containing the Navbar

		it("renders the Home link and navigates to /table on click", () => {
			cy.get("nav ul li").contains("Home").click();
			cy.url().should("include", "/table");
		});

		it("renders the About link and navigates to /about on click", () => {
			cy.get("nav ul li").contains("About").click();
			cy.url().should("include", "/about");
		});

		it("renders the Logout link and navigates to / on click", () => {
			cy.get("nav ul li").contains("Logout").click();
			cy.url().should("eq", "http://localhost:5174/"); // replace with your localhost address
		});
	});
});
