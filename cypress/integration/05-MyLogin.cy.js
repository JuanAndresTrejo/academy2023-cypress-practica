Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
describe("El usuario inicia sesión correctamente", () => {
    it("Login Exitoso", () => {
        //El usuario está en la URL
        cy.visit("https://practice.automationtesting.in/my-account/");

        var usuario = "patricio_paz_16@hotmail.com";
        var contrasenia = "Patricio3138!!";
        //El usuario ingresa su usuario y contraseña
        cy.get('#username').type(usuario);
        cy.get('#password').type(contrasenia+"{enter}");
        //El usuario inicia sesion correctamente            
        cy.get('strong').should('contain.text', 'patricio_');
             
    });
});