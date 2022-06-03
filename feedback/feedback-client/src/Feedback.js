import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Grid from "./components/Grid";
import InputForm from "./components/InputForm";

const Feedback = () => {
  const [connectedSocket, setConnectedSocket] = useState();
  const [gridId, setGridId] = useState(null);

  useEffect(() => {
    const soket = io();

    soket.on('connect', () => {
      setConnectedSocket(soket);
      console.log('conectat', connectedSocket);

      soket.on("sendGridIds", (grid) => {
        setGridId(grid);
        console.log('grid recieved:', grid[1][1])
      });


      // soket.on("sendFeedback", (feedback) => {
      //   setFeedback(feedback);
      // });

      soket.on("sendAll", (data) => {
        console.log(data);
        // setChartElements(data);
      });
    });
  }, []);

  console.log('usestate recieved:', gridId)

  return (
    <div className="container">
      <h1>Feedback</h1>
      <InputForm soket={connectedSocket} />
      <Grid grid={gridId} />
    </div>
  );
}

export default Feedback;
