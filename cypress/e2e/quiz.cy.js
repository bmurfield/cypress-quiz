describe('Tech Quiz App', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('starts the quiz when the start button is clicked', () => {
      cy.contains('Start Quiz').click();
      cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
    });
  
    it('cycles through all questions and ends the quiz', () => {
      questions.forEach((question) => {
        cy.contains(question.question).should('be.visible');
        cy.contains(question.answers.find((a) => a.isCorrect).text).click();
      });
      cy.contains('Your final score is').should('be.visible');
    });
  
    it('allows starting a new quiz after completing one', () => {
      questions.forEach((question) => {
        cy.contains(question.answers.find((a) => a.isCorrect).text).click();
      });
      cy.contains('Your final score is').should('be.visible');
      cy.contains('Start New Quiz').click();
      cy.contains(questions[0].question).should('be.visible');
    });
  });
  