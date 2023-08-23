describe("Generar de reportes", () => {
  it("Reportes por fecha", () => {
    cy.visit("/login");
    cy.get("#login-email").type("john@email.com");
    cy.get("#login-password").type("123123123");
    cy.get("#login-btn").click();
    cy.get('[data-testid="CalendarIcon"]').click();
    cy.get('[data-timestamp="1691902800000"]').click();
    cy.get(":nth-child(1) > canvas").should("exist");
  });
  it("Reportes por servicio", () => {
    cy.visit("/login");
    cy.get("#login-email").type("john@email.com");
    cy.get("#login-password").type("123123123");
    cy.get("#login-btn").click();
    cy.get('[data-testid="CalendarIcon"]').click();
    cy.get('[data-timestamp="1691902800000"]').click();
    cy.get(".MuiSelect-select").click();
    cy.get('[data-value="64b1b49b802788329cd0c02b"]').click();
    cy.get(":nth-child(1) > canvas").should("exist");
  });
});
