/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function() {
  it('verifica o título da aplicação', function() {
      cy.visit('./src/index.html')
      cy.title().should('eq','Central de Atendimento ao Cliente TAT')
      cy.get('#firstName').invoke('val','Curioso')
      cy.get('#lastName').invoke('val','Chancho')
      cy.get('#email').invoke('val','coco@gmail.com')
      cy.get('#open-text-areaa').invoke('val','mucha ayuda')
      cy.get('input[type="file"]').selectFile('./cypress/fixtures/example.json').should(function($link){
          expect($link[0].files[0].name).to.equal('example.json')
      })
      cy.get('.button').click()
      cy.get('#privacy > a').should('have.attr', 'target', '_blank')
      cy.get('#privacy > a').invoke('removeAttr', 'target').click()
  })
})
