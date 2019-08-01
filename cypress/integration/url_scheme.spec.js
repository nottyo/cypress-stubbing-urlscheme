describe('URL Scheme Test', () => {

    beforeEach(() => {
        cy.visit(`./url_scheme.html`)
    })
    it('should click to navigate', () => {
        const winSetLocationHrefStub = (url) => {
            expect(url).to.eq('tel://0212345678')
        }
        cy.window().then(window => {
            cy.stub(window, 'setLocationHref', winSetLocationHrefStub)
        })
        cy.get('[data-at="clickme"]').click()
    })
})