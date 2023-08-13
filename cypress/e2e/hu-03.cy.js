describe("Gestión de módulos", () => {
  it("Creación de módulo", () => {
    cy.visit("/login");
    cy.get("#login-email").type("john@email.com");
    cy.get("#login-password").type("123123123");
    cy.get("#login-btn").click();
    cy.get('[data-test="tab-modules"]').click();
    cy.get('[data-test="module-name"]').type("Test module");
    cy.get('[data-test="module-code"]').type("TM");
    cy.get("#mui-component-select-services").click();
    cy.get('[data-value="64b1b4dd802788329cd0c035"]').click();
    cy.get('[data-value="64b1b4f6802788329cd0c039"]').click();
    cy.get(".MuiBackdrop-root").click({ force: true });
    cy.get("#mui-component-select-user").click();
    cy.get('[data-value="64b1b864802788329cd0c07d"]').click();
    cy.get(".MuiBackdrop-root").click({ force: true });
    cy.get('[data-test="module-btn-save"]').click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "have.text",
      "Modulo creado correctamente"
    );
  });

  it("Actualizar módulo", () => {
    cy.visit("/login");
    cy.get("#login-email").type("john@email.com");
    cy.get("#login-password").type("123123123");
    cy.get("#login-btn").click();
    cy.get('[data-test="tab-modules"]').click();
    cy.get(':nth-child(20) > [scope="row"]').click();
    cy.get('[data-test="module-name"]').clear().type("Updated Test Module");
    cy.get('[data-test="module-code"]').clear().type("UM");
    cy.get('[data-test="module-btn-save"]').click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "have.text",
      "Modulo actualizado correctamente"
    );
  });

  it("Borrar módulo", () => {
    cy.visit("/login");
    cy.get("#login-email").type("john@email.com");
    cy.get("#login-password").type("123123123");
    cy.get("#login-btn").click();
    cy.get('[data-test="tab-modules"]').click();
    cy.get(':nth-child(20) > [scope="row"]').click();
    cy.get('[data-test="module-btn-delete"]').click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "have.text",
      "Módulo eliminado correctamente"
    );
  });
});
