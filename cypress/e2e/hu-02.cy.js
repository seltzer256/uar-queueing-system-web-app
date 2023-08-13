describe("Gestión de servicios", () => {
  it("Creación de servicio", () => {
    cy.visit("/login");
    cy.get("#login-email").type("john@email.com");
    cy.get("#login-password").type("123123123");
    cy.get("#login-btn").click();
    cy.get('[data-test="tab-services"]').click();
    cy.get('[data-test="service-name"]').type("Test Service");
    cy.get('[data-test="service-code"]').type("TS");
    cy.get('textarea[name="description"]').invoke("css", "display", "block");
    cy.get('textarea[name="description"]').invoke(
      "css",
      "visibility",
      "visible"
    );
    cy.get('textarea[name="description"]').type("Test Description");
    cy.get('textarea[name="description"]').invoke("css", "display", "none");
    cy.get('textarea[name="description"]').invoke(
      "css",
      "visibility",
      "hidden"
    );
    cy.get(".se-wrapper-wysiwyg").type("Test Description");
    cy.get('[data-test="service-btn-save"]').click();
  });

  it("Actualizar servicio", () => {
    cy.visit("/login");
    cy.get("#login-email").type("john@email.com");
    cy.get("#login-password").type("123123123");
    cy.get("#login-btn").click();
    cy.get('[data-test="tab-services"]').click();
    cy.get(".MuiTableBody-root > :nth-child(16) > :nth-child(1)").click();
    cy.get('[data-test="service-name"]').clear();
    cy.get('[data-test="service-name"]').type("Updated Test Service");
    cy.get('[data-test="service-btn-save"]').click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "have.text",
      "Servicio actualizado correctamente"
    );
  });

  it("Borrar servicio", () => {
    cy.visit("/login");
    cy.get("#login-email").type("john@email.com");
    cy.get("#login-password").type("123123123");
    cy.get("#login-btn").click();
    cy.get('[data-test="tab-services"]').click();
    cy.get(".MuiTableBody-root > :nth-child(16) > :nth-child(1)").click();
    cy.get('[data-test="service-btn-delete"]').click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "have.text",
      "Servicio eliminado correctamente"
    );
  });
});
