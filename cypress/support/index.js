// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//For the purposes of this framework all exceptions are are dismissed. This enables the test to complete

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  //Prints out in the Cypress server logs 

  beforeEach(function () {
    cy.log('I am signing up for Facebook')
  })

    //Runs a basic sign up script with hard coded parameters.
    //This could also be created in the commands.js file and use variables for the elements.  

    // beforeEach(function () {

    //   cy.visit("https://www.facebook.com/")
    //   cy.get("#u_0_o").type("cypress_test_first_name").should('be.visible') 
    //   cy.get("#u_0_q").type("cypress_test_surname").should('be.visible') 
    //   cy.get("#u_0_t").type("07*********").should('be.visible') 
    //   cy.get("#u_0_y").type("cypress_test_password").should('be.visible') 

    //   //Sets D.O.B from dropdown menu

    //   cy.get('#day').select('10')
    //   cy.get('#month').select('Aug')
    //   cy.get('#year').select('1980')

    //   //Select Male/Female

    //   cy.get('#u_0_7').click()
      
    // })
  
    

