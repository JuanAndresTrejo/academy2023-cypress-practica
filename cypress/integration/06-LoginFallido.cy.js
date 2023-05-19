Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
describe("El usuario inicia sesión con credenciales incorrectas", () => {
    it("Login Fallido", () => {
        //El usuario está en la URL
        cy.visit("https://practice.automationtesting.in/my-account/");

        var usuarioFail = "patricio@mail.com";
        var contraseniaFail = "Patricio";
        //El usuario ingresa su usuario y contraseña
        cy.get('#username').type(usuarioFail);
        cy.get('#password').type(contraseniaFail+"{enter}");
        //El usuario visualiza un mensaje de error        
        cy.get('Strong').should('contain.text', 'Error');
             
    });
});