Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
describe("El usuario visualiza la descripcion del libro Selenium Ruby", () => {
    it("Visualizar Descripción", () => {
        //El usuario está en la URL
        cy.visit("https://practice.automationtesting.in/");

      // 2) El usuario hace click en el botón shop
      cy.get('#menu-item-40 > a').click();
  
      // 3) El usuario hace click en el boton menu de shop
      cy.get('.woocommerce-breadcrumb > a').click();
     
      //4) El usuario hace click en el libro Selenium Ruby
      cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click(); 
      //5) El usuario es redirigido a la pagina para agregar el libro a la cesta
      cy.get('#body').should('contain.text', 'Selenium Ruby');
        //El usuario visualiza la descripcion del libro       
        
        cy.get('#tab-description').should('contain.text', 'The Selenium WebDriver Recipes book');
             
    });
});