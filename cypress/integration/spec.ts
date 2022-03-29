describe('Init Dash', () => {
  it('Visits the dashboard', () => {
    cy.visit('/')
    cy.contains('Weather Dash')
  })
})
