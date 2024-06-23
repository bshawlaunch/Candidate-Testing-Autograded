const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let answer = "";
let grade = 0;



//TODO: Variables for Part 2
let questions = 
  [question,
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];

let correctAnswers = [correctAnswer, "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? : ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question(`${question}`);
  candidateAnswers.push(candidateAnswer)
};

function askQuestions() {
  for (let i = 1; i < questions.length; i++) {
    answer = input.question(questions[i]);
    candidateAnswers.push(answer)
  };
console.log(candidateAnswers)
};

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

 for ( let i = 0; i < questions.length; i++){
  if (candidateAnswers[i] == correctAnswers[i]) {
    grade = grade + 20
  }
  console.log(`You entered ${candidateAnswers[i]}. The correct answer is ${correctAnswers[i]}`)
 }
  console.log(`You scored ${grade} on the quiz.`)
  return grade;
  
} //

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello, ${candidateName}`);
  askQuestion();
  askQuestions();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};