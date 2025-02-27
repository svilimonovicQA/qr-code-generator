describe("QR Code Generator", () => {
  beforeEach(() => {
    // Visit the index.html file before each test
    cy.visit("/index.html");
  });

  it("should have the correct title", () => {
    cy.get("h1").should("have.text", "QR Code Generator");
  });

  it("should have input field and generate button", () => {
    cy.get("#text-input").should("exist");
    cy.get("#generate-btn").should("exist");
  });

  it("should generate QR code when button is clicked", () => {
    const testText = "https://www.example.com";

    // Type text into input
    cy.get("#text-input").type(testText);

    // Click generate button
    cy.get("#generate-btn").click();

    // Check if QR code is generated
    cy.get("#qrcode canvas").should("exist");
  });

  it("should clear previous QR code when generating new one", () => {
    // Generate first QR code
    cy.get("#text-input").type("test1");
    cy.get("#generate-btn").click();
    cy.get("#qrcode canvas").should("exist");

    // Generate second QR code
    cy.get("#text-input").clear().type("test2");
    cy.get("#generate-btn").click();

    // Should only have one canvas element
    cy.get("#qrcode canvas").should("have.length", 1);
  });

  it("should handle empty input", () => {
    // Click generate with empty input
    cy.get("#generate-btn").click();

    // Should still generate QR code (for empty string)
    cy.get("#qrcode canvas").should("exist");
  });

  it("should handle special characters", () => {
    const specialChars = "!@#$%^&*()";

    // Type special characters
    cy.get("#text-input").type(specialChars);
    cy.get("#generate-btn").click();

    // Should generate QR code
    cy.get("#qrcode canvas").should("exist");
  });
});
