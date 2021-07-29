    describe('Ampion API test case',() =>{

    it('Test API for Ampion webpage', ()=>{
    cy.request('https://www.ampion.com.au/').then((resp) => {
        expect(resp.status).to.be.equal(200)
        cy.screenshot();
    })
    })

    it('Validate nab Forex Rate', ()=> {
        cy.request( {
            'method': 'GET',
            'url': 'https://sandbox.api.nab/v2/fxrates?v=1',
            'headers': {
              
              'x-nab-key': '75d1d46b-64fd-422b-bf7a-fdca6ae879c5',
              
            }})
    })
})