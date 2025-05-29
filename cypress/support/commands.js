Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    cy.get('#firstName').as('nome').type(data.firstName)
    cy.get('#lastName').as('sobrenome').type(data.lastName)
    cy.get('#email').as('e-mail').type(data.email)
    cy.get('#open-text-area').as('descricao').type(data.text)
    cy.get('button[type="submit"]').as('enviar').click()
})