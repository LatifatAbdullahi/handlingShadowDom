
// Import commands.js using ES2015 syntax:
import './commands';


beforeEach (()=>{
    Cypress.on('uncaught:exception', ()=>{
        return false;
    });
    cy.visit('/');

});
            