describe('User Registration and Invitation Link Handling', () => {
  const emailAddress = 'zadid.ahsan.test15@r6gn1hkq.mailosaur.net'; 
  const otp = '777777'; 
  let invitationLink = null;
  const serverID = 'r6gn1hkq'

  it('Registers a user and submits the form', () => {
    // Step 1: Visit the registration page
    cy.visit('https://fc-career-staging.inteam.jp/registration', {'failOnStatusCode': false});

    // Step 2: Fill out the registration form
    cy.get('#signup-form_name').should('be.visible').type('John Doe'); 
    cy.get('#signup-form_email').type(emailAddress); 
    cy.get('#signup-form_phone').type('1234567890'); 

    // Step 3: Submit the registration form
    cy.contains('span', 'Submit').should('be.visible').click();

    cy.log('Registration form submitted. Waiting for the invitation email...');
  });
  
    it('Retrieve the link in the email and login as new registered user',()=>{
       cy.mailosaurGetMessage(serverID,{sentTo: emailAddress})
       .then((email) =>{
        expect(email.subject).to.equal('Career | FRIENDS CORP. | Registration Confirmation')
        let confirmSignupLink = email.html.links[0].href
        cy.visit(confirmSignupLink)
        cy.get('#login-email-form_email').type(emailAddress)
        cy.contains('span', 'Submit').click();
        cy.get('#login-otp-form_otp').type(otp)
        cy.contains('span', 'Login').click();
       })
    })
  })
    

