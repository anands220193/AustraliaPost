describe('UI test case', () => {
    it('Visits Ampion Hopmepage',() => {
        cy.visit('https://www.ampion.com.au/')
        cy.get('.popup-compliance-right > .button').click()
        cy.get('#popup-announcement > .close-popup').click()
        cy.get('.menu-icon-14 > a').click()
        cy.get('.MuiInputBase-input').type('Junior Test Consultant')
        cy.get('.refari-col-3 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('[href="https://www.ampion.com.au/careers?job=junior-test-consultant_32269#detail"]').click()
        
    })
    
})
