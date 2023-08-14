describe("Solicitud de un servicio y obtención de su respectiva notificación", () => {
  it("Servicios con autenticación", () => {
    cy.visit("/asignacion-de-turnos/");
    cy.get(
      ':nth-child(13) > [data-test="service-item"] > .MuiTypography-root'
    ).click();
    cy.get('[data-test="get-ticket-btn"]').click();
    cy.get('[data-test="client-name"]').type("Atahualpa");
    cy.get('[data-test="client-email"]').type("t@t.com");
    cy.get('[data-test="get-ticket-dialog-btn"]').click();
    cy.get('[data-test="logo"]');
  });
  it("Servicios con encargado específico", () => {
    cy.visit("/asignacion-de-turnos/");
    cy.get(
      ':nth-child(13) > [data-test="service-item"] > .MuiTypography-root'
    ).click();
    cy.get(
      ':nth-child(6) > [data-test="service-item"] > .MuiTypography-root'
    ).click();
    cy.get(":nth-child(5) > .MuiTypography-root").click();
    cy.get('[data-test="get-ticket-btn"]').click();

    cy.get('[data-test="client-name"]').type("Atahualpa");
    cy.get('[data-test="client-email"]').type("t@t.com");
    cy.get('[data-test="get-ticket-dialog-btn"]').click();
    //should render
    cy.get('[data-test="logo"]').should("exist");
  });
});
