describe('Dashboard DataGrid', () => {
  it('Visits the dashboard', () => {
    cy.visit('/')
    cy.get('ag-grid-angular').should('be.visible');
  })
})
