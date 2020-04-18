/// <reference types="cypress" />

context('Salaries page', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/salaries');
  });

  it('should have a button to add salary in desktop version', () => {
    cy.get('[data-cy=add-salary-button]').should('be.visible');
  });

  it('should have a button to add salary in mobile version', () => {
    cy.viewport('iphone-6+');
    cy.get('[data-cy=add-salary-button]').should('be.visible');
  });

  it('should navigate to the add salary page when button is clicked', () => {
    cy.get('[data-cy=add-salary-button]').click();
    cy.url().should('include', '/salaries/new-salary');
  });
});
