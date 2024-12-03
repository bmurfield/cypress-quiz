import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/components/Quiz'; 
import questions from '../fixtures/questions.json';

describe('Quiz Component', () => {
  it('renders the first question correctly', () => {
    mount(<Quiz questions={questions} />);
    cy.contains(questions[0].question).should('be.visible');
  });

  it('displays the correct answers for the first question', () => {
    mount(<Quiz questions={questions} />);
    questions[0].answers.forEach((answer) => {
      cy.contains(answer.text).should('be.visible');
    });
  });

  it('advances to the next question when an answer is selected', () => {
    mount(<Quiz questions={questions} />);
    cy.contains(questions[0].answers[0].text).click();
    cy.contains(questions[1].question).should('be.visible');
  });
});
