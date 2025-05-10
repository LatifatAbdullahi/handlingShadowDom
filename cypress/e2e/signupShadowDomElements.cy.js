const { faker } = require("@faker-js/faker");

describe('Example Test', () => {
    it('visits the base URL', () => {
        cy.visit('/', {falseOnStatusCode: false});

        cy.get('a[href*="/shadow-dom"]').click()

        cy.get('div#__next>section:nth-of-type(3)>div:nth-child(1)>div>div:nth-child(2)>shadow-signup-form').shadow()
        .within(()=>{
            cy.get('[name="username"]').type(faker.person.fullName())

            cy.get('[name="email"]').type(faker.internet.email())

            cy.get('[name="password"]').type("TestPassword@123")

            cy.get('[name="confirm_password"]').type("TestPassword@123")

            cy.get('.form-horizontal>div:nth-of-type(6)>div>button')
            .should("be.visible").click()
        })

    
        // Inside of doing it seprately, we can add all in the  .withing if the parent element is same
     /** cy.get('div#__next>section:nth-of-type(3)>div:nth-child(1)>div>div:nth-child(2)>shadow-signup-form').shadow()
        .within(()=>{
            cy.get('[name="email"]').type(faker.internet.email())
        })

        cy.get('div#__next>section:nth-of-type(3)>div:nth-child(1)>div>div:nth-child(2)>shadow-signup-form').shadow()
        .within(()=>{
            cy.get('[name="password"]').type("TestPassword@123")
        })

        cy.get('div#__next>section:nth-of-type(3)>div:nth-child(1)>div>div:nth-child(2)>shadow-signup-form').shadow()
        .within(()=>{
            cy.get('[name="confirm_password"]').type("TestPassword@123")
        })

        cy.get('div#__next>section:nth-of-type(3)>div:nth-child(1)>div>div:nth-child(2)>shadow-signup-form').shadow()
        .within(()=>{
            cy.get('.form-horizontal>div:nth-of-type(6)>div>button')
            .should("be.visible").click()
      })*/
    });

    
});
            