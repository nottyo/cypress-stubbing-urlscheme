describe('Simple Stub Test', () => {

    beforeEach(() => {
        cy.visit('./simple_stub.html')
    })
    it('should stub window.prompt', () => {
        const myName = "nottyo"
        const winPromptStub = () => {
            return myName
        }
        cy.window().then(win => {
            cy.stub(win, 'prompt', winPromptStub).as('winPromptStubReturnNonNull')
        })
        cy.get('[data-at="clickme"]').click()
        cy.get('@winPromptStubReturnNonNull').should('be.calledOnce')
          .and('be.calledWith', 'Please enter your name.')
        cy.get('[data-at="result"]').should('have.text', `Hello ${myName} !`)
    })

    it('should be able to override stub', () => {
        // stub is automatic reset/restore between tests
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns(null).as('winPromptStubReturnNull')
        })
        cy.get('[data-at="clickme"]').click()
        cy.get('@winPromptStubReturnNull').should('be.calledOnce')
          .and('be.calledWith', 'Please enter your name.')
        cy.get('[data-at="result"]').should('have.text', 'You did not input anything')
    })
})