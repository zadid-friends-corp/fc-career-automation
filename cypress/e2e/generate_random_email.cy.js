const serverID = 'r6gn1hkq'
const emailDomain = '@r6gn1hkq.mailosaur.net'
let emailAddress = 'zadid.ahsan.test6@r6gn1hkq.mailosaur.net'


describe('Retrieve Invitation Link from email using mailosaur', () => {
  it('fill the sign up page', () => {
    cy.visit('https://example.mailosaur.com/')
    cy.get('[href="/signup"]').should('be.visible').click()
    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#email').type(emailAddress)
    cy.get('button[type="submit"]').click()
  })

  it('Retrivce the link in the email and visit',()=>{
     cy.mailosaurGetMessage(serverID,{sentTo: emailAddress})
     .then((email) =>{
      expect(email.subject).to.equal('Welcome to ACME Product')
      let confirmSignupLink = email.html.links[0].href
      cy.visit(confirmSignupLink)
     })
  })
})
  