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

      soket.on("sendAll", (data) => {
        console.log(data);
        setChartElements(data);
      });
    });
  }, []);

  const addAnswers = () => {
    //store answers
    setAnswers(oldValue => [...oldValue, answer]);

    connectedSoket.emit("sendAnswer", answer);
    setThanks(true);
  };


  const label = Object.entries(chartElements).map(([key, value]) => {
    return (
      <Label key={key} name={key} value={value} />
    );
  });

  const bars = Object.entries(chartElements).map(([key, value]) => {
    return (
      <Bars key={key} name={key} value={value} />
    );
  });

  const handleEnter = (e) => {
    if (e.target.value && e.charCode === 13) {
      setAnswers(oldValue => [...oldValue, e.target.value]);
      setThanks(true);
    };
  }

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
          onKeyPress={handleEnter}
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