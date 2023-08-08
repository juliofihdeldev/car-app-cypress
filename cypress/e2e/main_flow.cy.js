/* eslint-disable no-undef */

describe('Car App - Main Test Suit', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  });
  
  it('Web site launch correctly ', () => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('displays the default home page content', () => {
    cy.get('main').should('contain', 'Welcome to Our Car Dealership');
    cy.get('.card').should('contain', 'Find the Perfect Car for You');  
  });


  //  NAVIGATE TO THE MENU 
  it('changes the menu and displays About page', () => {
    cy.contains('About Us').click();
    cy.get('main').should('contain', 'Welcome to our car dealership, where we have a passion for cars and a rich history in the automotive industry.');
  });

  it('changes the menu and displays Contact page', () => {
    cy.contains('Contact').click();
    cy.get('main').should('contain', ' Contacting Us!');
  });

  // TO HANDLE STATE CHANGES
  it('increments the count when "count" button is clicked', () => {
      cy.get('button').contains('count is 0').click();
      cy.get('button').contains('count is 1');
      cy.get('button').contains('count is 1').click();
      cy.get('button').contains('count is 2');
  });
    
})


describe('Car App - Contact test suit', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  });
  
  it('changes the menu and displays Contact page', () => {
    cy.contains('Contact').click();
    cy.get('main').should('contain', ' Contacting Us!');
  });

  it('displays the Contact form', () => {
    cy.contains('Contact').click();
    cy.get('h1').should('contain', 'Contacting Us!');
    cy.get('.form').should('be.visible');
  });

  it('fills out and submits the Contact form', () => {
    cy.contains('Contact').click();
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('johndoe@example.com');
    cy.get('textarea[name="subject"]').type('This is a test message.');
    cy.get('button').contains('Submit').click();
    cy.get('h1').should('contain', 'Thank You for Contacting Us!');
  });
  
})

