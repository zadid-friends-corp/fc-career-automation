describe('Candidate Login Test', () => {
  const candidateEmail = 'zadid.bm5274@gmail.com';
  const candidateOtp = '777777'; // Use string for OTP.

  it('Logs in as candidate', () => {
      // Visit the login page
      cy.visit('https://fc-career-staging.inteam.jp/login');

      // Enter email
      cy.get('#login-email-form_email').should('be.visible').type(candidateEmail);

      // Click the Submit button
      cy.contains('span', 'Submit').should('be.visible').click();

      // Enter OTP
      cy.get('#login-otp-form_otp').should('be.visible').type(candidateOtp);

      // Click the Login button
      cy.contains('span', 'Login').should('be.visible').click();

      // Assert successful login by verifying the URL or another indicator
      cy.url().should('not.include', '/login'); // Replace with appropriate URL if needed.
  });
});
