
describe('Second spec', () => {
  it('Should check the cypress is opening the page', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('News in USA')
    cy.wait(10000)
    cy.contains('Google Search').click()
  })
})