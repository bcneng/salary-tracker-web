/// <reference types="cypress" />

context('Home page', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should have a button to add salary in desktop version', () => {
    cy.get('[data-cy=add-salary-button]').should('be.visible');
  });

  it('should have a button to add salary in mobile version', () => {
    cy.viewport('iphone-6+');
    cy.get('[data-cy=add-salary-button]').should('be.visible');
  });

  it('should show the add salary popup when button is clicked', () => {
    cy.get('.ion-margin-horizontal').click();
    cy.get('.modal').should('be.visible');
  });
});
