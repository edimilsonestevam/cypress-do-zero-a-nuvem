
describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach (() => {
      cy.visit('./src/index.html')
    })

    it('Validar Mensagem de Sucesso', () => {
      const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)

      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      cy.get('#firstName').as('nome').type('teste')
      cy.get('#lastName').as('sobrenome').type('testado')
      cy.get('#email').as('e-mail').type('teste@testado.com')
      cy.get('#open-text-area').as('descricao').type(longText, {delay: 0})
      cy.get('button[type="submit"]').as('enviar').click()

      cy.get('.success').as('mensagemSucesso').should('be.visible')
    })

    it('Validar Mensagem de Erro', () => {
      const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)

      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      cy.get('#firstName').as('nome').type('teste')
      cy.get('#lastName').as('sobrenome').type('testado')
      cy.get('#email').as('e-mail').type('testetestado.com')
      cy.get('#open-text-area').as('descricao').type(longText, {delay: 0})
      cy.get('button[type="submit"]').as('enviar').click()

      cy.get('.error').as('mensagemErro').should('be.visible')
    })

    it('Validar Campo Telefone com Texto', () => {
      const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)

      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      cy.get('#firstName').as('nome').type('teste')
      cy.get('#lastName').as('sobrenome').type('testado')
      cy.get('#email').as('e-mail').type('testetestado.com')
      cy.get('#phone').as('telefone').type('spfc').should('have.value', '')
      cy.get('#open-text-area').as('descricao').type(longText, {delay: 0})
      cy.get('button[type="submit"]').as('enviar').click()

      cy.get('.error').as('mensagemErro').should('be.visible')
    })

    it('Validar Campo Telefone Vazio', () => {
      const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)

      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      cy.get('#firstName').as('nome').type('teste')
      cy.get('#lastName').as('sobrenome').type('testado')
      cy.get('#email').as('e-mail').type('testetestado.com')
      cy.get('#phone-checkbox').as('checkboxTelefone').click()
      cy.get('#phone').as('telefone').type(' ').should('have.value', '')
      cy.get('#open-text-area').as('descricao').type(longText, {delay: 0})
      cy.get('button[type="submit"]').as('enviar').click()

      cy.get('.error').as('mensagemErro').should('be.visible')
    })

    it('Validar Campos Limpos', () => {
      const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)

      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      cy.get('#firstName').as('nome').type('teste').should('have.value', 'teste')
      cy.get('#lastName').as('sobrenome').type('testado').should('have.value', 'testado')
      cy.get('#email').as('e-mail').type('teste@testado.com').should('have.value', 'teste@testado.com')
      cy.get('#phone').as('telefone').type('31746894').should('have.value', '31746894')
      
      cy.get('#firstName').as('nome').type('teste').clear().should('have.value', '')
      cy.get('#lastName').as('sobrenome').type('testado').clear().should('have.value', '')
      cy.get('#email').as('e-mail').type('teste@testado.com').clear().should('have.value', '')
      cy.get('#phone').as('telefone').type('31746894').clear().should('have.value', '')
      cy.get('button[type="submit"]').as('enviar').click()

      cy.get('.error').as('mensagemErro').should('be.visible')
    })

    it('Validar Envio do Formulário Sem Dados', () => {
      const longText = Cypress._.repeat('', 10)

      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      cy.get('#firstName').as('nome').type(' ')
      cy.get('#lastName').as('sobrenome').type(' ')
      cy.get('#email').as('e-mail').type(' ')
      cy.get('#phone').as('telefone').type(' ')
      cy.get('button[type="submit"]').as('enviar').click()

      cy.get('.error').as('mensagemErro').should('be.visible')
    })
})




