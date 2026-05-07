describe('Funcionalidad: Inicio de Sesión', () => {
  
  it('CT01 - Login exitoso con usuario estándar', () => {
    cy.fixture('users').then((users)=> {
      cy.login(users.standardUser.username, users.standardUser.password);
    })
    
    cy.url().should('include', '/inventory.html');
    cy.getByDataTest('title').should('contain', 'Products');
    
    cy.getByClassName('app_logo').should('be.visible');
  });
  
  it('CT02 - Login fallido con credenciales incorrectas', () => {
    cy.fixture('users').then((users)=> {
      cy.login(users.errorUser.username, users.errorUser.password);
    })
    
    cy.getByDataTest('error')
      .should('be.visible')
      .and('contain', 'Username and password do not match');
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
  
  it('CT02.1 - Usuario bloqueado muestra mensaje específico', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.lockedOutUser.username, users.lockedOutUser.password);
      
      cy.getByDataTest('error')
        .should('contain', 'Sorry, this user has been locked out');
    });
  });
});