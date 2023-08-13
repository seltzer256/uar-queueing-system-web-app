describe("Registro y autenticación de usuarios", () => {
  it("Ingreso al sistema", () => {
    cy.visit("/login");
    cy.get("#login-email").type("john@email.com");
    cy.get("#login-password").type("123123123");
    cy.get("#login-btn").click();
    cy.url().should("eq", "http://localhost:3000/dashboard/");
  });

  it("Crear usuario", () => {
    cy.visit("/login");
    cy.get("#login-email").type("john@email.com");
    cy.get("#login-password").type("123123123");
    cy.get("#login-btn").click();
    cy.get('[data-test="tab-users"]').click();
    cy.get('[data-test="user-name"]').type("Test Name");
    cy.get('[data-test="user-email"]').type("test@email.com");
    cy.get('[data-test="user-password"]').type("123123123");
    cy.get('[data-test="user-btn-save"]').click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "have.text",
      "Usuario creado correctamente"
    );
  });

  it("Actualizar información", () => {
    cy.visit("/login");
    cy.get("#login-email").type("john@email.com");
    cy.get("#login-password").type("123123123");
    cy.get("#login-btn").click();
    cy.get('[data-test="menu-btn"]').click();
    cy.get('[data-test="menu-profile"]').click();
    cy.get('[data-test="profile-name"]').clear();
    cy.get('[data-test="profile-name"]').type("Test Name 2");
    cy.get('[data-test="profile-btn-save"]').click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "have.text",
      "Información actualizada!"
    );
  });
});
