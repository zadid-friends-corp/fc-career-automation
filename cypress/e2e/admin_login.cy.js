describe('Admin Login Test', () => {
  const adminEmail = 'zadid.ahsan@teamfriends.co.jp';
  const adminOtp = '777777'; // OTP must be a string in Cypress since input fields expect strings.

  it('Logs in as admin', () => {
    // Visit the login page
    cy.visit('https://fc-career-staging.inteam.jp/login');

    // Enter the email
    cy.get('#login-email-form_email').should('be.visible').type(adminEmail);

    // Click the Submit button
    cy.contains('span', 'Submit').should('be.visible').click();

    // Enter the OTP
    cy.get('#login-otp-form_otp').should('be.visible').type(adminOtp);

    // Click the Login button
    cy.contains('span', 'Login').should('be.visible').click();

    // Assert the next step (add an assertion to confirm login success)
    cy.url().should('not.include', '/login'); // Example: Check the URL has changed
  });
});
