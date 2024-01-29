describe('prueba-tecnica', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.scrollTo('center')

    cy.contains('.single-products', 'Pure Cotton V-Neck T-Shirt').parent().contains('View Product').click();

    cy.get('#quantity').clear().type('30');
    cy.contains('Add to cart').click();

    cy.contains('View Cart').click();

    cy.contains('Proceed To Checkout').click();

    cy.get('.text-center').contains('Register / Login').click();

    cy.get('[data-qa="signup-name"]').type('selene');
    cy.get('[data-qa="signup-email"]').type('selenef@email.com')
    cy.get('[data-qa="signup-button"]').click();

    cy.contains('Mrs.').click();
    cy.get('[data-qa="password"]').type('password');
    cy.get('[data-qa="days"]').select('10');
    cy.get('[data-qa="months"]').select('June');
    cy.get('[data-qa="years"]').select('2003');
    cy.get('[data-qa="first_name"]').type('selene')
    cy.get('[data-qa="last_name"]').type('F')
    cy.get('[data-qa="company"]').type('Apply Digital')
    cy.get('[data-qa="address"]').type('Fake St. 123')
    cy.get('[data-qa="address2"]').type('Fake St. 124')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('State')
    cy.get('[data-qa="city"]').type('City')
    cy.get('[data-qa="zipcode"]').type('1234')
    cy.get('[data-qa="mobile_number"]').type('12345678')
    cy.contains('Create Account').click()

    cy.contains('Continue').click()

    cy.contains('Cart').click()

    cy.contains('Proceed To Checkout').click()

    cy.get('textarea.form-control[name="message"]').type('Put a bow, its a gift')

    cy.contains('Place Order').click()

    cy.get('[data-qa="name-on-card"]').type('Selene')
    cy.get('[data-qa="card-number"]').type('123456789')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('12')
    cy.get('[data-qa="expiry-year"]').type('2030')
    cy.contains('Pay and Confirm Order').click()

    cy.contains('Continue').click()

    cy.contains('Logout').click()

    cy.contains('Signup / Login').click()
    cy.get('[data-qa="login-email"]').type('selenef@email.com')
    cy.get('[data-qa="login-password"]').type('password')
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Contact us').click()
    cy.get('[data-qa="name"]').type('Selene')
    cy.get('[data-qa="email"]').type('selenef@email.com')
    cy.get('[data-qa="subject"]').type('Hello')
    cy.get('[data-qa="message"]').type('test')
    cy.contains('Submit').click()

    cy.contains('Logout').click()

  })
})
