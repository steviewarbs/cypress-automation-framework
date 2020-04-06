describe('Land on the Facebook home page', () => {
    it('Fills in the sign up page', () => {

    //Fill in core information, note this is does not follow DRY and can be wrapped into a function in commands.js
    //For reference I have added a new cy.{method} in the commands file. The example allows the user to see if elements are visible.
    //Please see cypress/support/commands.js
    //If you would like this login to run beforeEach test, simply remove this code and uncomment in the index.js

      cy.visit("https://www.facebook.com/")
      cy.get("#u_0_o").type("cypress_test_first_name").should('be.visible') 
      cy.get("#u_0_q").type("cypress_test_surname").should('be.visible') 
      cy.get("#u_0_t").type("07*********").should('be.visible') 
      cy.get("#u_0_y").type("cypress_test_password").should('be.visible') 

      //Sets D.O.B from dropdown menu

      cy.get('#day').select('10')
      cy.get('#month').select('Aug')
      cy.get('#year').select('1980')

      //Select Male/Female

      cy.get('#u_0_7').click()
    });
  });