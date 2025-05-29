Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    cy.get('#firstName').as('nome').type('Edimilson')
    cy.get('#lastName').as('sobrenome').type('Estevam')
    cy.get('#email').as('e-mail').type('edimilsonestevam@gmail.com')
    cy.get('button[type="submit"]').as('enviar').click()
})