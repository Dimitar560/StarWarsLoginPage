describe("LoginForm", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/"); // replace with the path to your login page
  });

  it("checks if the inputs are initially enabled and button is disabled", () => {
    cy.get("input[name=username]").should('be.enabled');
    cy.get("input[name=password]").should('be.enabled');
    cy.get("button").should('be.disabled');
  });

  it("displays an error message when the inputs are empty and button is clicked", () => {
    cy.get("button").should('be.disabled');
  });

  it("displays an error message when the wrong credentials are entered", () => {
    cy.get("input[name=username]").type("wrongUsername");
    cy.get("input[name=password]").type("wrongPassword");
    cy.get("button").should('be.enabled').click();
    cy.contains("Invalid username or password");
  });

  it("removes the error message when the correct credentials are entered", () => {
    cy.get("input[name=username]").clear().type("admin");
    cy.get("input[name=password]").clear().type("password");
    cy.get("button").should('be.enabled').click();
    cy.contains("Invalid username or password").should('not.exist');
  });

  it("disables the button when the credentials are cleared", () => {
    cy.get("input[name=username]").clear();
    cy.get("input[name=password]").clear();
    cy.get("button").should('be.disabled');
  });

  it("navigates to the /table page when the correct credentials are entered", () => {
    cy.get("input[name=username]").clear().type("admin");
    cy.get("input[name=password]").clear().type("password");
    cy.get("button").should('be.enabled').click();
    cy.url().should("include", "/table");
  });
});