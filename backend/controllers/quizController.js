// const Quiz = require('../models/quizModel');

// const getQuestions = async (req, res) => {
//     const questions = await Quiz.find();
//     res.json(questions);
// }

// const submitAnswers = async (req, res) => {
//     const userAnswers = req.body.answers;
//     let score = 0;
//     const questions = await Quiz.find();
//     questions.forEach((q, index) => {
//         if (q.correctOption === userAnswers[index]) {
//             score++;
//         }
//     });
//     res.json({ score });
// }

// module.exports = {
//     getQuestions,
//     submitAnswers
// }

const Quiz = require("../models/quizModel");

// Get all quiz questions
const getQuestions = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  console.log(req.body)

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Submit quiz answers and calculate score
const submitAnswers = async (req, res) => {
  try {
    const userAnswers = req.body.answers;
    let score = 0;
    const quizzes = await Quiz.find();

    quizzes.forEach((q, index) => {
      if (q.correctOption === userAnswers[index]) {
        score++;
      }
    });

    res.json({ score });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Populate the database with initial questions
const populateQuestions = async (req, res) => {
  const questions = [
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "N2"],
      correctOption: "H2O",
    },
    {
      question: "Who invented the telephone?",
      options: [
        "Alexander Graham Bell",
        "Thomas Edison",
        "Nikola Tesla",
        "Guglielmo Marconi",
      ],
      correctOption: "Alexander Graham Bell",
    },
    {
      question: "What year did the Wright brothers first fly?",
      options: ["1900", "1903", "1910", "1912"],
      correctOption: "1903",
    },
    {
      question: "Who is known as the father of modern physics?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Niels Bohr",
      ],
      correctOption: "Albert Einstein",
    },
    {
      question: "What does DNA stand for?",
      options: [
        "Deoxyribonucleic Acid",
        "Dicarboxylic Acid",
        "Diaminocarboxylic Acid",
        "Deoxyribonucleoside Acid",
      ],
      correctOption: "Deoxyribonucleic Acid",
    },
    {
      question: "Who discovered penicillin?",
      options: [
        "Louis Pasteur",
        "Marie Curie",
        "Alexander Fleming",
        "Joseph Lister",
      ],
      correctOption: "Alexander Fleming",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctOption: "Jupiter",
    },
    {
      question: "Who invented the World Wide Web?",
      options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Vint Cerf"],
      correctOption: "Tim Berners-Lee",
    },
    {
      question: "What is the primary gas found in the Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      correctOption: "Nitrogen",
    },
    {
      question: "Who is credited with inventing the light bulb?",
      options: [
        "Nikola Tesla",
        "Alexander Graham Bell",
        "Thomas Edison",
        "James Watt",
      ],
      correctOption: "Thomas Edison",
    },
    {
      question: "What does CPU stand for in computers?",
      options: [
        "Central Processing Unit",
        "Computer Processing Unit",
        "Central Programming Unit",
        "Control Processing Unit",
      ],
      correctOption: "Central Processing Unit",
    },
    {
      question: "Who discovered the law of gravity?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Niels Bohr",
      ],
      correctOption: "Isaac Newton",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Au", "Ag", "Pb"],
      correctOption: "Au",
    },
    {
      question: "Who is known as the father of the computer?",
      options: [
        "Charles Babbage",
        "Alan Turing",
        "John von Neumann",
        "Steve Wozniak",
      ],
      correctOption: "Charles Babbage",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Silver"],
      correctOption: "Diamond",
    },
    {
      question: "Who invented the polio vaccine?",
      options: [
        "Albert Sabin",
        "Louis Pasteur",
        "Alexander Fleming",
        "Jonas Salk",
      ],
      correctOption: "Jonas Salk",
    },
    {
      question: "What element does 'O' represent on the periodic table?",
      options: ["Osmium", "Oxygen", "Oganesson", "Opium"],
      correctOption: "Oxygen",
    },
    {
      question: "Who developed the theory of relativity?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Stephen Hawking",
      ],
      correctOption: "Albert Einstein",
    },
    {
      question:
        "What is the main ingredient in traditional Japanese miso soup?",
      options: ["Soybeans", "Rice", "Fish", "Seaweed"],
      correctOption: "Soybeans",
    },
    {
      question: "Who invented the first practical telephone?",
      options: [
        "Alexander Graham Bell",
        "Thomas Edison",
        "Nikola Tesla",
        "Elisha Gray",
      ],
      correctOption: "Alexander Graham Bell",
    },
    {
      question: "What is the speed of light?",
      options: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "250,000 km/s"],
      correctOption: "300,000 km/s",
    },
    {
      question: "Who discovered radioactivity?",
      options: ["Marie Curie", "Isaac Newton", "Albert Einstein", "Niels Bohr"],
      correctOption: "Marie Curie",
    },
    {
      question: "What planet is known as the Red Planet?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"],
      correctOption: "Mars",
    },
    {
      question: "Who invented the printing press?",
      options: [
        "Johannes Gutenberg",
        "Leonardo da Vinci",
        "Isaac Newton",
        "Galileo Galilei",
      ],
      correctOption: "Johannes Gutenberg",
    },
    {
      question: "What is the boiling point of water?",
      options: ["100°C", "0°C", "50°C", "200°C"],
      correctOption: "100°C",
    },
    {
      question: "Who discovered the electron?",
      options: [
        "Albert Einstein",
        "Isaac Newton",
        "Niels Bohr",
        "J.J. Thomson",
      ],
      correctOption: "J.J. Thomson",
    },
    {
      question: "What is the primary function of red blood cells?",
      options: [
        "Fight infection",
        "Carry oxygen",
        "Clot blood",
        "Remove waste",
      ],
      correctOption: "Carry oxygen",
    },
    {
      question: "Who is known as the father of modern chemistry?",
      options: [
        "Robert Boyle",
        "Antoine Lavoisier",
        "Marie Curie",
        "Dmitri Mendeleev",
      ],
      correctOption: "Antoine Lavoisier",
    },
    {
      question: "What does DNA stand for?",
      options: [
        "Deoxyribonucleic Acid",
        "Dicarboxylic Acid",
        "Diaminocarboxylic Acid",
        "Deoxyribonucleoside Acid",
      ],
      correctOption: "Deoxyribonucleic Acid",
    },
    {
      question: "Who invented the World Wide Web?",
      options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Vint Cerf"],
      correctOption: "Tim Berners-Lee",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctOption: "Jupiter",
    },
    {
      question: "Who discovered penicillin?",
      options: [
        "Louis Pasteur",
        "Marie Curie",
        "Alexander Fleming",
        "Joseph Lister",
      ],
      correctOption: "Alexander Fleming",
    },
    {
      question: "What is the primary gas found in the Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      correctOption: "Nitrogen",
    },
    {
      question: "Who invented the telephone?",
      options: [
        "Alexander Graham Bell",
        "Thomas Edison",
        "Nikola Tesla",
        "Guglielmo Marconi",
      ],
      correctOption: "Alexander Graham Bell",
    },
    {
      question: "What year did the Wright brothers first fly?",
      options: ["1900", "1903", "1910", "1912"],
      correctOption: "1903",
    },
    {
      question: "Who is known as the father of modern physics?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Niels Bohr",
      ],
      correctOption: "Albert Einstein",
    },
    {
      question: "What does CPU stand for in computers?",
      options: [
        "Central Processing Unit",
        "Computer Processing Unit",
        "Central Programming Unit",
        "Control Processing Unit",
      ],
      correctOption: "Central Processing Unit",
    },
    {
      question: "Who discovered the law of gravity?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Niels Bohr",
      ],
      correctOption: "Isaac Newton",
    },
  ];

  try {
    await Quiz.insertMany(questions);
    res.json({ message: "Questions populated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
    getQuestions,
    submitAnswers, 
    populateQuestions
}