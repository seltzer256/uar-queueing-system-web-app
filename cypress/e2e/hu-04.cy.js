describe("Manejo de turnos", () => {
  it("Empezar atención", () => {
    cy.visit("/login");
    cy.get("#login-email").type("lmramia@espe.edu.ec");
    cy.get("#login-password").type("lmramia@espe.edu.ec");
    cy.get("#login-btn").click();
    cy.get('[data-test="tab-shifts"]').click();
    cy.get('[data-test="begin-shift"]').click();
    cy.get('[data-test="module-name"]').should("have.text", "Módulo 1");
  });

  it("Finalización de atención", () => {
    cy.visit("/login");
    cy.get("#login-email").type("lmramia@espe.edu.ec");
    cy.get("#login-password").type("lmramia@espe.edu.ec");
    cy.get("#login-btn").click();
    cy.get('[data-test="tab-shifts"]').click();
    cy.get('[data-test="complete-shift"]').click();
    cy.get('[data-test="module-name"]').first().should("have.text", "Módulo 1");
  });
});
