describe('Carrito de Compras', () => {
  
  beforeEach(() => {
     cy.fixture('users').then((users)=> {
      cy.login(users.standardUser.username, users.standardUser.password);
    })
  });
  
  it('CT03 - Agregar un producto al carrito muestra el badge con 1', () => {
    cy.getByDataTest('add-to-cart-sauce-labs-backpack').click();
    
    cy.getByDataTest('shopping-cart-badge')
      .should('be.visible')
      .and('have.text', '1');
  });
  
  it('CT-03.1 - Agregar dos productos muestra badge con 2', () => {
    cy.getByDataTest('add-to-cart-sauce-labs-backpack').click();
    cy.getByDataTest('add-to-cart-sauce-labs-bike-light').click();
    
    cy.getByDataTest('shopping-cart-badge').should('have.text', '2');
  });
  
  it('CT04 - Eliminar con error', () => {
     cy.getByDataTest('add-to-cart-sauce-labs-backpack').click();
    
    cy.getByDataTest('shopping-cart-badge')
      .should('be.visible')
      .and('have.text', '1');
    
    cy.getByDataTest('remove-sauce-labs-backpack').click();
    
    cy.getByDataTest('shopping_cart_badge')
      .should('exist')
      .and('have.text', '0');
  });
  
  
});