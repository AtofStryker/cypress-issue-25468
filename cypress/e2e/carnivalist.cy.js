describe('carnivalist', () => {
  it('gets framebusted', () => {
    cy.visit('https://carnivalist.com/')
  })

  it.skip('doesnt work but no errors thrown', () => {
    cy.visit('docs.cypress.io')
    cy.visit('https://carnivalist.com/')
    cy.origin('https://carnivalist.com/', () => {
      cy.get('#app').should('exist')
    })
  })
})