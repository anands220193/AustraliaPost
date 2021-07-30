    describe('Ampion API test case',() =>{

    it('Test API for Ampion webpage', ()=>{
    cy.request('https://auspost.com.au/').then((resp) => {
        expect(resp.status).to.be.equal(200)
       
    })
    })
})