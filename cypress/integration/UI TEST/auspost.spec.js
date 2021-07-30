describe('UI test case', () => {
    it('Visits AusPost Hopmepage',() => {
        cy.visit('https://auspost.com.au/')
        cy.get('[data-description="book-an-appointment"]').click()
        cy.get('#PolSearchLocationInput').type('Kangaroo Flat')
        cy.get('[name="PolSubmitFormBtn"]').click()
        cy.contains('Kangaroo Flat LPO').should('exist')
      
        
    })
    
})
