import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Grid from "./components/Grid";
import InputForm from "./components/InputForm";

const Feedback = () => {
  const [connectedSocket, setConnectedSocket] = useState();
  const [gridId, setGridId] = useState(null);
  const [currentFeedback, setCurrentFeedback] = useState('');

  const get_element = (data) => {
    setCurrentFeedback(data);
  }

  useEffect(() => {
    const soket = io();

    soket.on('connect', () => {
      setConnectedSocket(soket);
      soket.on("sendGridIds", (grid) => {
        setGridId(grid);
      });

      soket.on("sendAll", (data) => {
        console.log(data);
      });
    });
  }, []);

  return (
    <div className="container">
      <h1>Feedback</h1>
      <InputForm soket={connectedSocket} currentFeedback={currentFeedback} />
      <Grid grid={gridId} get_element={get_element} />
    </div>
  );
}

export default Feedback;
