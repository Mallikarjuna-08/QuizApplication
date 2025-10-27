import QuizPage from "./QuizPage"
import "./App.css"

const questionsList=[
  {
    id: 1,
    question:"Which logic gate gives a HIGH output only when all inputs are HIGH?",
    options:[
      {optionId:"A",optionText:"OR Gate"},
      {optionId:"B",optionText:"AND Gate"},
      {optionId:"C",optionText:"NAND Gate"},
      {optionId:"D",optionText:"XOR Gate"}
    ],
    correctOptionId:"B"
  },
  {
    id: 2,
    question:"Which layer of the OSI model handles data routing between networks?",
    options:[
      {optionId:"A",optionText:"Data Link Layer"},
      {optionId:"B",optionText:"Network Layer"},
      {optionId:"C",optionText:"Transport Layer"},
      {optionId:"D",optionText:"Session Layer"}
    ],
    correctOptionId:"B"
  },
  {
    id: 3,
    question:"Which of the following is a non-volatile memory?",
    options:[
      {optionId:"A",optionText:"RAM"},
      {optionId:"B",optionText:"Cache Memory"},
      {optionId:"C",optionText:"ROM"},
      {optionId:"D",optionText:"Registers"}
    ],
    correctOptionId:"C" 
  },
  {
    id:4,
    question:"Which type of micro-controller architecture has separate memory for program and data?",
    options:[
      {optionId:"A",optionText:"Von Neu-mann Architecture"},
      {optionId:"B",optionText:"Harvard Architecture"},
      {optionId:"C",optionText:"Modified Harvard Architecture"},
      {optionId:"D",optionText:"RISC Architecture"}
    ],
    correctOptionId:"B"
  },
  {
    id:5,
    question:"Which of the following is NOT a characteristic of RISC architecture?",
    options:[
      {optionId:"A",optionText:"Large number of simple instructions"},
      {optionId:"B",optionText:"Single-cycle instruction execution"},
      {optionId:"C",optionText:"Complex addressing modes"},
      {optionId:"D",optionText:"Load/store architecture"}
    ],
    correctOptionId:"C"
  },
  {
    id:6,
    question:"In which type of memory allocation does the operating system allocate memory in fixed-size blocks?",
    options:[
      {optionId:"A",optionText:"Dynamic Memory Allocation"},
      {optionId:"B",optionText:"Static Memory Allocation"},
      {optionId:"C",optionText:"Paging"},
      {optionId:"D",optionText:"Segmentation"}
    ],
    correctOptionId:"B"
  },
  {
    id:7,
    question:"HTML is primarily used for:",
    options:[
      {optionId:"A",optionText:"Styling web pages"},
      {optionId:"B",optionText:"Structuring web content"},
      {optionId:"C",optionText:"Adding interactivity to web pages"},
      {optionId:"D",optionText:"Managing databases"}
    ],
    correctOptionId:"B" 
  },
  {
    id:8,
    question:"Which of the following is a NoSQL database?",
    options:[
      {optionId:"A",optionText:"MySQL"},
      {optionId:"B",optionText:"PostgreSQL"},
      {optionId:"C",optionText:"MongoDB"},
      {optionId:"D",optionText:"SQLite"}
    ],
    correctOptionId:"C"
  },
  {
    id:9,
    question:"HTML stands for:",
    options:[
      {optionId:"A",optionText:"Hyper Trainer Marking Language"},
      {optionId:"B",optionText:"Hyper Text Marketing Language"},
      {optionId:"C",optionText:"Hyper Text Markup Language"},
      {optionId:"D",optionText:"Hyper Text Markup Leveler"}
    ],
    correctOptionId:"C"
  },
  {
    id:10,
    question:"DSA stands for:",
    options:[
      {optionId:"A",optionText:"Data Structure and Algorithm"},
      {optionId:"B",optionText:"Digital System Architecture"},
      {optionId:"C",optionText:"Data System Analysis"},
      {optionId:"D",optionText:"Dynamic System Automation"}
    ],
    correctOptionId:"A"
  },
  {
    id:11,
    question:"which Language is beginner friendly programming language?",
    options:[
      {optionId:"A",optionText:"C++"},
      {optionId:"B",optionText:"Java"},
      {optionId:"C",optionText:"Python"},
      {optionId:"D",optionText:"Assembly Language"}
    ],
    correctOptionId:"C"
  },
  {
    id:12,
    question:"what is the capital of India?",
    options:[
      {optionId:"A",optionText:"Mumbai"},
      {optionId:"B",optionText:"Chennai"},
      {optionId:"C",optionText:"Kolkata"},
      {optionId:"D",optionText:"New Delhi"}
    ],
    correctOptionId:"D"
  },
  {
  id:13,
    question:"Which planet is known as the Red Planet?",
    options:[
      {optionId:"A",optionText:"Earth"},
      {optionId:"B",optionText:"Mars"},
      {optionId:"C",optionText:"Jupiter"},
      {optionId:"D",optionText:"Venus"}
    ],
    correctOptionId:"B"
  },
  {
    id:14,
    question:"What is the largest mammal in the world?",
    options:[
      {optionId:"A",optionText:"Elephant"},
      {optionId:"B",optionText:"Blue Whale"},
      {optionId:"C",optionText:"Giraffe"},
      {optionId:"D",optionText:"Great White Shark"}
    ],
    correctOptionId:"B"
  },
  {
    id:15,
    question:"who started RSS",
    options:[
      {optionId:"A",optionText:"Keshav Baliram Hedgewar"},
      {optionId:"B",optionText:"M. S. Golwalkar"},
      {optionId:"C",optionText:"Vinayak Damodar Savarkar"},
      {optionId:"D",optionText:"Babasaheb Ambedkar"}
    ],
    correctOptionId:"A"
  }
]


const App = () => <QuizPage questionsList={questionsList}/>

export default App