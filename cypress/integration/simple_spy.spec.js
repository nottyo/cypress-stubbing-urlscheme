describe('Simple Spy Test', () => {

    beforeEach(() => {
        cy.visit('./simple_spy.html')
    })
    it('should spy window.confirm', () => {
        cy.window().then(win => {
            cy.spy(win, 'confirm').as('winConfirmSpy')
        })
        Cypress.on('window:confirm', () => {
            return true
        })
        cy.get('[data-at="clickme"]').click()
        cy.get('@winConfirmSpy').should('be.calledOnce')
          .and('be.calledWith', 'Are you hungry?')
        cy.get('[data-at="result"]').should('have.text', 'Yes, you\'re hungry.')
    })
})