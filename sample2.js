import React, { useState } from 'react';
import { questions } from './questions';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      <h1>Mini Quiz App</h1>
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={restartQuiz}>Restart</button>
        </div>
      ) : (
        <div className="quiz-box">
          <h2>Q{current + 1}: {questions[current].question}</h2>
          <div className="options">
            {questions[current].options.map((opt, index) => (
              <button key={index} onClick={() => handleAnswer(opt.isCorrect)}>
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


export const questions = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Paris", isCorrect: true },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    question: "Who is the founder of Microsoft?",
    options: [
      { text: "Steve Jobs", isCorrect: false },
      { text: "Bill Gates", isCorrect: true },
      { text: "Mark Zuckerberg", isCorrect: false },
      { text: "Elon Musk", isCorrect: false },
    ],
  },
  {
    question: "Which language runs in a web browser?",
    options: [
      { text: "Java", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "Python", isCorrect: false },
      { text: "JavaScript", isCorrect: true },
    ],
  }
];














//models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: [
    {
      text: String,
      isCorrect: Boolean
    }
  ]
});

module.exports = mongoose.model('Question', questionSchema);

// routes/quizRoutes.js




const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Get all questions
router.get('/questions', async (req, res) => {
  const questions = await Question.find().select('-__v');
  res.json(questions);
});

// Create new question
router.post('/questions', async (req, res) => {
  try {
    const { question, options } = req.body;
    const newQuestion = new Question({ question, options });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ error: 'Invalid question data' });
  }
});

// Submit answers
router.post('/submit', async (req, res) => {
  try {
    const { answers } = req.body; // [{questionId, selectedIndex}]
    let score = 0;

    for (const ans of answers) {
      const question = await Question.findById(ans.questionId);
      if (question && question.options[ans.selectedIndex]?.isCorrect) {
        score++;
      }
    }

    res.json({ total: answers.length, score });
  } catch (err) {
    res.status(500).json({ error: 'Submission failed' });
  }
});

module.exports = router;

// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const quizRoutes = require('./routes/quizRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.use('/api/quiz', quizRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// POST /api/quiz/questions

{
  "question": "What is the capital of India?",
  "options": [
    { "text": "Mumbai", "isCorrect": false },
    { "text": "Delhi", "isCorrect": true },
    { "text": "Kolkata", "isCorrect": false },
    { "text": "Chennai", "isCorrect": false }
  ]
}

// POST /api/quiz/submit
{
  "answers": [
    { "questionId": "60d...", "selectedIndex": 1 },
    { "questionId": "60e...", "selectedIndex": 0 }
  ]
}

