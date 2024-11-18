describe('Admin Invite New User', () => {
  const adminEmail = 'zadid.ahsan@teamfriends.co.jp';
  const adminOtp = '777777';
  const emailAddress = 'zadid.ahsan.admin_test7@r6gn1hkq.mailosaur.net';
  const serverID = 'r6gn1hkq'

  it('Logs in and invites a new admin user', () => {
      // Visit the login page
      cy.visit('https://fc-career-staging.inteam.jp/login');

      // Enter admin email
      cy.get('#login-email-form_email').should('be.visible').type(adminEmail);

      // Click Submit
      cy.contains('span', 'Submit').should('be.visible').click();

      // Enter OTP
      cy.get('#login-otp-form_otp').should('be.visible').type(adminOtp);

      // Click Login
      cy.contains('span', 'Login').should('be.visible').click();

      // Navigate to Admin Users
      cy.contains('a', 'Admin Users').should('be.visible').click();

      // Click Add User
      cy.contains('span', 'Add User').should('be.visible').click();

      // Wait for the modal and enter new admin email
      cy.get('#org-setup-form_email').type(emailAddress);

      // Open the role dropdown
      cy.get('#org-setup-form_role').click();

      cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click()

      cy.contains('span', 'Send Invitation').should('be.visible').click();

      

  });


  it('Retrieve the link in the email and login as new registered admin',()=>{
    cy.mailosaurGetMessage(serverID,{sentTo: emailAddress})
    .then((email) =>{
     expect(email.subject).to.equal('Career | FRIENDS CORP. | Accept Invitation and Join Our Career Platform')
     let confirmSignupLink = email.html.links[0].href
     cy.visit(confirmSignupLink)
     cy.get('#login-email-form_email').type(emailAddress)
     cy.contains('span', 'Submit').click();
     cy.get('#login-otp-form_otp').type(adminOtp)
     cy.contains('span', 'Login').click();
    })
 })

});
