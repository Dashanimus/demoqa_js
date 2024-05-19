describe('DemoQA Spec', () => {

  it('Test All Passes', () => {

    cy.visit('https://demoqa.com/')

    cy.get('div.home-body > div > div:nth-child(1)').click({force:true})
    cy.url().should('eq', 'https://demoqa.com/elements')

    cy.get('div.col-12.mt-4.col-md-6')
      .should('have.text', 'Please select an item from left to start practice.')
      .should('exist')
      .should('be.visible')

    cy.get('p>p>p')
      .should('not.exist')
  })

  it('Test Attribute', () => {
    cy.visit('https://demoqa.com/elements')
    cy.get('header > a > img').should('have.attr', 'src', '/images/Toolsqa.jpg')
  })

  it('Test Word Input', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.get('#userName').type('Daria Nimova')
    cy.wait(3000)
    cy.get('#userEmail').type('testing@ttt.tt')
    cy.wait(3000)

    cy.get('#submit').click()
  })

  it('Test Clear', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.get('#userName')
      .type('Daria Nimova')

    cy.wait(3000)

    cy.get('#userName').clear()
  })

})