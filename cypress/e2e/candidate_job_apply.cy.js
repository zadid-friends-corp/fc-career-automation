describe('Candidate Job Apply', function() {
    it('Candidate can apply for a job', function() {
        cy.visit("https://fc-career-staging.inteam.jp/login")
        cy.get('#login-email-form_email').type("zadid.bm5274@gmail.com")
        cy.contains('span','Submit').click()
        cy.get('#login-otp-form_otp').type('777777')
        cy.contains('span','Login').click()
        cy.contains('a', 'Current Openings').click();
        cy.contains('span','Apply').click()
        cy.contains('span','+ Add').click()
        cy.get('#skill_categories_0_id').click()
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click()
        cy.get('.grid:nth-child(1) .ant-checkbox-wrapper > span:nth-child(2)').click()
        cy.get('.grid:nth-child(1) .ant-input').type('6')
        cy.get('.grid:nth-child(2) .ant-checkbox-input').click()
        cy.get('.grid:nth-child(2) .ant-input').type('6')

        cy.get('#overall_dev_exp').type("10")
        cy.get('#expected_salary').type("70000")
        cy.get('#linkedin_profile').type('https://www.linkedin.com/')
        cy.get('#portfolio').type('https://www.github.com/')
        cy.get('#notice_period').type('60')
        //cy.contains('span','Upload Cover Letter').selectFile('cypress/e2e/resources/sample.pdf');
        cy.get('.ant-btn-primary').click()
    })
})