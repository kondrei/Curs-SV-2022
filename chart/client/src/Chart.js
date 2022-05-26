import { useState } from 'react';
import './Chart.css';

function Chart() {
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState('');
  const [chartElements, setChartElements] = useState([]);


  const addAnswers = () => {
    //store answers
    const result = {};
    setAnswers(oldValue => [...oldValue, answer]);

    //count answers
    answers.forEach(element => {
      result[element] = (result[element] || 0) + 1;
    });

    // replace them with percent
    for (let [key, value] of Object.entries(result)) {
      result[key] = Math.floor(value / answers.length * 100);

    }

    setAnswer('');
    setChartElements(result);
  };
  

  const list = Object.entries(chartElements).map(([key, value]) => {
    return (
      <div key={key}>{key} : {value.toString()}</div>
    );
  });


  return (
    <div className="chart-app">
      <h1>Chart react</h1>
      <h2>Why the sky is blue?</h2>
      <div className="chart">
        {list}

      </div>
      <input
        type="text"
        id="answer"
        placeholder="Enter an answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)} />
      <button
        id="button"
        onClick={addAnswers}
        disabled={!answer ? "disabled" : ""}>Sent</button>
    </div>
  );
}

export default Chart;




// let input = document.getElementById('answer');
// let button = document.getElementById('button');
// let div = document.getElementsByClassName('chart')[0];

// const answers = [];


// const calculateAnswers = () => {
//     const result = {};
//     //count answers
//     answers.forEach(element => {
//         result[element] = (result[element] || 0) + 1;
//     });

//     // replace them with percent
//     for (let [key, value] of Object.entries(result)) {
//         result[key] = Math.floor(value / answers.length * 100);

//     }
//     return result;
// }


// button.addEventListener('click', () => {
//     answers.push(input.value.toLowerCase());
//     for (let [key, value] of Object.entries(calculateAnswers())) {
//         const newDiv = document.createElement("div");

//         const newContent = document.createTextNode(value);

//         newDiv.appendChild(newContent);

//         const currentDiv = document.getElementById("div1");
//         div.insertBefore(newDiv, currentDiv);

//     }

// })
