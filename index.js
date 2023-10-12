const readlineSync = require('readline-sync');

let username = readlineSync.question('What is your name: \n');

console.log(`\n`);

console.log(`Welcome ${username}! `);

let ready = readlineSync.question(`Let's test your General Knowledge. Are you ready?(yes/no) \n`);

if(ready == "yes"){
  console.log("Great!");
} else {
  console.log("Ok, maybe next time.");
  return;
}

console.log(`\n`);

console.log('Rules & Instructions: ');
console.log(`1. ${username}, There are 10 Questions on India and all are Compulsory.`);
console.log(`2. You will get 2 points on each Right Answer.`);
console.log(`3. One Point will be deducted if the Answer is Wrong.`);
console.log(`4. In MCQ based questions you have to type the Serial Number / Index Value.`);

let score = 0;

var questionList = [
  {
    question: `India's largest city by population: \n`,
    answer: `Mumbai`
  },
  {
    question : 'National Song of India: \n',
    answer : 'Vande Mataram',
  }, 
  {
    question : 'National Motto of India: \n',
    answer : 'Satyameva Jayate',
  }, 
  {
    question : 'Golden Temple is situated in: \n',
    answer : 'Amritsar',
  },
  ];

var mcqList = [
  {
    array: [`Mumbai`, `Hyderabad`, `Gurgaon`, `Bangalore`],
    question: `Which City is known as "Electronic City of India? \n`,
    answer: `Bangalore`
  },
  {
    array : ['Kerala', 'Madras', 'Bangalore', 'New Delhi'],
    question : 'The Indian Institute of Science is located at \n',
    answer : 'Bangalore'
  },
  {
    array : ['Dugong', 'Blue whale', 'River Dolphin', 'Pygmy Killer Whale'],
    question : 'What is the name of India\'s National Aquactic Animal: \n',
    answer : 'River Dolphin'
  },
  {
    array : ['New Delhi', 'Hyderabad', 'Amritsar', 'Mumbai'],
    question : 'The Centre for Cellular and Molecular Biology in India is situated at: \n',
    answer : 'Hyderabad'
  },
  {
    array : ['Delhi', 'Dehradun', 'Lucknow', 'Gandhinagar'],
    question : 'National Institute of Aeronautical Engineering is located at: \n',
    answer : 'Delhi'
  },
  {
    array : ['T.N.Kaul', 'J.R.D. Tata', 'Nani Palkhivala', 'Khushwant Singh'],
    question : 'Who wrote the famous book - "We the people"? \n',
    answer : 'Nani Palkhivala'
  },
]

function quiz(question, answer){
  let userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log("You are right");
    score += 2;
  } else {
    console.log("You are wrong");
    console.log("The correct answer is: ", answer);
    score -= 1;
  }

  if(score < 0){
    score = 0;
  } else {
    console.log('Score is: ', score);
  }
}

function quizMcq(listOfAnswers, question, answer){
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  if(listOfAnswers[userAnswer] == answer){
    console.log("You are right");
    score += 2;
  } else {
    console.log("You are wrong");
    console.log("The correct answer is: ", answer);
    score -= 1;
  }

  if(score < 0){
   score = 0; 
  }
  console.log("'Score is: '", score);
}

for(var i = 0; i < questionList.length; i++){
  quiz(questionList[i].question, questionList[i].answer);
}

for(var i = 0; i < mcqList.length; i++){
  quizMcq(mcqList[i].array, mcqList[i].question, mcqList[i].answer);
}

console.log(`Congratulations! ${username} your final score is: ${score}`);