import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz'; 
import questions from '../../cypress/fixtures/questions.json';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '/api/questions/random',
    }, {
      fixture: "questions.json",
      statusCode: 200
    }).as("randomQuestion")   
    cy.fixture("questions.json").as("randomQuestion")
  });

  it('renders the first question correctly', () => {
    cy.mount(<Quiz/>);
    cy.get("button").contains("Start Quiz").click();
 
    cy.log(this.randomQuestion)
    cy.get('h2').should('contain', this.randomQuestion[0].question)
    }
   
  );

//   it('displays the correct answers for the first question', () => {
//     mount(<Quiz questions={questions} />);
//     questions[0].answers.forEach((answer) => {
//       cy.contains(answer.text).should('be.visible');
//     });
//   });

//   it('advances to the next question when an answer is selected', () => {
//     mount(<Quiz questions={questions} />);
//     cy.contains(questions[0].answers[0].text).click();
//     cy.contains(questions[1].question).should('be.visible');
//   });
});
