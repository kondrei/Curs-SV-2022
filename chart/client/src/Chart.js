import { useState, useEffect } from 'react';
import { io } from "socket.io-client";
import Bars from './Bars';
import './Chart.css';
import Label from './Label';

const Chart = () => {
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState('');
  const [chartElements, setChartElements] = useState([]);
  const [connectedSoket, setConnectedSoket] = useState();
  const [thanks, setThanks] = useState(false);

  useEffect(() => {
    const soket = io();

    soket.on('connect', () => {
      setConnectedSoket(soket);
      console.log('conectat', connectedSoket);
      soket.on("sendAll", (messages) => {
        // setMessages(messages);
      });
    });
  }, [connectedSoket]);

  const addAnswers = () => {
    //store answers
    setAnswers(oldValue => [...oldValue, answer]);
    setThanks(true);
  };

  useEffect(() => {
    const result = {};

    //count answers
    answers.length && answers.forEach(element => {
      result[element] = (result[element] || 0) + 1;
    });

    // replace them with percent
    for (let [key, value] of Object.entries(result)) {
      result[key] = (value / answers.length * 100).toFixed(2);

    }

    setAnswer('');
    setChartElements(result);
  }, [answers]);


  const label = Object.entries(chartElements).map(([key, value]) => {
    return (
      <Label key={key} name={key} value={value} />
    );
  });

  const bars = Object.entries(chartElements).map(([key, value]) => {
    return (
      <Bars key={key} value={value} />
    );
  });



  return (
    <div className="chart-app">
      <h1>Chart react</h1>
      <h2>Why the sky is blue?</h2>
      <div className="chart">
        {answers && <div className="bars">
          {bars}
        </div>}
        {answers && <div className="label">
          {label}
        </div>}
      </div>
      {!thanks && <div className="form">
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
      </div>}
      {thanks && <div className="thanks">Thanks for the reply! 😀</div>}
    </div>
  );
}

export default Chart;