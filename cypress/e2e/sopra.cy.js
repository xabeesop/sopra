/// <reference types="Cypress" />

describe('Google search Apple', () => {
    before(() => {
        cy.log('/n Test Automation test - Xavi Gonzalez Arriola /n')  
      })
     
      beforeEach(() => {
        cy.visit("http://www.google.es")
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.gLFyf').type('Apple{enter}')
      })
 
    it('Positive - over 1000000', () => {
     cy.get('div[id="result-stats"]').contains("results (")
     cy.get('div[id="result-stats"]').contains("000,000")
     cy.get('div[id="result-stats"]').invoke('text')
     .then((text)=>{
         let fullText = text.toString()
         let cutText = text.toString().replace("About ","").split(" results (")
         let pattern = /[0-9]+/g;
         var number = cutText[0].match(pattern);
       
         cy.log("--------------------------------------------------> Full Text: " + fullText)
         cy.log("--------------------------------------------------> Cut Text: " + cutText)
 
 
         let results = cutText[0].replaceAll(",","").match(pattern);                  // finally supress ,
 
 
         cy.log("=================================================>> RESULTS: " + results)
         cy.log("type: " + typeof Number(results));
         expect(parseInt(results)).to.be.greaterThan(1000000)
        })
    })

       it('Negative - not under 10000', () => {
            cy.get('div[id="result-stats"]').contains("results (")
            cy.get('div[id="result-stats"]').contains("000,000")
            cy.get('div[id="result-stats"]').invoke('text')
            .then((text)=>{
                let fullText = text.toString()
                let cutText = text.toString().replace("About ","").split(" results (")
                let pattern = /[0-9]+/g;
 
 
                cy.log("--------------------------------------------------> Full Text: " + fullText)
                cy.log("--------------------------------------------------> Cut Text: " + cutText[0])
       
                let results = cutText[0].replaceAll(",","").match(pattern);                  // finally supress ,
 
 
                cy.log("=================================================>> RESULTS: " + results)
                cy.log("type: " + typeof Number(results));
                expect(parseInt(results)).not.to.be.lessThan(10000)
               })
    })  
 })
 