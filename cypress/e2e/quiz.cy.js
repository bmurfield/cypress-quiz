describe("Tech Quiz App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("cycles through all questions and ends the quiz", () => {
    cy.get("button").contains("Start Quiz").click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }
    cy.get('h2').should("contain", "Quiz Completed")
  });

  it("allows starting a new quiz after completing one", () => {
    cy.get("button").contains("Start Quiz").click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }
    cy.get('button').contains("Take New Quiz").click()
    cy.get('button').should("contain", "1")
  });
});
