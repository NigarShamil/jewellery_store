/// <reference types="cypress" />
 
 
describe('Home products testing', () => {
    before(() => {
        cy.visit('http://localhost:5174/')
    })
    it("check products", () => {
        cy.get(".product").should("have.length.greaterThan", 3)
    })
})