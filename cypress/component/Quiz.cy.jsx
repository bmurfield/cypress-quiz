import React from "react";
import { mount } from "cypress/react";
import Quiz from "../../client/src/components/Quiz";
import questions from "../../cypress/fixtures/questions.json";

describe("Quiz Component", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "/api/questions/random",
      },
      {
        fixture: "questions.json",
        statusCode: 200,
      }
    ).as("randomQuestion");
  });

  // TODO:
  it("renders the first question correctly", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.wait("@randomQuestion");
    cy.get("h2").should("contain", questions[0].question);
  });

  // TODO:
  it("displays the correct answers for the first question", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();

    // Wait for the mocked API request to complete
    cy.wait("@randomQuestion");

    // Verify all the answers are displayed
    questions[0].answers.forEach((answer, index) => {
      cy.get(".alert-secondary").eq(index).should("contain", answer.text);
    });
  });
  // TODO:
  it("advances to the next question when an answer is selected", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();

    // Wait for the mocked API request to complete
    cy.wait("@randomQuestion");

    // Select the first answer
    cy.get(".btn-primary").eq(0).click();

    // Verify the next question (if available)
    if (questions.length > 1) {
      cy.get("h2").should("contain", questions[1].question);
    } else {
      cy.get("h2").should("contain", "Quiz Completed");
    }
  });
});
